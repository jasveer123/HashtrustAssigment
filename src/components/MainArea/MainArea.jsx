//This is the main area of home page the card portion lies there

import React, { useEffect, useState } from 'react'
import Cards from '../cards/Cards'
import './MainArea.css'
import { getarticles } from '../data/Data'

const MainArea = () => {
  const [data, setdata] = useState('')
  const Data = Array.from(data)

  //I dont implement backend but make promise based dummy data to get the articles
  useEffect(() => {
    getarticles()
      .then((data) => {
        setdata(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className="mainarea_container">
        <div className="main_area_heading"> Discover the best of the web</div>
        <div className="main_area_subheading">Today’s essential reads</div>
        <div className="Article_container">
          {/*showing Article cards*/}
          {Data.map((data, i) => {
            return (
              <div className="Article_side_cards" key={i}>
                <Cards data={data} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MainArea
