'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftLine, RiArrowRightLine, RiCloseLine } from '@remixicon/react';

const PhotoGallery: FC<{ photos: any }> = ({ photos }) => {
  const [currenPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    setCurrentPhotoIndex(prevIndex =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex(prevIndex =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const maximumVisiblePhotos = 4;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;


  useEffect(() => {
    if (showModal) {
      window?.document?.body?.classList.add("h-screen");
      window?.document?.body?.classList.add("overflow-y-hidden");
    } else {
      window?.document?.body?.classList.remove("h-screen");
      window?.document?.body?.classList.remove("overflow-y-hidden");
    }

    return () => {};
  }, [showModal]);

  return (
      <div className='relative mt-5 flex flex-col gap-5'>
        <div className='h-[540px] relative rounded-2xl overflow-hidden'>
          <div className='hidden md:flex justify-center items-center w-full h-full border rounded-md overflow-hidden'>
            <Image
              src={photos[0]}
              alt={`Room Photo ${currenPhotoIndex + 1}`}
              className='object-cover img scale-animation cursor-pointer'
              width={900}
              height={900}
              onClick={openModal.bind(this, 0)}
            />
          </div>
          {/* <div className='md:hidden flex justify-center items-center w-full h-full'>
            <Image
              src={photos[currenPhotoIndex].url}
              alt={`Room Photo ${currenPhotoIndex + 1}`}
              className='img'
              width={150}
              height={150}
              onClick={openModal.bind(this, 0)}
            />
          </div> */}
        </div>
        {/* <div className='md:hidden flex justify-between items-center'>
          <div className='flex space-x-2'>
            <RiArrowLeftLine className='cursor-pointer' onClick={handlePrevious} />
            <RiArrowRightLine className='cursor-pointer' onClick={handleNext} />
          </div>
          <span>
            {currenPhotoIndex + 1} / {photos.length}
          </span>
        </div> */}

        <div className='hidden md:grid grid-cols-3 h-full gap-5'>
          {displayPhotos?.map((photo:any, index:number) => (
            <div
              key={index}
              className='cursor-pointer h-64 rounded-2xl overflow-hidden'
            >
              <Image
                width={400}
                height={400}
                src={photo}
                alt={`Room Photo ${index + 2}`}
                className='img scale-animation'
              />
            </div>
          ))}
          {remainingPhotosCount > 0 && (
            <div
              className='cursor-pointer relative h-64 rounded-2xl overflow-hidden'
              onClick={openModal.bind(this, maximumVisiblePhotos)}
            >
              <Image
                width={400}
                height={400}
                src={photos[maximumVisiblePhotos - 1]}
                alt={`Room Photo ${maximumVisiblePhotos}`}
                className='img object-cover'
              />
              <div className='absolute cursor-pointer text-white inset-0 flex justify-center bg-[rgba(0,0,0,0.5)] items-center text-2xl'>
                + {remainingPhotosCount}
              </div>
            </div>
          )}
        </div>

        {showModal && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]'>
            <div className='h-[100vh] relative'>
              <Image
                src={photos[currenPhotoIndex]}
                alt={`Room Photo ${currenPhotoIndex + 1}`}
                width={800}
                height={800}
                className='img'
              />
              <div className='flex justify-between items-center py-3'>
                <div className='flex space-x-2 items-center text-white'>
                  <RiArrowLeftLine
                    className='cursor-pointer'
                    onClick={handlePrevious}
                  />
                  <RiArrowRightLine
                    className='cursor-pointer'
                    onClick={handleNext}
                  />
                </div>
                <span className='text-white text-sm'>
                  {currenPhotoIndex + 1} / {photos.length}
                </span>
              </div>
              <button
                className='absolute top-2 right-2 text-white text-lg'
                onClick={closeModal}
              >
                <RiCloseLine className='font-medium text-2xl text-tertiary-dark' />
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default PhotoGallery;