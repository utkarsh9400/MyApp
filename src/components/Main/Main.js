import React, { useState } from 'react';
import './Main.css'; 
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import ProductBox from '../ProductBox/ProductBox';
import ProductDetail from '../ProductDescription/ProductDetail';

const productsData = [
  { id: 1, imageSrc: "/images/box1_image.jpg", name: "Coombes", category: "LOUNGE", price: "2,600", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco" },
  { id: 2, imageSrc: "/images/box4_image.jpg", name: "Keeve Set", category: "MOBILE", price: "590", description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Ut enim ad minim veniam," },
  { id: 3, imageSrc: "/images/box3_image.jpg", name: "Nille", category: "ARMCHAIR", price: "950", description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 4, imageSrc: "/images/box2_image.jpg", name: "Blanko", category: "GROOMING", price: "90", description:"Dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 5, imageSrc: "/images/box5_image.jpg", name: "Momo", category: "MAKEUP", price: "890", description:"Sed do eiusmod tempor incididunt ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad tempor incididunt ut minim veniam, labore et dolore quis nostrud exercitation ullamco laboris." },
  { id: 6, imageSrc: "/images/box3_image.jpg", name: "Penemille", category: "TABLE & CHAIRS", price: "120", description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 7, imageSrc: "/images/box7_image.jpg", name: "Kappu", category: "TOYS", price: "420", description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="main pt-4 mt-4">
      {selectedProduct ? (
        <ProductDetail
          imageSrc={selectedProduct.imageSrc}
          name={selectedProduct.name}
          category={selectedProduct.category}
          price={selectedProduct.price}
          description={selectedProduct.description}
        />
      ) : (
        <>
          <div className="main_body d-flex justify-content-between pb-3">
            <Aside />
            {productsData.map((product) => (
              <ProductBox
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;