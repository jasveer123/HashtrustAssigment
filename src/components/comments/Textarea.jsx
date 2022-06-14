import React, { useState } from 'react'
import './comments.css'

const Textarea = (props) => {
  const [value, setvalue] = useState('')
  const submithandler = (e) => {
    e.preventDefault()
    props.textdata(value)
    setvalue('')
  }
  return (
    <>
      <form onSubmit={submithandler}>
        <div className="text-div">
          <textarea
            className="text-area"
            onChange={(e) => {
              setvalue(e.target.value)
            }}
            placeholder=" Type comments ....."
            value={value}
          />
        </div>

        <div className="btn-div">
          <button className="comment-btn" type="submit">
            comment
          </button>
        </div>
      </form>
    </>
  )
}

export default Textarea
