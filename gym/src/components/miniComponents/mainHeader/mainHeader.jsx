import React from 'react'
import "./mainHeader.css";

const stats = [
  { title: "Total Members", value: 245 },
  { title: "Active Memberships", value: 198 },
  { title: "Expiring Soon", value: 12 },
  { title: "Today's Check-ins", value: 57 },
];

const mainHeader = () => {


  return (
   <>
    <h1 className="main-title">Gym Admin Dashboard</h1>

      <div className="stats-container">
        {
        stats.map(
            (stat, index) 
            => 
                (
          <div className="card" key={index}>
            
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        )
    )
        }
      </div>


        {/* <div >
            <div className="card" >
            <h3>{stats[0].title}</h3>
            <p>{stats[0].value}</p>
          </div> */}

        </div>




   </>
  )
}

export default mainHeader