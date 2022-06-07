import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <main className='flex flex-col lg:flex-row h-full gap-4'>
      <Navbar/>
      <section className='container mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis in delectus asperiores rem tenetur. Reiciendis eveniet eos optio soluta fugit ab eligendi saepe! Fugiat at veniam sunt, quisquam corporis porro.
      </section>
    </main>
  )
}

export default Home