import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md space-y-3">
            <h1 className="text-5xl font-black">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="">The page you're looking for doesn't exist.</p>
            <Link href="/" className="btn btn-md btn-outline hover:btn-neutral">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound