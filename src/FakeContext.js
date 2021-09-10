import React, {useState} from 'react'


const FakeContext = () => {
    const [eventHandler, setEventHandler] = useState({
        removeProducts: false,
        setSearch:''
    })

    return{
        eventHandler,
        setEventHandler
    }
}

export default FakeContext