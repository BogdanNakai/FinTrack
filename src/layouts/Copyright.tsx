const Copyright = () => {
  return (
    <section className="border-t-1 border-[#e2e8f0]">
      <div className="copyright__container">
        <div className="flex justify-between items-center py-[23px] text-[#64748B] ">
          <p className="text-[12px]">© 2025 FinTrack. All rights reserved.</p>
          <ul className="flex gap-2.5">
            <li>
              <a
                href=""
                className="block p-2.6 text-[14px] transition duration-200 hover:text-[#64748b81] focus:text-[#64748b81] active:scale-[0.9] "
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href=""
                className="block p-2.6 text-[14px] transition duration-200 hover:text-[#64748b81] focus:text-[#64748b81] active:scale-[0.9]"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href=""
                className="block p-2.6 text-[14px] transition duration-200 hover:text-[#64748b81] focus:text-[#64748b81] active:scale-[0.9]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
