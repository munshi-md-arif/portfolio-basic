import React from "react";
import tshirtCustom from "../assets/portfolio/tshirtCustom.png";
import portfolio from "../assets/portfolio/portfolio.png";
// import placeholder from "../assets/portfolio/placeholder.png";
// import { useHistory } from 'react-router-dom';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tshirtCustom,
    },
    {
      id: 2,
      src: portfolio,
    },
    // {
    //   id: 3,
    //   src: placeholder,
    // }
    
  ];
  // const history = useHistory();

  const demoHandleClick =()=>{
    alert('Currently, the Demo feature has been disabled by Md Arif ☹️');
  }

  const handleClick = () => {
    
    // const url = `${window.location.origin}/NotFound.js`;

    // window.open(url, '_blank');
    window.open('https://www.accessdenied.com/', '_blank');
    // window.location.href = 'https://github.com/machadop1407/react-hooks-course/blob/master/src/UseEffect/EffectTutorial.js';
    console.log('clicked');
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={demoHandleClick}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={handleClick}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
