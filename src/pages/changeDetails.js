import React, { useEffect, useState } from 'react';
// import 'bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";

const ChangeDetails = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/register");

      }, [user, loading]);

    const [data, setData] = useState({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: ""});
    const [image, setImage ] = useState(null);
    const [ url, setUrl ] = useState(null);
    const handleChange = event => {
        const { name, value } = event.target;
        setData({...data, [name]: value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        // setData({...data, [image_url]: {url}})
        setProfile(data, user.uid);
        setUrl('');
        setImage('');
        setData({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "" });
        navigate("/Dashboard");
    }

    return (
        <div>
        <div  >

        <form onSubmit={submitForm}>
    <div class="mb-6">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input name="name" value={data.name} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="raam" required onChange={handleChange}/>
        </div>
        
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">College</label>
            <input name="college" value={data.college} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. iit kanpur" required onChange={handleChange}/>
        </div>  
        </div>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input name="phone" value={data.phone} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9876543210"  required onChange={handleChange}/>
        </div>
        <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input name="email" value={data.email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required onChange={handleChange}/>
        </div> 
        <div >
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Twitter Id</label>
        <input name="twitter" value={data.twitter} type="url" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={handleChange}/>
    </div> 
    <div >
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">LinkedIn Id</label>
        <input name="linkedin" value={data.linkedin} type="url" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={handleChange}/>
    </div> 
    
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Facebook Id</label>
            <input name="fb" value={data.fb} type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required onChange={handleChange}/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Instagram Id</label>
            <input name="insta" value={data.insta} type="url" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name1234" required onChange={handleChange}/>
        </div>
    </div>
    <div class='mb-6'>
    
        
    </div>
    
    
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
        <br/>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={logout}>Logout</button>
        <a href="/Dashboard">
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={'/Dashboard'}>Back</button>
        </a>
        </div>
        );
    };
    
    
export default ChangeDetails;

{/* <label>
Twitter Profile Link: 
<input id="twitter" type="text" name="twitter" placeholder='twitterId' onChange={handleChange} value={data.twitter}/>
</label> */}