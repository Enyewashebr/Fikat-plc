import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrent(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">

      {/* Image Slider */}
      <div className="relative overflow-hidden">

        <img
          src={project.images[current]}
          alt={project.title}
          className="h-72 w-full object-cover transition duration-500"
        />

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center"
        >
          ❯
        </button>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold mb-2">
          {project.title}
        </h3>

        <p className="text-[#E56D2E] font-medium mb-2">
          {project.location}
        </p>

        <p className="text-sm text-gray-500 mb-3">
          {project.category} • {project.year}
        </p>

        <p className="text-gray-600 leading-7">
          {project.description}
        </p>

      </div>

    </div>
  );
};

export default ProjectCard;
