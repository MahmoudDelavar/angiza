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
        console.log('AxiosERR "cant loaded propducts:"', error);
      }
    })();
  }, []);

  if (propducts.length === 0) {
    return <p className='text-center'>هیچ محصولی یافت نشد</p>;
  }

  return (
    <>
      <div className='container-floid bg-dark pt-3'>
        <div className='row justify-content-center '>
          {propducts.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name || 'نام محصول'}
              brief={p.brief || 'توضیح مختصر '}
              description={p.description || ' توضیحات محصول'}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
