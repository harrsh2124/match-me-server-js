const _ = require("lodash");

const PaginateResponse = async (req, data, intPage, intLimit) => {
    const totalItems = data[0].count[0].total;
    const totalPages = Math.ceil(totalItems / intLimit);

    const URL =
        req.protocol +
        "://" +
        req.get("host") +
        req.originalUrl.split("?").shift();

    return {
        result: data[0].result,
        meta: {
            totalItems,
            currentPage: intPage,
            itemsPerPage: intLimit,
            totalPages,
            links: {
                first: `${URL}?limit=${intLimit}`,
                previous:
                    intPage > 1
                        ? `${URL}?page=${intPage - 1}&limit=${intLimit}`
                        : "",
                next:
                    intPage < totalPages
                        ? `${URL}?page=${intPage + 1}&limit=${intLimit}`
                        : "",
                last: `${URL}?page=${totalPages}&limit=${intLimit}`,
            },
        },
    };
};

module.exports = PaginateResponse;
