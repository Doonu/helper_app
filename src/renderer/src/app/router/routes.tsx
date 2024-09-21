import { createHashRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { ExcelToPdf } from '@pages/ExcelToPdf'

export const routes = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ExcelToPdf />
      }
    ]
  }
])
