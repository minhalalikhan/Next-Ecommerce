export type Rating = 1 | 2 | 3 | 4 | 5
export type product = {

    productID: number,
    productTitle: string,
    description: string,
    rating: number,
    price: number,
    seller: string,
    totalSales: number,
    quantityInStock: number,
    keyword: string,


}


export type Cart = {
    TotalCount: number,
    Items: []
}

export type CartState = {
    Total_count: number;
    Items: CartItem[],
    subtotal: number
}

export type CartItem = {
    product: product,
    count: number

}