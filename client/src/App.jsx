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
import { useState, useEffect } from "react";
import FloatingActionButtonSize from "./components/FloatingBox";

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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition >  scrollPosition &&  scrollPosition > 200) {
      setScrollDirection("down");
      console.log("down" + "  " + scrollPosition);
    } else {
      setScrollDirection("up");
      
      console.log("up" + "  " + currentPosition);    }

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
        mainLight: darkMode ? "#72d09cf2" : "#7ab399ea",
        mainBackground: darkMode ? " radial-gradient(circle at 25% 62%, rgba(20, 25, 23, 1) 0%, rgba(28, 24, 75, 1) 55%)" : "#d3f2e9f6",
        mainText: darkMode ? "white" : "black",
        mainTextHighLight: darkMode ? "#15c291f1" : "#048e66f1",
        mainTextHighLightVet: darkMode ? "#088abaf1" : "#075b7ae0",
        button: darkMode ? "#7fffd4" : "#0d7755",
        buttonBorder: darkMode ? "#09a16e" : "#56927e",
        projectButton: darkMode ? "#72d09cf2" : "#36544989",
        buttonDangerBorder: darkMode ? "#d24949d1" : "#761111",
        buttonDanger: darkMode ? "#d24949d1" : "#761111",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="body  d-flex flex-column min-vh-100">
          <div className="section" style={navbarStyle}>
            <NavbarLi />
          </div>
          <div
            className="section content"
            
          >
            <Outlet />
            <FloatingActionButtonSize
              setDark={setDarkMode}
              darkMode={darkMode}
            ></FloatingActionButtonSize>
          </div>

          <div className="section Footer">
            <Footer />
          </div>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
