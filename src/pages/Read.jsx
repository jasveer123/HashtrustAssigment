//This is a secound page which show full articles and nested comments section

import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Readpage from '../components/Readpage/Readpage'

const Read = () => {
  return (
    <>
      <NavBar />

      {/*here i dont implement the login part so i gave a current user id depend on which the user make comments and reply on the article*/}
      <Readpage CurrentUserid="1" />
    </>
  )
}

export default Read
