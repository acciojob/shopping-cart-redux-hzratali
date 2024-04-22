import React from "react";

import {useSelector, useDispatch} from "react-redux";
import {add_to_cart} from "../redux/actions/cartActions";


const Home = () => {
  const products = useSelector(state => state.product);

  console.log("Home", products);


  const dispatch = useDispatch();



    return(
        <div>
              <h1> Home Page</h1>

              <div className="product-display">

              {
                products.map((product) => (
                  <div key={product.id}>
                    <img src={product.product_image} alt={product.product_desc} />
                    <h3>{product.product_name}</h3>
                    <p>{product.product_desc}</p>
                    <p>{product.product_price}</p>
                    <button
                     onClick={ ()=> dispatch(add_to_cart(product))}
                    >Add to Cart</button>
                  </div>
                ))
              }
              </div>
        </div>
    )
}

export default Home;