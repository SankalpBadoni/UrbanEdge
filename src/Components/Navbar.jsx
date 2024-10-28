import { Link } from "react-router-dom";
function Navbar() {
    const user = true;
    return (
        <nav className="flex justify-between items-center h-24">
            <div className="flex gap-7 items-center w-3/5 transition duration-150 ease-in-out ">
                <Link href="" className="flex items-center hover:scale-105 transition-transform">
                    <img src="assets/Logo.png" className="h-10 mr-2 " alt="" />
                    <span className="hidden md:flex text-2xl text-black font-bold font-sans">UrbanEdge</span>
                </Link>
                <div className="hidden sm:flex gap-7 items-center w-3/5 transition duration-150 ease-in-out">
                    <Link to="/" className="hover:scale-105 transition-transform">Home</Link>
                    <Link to="/about" className="hover:scale-105 transition-transform">About</Link>
                    <Link to="/contacts" className="hover:scale-105 transition-transform">Contacts</Link>
                    <Link to="/agents" className="hover:scale-105 transition-transform">Agents</Link>
                </div>
            </div>
            <div className="hidden sm:flex w-2/5 h-full  gap-7 items-center bg-pink-100">
                {user ? (<div className="flex pl-40 gap-2">
                    <div className="flex items-center gap-2">
                        <img src="assets/profile.jpg" className="w-12" alt="" />
                        <span className="font-semibold">Ashish Sharma</span>
                        <Link className="bg-amber-400 px-3 py-1 w-auto hover:scale-105 transition-transform text-semibold relative " to='/profile'>
                            <div className="absolute bg-red-500 text-white border-md rounded-lg flex items-center h-5 w-5 justify-center -top-2 -right-2">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>

                </div>) : (<div className="pl-64 flex gap-5"> <Link className="bg-orange-400 p-2 hover:scale-105 transition-transform">Sign in</Link>
                    <Link className="bg-orange-400 p-2 hover:scale-105 transition-transform">Log in</Link> </div>)}
                <div >
                    <img src="assets/Menu.png" alt="Menu" className="block sm:hidden" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar