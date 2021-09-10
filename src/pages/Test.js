import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  getSubCategories,
  getSubCategoriesOf,
  addCategory,
  addSubCategory
} from '../redux/actions/categories'
const Test = () => {
  const dispatch = useDispatch()
  const reduxTester = () => {
    const newProduct = {
      model: 'SX100',
      brand: 'Canon ',
      img: 'https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000',
      description: 'Una cámara linda',
      price: 800,
      points: 5,
      subCategory: 'Semi-Reflex'
    }
    dispatch(addCategory({ name: 'asdasdas' }))
  }
  return (
    <>
      <button onClick={reduxTester}> josetester </button>

    </>
  )
}
export default Test
