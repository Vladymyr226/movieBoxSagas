import { ReactElement, useEffect } from 'react'

type Props = {
  defaultRoute: ReactElement
}

const PrivateRoutes = ({ defaultRoute: children }: Props) => {
  const sessionId: string = localStorage.getItem('sessionId') || ''

  useEffect(() => {
    if (!sessionId) {
      localStorage.clear()
    }
  }, [sessionId])

  if (!sessionId) {
    window.location.href = '/'
  }

  return children
}

export default PrivateRoutes
