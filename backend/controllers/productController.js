export const getProducts = (req, rest, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in database"
    })
}