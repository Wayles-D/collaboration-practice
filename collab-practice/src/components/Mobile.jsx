import React, { useState } from "react";

export default function Mobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center ml-auto">
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-2"
      >
        <img src="/icon-menu.svg" alt="menu" className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* drawer */}
          <aside className="relative ml-auto w-80 max-w-full bg-white p-6 shadow-lg">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-1"
            >
              <img src="/icon-close-menu.svg" alt="close" className="w-5 h-5" />
            </button>

            <nav className="mt-6 space-y-6 font-semibold text-lg text-gray-500">
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
        <div className="dropdown dropdown-bottom dropdown-center block">
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

              <a className="block">Careers</a>
              <a className="block">About</a>

              <div className="mt-6 pt-6 flex flex-col gap-3">
                <button className="text-center">Login</button>
                <button className="border border-black rounded-lg py-2">Register</button>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
