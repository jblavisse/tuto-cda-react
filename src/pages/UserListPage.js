import axios from 'axios';
import React, {useEffect, useState} from 'react'

export default function UserListPage() {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data));
    }, [])

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map(user => 
                    <li>
                        {user.name}({user.email})
                    </li>
                )}
                
            </ul>
        </div>
    )
}
