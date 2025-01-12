import flightValidationSchema from '../../validationSchemas/flightValidationSchema'; // Update with the correct path

describe('Flight Validation Schema', () => {
    it('should pass validation for valid input', () => {
        const validData = {
            name: 'Flight 101',
            flightNo: 'FL101',
            from: 'New York',
            to: 'London',
            departure: '2025-01-15T10:00:00Z',
            arrival: '2025-01-15T16:00:00Z',
            price: 500,
            seats: 150,
        };

        const { error } = flightValidationSchema.validate(validData);
        expect(error).toBeUndefined();
    });

    it('should fail validation when a required field is missing', () => {
        const invalidData = {
            name: 'Flight 101',
            flightNo: 'FL101',
            from: 'New York',
            to: 'London',
            departure: '2025-01-15T10:00:00Z',
            price: 500,
            seats: 150,
        };

        const { error } = flightValidationSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error.details[0].message).toMatch(/"arrival" is required/); // Joi error message
    });

    it('should fail validation for invalid data types', () => {
        const invalidData = {
            name: 'Flight 101',
            flightNo: 'FL101',
            from: 'New York',
            to: 'London',
            departure: 'invalid-date',
            arrival: 'invalid-date',
            price: 'five hundred',
            seats: -10,
        };

        const { error } = flightValidationSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error.details[0].message).toBe('"departure" must be a valid date');
    });

    it('should fail validation if seats are less than 1', () => {
        const invalidData = {
            name: 'Flight 101',
            flightNo: 'FL101',
            from: 'New York',
            to: 'London',
            departure: '2025-01-15T10:00:00Z',
            arrival: '2025-01-15T16:00:00Z',
            price: 500,
            seats: 0,
        };

        const { error } = flightValidationSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error.details[0].message).toMatch(/"seats" must be greater than or equal to 1/);
    });
});
