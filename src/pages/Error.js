import { useEffect } from 'react'
import { useNavigate, Redirect } from 'react-router'
import error from './Error.module.css'

export const Error = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/login', { replace: true })
    }, 3000)
  }, [])
  return (
    <div className={error.fondo}>
      <h1 className={error.msg}>
        🤡NO PODÉS ESTAR ACÁ🤡
      </h1>
    </div>
  )
}
