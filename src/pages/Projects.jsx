import React from 'react'
import MainLayout from '../layouts/MainLayout'

import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <MainLayout>
 
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Our Projects
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore selected projects supplied with our materials.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  

    </MainLayout>
  )
}

export default Projects

