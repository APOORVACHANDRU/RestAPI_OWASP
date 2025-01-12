import Joi from 'joi';

const flightValidationSchema = Joi.object({
    name: Joi.string().required(),
    flightNo: Joi.string().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    departure: Joi.date().required(),
    arrival: Joi.date().required(),
    price: Joi.number().required(),
    seats: Joi.number().integer().min(1).required(),
});

export default flightValidationSchema;
