import Joi from "joi";

export const productValidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        avatar: Joi.object({ base_url: Joi.string().required(), publicId: Joi.string() }).required(),
        original_price: Joi.number().required(),
        description: Joi.string().required(),
        images: Joi.array().items({ base_url: Joi.string().required(), publicId: Joi.string() }),
        categoryId: Joi.string().required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((err) => err.message);

        return res.status(400).json({
            messages: errors,
        });
    }

    next();
};
