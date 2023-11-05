import { useEffect } from "react";
import telephoneImage from "../assets/images/image-11.jpeg";
import { useState } from "react";
import Product from "./product";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const[isChecked, setIsChecked] = useState({newId: 0, status:false});

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-10 p-5">
      <div className="grid grid-cols-5 justify-center items-center gap-10 ">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 col-span-2 row-span-2">
          <div>
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 border border-gray-300"
              src={telephoneImage}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        </div>

        {products.map((product) => (
          <Product key={product.id} product={product} isChecked={isChecked} setIsChecked={setIsChecked}></Product>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Gallery;
