import React, {useEffect, useState} from 'react'
import { Button } from '@material-ui/core'
import  ImportProducts  from 'src/Tools/Swal2/ImportProducts'


const ListImporter = () => {
    const [file, setFile] = useState(null) 
    const [fileName, setFileName] = useState('')
    const [submit, setSubmit] = useState(false)
    
    
    

    const handleChange = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
        setSubmit(true)
        e.preventDefault()

    }

    const handleSubmit = (e) => {
        setSubmit(false)
    }
    
    useEffect(() => {
        console.log(file)
        if(submit){
            let formData = new FormData()
            formData.set('username', 'Chris');
            formData.append('file', file)
            console.log(formData)
        // ImportProducts(formData, fileName, dispatch)
      }
    }, [file])
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data'>
                <input
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document/application/vnd.openxmlformats-"
                    style={{ display: 'none' }}
                    id='import-file'
                    onChange={(e) => handleChange(e)}
                    type='file'
                />
                <label htmlFor='import-file'>
                {
                (!file)
                ? (
                    <Button
                        name='import-file'
                        color='primary'
                        component='span'
                        variant='contained'
                        style={{
                        marginRight: '5px'
                        }}
                    >
                        Importar lista
                    </Button>
                ) 
                : (
                    <Button
                        onClick={handleSubmit}
                        name='import-file'
                        color='primary'
                        component='span'
                        variant='contained'
                        style={{
                        marginRight: '5px'
                        }}
                    >
                        Aceptar
                    </Button>   
                )


                }

                </label>
            </form>
        </React.Fragment>
    )
}

export default ListImporter