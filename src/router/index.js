import userRouter from "./user";
import productRouter from "./product.router";

const routerApp = (app) => {
    app.use("/api", userRouter);
    app.use("/api", productRouter);
};

export default routerApp;
