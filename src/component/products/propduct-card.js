import './style.css';
//======================================================
const ProductCard = ({ name, brief, description, image }) => {
  return (
    <>
      {/* <div className='col-xl-1 col-lg-3 col-md-6 '> */}
      <div className=' col-xxl-2 col-lg-3 col-md-4 card-box'>
        <div className='img-contain'>
          <img className='product-img' src={image} alt='product-img' />
        </div>
        <p>{name}</p>
        <p>{brief}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductCard;
