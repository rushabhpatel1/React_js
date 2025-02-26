import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Prox() {
    const [state, setState] = useState([]);
    const [search, setSearch] = useState("");
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        image: "",
    });


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3007/profile")
        .then((response) => {
            setState(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    const deleteData = async (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            try {
                await axios.delete(`http://localhost:3007/profile/${id}`);
                fetchData();
            } catch (error) {
                console.error("Error deleting data:", error);
            }
        }
    };

    const addData = async (e) => {
        e.preventDefault();
        if (!formData.id || !formData.name || !formData.email || !formData.phone || !formData.image) {
            alert("All fields are required!");
            return;
        }

        try {
            await axios.post("http://localhost:3007/profile", { ...formData });
            fetchData();
            setFormData({ id: "", name: "", email: "", phone: "", image: "" });
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const filteredData = state.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase()) ||
        el.email.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ color: "#333" }}>Crud Operation using Axios
            </h1>
            <form onSubmit={addData} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    name="id"
                    placeholder="Enter id"
                    value={formData.id}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Enter Image URL"
                    value={formData.image}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <button type="submit" style={{ padding: "10px 15px", backgroundColor: "gray", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>
                    Add Profile
                </button>
            </form>

            <input
                type="text"
                placeholder="Search by Name or Email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "10px",
                    width: "40%",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            />

            <table
                style={{
                    width: "80%",
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                }}
                border="1"
            >
                <thead>

                    <tr
                        style={{
                            backgroundColor: "gray",
                            color: "white",
                            fontSize: "18px",
                        }}
                    >
                        <th style={{ padding: "10px" }}>Id</th>
                        <th style={{ padding: "10px" }}>Image</th>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Phone</th>
                        <th style={{ padding: "10px" }}>Email</th>
                        <th style={{ padding: "10px" }}>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {filteredData.map((el) => (

                        <tr key={el.id} style={{ textAlign: "center", fontSize: "16px" }}>

                            <td style={{ padding: "10px" }}>{el.id}</td>

                            <td style={{ padding: "10px" }}>

                                <img src={el.image} width="150" height="150" alt={el.name} style={{ borderRadius: "8px", border: "1px solid #ddd" }} />
                            
                            </td>

                            <td style={{ padding: "10px" }}>{el.name}</td>
                            <td style={{ padding: "10px" }}>{el.phone}</td>
                            <td style={{ padding: "10px" }}>{el.email}</td>
                            <td style={{ padding: "10px" }}>

                                <Link to={`/edit/${el.id}`} style={{ padding: "8px 12px", marginRight: "5px", backgroundColor: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px",}} >
                                    Edit
                                </Link>

                                <button onClick={() => deleteData(el.id)} style={{ padding: "8px 12px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }} >
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div >
    );
}