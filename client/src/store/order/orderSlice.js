import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  amongOfProduct: 0,
  totalPayment: 0,
  cartItems: [],
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    loadProduct: (state) => {
      const orders = localStorage.getItem("cartItems")
      state.cartItems = JSON.parse(orders)
    },
    addProduct: (state, action) => {
      const exist = state.cartItems.find((el) => el._id === action.payload._id)

      if (exist) {
        const orders = state.cartItems.map((el) => {
          if (el._id === action.payload._id) {
            el.amount += 1
          }
          return el
        })
        state.cartItems = orders
      }
      if (!exist) {
        state.cartItems = [...state.cartItems, action.payload]
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decrementProduct: (state, action) => {
      const orders = state.cartItems.map((el) => {
        if (el._id === action.payload && el.amount > 1) {
          el.amount -= 1
        }
        return el
      })
      state.cartItems = orders
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    incrementProduct: (state, action) => {
      const orders = state.cartItems.map((el) => {
        if (el._id === action.payload) {
          el.amount += 1
        }
        return el
      })
      state.cartItems = orders
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeProduct: (state, action) => {
      const orders = state.cartItems.filter((el) => el._id !== action.payload)
      state.cartItems = orders
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    totalPayment: (state) => {
      state.cartTotalAmount = state.cartItems.reduce((acc, curr) => {
        return acc + parseInt(curr.price) * curr.amount
      }, 0)
    },
  },
})
export const {
  addProduct,
  loadProduct,
  decrementProduct,
  incrementProduct,
  removeProduct,
  totalPayment,
} = orderSlice.actions

export default orderSlice.reducer
