import authRouter from "./auth.router";
import productRouter from "./product.router";

const routerApp = (app) => {
    app.use("/api", authRouter);
    app.use("/api", productRouter);
};

export default routerApp;
