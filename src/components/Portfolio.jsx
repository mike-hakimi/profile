import React from 'react';
import HalalStore from '../Assets/HalalStore.png';
import TaxServices from '../Assets/TaxServices.png';
import WindowCompany from '../Assets/WindowCompany.png';
import ZenithFoodMart from '../Assets/ZenithFoodMart.png';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: HalalStore
    },
    {
      id: 2,
      src: TaxServices
    },
    {
      id: 3,
      src: WindowCompany
    },
    {
      id: 4,
      src: ZenithFoodMart
    },
  ]
  return (
    <div name="portfolio" 
    className='bg-gradient-to-b from-gray-400 to-black w-full
     text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Portfolio</p>
        <p className='py-6'>Check out some of my work!</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        
      {portfolios.map(({ id, src }) => (
        <div key={id} className='shadow-md shadow-gray-300 rounded-lg'>
        <img src={ src } alt=''
        className='rounded-md duration-200 hover:scale-105' />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
        </div>
      </div>
        ))}
        
     
      </div>
      </div>
    </div>
  )
}

export default Portfolio
