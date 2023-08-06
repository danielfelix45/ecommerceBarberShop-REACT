import {createBrowserRouter} from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { ProductDetail } from './pages/detail';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/products/:id',
        element: <ProductDetail/>
      }
    ]
  }
])

export {router};
