const ImgEncoder = (files) => {

    let encodedImgs = []
    
    Array.from(files).map(file => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
          encodedImgs.push(reader.result)
        }    
      reader.onerror = () => {
          console.error('AHHHHHHHH!!');
      }
    })

   return encodedImgs
  }

  export default ImgEncoder