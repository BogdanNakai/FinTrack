import "@/css/header.scss";
import { Link } from "react-router-dom";
import type { IMenu } from "./Layouts.type";

const Menu = ({ active }: IMenu) => {
  const toggleMenu = () => {
    document.documentElement.toggleAttribute("data-fls-menu-open");
  };
  const closeMenu = () => {
    document.documentElement.removeAttribute("data-fls-menu-open");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", url: "/dashboard" },
    { id: "transactions", label: "Transactions", url: "/transactions" },
    { id: "budget", label: "Budget", url: "/budget" },
    { id: "goals", label: "Goals", url: "/goals" },
    { id: "reports", label: "Reports", url: "/reports" },
  ];

  return (
    <>
      <div className="header__menu menu flex">
        <button
          onClick={() => toggleMenu()}
          type="button"
          className="menu__icon icon-menu"
        >
          <span></span>
        </button>
        <nav className="menu__body">
          <ul className="menu__list flex items-center ">
            {menuItems.map((e) => (
              <li key={e.id} className="menu__item flex items-center gap=[8px]">
                <Link
                  onClick={closeMenu}
                  to={e.url}
                  className={`menu__link text-[16px] block p-[10px] ${
                    e.id === active ? "menu__link-active" : null
                  }`}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
