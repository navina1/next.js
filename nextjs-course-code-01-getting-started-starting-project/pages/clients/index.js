import Link from 'next/link'
import React from 'react'

function ClientsPage() {
    const clients = [
        { id: "Max", name: "Maxmillian" },
        { id:"Manu" , name: "Manuel"}
    ]
  return (
      <div>
          <h1>The ClientsPage</h1>
          <ul>
              {clients.map((client) => (
                  <li key={client.id}>
                      <Link href={`clients/${client.id}`}>{client.name }</Link>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default ClientsPage