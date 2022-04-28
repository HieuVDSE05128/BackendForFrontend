
const PAGE_DEFAULT = 1;
const SIZE_DEFAULT = 10;

/**
 * Pagination an input array
 * 
 * @param {array} array array input
 * @param {int} page page want to get
 * @param {int} size number records per page
 * @returns {array} array after pagination
 */
const pagination = (array, page = PAGE_DEFAULT, size = SIZE_DEFAULT) => {
    const start = (page - 1) * size;
    const end = page * size;
    return array.slice(start, end);
}

module.exports = {
    pagination
}
