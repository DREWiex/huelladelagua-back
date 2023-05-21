
const quizAgr = (num) => {
    return [
        {
            $group: {
                _id: `$quiz${num}`,
                count: { $sum: 1 }
            }
        },
        {
            $group: {
                _id: null,
                values: { $push: { valor: "$_id", contador: "$count" } },
                totalCount: { $sum: "$count" }  // Corregido: Sumar correctamente el campo "count"
            }
        }
    ]
}

module.exports = {
    quizAgr
}