import React from 'react';

const Pagination = ({pagesArray, changePage, page} ) => {
    return (
        <div style={{margin:20}}>
            {pagesArray.map(p => <span
                key={p}
                onClick={() => changePage(p)}
                className={p === page ? 'page page__current' : 'page'}>
                    {p}
                </span> )}
        </div>
    );
};

export default Pagination;