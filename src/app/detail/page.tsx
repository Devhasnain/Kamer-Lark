import Container from '@/components/Container'
import PhotoGallery from '@/components/Details/PhotoGallery'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react';

let images = [
  'https://images.unsplash.com/photo-1555992457-b8fefdd09069?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const AccommodationDetail = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <div className='pt-24 pb-14'>
        <div className='flex flex-row items-center justify-between'>
          <div className=' flex flex-row items-center gap-3'>
            <Link href={"/"} className='text-blue-500 text-sm'>United Kindom</Link>
            <span>/</span>
            <Link href={"/"} className='text-blue-500 text-sm' >England</Link>
          </div>
          <div className='flex flex-row items-center gap-8 text-sm'>
            <button className='bg-transparent outline-none text-blue-500'>
              Share
            </button>
            <button className='bg-transparent outline-none text-blue-500'>
              Shortlist
            </button>
          </div>
        </div>

        <PhotoGallery photos={images}/>
      </div>
    </Container>
    <Footer/>
    </>
  )
}

export default AccommodationDetail