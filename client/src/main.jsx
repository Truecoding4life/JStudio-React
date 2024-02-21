import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components for route rendering
import App from './App.jsx'
import ErrorPage from './containers/error.jsx'
import HomePage from './containers/Home/home'
import AboutPage from './containers/About/About.jsx'
import PortfolioPage from './containers/Portfolio/Portfolio.jsx'
import ContactPage from './containers/Contact/contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    errorElement: <ErrorPage />,
  
    children: [
      {
        index: true,
        element: <HomePage />,
      }
      ,{
        path: 'about',
        element: <AboutPage />,
      },
       {
         path: 'contact',
         element: <ContactPage />,}
      ,
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      }
    ],
  },
]);

// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);