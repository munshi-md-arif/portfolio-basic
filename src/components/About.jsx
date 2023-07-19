import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-7">
          I am a MERN stack developer with a strong focus on backend development using Node.js. Currently working as a Junior Software Developer at Kestone Global, I am known for my strong sense of responsibility and punctuality in delivering high-quality software solutions.

          Throughout my career, I have gained valuable experience in building backends for the Meta-commerce platform and a virtual event platform. I take pride in my ability to analyze complex problems and develop logical and efficient solutions. 

        </p>

        <br />

        {/* <p className="text-xl">
          I am always eager to collaborate with cross-functional teams to deliver high-quality solutions that meet business objectives. With a strong focus on continuous learning, I stay updated with the latest industry trends and technologies to enhance my skills and contribute to cutting-edge projects.

          Feel free to connect with me for opportunities, collaborations, or to discuss anything related to software development. Let's leverage logical thinking and reasoning analysis to drive innovation and excellence in our work.
        </p> */}
      </div>
    </div>
  );
};

export default About;

