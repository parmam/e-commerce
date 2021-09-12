import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export const FakeContext = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(store => store.products.allProducts)

  const [eventHandler, setEventHandler] = useState({
    deleteProductsBtn: false,
    selectedProducts: [],
    setSearch: ''
  })

  return {
    eventHandler,
    setEventHandler,
    allProducts,
    dispatch
  }
}
