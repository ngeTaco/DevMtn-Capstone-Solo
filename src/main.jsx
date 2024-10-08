import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx'
import Location from './pages/location.jsx'
import Container from './pages/container.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root.jsx'
import { Provider } from 'react-redux'
import store from './store.js'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "location/:locationId/*",
        loader: ({ params }) => {
          return ({ locationId: params.locationId })
        },
        element: <Location />,
        children: [
          {
            path: "container/:containerId",
            loader: ({ params }) => {
              return ({ containerId: params.containerId })
            },
            element: <Container />,
          },
        ]
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

