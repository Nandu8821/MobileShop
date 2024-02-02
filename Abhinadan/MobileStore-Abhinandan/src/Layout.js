import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import {  Outlet } from "react-router-dom";

const Layout=()=>{

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </>
    )
}
export default Layout;