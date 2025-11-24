import React from 'react';

const Pagination = ({setCurrentPage, currentPage, totalPages}) => {
    return (
        <div className='mt-5'>
            {/* pagination */}
                <div className="flex gap-5">
                    <button className='btn' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                    {
                        [...Array(totalPages)].map((_, idx) => (
                            <div className={`btn ${currentPage === idx + 1 ? 'btn-primary' : ""}`} key={idx} onClick={() => setCurrentPage(idx + 1)}> {idx + 1} </div>
                        ))
                    }
                    <button className='btn' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
        </div>
    );
};

export default Pagination;