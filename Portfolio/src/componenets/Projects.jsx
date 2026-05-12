import React from "react";
import portfolioImg from "../assets/portfolio.png"
import weatherApp from "../assets/weatherApp.png"
import MovieSearch from "../assets/MovieSearch.png"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS showcasing projects , my education details , expericence and contact me with multiple ways.",
    image: portfolioImg,
    link: "https://portfolio-1-7tv1.onrender.com",
  },
  {
    title: "WeatherApp",
    description:
      "A weather application built using WeatherAPI that allows users to enter a city name and instantly view real-time weather details such as temperature, humidity, and conditions.",
    image: weatherApp,
    link: "https://weatherapplication-pasp.onrender.com/",
  },
  {
    title: "MovieSearchAPP",
    description:
      "A simple and interactive movie search application that allows users to find detailed information about movies using an external API",
    image: MovieSearch,
    link: "https://moviesearchapp-3fak.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-[#00684A] to-green-400  border-2 border-white  py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl font-bold p-4 text-white ">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-black  max-w-2xl mx-auto bg-green-100 rounded">
            Here are some of my recent works demonstrating my front-end and
            full-stack development skills.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-[#001E2B]/60 backdrop-blur-lg border-2 shadow-lg border-white/20 rounded-sm">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" border-1 rounded-xl bg-[#DCFCE7] p-2 m-4 overflow-hidden z-1 "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-center text-[#001E2B] bg-white border-2 border-black rounded-md "
              />
              <div className="p-6 ">
                <h3 className="text-xl font-semibold  text-[#001E2B] mb-2">
                  {project.title}
                </h3>
                <p className=" text-[#001E2B] mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-[#001E2B] text-white rounded-lg hover:bg-[#05704E] hover:text-[#001E2B] transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
