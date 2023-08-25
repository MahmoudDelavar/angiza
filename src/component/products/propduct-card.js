import './style.css';
//======================================================
const ProductCard = ({ name, brief, description, image }) => {
  return (
    <>
      <div className=' col-xxl-2 col-lg-3 col-md-4 col-sm-6 m-2 shadow'>
        <div className='card-box mx-auto '>
          <div className='img-contain'>
            <img className='product-img' src={image} alt='product-img' />
          </div>
          <p>{name}</p>
          <p>{brief}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
