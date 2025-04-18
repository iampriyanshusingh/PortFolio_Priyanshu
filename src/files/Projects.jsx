import React from "react";
import netflixGPT from "../../public/assets/images/NetflixGPT.png";
import spotify from "../../public/assets/images/Spotify.png";
import covid19Detection from "../../public/assets/images/Covid19.png";
import checkCircleIcon from "../../public/assets/icons/check-circle.svg";
import arrowUpRightIcon from "../../public/assets/icons/arrow-up-right-project.svg";
import Card from "../components/Card";
import imgEnhancer from "../../public/assets/images/ImgEnhancerPhoto.png";
const portfolioProjects = [
  {
    company: "Netflix",
    year: "2025",
    title: "Netflix with GPT in Built",
    results: [
      { title: "Added Built in AI Model for Movie Suggetion" },
      { title: "Multiple Language Support" },
      { title: "Responsive & Optimized for mobile" },
    ],
    link: "https://netflix-gpt-five-sandy.vercel.app/",
    image: netflixGPT,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "AI Image Enhancer",
    results: [
      { title: "Added Built in API for Image Enhancer" },,
      { title: "Easy to use" },
      { title: "Responsive & Optimized for mobile" },
    ],
    link: "https://image-enhancer-kohl.vercel.app/",
    image: imgEnhancer ,
  },
  {
    company: "Project Exhibition VIT",
    year: "2024",
    title: "Covid 19, Pneumonia Detection using AI",
    results: [
      {
        title:
          "Intelligent X-ray Analyzer for COVID-19 and Pneumonia Detection",
      },
      { title: "Web-Based Diagnostic System for Lung Infections" },
      {
        title: "Enhanced Customer Experience with Built-in Live Camera Support",
      },
    ],
    link: "https://github.com/iampriyanshusingh/COVID-19_Detection_System_Using_CNN_Deep_Learning_and_Flask.git",
    image: covid19Detection,
  },
  {
    company: "Spotify",
    year: "2023",
    title: "Music Player using HTML,CSS",
    results: [
      {
        title:
          "A clean and stylish Spotify clone, focusing on an elegant music player interface",
      },
      { title: "Responsive design" },
      { title: "highlighting a user-friendly design and layout." },
    ],
    link: "https://github.com/iampriyanshusingh/spotify-clone.git",
    image: spotify,
  },
];

const Projects = () => {
  return (
    <section id="projects"
    className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center text-lg ">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
                top: `calc(64px + ${projectIndex * 50}px`,
              }} 
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm/50 md:text-base/50 text-white/50">
          
                        <img
                          src={checkCircleIcon}
                          className="size-5 md:size-6 opacity-50"
                        ></img>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span className="font-bold">Visit Live Site</span>
                      <img src={arrowUpRightIcon} className="size-4"></img>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-xl -mb-4 md:-mb-0 md:rounded-t-lg md:rounded-b-none lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  ></img>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
