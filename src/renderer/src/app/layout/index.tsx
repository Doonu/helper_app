import { SLayout } from './layout.styles'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <SLayout>
      <Outlet />
    </SLayout>
  )
}
