import ProductModel from "~/models/product.model.js";

export const getAllProducts = async (req, res) => {
    try {
        const { _sort = "createdAt", page = 1, limit = 10, _order = "desc" } = req.query;
        const options = {
            page,
            limit,
            sort: {
                [_sort]: _order === "desc" ? 1 : -1,
            },
        };

        const { docs, ...data } = await ProductModel.paginate({}, options);
        res.json({
            meassge: "Success",
            data: docs,
            ...data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProductsByCategoryId = async (req, res) => {
    try {
        const { _sort = "createdAt", page = 1, limit = 10, _order = "desc" } = req.query;
        const options = {
            page,
            limit,
            sort: {
                [_sort]: _order === "desc" ? 1 : -1,
            },
        };

        const { docs, ...data } = await ProductModel.paginate({ categoryId: req.params.id }, options);
        res.json({
            meassge: "Success",
            data: docs,
            ...data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProductBySlug = async (req, res) => {
    try {
        const data = await ProductModel.findOne({ slug: req.params.id });
        res.json({
            meassge: "Success",
            data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const getProductById = async (req, res) => {
    try {
        const data = await ProductModel.findById(req.params.id);
        res.json({
            meassge: "Successfully",
            data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const newProduct = async (req, res) => {
    try {
        const newProduct = req.body;

        const product = new ProductModel(newProduct);
        const data = await product.save();
        // await CategoryModel.findByIdAndUpdate(data.categoryId, { $push: { products: data._id } });

        res.json({
            meassge: "New product success",
            products: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const newProduct = req.body;

    // await axios.put("http://localhost:8080/products/" + id, req.body);
    const result = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
        meassge: "Update product success",
        data: result,
    });
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    // await axios.delete("http://localhost:8080/products/" + id);
    const result = await ProductModel.findByIdAndDelete(id);
    res.json({
        meassge: "Delete product successfully",
        data: result,
    });
};
