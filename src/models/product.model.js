import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import slugify from "slugify";
import shortid from "shortid";

const Product = new mongoose.Schema(
    {
        name: { type: String, require: true },
        slug: { type: String, unique: true },
        price: { type: Number },
        original_price: { type: Number },
        description: { type: String },
        avatar: { base_url: { type: String }, publicId: { type: String } },
        images: [{ base_url: { type: String }, publicId: { type: String }, _id: false }],
        categoryId: { type: mongoose.SchemaTypes.ObjectId, ref: "category", require: true },
    },
    { collection: "products", timestamps: true }
);

Product.pre("save", function (next) {
    if (!this.slug) {
        let baseSlug = slugify(this.name, { lower: true });
        const uniqueId = shortid.generate();
        this.slug = `${baseSlug}-${uniqueId}`;
    }
    next();
});

Product.index({ name: "text" });

Product.plugin(mongoosePaginate);

const ProductModel = mongoose.model("products", Product);

ProductModel.createIndexes({ name: "text" });
export default ProductModel;
