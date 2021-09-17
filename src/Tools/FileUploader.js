import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import { FakeContext } from 'src/FakeContext'
const FileUploader = ({selectedFiles, setSelectedFiles, imageUrl, setImageUrl}) => {


    useEffect(() => {
        console.log(selectedFiles, ' FILE UPLOADER')
        if (selectedFiles && selectedFiles !== [] && selectedFiles.length !== 0) {
        // setImageUrl(selectedFiles.map((file) => { return URL.createObjectURL(file) }))
        let arr = []
        arr = Array.from(selectedFiles).forEach(file => { 
            setImageUrl(...imageUrl, URL.createObjectURL(file)) 
        });
        console.log(arr, ' en map')
        }
      }, [selectedFiles]);

    return (
        <React.Fragment>
            <form>
                <input
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='raised-button-file'
                    multiple
                    onChange={(e) => setSelectedFiles(e.target.files)}
                    type='file'
                />
                <label htmlFor='raised-button-file'>
                <Button
                    variant='contained'
                    color='primary'
                    component='span'
                >
                    Agregar imagen
                </Button>
                </label>
            </form>

        </React.Fragment>
    )
}

export default FileUploader