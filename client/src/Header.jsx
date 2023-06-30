import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="flex justify-between">
      <Link to="/" className="flex item-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -rotate-90" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <span className="font-bold text-xl">airbnc</span>
      </Link>
      <div className={`d-flex justify-content-center`}>
        <NavDropdown title="Any where" className={`nav-link px-2 bg`}>
        </NavDropdown>
        <NavDropdown title="Any week" className={`nav-link px-2 bg`}>
        </NavDropdown>
        <NavDropdown title="Add guest" className={`nav-link px-2 bg`}>
        </NavDropdown>
      </div>
      <div className="flex item-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md">
        <Link to={user ? "/account" : "/login"} className="d-flex">
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative top-1" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          {!!user && <div className="ml-2">{user.name}</div>}
        </Link>
        <Dropdown className={`d-flex`}>
          <Dropdown.Toggle id="dropdown-split-basic" variant="outline-light" className={`text-dark h-6 d-flex align-items-center border-none drop`} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Bài đăng của tôi</Dropdown.Item>
            <Link to={"/upload"}>
              <Dropdown.Item>Đăng bài</Dropdown.Item>
            </Link>
            <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}
