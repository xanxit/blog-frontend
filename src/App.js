import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FooterComponent from "./components/Footer/FooterComponent";
import Login from "./components/Login/LoginComponent";
import Navbar from "./components/Navbar/NavbarComponent";
import Register from "./components/Register/RegisterComponent";
import BlogEditor from "./components/Blog/BlogEditor";
import Bloglist from "./components/Blog/Bloglist";
import BlogPage from "./components/Blog/BlogPage";
import CreateBlog from "./components/Blog/CreateBlog";
import EditBlog from "./components/Blog/EditBlog";
// import CreateBlog from './components/Blog/CreateBlog';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Bloglist} />
          <Route exact path="/create" component={CreateBlog}/>
          <Route exact path="/blog/create" component={BlogEditor} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route exact path="/edit" component={EditBlog}/>
        </Switch>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
