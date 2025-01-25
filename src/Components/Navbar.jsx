import { Link } from "react-router-dom";

function Navbar() {
    const user = true;
    return (
        <nav className="flex justify-between items-center h-24 bg-white shadow-sm px-8 py-4">
            <div className="flex gap-7 items-center transition duration-150 ease-in-out">
                <Link to="/" className="flex items-center hover:scale-110 transition-transform">
                    <img src="assets/Logo.png" className="h-10 mr-2 " alt="Logo" />
                    <span className="hidden md:flex text-2xl text-gray-800 font-bold font-sans tracking-wide">UrbanEdge</span>
                </Link>
                <div className="hidden sm:flex gap-7 items-center w-3/5 transition duration-150 ease-in-out">
                    <Link to="/" className="hover:text-indigo-600 transition-colors duration-200 hover:scale-105">Home</Link>
                    <Link to="/about" className="hover:text-indigo-600 transition-colors duration-200 hover:scale-105">About</Link>
                    <Link to="/contacts" className="hover:text-indigo-600 transition-colors duration-200 hover:scale-105">Contacts</Link>
                    <Link to="/agents" className="hover:text-indigo-600 transition-colors duration-200 hover:scale-105">Agents</Link>
                </div>
            </div>
            <div className="hidden sm:flex w-2/5 h-full gap-7 items-center">
                {user ? (
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-2">
                            <img src="assets/profile.jpg" className="w-12 h-12 rounded-full border-2 border-indigo-500" alt="Profile" />
                            <span className="font-semibold text-gray-700">Ashish Sharma</span>
                            <Link className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors relative flex items-center hover:scale-105" to='/profile'>
                                <div className="absolute bg-red-500 text-white border-md rounded-full flex items-center h-5 w-5 justify-center -top-2 -right-2">3</div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    </div>
                ) : (<div className="pl-48 flex gap-5">
                    <Link
                    to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:scale-105 transition-transform"  
                    >
                      Sign up
                    </Link>
                    <Link
                      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 hover:scale-105 transition-transform"
                      to="/login"
                    >
                      Log in
                    </Link>
                  </div>
                  )}
                <div>
                    <img src="assets/Menu.png" alt="Menu" className="block sm:hidden cursor-pointer" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
