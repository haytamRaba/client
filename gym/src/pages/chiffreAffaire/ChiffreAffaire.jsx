import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { members } from "../members/Members";
import "./ChiffreAffaire.css";
const ChiffreAffaire = () =>{
    
    return(
        
        <div >
            <Navbar/>
            <div className="main-container">
             <h4 className="title">members list</h4>
            <table>
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
            </div>
            <Footer/>
        </div>
       

    );
}
export default ChiffreAffaire;