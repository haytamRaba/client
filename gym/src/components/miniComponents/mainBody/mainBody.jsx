import React from 'react'
import {Link} from "react-router-dom"

const mainBody = () => {
  return (
      <div className="section">
        <h2>Quick Actions</h2>
        <div className="actions">
          <Link to="/members">
          <button>Members [add,delete,update,search]</button>
          </Link>
          <button>Create Class</button>
          <button>Record Payment</button>
          <button>Assign Trainer</button>
        </div>
      </div>

  )
}

export default mainBody