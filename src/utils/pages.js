
export const getPagesCount = (totalCount, limit) => {
    return  Math.ceil(totalCount/limit);
}

export const getPagesArray = (totalPages) => {
    const arr = [];
    for(let i = 0; i < totalPages; i++){
        arr.push(i + 1);
    }
    return arr;
}