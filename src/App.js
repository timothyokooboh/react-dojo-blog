
 import GlobalStyles from "./components/styles/Global.styled.js";
import { ThemeProvider } from "styled-components";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";


import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";

import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {
  const theme = {
    sizes: {
      'fs-12': '12px'
    }
  }

  return ( 
    <Router>
      <ThemeProvider theme = {theme}>
        <GlobalStyles />
        <div className="app">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route path="/create/">
                <CreateBlog />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <div>404</div>
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}
 
export default App;