import React, { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "./store/productSlice";

const App = () => {

  const cart = useSelector((state) => state.cart.cart)
  const products = useSelector((state) => state.cart.products)

  const dispatch = useDispatch()

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Elektronika Do'koni</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Mahsulotlar ro'yxati */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Mahsulotlar</h2>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto mb-2"
                />
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={cart.find((item) => item.id === product.id)}
                >
                  Savatga qo'shish
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Savat */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Savat</h2>
          {cart.length === 0 ? (
            <button className="text-gray-500" disabled={false}>
              Savat bo'sh
            </button>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded-l disabled:bg-slate-50"
                      disabled={item.quantity == 1}
                      onClick={() => dispatch(updateQuantity({ payload: item.id, quantity: Number(item.quantity) - 1 }))}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ payload: item.id, quantity: Number(item.quantity) + 1 }))}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-right">
                <h3 className="text-xl font-bold">
                  Jami: ${calculateTotal().toFixed(2)}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App