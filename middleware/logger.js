

export const logger = (req, res, next) => {
    try {
        console.log(` API --> ${req.method} ${req.url}`);
        next();
    }
    catch (e) {
        console.log(e);
    }
}