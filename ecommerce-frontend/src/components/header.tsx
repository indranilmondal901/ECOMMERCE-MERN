import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
  _id: "123",
  role: "admin",
};

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const logoutHandler = () => {
        setIsOpen(false);
    };

  return (
    <nav className="header">
      {/* home */}
      <Link to={"/"} onClick={()=>{setIsOpen(false)}}>Home</Link>
      {/* Search bar option */}
      <Link to={"/search"} onClick={()=>{setIsOpen(false)}}>
        <FaSearch />
      </Link>
      {/* cart */}
      <Link to={"/cart"} onClick={()=>{setIsOpen(false)}}>
        <FaShoppingBag />
      </Link>
      {/* User login specific conditional Section */}
      {user._id ? (
        <>
          <button onClick={()=>{setIsOpen((prev)=>!prev)}}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            {
              <>
                {user.role === "admin" && (
                  <Link to={"/admin/dashboard"}>Admin </Link>
                )}
                <Link to="/orders">Orders</Link>
                <button onClick={logoutHandler}>
                    <FaSignOutAlt/>
                </button>
              </>
            }
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
