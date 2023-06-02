import authRouter from "./auth.router";

const routerApp = (app) => {
    app.use("/api", authRouter);
};

export default routerApp;
