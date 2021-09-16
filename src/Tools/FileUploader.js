import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import { FakeContext } from 'src/FakeContext'
const FileUploader = ({selectedFiles, setSelectedFiles, imageUrl, setImageUrl}) => {


    useEffect(() => {
        if (selectedFiles && selectedFiles) {
        let url = URL.createObjectURL(selectedFiles)
        console.log(url, ' selected files file uploader')

        setImageUrl(url)
        }
        console.log(imageUrl, ' este')
      }, [selectedFiles]);

    useEffect(() => {
        console.log(selectedFiles, 'aca')
    },[selectedFiles])
    return (
        <React.Fragment>
            <form>
                <input
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='raised-button-file'
                    multiple
                    onChange={(e) => setSelectedFiles(e.target.files[0])}
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