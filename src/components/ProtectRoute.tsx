import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectRoute(): JSX.Element {
  const hasToken = localStorage.getItem('authorization')
  return hasToken ? <Outlet /> : <Navigate to='/' replace />
}
