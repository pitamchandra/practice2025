import React, { use, useState } from 'react';
import Pagination from '../pagination/Pagination';
import { useLoaderData } from 'react-router';
import Todo from './Todo';

const Todos = ( ) => {
    // const todos = use(todosPromises);
    const todos = useLoaderData();
    const [currentPage, setCurrentPage] =useState(1)
    const todosPerPage = 8;

    const startIndex = (currentPage-1)*todosPerPage;
    const endIndex = currentPage * todosPerPage;

    const currentTodos = todos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(todos.length/todosPerPage) 

    console.log(todos, "my todos")
    return (
        <div className='w-[80%] m-auto p-5'>
            <div className="grid grid-cols-4 gap-2.5">
                {
                    currentTodos.map(todo=> <Todo key={todo.id} todo={todo}></Todo>)
                }
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}></Pagination>
        </div>
    );
};

export default Todos;