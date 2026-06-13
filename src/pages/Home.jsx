import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductCategories from '../components/ProductCategories'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
  return (
    <MainLayout >
        {/* <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">
          Premium Construction Materials
        </h1>

        <p className="mt-4 text-lg">
          Granite, Ceramic, Marble and Finishing Materials
        </p>

        <div className="mt-6 flex gap-4">
          <button>View Products</button>
          <button>Request Quote</button>
        </div>
      </section> */}
      <Hero />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProducts />
    </MainLayout>
  )
}

export default Home

