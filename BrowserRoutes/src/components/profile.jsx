import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const{pid}=useParams();
  return (
    <div>
      this page shows user Profile
      my profile id: {pid}
    </div>
  )
}

export default Profile
