import AuthLink from "./AuthLink";
import Logo from "./Logo";
import Mobile from "./Mobile";

export default function Nav() {
  return (
    <div className="container mx-auto px-10 py-8 flex items-center font-semibold">
      <Logo />
      {/* nav */}
      <div className="hidden md:flex gap-8 items-center ml-10">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="cursor-pointer m-1  flex gap-1 items-center">
            Features <img className="w-3 h-2 mt-2" src="icon-arrow-down.svg"/>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>📃 Todo List</a>
            </li>
            <li>
              <a>📅 Calendar</a>
            </li>
             <li>
              <a>🔔 Reminders</a>
            </li>
             <li>
              <a>🕧 Planning</a>
            </li>
          </ul>
        </div>
        {/* second dropdown */}
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="cursor-pointer m-1 flex gap-1 items-center">
            Company <img className="w-3 h-2 mt-2" src="icon-arrow-down.svg"/>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>History</a>
            </li>
            <li>
              <a>Our Team</a>
            </li>
             <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className="ml-4">Careers</a>
        <a className="ml-4">About</a>
      </div>
      <AuthLink/>
      <Mobile/>
    </div>
  );
}
