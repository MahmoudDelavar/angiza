import { useEffect, useState } from 'react';
import { getAllProducts } from '../../lib/requests';
import ProductCard from './propduct-card';
//=========================================
const ProductList = () => {
  const [propducts, setProducts] = useState([]);

  //--------- load all propducts---------
  useEffect(() => {
    (async () => {
      try {
        const propducts = await getAllProducts();
        setProducts(propducts);
      } catch (error) {
        console.log('cant loaded propducts:', error);
      }
    })();
  }, []);

  if (propducts.length === 0) {
    return <p className='text-center'>هیچ محصولی یافت نشد</p>;
  }

  return (
    <>
      <div className='container'>
        <p className='text-center fs-2 fw-bold'>لیست محصولات</p>
        <div className='row justify-content-center'>
          {propducts.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              brief={p.brief}
              description={p.description}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
