//Read page which show full article
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getarticles } from '../data/Data'
import './readpage.css'
import Comments from '../comments/Comments'

//Current user which i send from Read parent componet based on which user can reply or comment
const Readpage = ({ CurrentUserid }) => {
  const parms = useParams()

  //This is id on which bases i get data of particluar article which i click on read more part
  const Id = parms

  //This is the main state which handel comment and reply and articles which i recieve from promisebased function
  const [data, setdata] = useState('')
  const Data = Array.from(data)

  //filter the particular article i click
  const fill = Data.filter((data) => {
    return data.id === Id.id
  })

  //get the data from getarticle function //dummy data
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
      <div className="read_container">
        <div className="img_div">
          <img
            src={fill.map((item) => {
              return item.img
            })}
            alt="image not found"
            className="read_card_image"
          />
        </div>

        <div className="read_card_heading">
          {fill.map((item) => {
            return item.headline
          })}
        </div>
        <div className="read_card_heading_details">
          <span className="read_details">
            {fill.map((item) => {
              return item.name + ' :' + item.date
            })}
          </span>
        </div>
        <div className="read_article_data">
          {fill.map((item) => {
            return item.data
          })}
        </div>

        {/* Comments section render the list of comments */}
        <Comments
          data={data}
          CurrentUserid={CurrentUserid}
          comment={data}
          setcomment={setdata}
        />
      </div>
    </>
  )
}

export default Readpage
