import React from 'react'
import Header from './header.tsx';
import Image from 'next/image';

function CreatePoem() {
  return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-600">
          <Header />
          <form className="p-6 max-w-sm mx-auto dark:bg-white rounded-xl align-items justify-items-center"> 
          <img className="m-1 h-16 w-16 rounded-full" src="/profile.jpg" alt="ChitChat Logo" />
                <input type="textarea" className="rounded dark:bg-gray-100 outline-indigo justify-center" placeholder="Title"></input>

                <textarea className="rounded dark:bg-gray-100 outline-indigo "></textarea>
          </form>
      </div>
  )
}

export default CreatePoem;