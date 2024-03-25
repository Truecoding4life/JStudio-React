import { Outlet } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import NavbarLi from "./components/Navbar/Navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import SuccessAlert from "./components/Alert/Success.jsx";
import UserProvider from "./ulti/UserContext.jsx";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [doAlert, setAlert] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > scrollPosition && scrollPosition > 200) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navbarStyle = {
    position: "sticky",
    top: 0,
    transition: "transform 0.3s ease-in-out",
    zIndex: 1000,
    transform:
      scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#04fab8f1",
      },
     
      navbar: {
          main: "#cfcece",
        },
        
     
    },
  });

  if (doAlert) {
    setTimeout(() => {
      setAlert(false);
      document
        .getElementById("success-alert")
        .classList.add("animate__fadeOut");
    }, 3000);
  }
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <UserProvider
          doAlert={doAlert}
          setAlert={setAlert}
          setSuccessAlert={setAlert}
        >
          <div className="body  d-flex flex-column min-vh-100">
            <div className="section content ">
            <div className="section" >
              <NavbarLi style={navbarStyle}/>
            </div>
              {doAlert ? <SuccessAlert></SuccessAlert> : null}

              <Outlet />
            </div>

            <div className="section Footer">
              <Footer />
            </div>
          </div>
        </UserProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
