import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'

import ErrorPage from './pages/error.jsx'
import App from './App.jsx'

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
        element: <HomePage />,
      },
      {
        // https://reactrouter.com/en/main/route/route#path
        // The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.
        path: 'profile/:id',
        // https://reactrouter.com/en/main/route/route#elementcomponent
        // The React Element/Component to render when the route matches the URL.
        element: <ProfilePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);