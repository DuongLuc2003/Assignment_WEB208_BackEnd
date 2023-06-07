import Category from "../models/category.model.js";
import categorySchema from "../validators/category.validator.js";

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate("products");
    if (categories.length === 0) {
      return res.status(200).json({
        message: "Không có category nào",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach thanh cong",
      datas: [...categories],
    });
  } catch (error) {
    return res.status(400).json({
      message: "lỗi r",
      datas: [],
    });
  }
};
export const getCategory = async function (req, res) {
  try {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    if (!category) {
      return res.json({
        message: "Không có category nào",
        datas: [],
      });
    }
    return res.json({
      message: "Lay category thanh cong!",
      datas: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      datas: [],
    });
  }
};
export const createCategory = async function (req, res) {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }
    const category = await Category.create(req.body);
    if (!category) {
      return res.json({
        message: "Thêm category không thành công!",
        datas: [],
      });
    }
    return res.json({
      message: "Thêm category thành công",
      data: [category],
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      datas: [],
    });
  }
};
export const updateCategory = async function (req, res) {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.json({
        message: "Cập nhật category không thành công",
      });
    }
    return res.json({
      message: "Cập nhật category thành công",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const removeCategory = async function (req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa category thành công",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
