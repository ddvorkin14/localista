import React from 'react';

const Navbar = (props) => {
  const { current_user } = props;

  const handleLogout = (event) => {
    event.preventDefault();
    
    fetch(event.target.href, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      credentials: 'same-origin'
    }).then(() => {
      window.location = '/';
    }).catch(error => console.error('Error logging out:', error));
  }

  return (
    <nav className="p-4 container mx-auto">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-white font-bold text-xl">Localista</a>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {current_user ? (
              <>
                <li><a href={"/users/" + current_user.id + "/edit"} className="text-white hover:text-gray-300">Profile</a></li>
                <li><a href="/logout" onClick={handleLogout} className="text-white hover:text-gray-300">Sign Out</a></li>
              </>
            ) : (
              <li><a href="/login" className="text-white hover:text-gray-300">Sign In</a></li>
            )}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
