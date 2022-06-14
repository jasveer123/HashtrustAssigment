//comments section
import React, { useState } from 'react'
import { createComment, deleteComment } from '../data/Data'
import './comments.css'
import Comment from './Comment'
import Textarea from './Textarea'
const Comments = (props) => {
  //state for reply commnets
  const [replycomment, setreplycomment] = useState('')
  const Data = Array.from(props.data)

  //If parent id is null make it parent and place up
  const fill = Data.filter((data) => {
    return data.parentId == null
  })

  //render replies on the parent which have id parentid equal to id
  const getReplies = (commentId) =>
    Data.filter((Comment) => Comment.parentId === commentId)

  // promise based function to delete comment
  const deletecomment = (Id) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteComment().then(() => {
        const updatedComments = props.comment.filter((data) => data.id !== Id)
        props.setcomment(updatedComments)
      })
    }
  }

  // set comments and Add to the setcomment state
  const textdata = (text, parentId) => {
    createComment(text, parentId).then((comment) => {
      props.setcomment([comment, ...props.comment])
    })
  }
  return (
    <>
      <div className="uppar_comment_container">
        <div className="comment_container">
          <h3>comments:</h3>
        </div>
        <Textarea textdata={textdata} />
        <div className="Avatar">
          {fill.map((item) => {
            return (
              <Comment
                data={item}
                key={item.id}
                replies={getReplies(item.id)}
                CurrentUserid={props.CurrentUserid}
                deletecomment={deletecomment}
                replycomment={replycomment}
                setreplycomment={setreplycomment}
                textdata={textdata}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Comments
