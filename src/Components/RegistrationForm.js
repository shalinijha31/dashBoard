import React from 'react';

const RegistrationForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your registration logic here
        alert('Registration successful!');
    };

    return (
        <form className="max-w-md mx-auto bg-white p-8 shadow-md shadow-gray-400 rounded-md mt-14">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <label className=" flex font-semibold" htmlFor="name">Name:</label>
            <input className="w-full p-2 border rounded-md" placeholder="enter your name" type="text" id="name" name="name" required />

            <label className="flex font-semibold" htmlFor="email">Email:</label>
            <input className="w-full p-2 border rounded-md" placeholder='enter your email' type="email" id="email" name="email" required />

            <label className="flex font-semibold" htmlFor="password">Password:</label>
            <input className="w-full p-2 border rounded-md" placeholder='enter password' type="password" id="password" name="password" required />

            <button className="mt-4 bg-gray-800 text-white p-2 rounded-md" type="submit" onClick={handleSubmit}>
                Sign Up
            </button>
        </form>
    );
};

export default RegistrationForm;
