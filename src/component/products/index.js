import { useEffect, useState } from 'react';
// import { getAllProducts } from '../../lib/requests';
import ProductCard from './propduct-card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllproducts } from '../../state-management/actions/product-actions';
//========================================================
const ProductList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.productState);

  //--------- load all propducts---------
  useEffect(() => {
    try {
      getAllproducts(dispatch);
    } catch (error) {
      console.log('AxiosERR "cant loaded propducts:"', error);
    }
  }, []);

  return (
    <>
      <div className='container-floid bg-dark pt-3'>
        <div className='row justify-content-center '>
          {/* ----------------loading section--------------- */}
          {isLoading && (
            <p className='text-center'> در حال بارگزاری محصولات ...</p>
          )}

          {/* ----------notfound products section----------- */}
          {data?.length === 0 && (
            <p className='text-center badge'>هیچ محصولی یافت نشد</p>
          )}

          {/*------------- products list section ----------- */}
          {data?.map((p) => (
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
