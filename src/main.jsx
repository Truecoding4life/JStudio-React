import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components for route rendering
import App from './App.jsx'
import ErrorPage from './pages/error.jsx'
import HomePage from './pages/home'
import ResumePage from './pages/resume/resume.jsx'
import WorkPage from './pages/Work/Work.jsx'
import ContactPage from './pages/Contact/contact.jsx'

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
        path: 'resume',
        element: <ResumePage />,
      },
       {
         path: 'contact',
         element: <ContactPage />,}
      ,
      {
        path: 'work',
        element: <WorkPage />,
      }
    ],
  },
]);

// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);