import React from 'react'
import Header from './header';

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-600">
        <Header />
        Home Page
    </div>
  )
}

export default HomePage