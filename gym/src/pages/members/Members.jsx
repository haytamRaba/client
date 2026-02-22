import React,{useState} from 'react'
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from '../../components/footer/Footer.jsx';
import "./Members.css";

const gymMembers = [
    { id: 1, firstName: "Haytam", lastName: "Raba", membershipType: "Gold", email: "Haytamraba@gmail.com" , phoneNumber:"0612345678", joinDate: "2026-01-15" },
    { id: 2, firstName: "Yassine", lastName: "Jabbouk", membershipType: "Silver", email: "Yassinejabbouk@gmail.com"  , phoneNumber:"0687654321", joinDate: "2026-02-20" },
    { id: 3, firstName: "Aymen", lastName: "Rafiky", membershipType: "Bronze", email: "Aymenrafiky@gmail.com" , phoneNumber:"0698765432", joinDate: "2026-03-10" },
    { id: 4, firstName: "Aymane", lastName: "Medjel", membershipType: "Gold", email: "Aymenmedjel@gmail.com" , phoneNumber:"0654321987", joinDate: "2026-04-05" },
    { id: 5, firstName: "Bader", lastName: "Harry", membershipType: "Gold", email: "Aymenhary@gmail.com" , phoneNumber:"0678912345", joinDate: "2026-07-22" }
];
export const totalMembers = gymMembers.length;
export const members =gymMembers.map(m =>(m.membershipType));

const Members = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = () => {
        const found = gymMembers.find(
        (member) =>
            member.firstName.toLowerCase() === search.toLowerCase()
    );

    if (found) {
      setResult(`Member Found: ${found.firstName} ${found.lastName}`);
    } else {
      setResult(`Member: ${search} does not exist `);
    }
  };
console.log(members);
  return (
    <div>
        <Navbar />
        <div className='members-container'>
             <div className='search-section'>
            <input type="text" placeholder='search client by name' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Search</button>   
        </div>
          {/* check result if include found if yes result appear with specific styles */}
            {result && (result.includes("Found") ? <p className='search-result-true'>{result}</p> : <p className='search-result-false'>{result}</p>)}
      
        <div className='members-list'>
            <h4>members list</h4>
            <table>
                <tr className='table-header'>
                    <th>id</th>
                    <th>Full Name</th>
                    <th>Membership Type</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Join Date</th>
                    <th>actions</th>
                </tr>
                  {gymMembers.map((m)=>(
                    <tr key={m.id} className='member-info'>
                        <td>{m.id}</td>
                        <td>{m.firstName} {m.lastName}</td>
                        <td>{m.membershipType}</td>
                        <td>{m.email}</td>
                        <td>{m.phoneNumber}</td>
                        <td>{m.joinDate}</td>
                        <td > <button>Edit</button>
                        </td>
                    </tr>
                  ))}
            </table>
            <hr />

        </div>
       


      
        <hr />
        <div className="members-content">
          <h2>Members Management</h2>
          <p>View, add, update, and delete members here.</p>
        </div>
        <hr />

        </div>

       
        <Footer />
    </div>
  )
}

export default Members