const _ = require("lodash");

const PaginateResponse = async (req, model) => {
    const intPage = parseInt(_.get(req, "query.page", "1"), 10);
    const intLimit = parseInt(_.get(req, "query.limit", "10"), 10);

    const [data] = await model.aggregate([
        {
            $facet: {
                result: [
                    {
                        $skip: (intPage - 1) * intLimit,
                    },
                    {
                        $limit: intLimit,
                    },
                ],
                count: [
                    {
                        $count: "total",
                    },
                ],
            },
        },
    ]);

    const totalItems = data.count[0].total;
    const totalPages = Math.ceil(totalItems / intLimit);

    const URL =
        req.protocol +
        "://" +
        req.get("host") +
        req.originalUrl.split("?").shift();

    return {
        result: data.result,
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
