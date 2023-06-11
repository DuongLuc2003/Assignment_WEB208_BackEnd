import userRouter from "./user";
import uploaderRouter from "./upload.router";
import productRouter from './product.router'

const routerApp = (app) => {
    app.use("/api", userRouter);
    app.use("/api", productRouter);
    app.use("/api", uploaderRouter);
};

export default routerApp;
