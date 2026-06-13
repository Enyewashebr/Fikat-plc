import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductCategories from '../components/ProductCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import Services from '../components/Services'
import GalleryPreview from '../components/GalleryPreview'
import Partners from '../components/Partners'
import ProjectCard from '../components/ProjectCard'


const Home = () => {
  return (
    <MainLayout >
      <Hero />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProducts />
      <ProjectCard />
      <Partners />
      <Services />
      <GalleryPreview />
      
    </MainLayout>
  )
}

export default Home

