import './App.css';
import FooterComponent from './components/Footer/FooterComponent';
import Login from './components/Login/LoginComponent';
import Navbar from './components/Navbar/NavbarComponent';
import Register from './components/Register/RegisterComponent';
import BlogEditor from './components/Blog/BlogEditor'

function App() {
  return (
    <div className="">
      <Navbar/>
      <Register/>
      <Login/>
      <BlogEditor/>
      <FooterComponent/>
    </div>
  );
}

export default App;
