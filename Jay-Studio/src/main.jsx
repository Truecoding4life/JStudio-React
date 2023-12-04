import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'


// Import components for route rendering
import App from './App.jsx'
import ErrorPage from './pages/error.jsx'
import HomePage from './pages/home'
// import AboutPage from './pages/about'
// import ProjectPage from './pages/project'
// import ContactPage from './pages/contact'

const router = createBrowserRouter([
  {
    path: '/',
    // main layout (wraps the remaining page components)
    element: <App />,
    // https://reactrouter.com/en/main/route/error-element#errorelement
    // When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route errorElement>) and the error made available with useRouteError.
    errorElement: <ErrorPage />,
    // An array of Route objects with nested routes on the children property.
    children: [
      // https://reactrouter.com/en/main/route/route
      // Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.
      {
        // https://reactrouter.com/en/main/route/route#index
        // Determines if the route is an index route. Index routes render into their parent's
        index: true,
        element: <HomePage />,}
      // },
      // {
      //   path: 'about',
      //   element: <AboutPage />,
      // },
      // {
      //   path: 'contact',
      //   element: <ContactPage />,
      // },
      // {
      //   path: 'project',
      //   element: <ProjectPage />,
      // }
    ],
  },
]);

// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);