import React from "react";


const Home = () => {
  return (
    <>
    <div className="bg-[#EBC59F] w-screen h-screen m-0 p-20 flex">
    <div className=" w-[50vw] h-full flex-col justify-center p-20 ">
    <h1 className="text-white font-serif text-7xl font-bold leading-[90px] " > Struggling with mental health lately?</h1>
    <h3 className="text-white font-serif text-4xl font-light pt-4 font-bold "> we've got you covered! </h3>
    </div>

      <div classname="w-[50vw] h-full flex justify-center">
        <img src="favicon.ico" className=" m-10 h-full blur-[1.8px] rounded-[50%]"/>
        <h1 className=" w-[40%] h-8 text-xl text-center absolute z-10 top-[55%] right-[5%] text-7xl leading-5 text-[#E6826E] font-serif font-extrabold bg-red-100 ">BETTERYOU</h1>
      </div> 
    </div>
      <div className="w-screen h-[120%] m-0 p-20 flex bg-[#DFA587]"><img src="images\backgound2.jpg" className=" w-full h-full object-cover blur-sm m-0"/>
      <p className="absolute z-10 font-serif font-bold text-justify text-3xl w-[80%] m-20 my-[12vw] text-[#9b6b55] bg-red-100 bg-opacity-50 leading-9"> Welcome to BetterYou! <br/> <br/>
      At BetterYou, we are committed to providing reliable and accessible information on mental health. Our website offers a wealth of articles on various mental health conditions, practical advice, personal stories, and expert insights. Whether you're seeking help for yourself or supporting a loved one, our goal is to empower you with the knowledge and resources you need to navigate mental health challenges and improve your well-being. Explore our site and join a supportive community dedicated to mental wellness.</p>
      </div>

      <div className="w-screen h-screen m-0 p-20 flex bg-[#E3C8B6]">
      <img src="images\backgound.jpg" className=" w-full h-full object-cover blur-sm m-0"/>
      <p className="absolute z-10 font-serif font-bold text-justify text-3xl w-[80%] m-20 my-[12vw] text-[#af8260] bg-red-100 bg-opacity-50 leading-9">
      Why BetterYou?<br/> <br/>
      Navigating mental health can be daunting, but you don’t have to do it alone. MindWellness is here to provide a compassionate and knowledgeable guide on your journey to mental well-being. Our goal is to empower you with the information and support you need to live a healthier, more fulfilling life.

      </p>
        
      </div>  
    
      <div className="w-screen h-[150vh] m-0 p-20 flex bg-[#a97e61d7]">
      <img src="images\footer.jpg" className=" w-full h-full object-cover blur-[5px] m-0"/>
      <p className="absolute z-10 font-serif font-medium text-justify text-3xl w-[80%] m-10 my-[12vh] text-[#1f160fbf] bg-brown bg-opacity-50 leading-9">
      Start Your Journey!<br/> <br/>
      We invite you to explore our site, learn more about mental health, and take the first step toward a brighter tomorrow. Whether you're looking for information, support, or a sense of community, MindWellness is here to help. Welcome to a place where your mental health matters.
      </p>

      {/* <h1 className="absolute z-10 font-serif font-bold text-justify text-3xl w-[80%]  text-[#020202bf] bg-white leading-9 my-[50vh] mx-20 text-right "> Connect With Us!</h1> */}

      

<footer className="bg-white rounded-lg shadow  m-4 absolute z-5 mt-[80vh] mx-[15%] w-[60%]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 bg-[#997253df]">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="images\mindplant.jpg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-900">BetterYou</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-red-900 sm:mb-0 dark:text-red-300 gap-5">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-red-900 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">BetterYou™</a>. All Rights Reserved.</span>
    </div>
</footer>


        
      </div> 

    </>
  );
};

export default Home;
