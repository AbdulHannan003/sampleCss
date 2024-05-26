import React from 'react';

const Provide = () => {
  const DesServices = [
    { title: "Web Design UI / UX", details: "Craft visually appealing and user-friendly interfaces for websites." },
    { title: "Application Design", details: "Design intuitive and efficient user interfaces for various applications." },
    { title: "Logo", details: "Create unique and memorable logos that represent your brand identity." },
    { title: "Print Design", details: "Design printed materials such as brochures, flyers, and posters with creative flair." },
  ];
  const DevServices = [
    { title: "Web Development", details: "Build responsive and dynamic websites using modern web technologies." },
    { title: "Mobile App Development", details: "Develop native or cross-platform mobile applications for iOS and Android devices." },
    { title: "E-Commerce", details: "Create robust and secure e-commerce platforms for online businesses." },
    { title: "Software Development", details: "Develop custom software solutions tailored to your specific business needs." },
    { title: "Functional Scripting", details: "Automate tasks and streamline workflows with efficient scripting solutions." },
    { title: "Maintenance", details: "Provide ongoing support and maintenance to ensure the smooth operation of your digital products." }
  ];

  return (
    <div className='bg-gradient-to-tl from-[#662e9b] to-[#982aff]'>
      <div className='max-w-[1240px] px-4 py-10 mx-auto'>
        <h1 className='text-lg md:text-3xl py-4 text-left text-white-100 font-bold'>Our Services</h1>
        <div className='w-full gap-8 md:flex'>
          <div className='w-12/12 py-3 md:mx-8'>
            <h2 className='text-lg md:text-3xl text-white-100 font-semibold'>Develop :</h2>
            <div className='border-2 w-1/12 border-black my-1'></div>
            <ul className='mt-2 px-8'>
              {DevServices.map((service, index) => (
                <li key={index} className='py-1 text-white-100'>
                  <h3 className='font-semibold text-white-100'>{service.title}</h3>
                  <p className='text-sm text-white-100'>{service.details}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-12/12 py-3 md:mx-8'>
            <h2 className='text-lg md:text-3xl text-white-100 font-semibold'>Design :</h2>
            <div className='border-2 w-1/12 border-black my-1'></div>
            <ul className='mt-2 px-8'>
              {DesServices.map((service, index) => (
                <li key={index} className='py-1 text-white-100'>
                  <h3 className='font-semibold'>{service.title}</h3>
                  <p className='text-sm'>{service.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full md:w-3/4 col-span-1 md:rounded-none self-center'></div>
      </div>
    </div>
  );
};

export default Provide;
