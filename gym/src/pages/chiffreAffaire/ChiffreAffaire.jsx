import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { members } from "../members/Members";
import "./ChiffreAffaire.css";
const ChiffreAffaire = () =>{
    let total=0;
    members.forEach(m => {
        if(m.membershipType==="Gold") total += 400;
        if(m.membershipType==="Silver") total += 300;
        if(m.membershipType==="Bronze") total += 200;
    });

    return(
        
        <div >
            <Navbar/>
            <div className="main-container">
             <h4 className="title">members list</h4>
            <table className="members-table">
                <tr className='table-header'>   
                    <th>Full Name</th>
                    <th>Membership Type</th>    
                </tr>
                  {members.map((m)=>(
                    <tr>  
                        <td>{m.firstName} {m.lastName}</td>
                        <td>{m.membershipType}</td>     
                    </tr>
                  ))}
            </table>
            <hr />
            <div className="prix-container">
                <h4 className="Gold">Gold = 400 DH</h4>
                <h4 className="Silver">Silver = 300 DH</h4>
                <h4 className="Bronze">Bronze = 200 DH</h4>
            </div>
            <div className="chiffreaffaire-container">
                <h3>Chiffre d'affaire :{total}</h3>
            </div>
            </div>
            <Footer/>
        </div>
       

    );
}
export default ChiffreAffaire;