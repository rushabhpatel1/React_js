import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Rendom() {
    const [state, setState] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:3007/data")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setState(data);
            });
    }, []);

    const filteredData = state.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>API</h1>
            <input type="text" placeholder="Search Product....." value={search} onChange={(e) => setSearch(e.target.value)} />
            
            <ul>
                <br></br>
                {filteredData.map((el, i) => (
                    <li key={el.id || i}>
                        <Link to={`/${el.category}`}>
                            <img src={el.img} width="500" alt={el.name} />
                            <p>{el.name}</p>
                            <p>{el.category}</p>
                            <p>Price: ${el.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
