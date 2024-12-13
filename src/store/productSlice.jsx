import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [
    {
        id: 1,
        name: "MacBook Pro",
        price: 1999,
        image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-cto-hero-202410?wid=840&hei=504&fmt=jpeg&qlt=90&.v=1731525368099",
    },
    {
        id: 2,
        name: "Bluetooth Quloqchin",
        price: 249,
        image:
            "https://anker.com.bd/wp-content/uploads/2024/08/Soundcore-Liberty-4-NC-True-Wireless-Noise-Cancelling-Earbuds.jpg",
    },
    {
        id: 3,
        name: "Smart Soat",
        price: 399,
        image:
            "https://image-us.samsung.com/us/galaxy-watch7/gallery/07022024/SCOMB6Q6-481-Galaxy-Watch7_Product-KV_2P_RGB-800x600.jpg?$product-details-jpg$",
    },
    {
        id: 4,
        name: "Klaviatura",
        price: 129,
        image:
            "https://nuphy.com/cdn/shop/files/Main05_128dfd17-6216-4752-ab9a-437363c12d8a_1800x1800.jpg?v=1713515048",
    },
];


export const cartSlice = createSlice({
    name: 'product',
    initialState: {
        products: initialProducts || [],
        cart: []
    },
    reducers: {
        addToCart: (state, action) => { state.cart.push({ ...action.payload, quantity: 1 }) },
        removeFromCart: (state, action) => { state.cart = state.cart.filter(product => product.id != action.payload) },
        updateQuantity: (state, action) => { state.cart = state.cart.map((product) => product.id == action.payload.payload ? { ...product, quantity: action.payload.quantity } : product) },
    }
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;