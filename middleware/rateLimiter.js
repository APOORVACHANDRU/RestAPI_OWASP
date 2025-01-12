import rateLimit from 'express-rate-limit';

// Configure the rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    headers: true, // Include rate limit info in response headers
});

export default limiter;