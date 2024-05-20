import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/ui/PageHeader'
import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react';
import React from 'react';


let Address = [
  {
    icon: <RiMapPinLine  />,
    title: "122, King street",
  },
  {
    icon: <RiPhoneLine  />,
    title: "+1 (000) 000 00 000 ",
  },
  {
    icon: <RiMailLine  />,
    title: "Support@kamerlark.net",
  },
];


const Contact = () => {
  return (
    <>
    <Navbar/>
    <PageHeader title='Contact Us' />
    <Container>
      <div className='my-24 p-8 grid grid-cols-12 border rounded-md shadow'>
        <div className='col-span-6'>
          <h2 className='text-2xl'>Send Message</h2>
          <form className='flex flex-col gap-5 mt-6 w-full'>
            <label className='w-full flex-col flex'>
              <span className='text-sm text-gray-500'>Name</span>
              <input className='w-10/12 bg-gray-200 outline-none text-black px-3 py-2 rounded-md shadow' />
            </label>
            <label className='w-full flex-col flex'>
              <span className='text-sm text-gray-500'>Email</span>
              <input className='w-10/12 bg-gray-200 outline-none text-black px-3 py-2 rounded-md shadow' />
            </label>
            <label className='w-full flex-col flex'>
              <span className='text-sm text-gray-500'>Title</span>
              <input className='w-10/12 bg-gray-200 outline-none text-black px-3 py-2 rounded-md shadow' />
            </label>
            <label className='w-full flex-col flex'>
              <span className='text-sm text-gray-500'>Message</span>
              <textarea rows={8} className='w-10/12 bg-gray-200 outline-none text-black px-3 py-2 rounded-md shadow' />
            </label>
            <button className="px-5 py-2 text-white font-bold mt-4 rounded bg-blue-500 self-start">
              Submit
            </button>
          </form>
        </div>
        <div className='col-span-6 border-l px-8'>
        <h2 className='text-2xl'>Contact Details</h2>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae asperiores autem fuga, voluptatibus, culpa quo nesciunt dolore, eligendi repellat ratione consectetur eveniet. Tempora non ea rerum quaerat accusamus delectus?</p>
        <div className="flex flex-col mt-8 gap-5">
                  {Address?.map((item, index) => (
                    <div
                      className="flex flex-row gap-3 items-center"
                      key={index}
                    >
                      {item.icon}
                      <span className="">{item.title}</span>
                    </div>
                  ))}
                </div>
        </div>
      </div>
    </Container>
    <Footer/>
    </>
  )
}

export default Contact