const PAGE_DEFAULT = 1;
const SIZE_DEFAULT = 10;

const pagination = (array, page = PAGE_DEFAULT, size = SIZE_DEFAULT) => {
    const start = (page - 1) * size;
    const end = page * size;
    return array.slice(start, end);
}

module.exports = {
    pagination
}