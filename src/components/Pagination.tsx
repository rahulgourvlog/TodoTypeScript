import React from 'react';

interface PaginationProps {
    todosPerPage: number;
    totalTodos: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ todosPerPage, totalTodos, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center mt-4">
                {pageNumbers.map(number => (
                    <li key={number} className={`mx-0 px-3 py-1 border rounded cursor-pointer ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`} onClick={() => paginate(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination