const express = require("express");
const router = express.Router();

// const { getProducts } = require('../controllers/productController')
router.route('/products')
    .get(function (req, res, next) {
        res.status(200).json({
            success: true,
            message: "This route will show all products in database"
        })
    })

module.exports = router;