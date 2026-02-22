import React from 'react'
import "./mainHeader.css";
import { totalMembers } from '../../../pages/members/Members.jsx';

const stats = [
  { title: "Total Members", value: totalMembers },
  { title: "Active Memberships", value: 198 },
  { title: "Expiring Soon", value: 12 },
  { title: "Revenue this month", value: 57 },
  { title: "Recent activity log", value: 34 },
];

const mainHeader = () => {


  return (
   <>
   <div >
    <h1 className="main-title">Gym Admin Dashboard</h1>

      <div className="stats-container">
        {stats.map( (stat, index) => (
          <div className="card" key={index}>

            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>))}

      </div>
</div>
   </>
  )
}

export default mainHeader