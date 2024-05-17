import React from 'react'

const Provide = () => {
  const DesServices = [
    "Web Design UI / UX",
    "Application Design",
    "Logo",
    "Print Design",
  ]
  const DevServices = [
    "Web Development",
    "Mobile App Development",
    "E-Commerce",
    "Software Development",
    "Functional Scripting",
    "Maintainance"
  ]
  return (
    <div className='max-w-[1240px] px-4 py-10 mx-auto'>
      <h1 className='text-lg md:text-3xl py-4 text-left text-orange-500'>Our Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:py-0 pb-12'>
        <div className=' md:w-3/4 col-span-1 flex gap-8 md:flex'>
          <div className='w-2/4 p-4 md:mx-8 hover:scale-110 hover:shadow-2xl duration-300 '>
            <h1 className='text-lg md:text-3xl font-semibold '>Develop :</h1>
            <div className='border-2 w-2/12 border-orange-500 my-1'></div>
            {DevServices.map((service) => (
              <ul className='mt-2 px-5'>
                <li>{service}</li>
              </ul>
            ))}
          </div>
          <div className='w-2/4 p-4 md:mx-8 hover:scale-110 hover:shadow-2xl duration-300 '>
            <h1 className='text-lg md:text-3xl font-semibold '>Design :</h1>
            <div className='border-2 w-2/12 border-orange-500 my-1'></div>
            {DesServices.map((service) => (
              <ul className='mt-2 px-5'>
                <li>{service}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className='w-full md:w-3/4 col-span-1 md:rounded-none '>
          <img src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-3xl object-center object-cover' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Provide