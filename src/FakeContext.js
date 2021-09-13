import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export const FakeContext = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(store => store.products.allProducts)
  const allCategories = useSelector(store => store.categories.allCategories)
  const allSubCategories = useSelector(store => store.categories.allSubCategories)
  const subCategoriesOf = useSelector(store => store.categories.subCategoriesOf)
  const [eventHandler, setEventHandler] = useState({
    deleteProductsBtn: false,
    selectedProducts: [],
    setSearch: ''
  })
  console.log(subCategoriesOf, ' subcategories of en fake')
  return {
    eventHandler,
    setEventHandler,
    allProducts,
    dispatch,
    allCategories,
    allSubCategories,
    subCategoriesOf
  }
}
