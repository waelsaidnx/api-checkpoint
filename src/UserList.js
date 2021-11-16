import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

const UserList = () => {
const [user, setUser] = useState([]); // where to store the returned data
 useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response) => {
           setUser(response.data)
       }) 
 }, []);

    return (
        <div>
        <ul>
            {user.map(user => (
             <li>
                {user.name}
             </li>
             ))}
        </ul>
        </div>
    )
}

export default UserList
