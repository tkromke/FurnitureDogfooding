import { FunctionComponent, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  const [products , setProducts] = useState([]);

  useEffect (() => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              console.log(json);
              setProducts(json);
            })
},[]);

  return (
    <section className={styles.shopInner}>
      <div className={styles.frameParent}>
        {products.map(product => (
          <ProductCard
          maskGroup={product.image}
          trentonModularSofa3={product.title}
          rs2500000={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FrameComponent8;
