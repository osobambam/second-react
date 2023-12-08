import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const elements = data.map((x) =>{
    return (<Card 
      key={x.id}
      image={x.imageUrl}
      location={x.location}
      googlemaps={x.googleMapsUrl}
      title = {x.title}
      start = {x.startDate}
      end = {x.endDate}
      desc = {x.description}
    />)
  })
  return(
    <div>
      <Navbar />
      {elements}
    </div>
  )
}

export default App
