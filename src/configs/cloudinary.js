import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "dssl3epj0",
    api_key: "172583384517851",
    api_secret: "7O22dlxO-MOWfrr9-uvGecFcQqQ",
});

export default cloudinary;
