//comment part
import React from 'react'
import Avatar from 'react-avatar'
import './comments.css'
import Textarea from './Textarea'
const Comment = ({
  data,
  replies,
  CurrentUserid,
  deletecomment,
  replycomment,
  setreplycomment,
  parentId = null,
  textdata,
}) => {
  //for make cheak if currentuser is present gave boolen true on which based i check that user can reply or delete
  const Reply = Boolean(CurrentUserid)
  const deleted = Boolean(CurrentUserid)

  const replyis =
    replycomment &&
    replycomment.type === 'replying' &&
    replycomment.id === data.id

  const replyid = parentId ? parentId : data.id

  const date = new Date(data.date).toLocaleDateString()

  return (
    <>
      <div className="Avatarcon">
        <Avatar name={data.name} size="40px" round="25px" />
        <span style={{ fontSize: '17px', fontWeight: 'lighter' }}>
          {' '}
          {data.name}
        </span>
        <span style={{ fontSize: '17px', fontWeight: 'lighter' }}>
          {' '}
          : {date}
        </span>

        <div className="comment_div">{data.body}</div>
        {/* function for reply */}
        {Reply && (
          <span
            className="action"
            id="action1"
            onClick={() => {
              setreplycomment({ id: data.id, type: 'replying' })
            }}
          >
            reply
          </span>
        )}
        {/* To delete comment i make onclick event on delete which delete the comment*/}
        {deleted && (
          <span
            className="action"
            onClick={() => {
              deletecomment(data.id)
            }}
          >
            delete
          </span>
        )}
      </div>
      {/*text box for write comment and have button and genrate every time i click on reply comment*/}
      {replyis && (
        <Textarea
          submitlabel="Reply"
          textdata={(text) => textdata(text, replyid)}
        />
      )}

      {/*This part show the reply on the comment*/}

      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              data={reply}
              key={reply.id}
              replies={[]}
              CurrentUserid={CurrentUserid}
              deletecomment={deletecomment}
              parentId={data.id}
              textdata={textdata}
              replycomment={replycomment}
              setreplycomment={setreplycomment}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Comment
