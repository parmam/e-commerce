export function validate (value, target, setErrors) {
  if (target === 'name' || target === 'lastname') {
    setErrors((prev) => ({ ...prev, [target]: null }))
    const nameformat = /^[a-zA-Z ]{3,15}$/
    if (!value) {
      // errors.name = 'Name is required'; // errors = { username: 'Username is required' }
      setErrors((prev) => ({ ...prev, [target]: `${target} is required` }))
    } else if (!value.match(nameformat)) {
      setErrors((prev) => ({ ...prev, [target]: `${target} is invalid` }))
      // errors.name = 'Name is invalid';   // errors = { username: 'Username is invalid' }
    }
  }

  if (target === 'email') {
    setErrors((prev) => ({ ...prev, email: null }))
    const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value === '') {
      setErrors((prev) => ({ ...prev, email: 'email is required' }))
    }
    const tester = rex.test(String(value).toLowerCase())
    if (tester !== true) {
      setErrors((prev) => ({ ...prev, email: 'email is invalid' }))
    }
  }

  if (target === 'address') {
    setErrors((prev) => ({ ...prev, address: null }))
    const addressFormat = /^[a-zA-Z 1-9 ]{7,20}$/
    if (value !== '') {
      if (!value.match(addressFormat)) {
        setErrors((prev) => ({ ...prev, [target]: `${target} is invalid` }))
      }
    }
  }

  if (target === 'cp') {
    setErrors((prev) => ({ ...prev, [target]: null }))
    const cpFormat = /^[1-9]{4,8}$/
    if (value !== '') {
      if (!value.match(cpFormat)) {
        setErrors((prev) => ({ ...prev, [target]: `${target} is invalid` }))
      }
    }
  }

  if (target === 'phone') {
    setErrors((prev) => ({ ...prev, [target]: null }))
    if (value !== '') {
      const cpFormat = /^[1-9]{6,14}$/
      if (!value.match(cpFormat)) {
        setErrors((prev) => ({ ...prev, [target]: `${target} is invalid` }))
      }
    }
  }

  if (target === 'province') {
    setErrors((prev) => ({ ...prev, [target]: null }))
    const provinceFormat = /^[a-zA-Z]{4,15}$/
    if (value !== '') {
      if (!value.match(provinceFormat)) {
        setErrors((prev) => ({ ...prev, [target]: `${target} is invalid` }))
      }
    }
  }
}
