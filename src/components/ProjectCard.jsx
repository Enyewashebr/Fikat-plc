const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">

      <img
        src={project.image}
        alt={project.title}
        className="
          h-72
          w-full
          object-cover
          hover:scale-105
          transition
        "
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-500 mt-2">
          {project.location}
        </p>

      </div>

    </div>
  );
};

export default ProjectCard;
