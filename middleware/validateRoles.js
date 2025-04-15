
const validateRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Ensure user exists and has a role
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: 'Unauthorized: No user role found' });
        }

        // Check if user's role is in the list of allowed roles
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied: Insufficient role' });
        }

        next(); // Role is valid, proceed to the next middleware or route handler
    };
};

export default validateRoles;