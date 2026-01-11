const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-sm">

          {/* Logo */}
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-2xl font-extrabold text-black">snap</h2>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-black mb-4">Features</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-black cursor-pointer">Todo List</li>
              <li className="hover:text-black cursor-pointer">Calendar</li>
              <li className="hover:text-black cursor-pointer">Reminders</li>
              <li className="hover:text-black cursor-pointer">Planning</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-black cursor-pointer">History</li>
              <li className="hover:text-black cursor-pointer">Our Team</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold text-black mb-4">Careers</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-black cursor-pointer">Open Roles</li>
              <li className="hover:text-black cursor-pointer">Internships</li>
              <li className="hover:text-black cursor-pointer">Culture</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-black mb-4">About</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-4">
          <p>© {new Date().getFullYear()} snap. All rights reserved.</p>
          <p className="hover:text-black cursor-pointer">
            Terms & Conditions
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
