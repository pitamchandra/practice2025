import React, { use, useState } from 'react';
import Pagination from '../pagination/Pagination';
import { Link } from 'react-router';

const Users = ({usersPromises}) => {
    const users = use(usersPromises)
    console.log(users)

    const [currentPage, setCurrentPage] = useState(1);
    const userPerPage = 5;
    const startIndex = (currentPage - 1) * 5 ;
    const endIndex = currentPage * userPerPage;
    const currentUsers = users.slice(startIndex, endIndex);
    const totalPages = Math.ceil(users.length / userPerPage)

    return (
        <div>
            this is users : {users.length}
            <div className='flex gap-4 p-4 border-2 '>
                {
                    currentUsers.map(currentUser => (
                        <div key={currentUser.id} className="border-amber-600 border-2 p-4 rounded-2xl">
                            <h2 className='font-bold'>{currentUser.name}</h2>
                            <p>{currentUser.email}</p>
                            <Link to={`/users/${currentUser.id}`} className='btn'>Details</Link>
                        </div>
                    ))
                }
                
            </div>
            <Pagination setCurrentPage = {setCurrentPage} totalPages={totalPages} currentPage={currentPage} ></Pagination>
                
        </div>
    );
};

export default Users;