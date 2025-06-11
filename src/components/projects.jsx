import eCommerce from "../assets/commerce.png";
import studyverse from "../assets/studyverse.png";
import streamer from "../assets/streamer.png";

const projects = [
  {
    name: "Real E-commerce (JUMIA)",
    link: "https://real-e-commerce-ashy.vercel.app",
    intro: "your one-stop e commerce platform",
    overview:
      "utilizing local-storage and other client-side browser api to simulate an outstanding e-commerce platform ",
    image: eCommerce,
  },

  {
    name: "Study-verse Connect",
    link: "https://study-verse-connect.vercel.app",
    intro: "A platform to help learners excel",
    overview:
      "making study easier using the cohere AI model for easy tutorials, nice and simple UI for prospective students. connect with 		other students of similar interest, and use the AI buddy as a guide",
    image: studyverse,
  },

  {
    name: "Movie Streamer",
    link: "https://promise019.github.io/movieStreamer/",
    intro: "your No.1 movie platform",
    overview:
      "utilizing the YouTube api and firebase for user data and authentication, we present an outstanding movie platform, just for you ",
    image: streamer,
  },
];

export default function Projects() {
  return (
    <div className='text-white'>
      <h1 className='font-bold text-2xl'>Projects:</h1>
      <div className='grid space-y-3 lg:grid-cols-2 lg:space-x-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-black text-white shadow p-2 rounded-lg space-y-1.5 hover:bg-gray-100 hover:p-3'
          >
            <img src={project?.image} className='rounded-lg' />
            <h2 className='font-bold text-xl'>{project.name}</h2>

            <b className='italic'>{project.intro}</b>

            <br />

            <b>Project Overview:</b>
            <br />
            <p>{project.overview}</p>

            <a href={project.link}>
              <button className='bg-gradient-to-br from-purple-500 to-red-400 text-white rounded-lg font-bold p-1 relative w-[15%] hover:bg-green-800'>
                view
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
