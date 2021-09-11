import React, {useState} from 'react'


export const FakeContext = () => {
    const [eventHandler, setEventHandler] = useState({
        deleteProductsBtn: false,
        selectedProducts:[],
        setSearch:''
    })

    return{
        eventHandler,
        setEventHandler,
    }

}

