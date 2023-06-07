import userRouter from "./user";
import productRouter from "./product.router";
import routerCategory from "./category.router.js";

const routerApp = (app) => {
    app.use("/api", userRouter);
    app.use("/api", productRouter);
    app.use("/api", routerCategory);
};

export default routerApp;
