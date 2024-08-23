import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavBar.jsx";
import Home from "./component/Home.jsx";
// import RegisterPage from "./component/RegisterPage.jsx";
// import LoginPage from "./component/LoginPage.jsx";
// import Cart from "./component/Cart.jsx";
// import Pizza from "./component/Pizza.jsx"
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Cart></Cart> */}
      {/* <Pizza></Pizza> */}
      <Footer></Footer>
    </>
  );
}

export default App;