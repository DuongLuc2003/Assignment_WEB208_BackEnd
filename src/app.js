import express from "express";
import mongoose from "mongoose";
import routerApp from "./router";
import cors from 'cors'

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

routerApp(app);

app.get("/", (req, res) => {
    res.send("Hello word");
});

mongoose
    .connect("mongodb+srv://asm:%40123456@cluster0.3qrknkx.mongodb.net/banhang?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then((result) => {
        console.log("ConnectDb successfully!");
        app.listen(8000, () => {
            console.log("I am runing port 8000");
        });
    });

export const viteNodeApp = app;
