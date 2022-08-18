import React, { useEffect, useState } from 'react';
// import 'bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";

const Details = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/register");

      }, [user, loading]);

    const [data, setData] = useState({ name: "",verified: false});

    const handleChange = event => {
        const { name, value } = event.target;
        setData({...data, [name]: value})
    };

    const submitForm = (e) => {
        e.preventDefault();

        setProfile(data, user.uid);

        setData({ name: ""});
        navigate("/");
    }

    return (
    <div>
      <div>

        <form onSubmit={submitForm}>
            
            <div class="mb-6">
 
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input name="name" value={data.name} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="raam" required onChange={handleChange}/>

            </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>          
    </div>
        );
    };
    
    
export default Details;

{/* <label>
Twitter Profile Link: 
<input id="twitter" type="text" name="twitter" placeholder='twitterId' onChange={handleChange} value={data.twitter}/>
</label> */}