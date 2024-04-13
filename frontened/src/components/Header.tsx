import { useState } from 'react';
import {
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const user = {
  _id: 'akjff',
  role: 'admin',
};

const Header = () => {
  const [isopen, setOpen] = useState<boolean>(false);
  const logoutHandler = () => {
    setOpen(false);
  };
  return (
    <nav className="header">
      <Link onClick={() => setOpen((prev) => !prev)} to={'/'}>
        Home
      </Link>
      <Link onClick={() => setOpen((prev) => !prev)} to={'/books'}>
        Books
      </Link>
      <Link onClick={() => setOpen((prev) => !prev)} to={'/cart'}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isopen}>
            <div>
              {user.role === 'admin' && (
                <Link to={'/admin/dashboard'}>Admin</Link>
              )}
              <Link to={'/orders'}>Orders</Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={'/login'}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};
export default Header;
