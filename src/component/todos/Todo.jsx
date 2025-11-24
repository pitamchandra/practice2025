import React from 'react';

const Todo = ({todo}) => {
    const cardStyle ={
        border: '2px solid red',
        borderRadius : '20px',
        padding: '10px',
        margin:'10px'
    }
    return (
        <div style={cardStyle}>
            <h2>title: {todo.title}</h2>
            <h2>completed: {todo.completed}</h2>
        </div>
    );
};

export default Todo;