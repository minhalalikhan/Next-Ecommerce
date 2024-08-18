import { ProductData } from "./Data"

export function getProducts(keyword = '', page = 1) {

    //  1. filter
    let Products = ProductData;
    if (keyword !== '')
        Products = ProductData.filter((item) => item.keyword === keyword)

    // 2. paginate
    let totalPages = Math.ceil(Products.length / 6)
    if (page > totalPages)
        page = totalPages
    if (page < 1)
        page = 1
    return Products.slice((page - 1) * 6, (page - 1) * 6 + 6)
}

export function getTotalPages() {

    return Math.ceil(ProductData.length / 6)
}
export function getPages(keyword = '') {

    if (keyword === '')
        return Math.ceil(ProductData.length / 6)

    let count = 0;
    ProductData.forEach((item) => {
        if (item.keyword === keyword) {
            count++;
        }
    })

    return Math.ceil(count / 6)
}

export function getCategories() {

    let response = []

    ProductData.forEach((item) => {
        if (!response.includes(item.keyword)) {
            response.push(item.keyword)
        }
    })
    return response
}

export function getProductDetails() {

}

export function getProductReviews() {

}

export function getSimilarProducts(productId) {
    // return products with similar keywords and exclude product ID
}

export function CheckQuantity(productId, quantity) {
    //check if current quantiy is within available quanity
}

export function getUserDetails(userId) {

}

export function getUserCart() {

}

export function isAddedTocart() {

}