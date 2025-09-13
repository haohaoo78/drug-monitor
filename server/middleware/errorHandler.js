// 404 handler
const notFound = (req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
};

// Global error handler
const globalError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
};

module.exports = { notFound, globalError };
