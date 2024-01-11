import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// Css part
import "./css/Header.css";
import "./css/Home.css";

const App=()=>{

  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;