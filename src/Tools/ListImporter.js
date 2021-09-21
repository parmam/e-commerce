import React, {useState} from 'react'
import { Button } from '@material-ui/core'

const ListImporter = () => {


    return (
        <React.Fragment>
                <input
                    accept='text/xml'
                    style={{ display: 'none' }}
                    id='import-file'
                    onChange={(e) => setFiles(e.target.files[0])}
                    type='file'
                />
                <label htmlFor='import-file'>
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
                </label>

        </React.Fragment>
    )
}

export default ListImporter