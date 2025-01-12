// export const validateInput = (schema) => (req, res, next) => {
//     console.log("req.body", req.body);
//     const { error } = schema.validate(req.body, { abortEarly: false });
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }
//     next();
// };

import flightValidationSchema from "../validationSchemas/flightValidationSchema.js";

export const validateInput = (req, res, next) => {
    const { error } = flightValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
