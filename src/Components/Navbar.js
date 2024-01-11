import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-400 p-4">
            <div className="container mx-auto flex  items-center gap-8 text-white text-md ml-16 font-bold">
                <a href="/Products" >Products</a>
                <a href="/AddProducts" >Add Products</a>
                <a href="/UpdateProducts" >Update Products</a>
                <a href="/Profile" >Profile</a>
                <a href="/SignUp">Sign Up</a>
                <a href="/Logout" >Logout</a>
            </div>
        </nav>
    );
};

export default Navbar;
