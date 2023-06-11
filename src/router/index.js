import userRouter from "./user";
import uploaderRouter from "./upload.router";
import productRouter from './product.router'
import routerCategory from "./category.router.js";

const routerApp = (app) => {
    app.use("/api", userRouter);
    app.use("/api", productRouter);
    app.use("/api", uploaderRouter);
    app.use("/api", routerCategory);
};

export default routerApp;
