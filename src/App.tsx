import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { GlobalStyles } from "./GlobalStyle";
import Home from "./Pages/Home/Home";
import MainTemplate from "./Templates/MainTemplate";
import LogIn from "./Pages/Log/LogIn";
import Register from "./Pages/Register/Register";
import Detail from "./Pages/Detail/Detail";
import Checkout from "./Pages/Checkout/Checkout";
// import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="/sign__in" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:movieId" element={<Detail />} />
        </Route>
          <Route path="/checkout/:maLichChieu" element={<Checkout />}/>


        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
