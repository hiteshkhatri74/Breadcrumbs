import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Productlisting = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
            setProducts(res.products);
        });
    }, []);

  return (
    <div>
      <h2>ProductListing Page</h2>

      <div className="product-grid">
        {
            products.map((product) => {
                return (

                    <div className="product-card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                           <img src={product.thumbnail} alt={product.title} />
                           <h3>{product.title}</h3>
                           <h3>${product.price}</h3>
                        </Link>
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}

export default Productlisting;