import {use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {CardProvide} from "./ContextContent.jsx";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import CartItems from "./Cart.jsx";
import HeaderContent from "./Header.jsx";
import FooterContent from "./Footer.jsx";
function App() {

    const [tab,ChangeTab] = useState("Home")

    const [cartItems,UpdateItems]=useState([])

    function UpdateCart(item){
        UpdateItems((prevState)=>{
            return [...prevState,item]
        })


    }

    function UpdateBody(val){
        ChangeTab(val);
    }
    function CallBody(){
        if(tab === "Home"){
            return <Home action={UpdateBody}/>
        }
        else if(tab === "About"){
            return <About/>
        }
        else if(tab === "Products"){
            return <Products add={UpdateCart}/>
        }
        else{
            return <CartItems items={cartItems}/>
        }
    }

    return(
        <CardProvide>
            <div className={"MainBox"}>
                <div className={"head"}>
                    <HeaderContent action={UpdateBody}/>
                    <hr/>
                </div>

                <div className={tab}>
                    <CallBody/>
                </div>
                <div className={"FooterContainer"}>
                    <FooterContent/>
                </div>

            </div>
        </CardProvide>

    )

}

export default App
