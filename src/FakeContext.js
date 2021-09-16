import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const FakeContext = () => {
  const dispatch = useDispatch()

  const allProducts = useSelector(store => store.products.allProducts)
  const productDetails = useSelector(store => store.products.productDetail)
  const allCategories = useSelector(store => store.categories.allCategories)
  const allSubCategories = useSelector(store => store.categories.allSubCategories)
  const subCategoriesOf = useSelector(store => store.categories.subCategoriesOf)
  const allBrands = useSelector(store => store.brands.allBrands)
  const [eventHandler, setEventHandler] = useState({
    deleteProductsBtn: false,
    selectedProducts: [],
    setSearch: ''
  })

  const [productInfo, setProductInfo] = useState({
    brand: '',
    model: '',
    category: '',
    subCategory: '',
    price: '',
    discount: '',
    description: ''
  })
  return {
    eventHandler,
    setEventHandler,
    allProducts,
    productDetails,
    dispatch,
    allCategories,
    allSubCategories,
    subCategoriesOf,
    allBrands,
    productInfo,
    setProductInfo
  }
}
