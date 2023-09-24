import React from "react";
import Nav from "../Components/Nav";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        {/* nav component  */}
        <div className="navComponent">
          <Nav />
        </div>
        {/* nav component  */}
      </div>
    </div>
  );
};

export default Home;

// <header class="my-24">
//   <div class="w-full bg-center bg-cover"
//     style="background-image: url(https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);">
//     <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
//       <div class="text-center">
//         <div class="container px-4 mx-auto">
//           <div class="max-w-4xl mx-auto text-center">
//             <span class="text-gray-200 font-semibold uppercase tracking-widest">New feature</span>
//             <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Lorem ipsum dolor sit amet consectetur
//               adipisicing elit.</h2>
//             <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente
//               ducimus.
//             </p>
//             <a class="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
//               href="#">start your free trial</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>

// overlay 2

// <header
// class="w-full h-96 bg-[url('https://www.kindacode.com/wp-content/uploads/2022/06/hero-image-example.jpeg')] bg-cover bg-center flex justify-center items-center">
// <div class="flex flex-col justify-center items-center">
//     <h1 class=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
//     <span class="text-amber-500">KINDACODE.COM</span>
//     </h1>
//     <p class="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like
//         that</p>
//     <a class="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
//         href="#">Get Started</a>
// </div>
// </header>
// <div class="container p-20">
// <h1 class="text-4xl">Other Content</h1>
// </div>
