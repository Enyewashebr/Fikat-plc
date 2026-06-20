import MainLayout from "../layouts/MainLayout";
import ProjectHero from "../components/ProjectHero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <MainLayout>
      <Helmet>
  <title>
    Projects | Fikat Finishing Material Supplier PLC
  </title>

  <meta
    name="description"
    content="View residential and commercial projects completed using Fikat premium materials."
  />
</Helmet>

      {/* Hero Section */}
      <ProjectHero />
      <div className="h-2 bg-[#E56D2E]"></div>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* <div className="text-center mb-14">

            <h2 className="text-5xl font-bold text-[#E56D2E]">
  Our Projects
</h2>

<p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
  Explore a selection of residential, commercial, and interior projects
  supplied with our premium granite, marble, ceramic, porcelain, and
  construction finishing materials.
</p>

          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>
      <section className="bg-[#E56D2E] py-20 text-white">
  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-4xl font-bold">
      Looking for Premium Finishing Materials?
    </h2>

    <p className="mt-6 text-lg">
      Contact Fikat Finishing Material Supplier PLC for high-quality
      granite, marble, ceramic, porcelain, and construction finishing
      materials for your next project.
    </p>

    <a
      href="/contact"
      className="inline-block mt-8 bg-white text-[#E56D2E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
    >
      Contact Us
    </a>

  </div>
</section>

    </MainLayout>
  );
};

export default Projects;
