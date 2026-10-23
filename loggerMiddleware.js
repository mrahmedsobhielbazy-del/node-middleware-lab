const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request made to: ${req.url}`);
    next();
};

module.exports = loggerMiddleware;