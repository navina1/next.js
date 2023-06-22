import React from 'react'
import { useRouter } from 'next/router'
function ClientProjectsPage() {
    const Router = useRouter();
    const loadProjectHandler = () => {
        Router.push(`/clients/max/projecta`)
    }
  return (
      <div>
          <h1>The ClientProjectsPage</h1>
          <button onClick={loadProjectHandler}>Load Project A</button>
      </div>
  )
}

export default ClientProjectsPage