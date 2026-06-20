import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const ProjectsPreview = () => {
  // Show only the first 3 projects
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#E56D2E] mb-4">
          Our Projects
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore some of the projects supplied with our premium materials.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-[#E56D2E] hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsPreview;
