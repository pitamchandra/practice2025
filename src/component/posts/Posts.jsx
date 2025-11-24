import React, { use, useState } from 'react';
import Pagination from '../pagination/Pagination';

const Posts = ({ postPromises }) => {
    const posts = use(postPromises);
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 4;
    const startIndex = (currentPage - 1) * postPerPage;
    const endIndex = currentPage * postPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
    const totalPage = Math.ceil( posts.length / postPerPage )

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {currentPosts.map(post => (
                    <div key={post.id} className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPage}></Pagination>
            {/* paginations 
            <div className="flex gap-3">
                <button className='btn' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage -1)}>
                    Prev
                </button>
                {
                    [...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            className={`btn mx-4 ${currentPage === idx + 1 ? 'btn-primary' : ''}`}
                            onClick={() => setCurrentPage(idx + 1)}
                        >{idx + 1}</button>
                    ))
                }
                <button
                    className='btn' 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    next
                </button>
            </div> */}
        </div>
    );
};

export default Posts;