import React from "react"
import Header from "./Header"
import OrderItem from "../components/OrderItem"
import OrderTotal from "../components/OrderTotal"
import Promo from "../components/Promo"

import "../assets/css/App.css"

const App = ()=> {
  return (
    <>
      <Header />
      <section id="cal-price">
          <div>
               <h2>Product</h2>
            </div>
            
            <div>
                <h2>Quantity</h2>
            </div>

            <div>
                <h2>Unit Price</h2>
            </div>

            <div>
                <h2>Extended Price</h2>
            </div>
            <OrderItem />
            <OrderItem />
            <button type="button" class="btn">Calculate</button>
      </section>
      <OrderTotal />
      <Promo />
     
 
    </>
  );
}

export default App;
