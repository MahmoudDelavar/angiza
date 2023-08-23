const NavItem = ({ title, description, icon }) => {
  return (
    <>
      <div className='d-flex align-items-center '>
        <p className='mx-1 mb-0'>{icon}</p>
        <p className='mb-0'>{title}</p>
      </div>

      <p>{description}</p>
    </>
  );
};

export default NavItem;
