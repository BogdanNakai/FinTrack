import "@/css/header.scss"

const Menu = () => {

	



  /* export function menuInit() {
	document.addEventListener("click", function (e) {
		if (bodyLockStatus && e.target.closest('[data-fls-menu]')) {
			bodyLockToggle()
			document.documentElement.toggleAttribute("data-fls-menu-open")
		}
	});
}
document.querySelector('[data-fls-menu]') ?
	window.addEventListener('load', menuInit) : null */
	return (
    <>
      <div className="header__menu menu flex">
        <button type="button" className="menu__icon icon-menu">
          <span></span>
        </button>
        <nav className="menu__body">
          <ul className="menu__list flex items-center ">
            <li className="menu__item flex items-center gap=[8px]">
              <a
                href=""
                className="menu__link text-[16px] text-[#64748B] block p-[10px]"
              >
                Dashboard
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="menu__link text-[16px] text-[#64748B] block p-[10px]"
              >
                Transactions
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="menu__link text-[16px] text-[#64748B] block p-[10px]"
              >
                Budget
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="menu__link text-[16px] text-[#64748B] block p-[10px]"
              >
                Goals
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="menu__link text-[16px] text-[#64748B] block p-[10px]"
              >
                Reports
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
