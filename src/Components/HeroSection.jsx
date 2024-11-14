import React from 'react';

const HeroSection = () => {
  return (
    <>
    <section className="bg-[url('/a1.png')] relative bg-cover bg-center bg-no-repeat  text-white w-[1440px] h-[1024px]"  >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[rgba(30,30,30,0.54)] to-[#1E1E1E]" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 ">
        <nav className="absolute top-0 w-full flex justify-between items-center p-4 md:p-8">
          <ul className="flex space-x-4 text-sm md:text-lg">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About</li>
            <li className="hover:underline">Course</li>
          </ul>
          <h1 className="text-xl md:text-2xl font-bold">Smart Academy</h1>
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-sm md:text-base">
            Explore Course
          </button>
        </nav>
        <div className="absolute left-10 mt-20 md:mt-32 lg:mt-40">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Achieve your future <br /> With Smart <br/> Academy
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique sem ut lacinia pellentesque. Donec in nulla faucibus, tincidunt velit vel, ultricies dolor.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full text-sm md:text-base lg:text-lg">
            Explore Course
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;