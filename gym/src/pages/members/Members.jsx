import React,{useState} from 'react'
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from '../../components/footer/Footer.jsx';
import "./Members.css";

const gymMembers = [
    { id: 1, firstName: "Haytam", lastName: "Raba", membershipType: "Gold", phoneNumber:"0612345678", joinDate: "2026-01-15" },
    { id: 2, firstName: "Yassine", lastName: "Jabbouk", membershipType: "Silver", phoneNumber:"0687654321", joinDate: "2026-02-20" },
    { id: 3, firstName: "Aymen", lastName: "Rafiky", membershipType: "Bronze", phoneNumber:"0698765432", joinDate: "2026-03-10" },
    { id: 4, firstName: "Aymane", lastName: "Medjel", membershipType: "Gold", phoneNumber:"0654321987", joinDate: "2026-04-05" },
    { id: 5, firstName: "Bader", lastName: "Harry", membershipType: "Gold", phoneNumber:"0678912345", joinDate: "2026-07-22" }
];

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

  return (
    <div>
        <Navbar />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {result && <p>{result}</p>}
        <hr />
        <div className="members-content">
          <h2>Members Management</h2>
          <p>View, add, update, and delete members here.</p>
        </div>
        <hr />
        <Footer />
    </div>
  )
}

export default Members