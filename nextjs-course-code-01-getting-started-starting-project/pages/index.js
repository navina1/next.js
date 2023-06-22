import React from 'react'
import Link from 'next/link'
import PortfolioPage from './portfolio'
function HomePage() {
  return (
      <div>
          <h1>
          The HomePage
          </h1>
            <Link href="/portfolio">Portfolio</Link>
      </div>
  )
}

export default HomePage