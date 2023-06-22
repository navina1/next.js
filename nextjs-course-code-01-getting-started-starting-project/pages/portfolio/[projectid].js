import React from 'react'
import { useRouter } from 'next/router'
function PortfolioProject() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
  return (
    <div>The Portfolio Project Page</div>
  )
}

export default PortfolioProject