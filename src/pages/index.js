import React from 'react';
import Navbar from '../components/Navbar';
// import 'bootstrap';
import '../pages/style.css';
import 'flowbite';

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import { useState } from 'react';
import styles from './style.css';





const Home = () => {
return (
    
        
       
    
        <div>
          <nav class="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Udghosh</span>
        </a>
        <div class="flex items-center md:order-2">
            <a href="/register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
            <a href="/register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</a>
            <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div id="mega-menu" class="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Company <svg aria-hidden="true" class="ml-1 w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div id="mega-menu-dropdown" class="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                        <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul class="space-y-4">
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4 text-gray-900 dark:text-white">
                            <ul class="space-y-4">
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


        
        <div className='bg'>
         <div  style={{margin: 'auto', marginBottom: '5%'}} className='row'>

          
        <div style={{width: "50%"}} className='feature-box col-lg-6 col-md-6 col-sm-12'> 
        <Typography style={{ marginTop: '10%' , alignSelf:'center',fontStretch:'extra-expanded',color:'#00008B', fontSize:45, fontWeight:'bolder',paddingTop:0,paddingLeft:'5vw', textAlign:'left', display:{xs:'flex'},fontStyle:'italic'}}>CAMPUS AMBASSADOR PROGRAM</Typography>
    <Typography style={{textAlign:'center',fontWeight:'bold',marginTop:'7vh',marginLeft:0,fontSize:25}}>Be the Representative of your Campus</Typography>
        </div>
        <div style={{marginRight: '0',  }} className='container feature-box col-lg-6 col-md-6 col-sm-12'>
          <img style={{width: '375px', marginTop: '10%'}} src='./user1.png' />
        </div> 
        
       
    </div>
    <div className='mark'>
    <a href='/register' ><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply Now!</button></a>
    </div>

    <img style={{ height: '200px', width: "200px"}} src="./p2e1.png" />
    <br/>
    <br/>


    
<div class="w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li class="mr-2">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">About</button>
        </li>
        <li class="mr-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">Services</button>
        </li>
        <li class="mr-2">
            <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">Facts</button>
        </li>
    </ul>
    <div id="defaultTabContent">
        <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation &amp; trust at 200,000+ companies worldwide</h2>
            <p class="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
         
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex space-x-2">
                    
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Dynamic reports and dashboards</span>
                </li>
                <li class="flex space-x-2">
                  
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2">
                    
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2">
                    
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="font-light leading-tight">Limitless business automation</span>
                </li>
            </ul>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
            </dl>
        </div>
    </div>
</div>

    </div>
    </div>
      );
      };



export default Home;