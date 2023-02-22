import React from 'react'
import Header from './header.tsx';

function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-600">
        <Header />
        <h1 className="">Post your poetry. Share it with the world</h1>
    </div>
  )
}

export default About