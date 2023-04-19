const fetchQuery = () => {
    return `SELECT * FROM ProductGroup`;
};



const insertProducts = (body) => {
    return {
        sql: `INSERT INTO ProductGroup SET ?`,
        values: body,
    }
}


const updateProducts = (body, id) => {
    return {
        sql: 'UPDATE ProductGroup SET ? WHERE id = ?',
        values: [body,id],
    }
}

const deleteProductGroupQuery =(id) => {
    return {
        sql: 'DELETE FROM ProductGroup WHERE id = ?',
        values: [id],
    }
}


module.exports = {
    fetchQuery,
    insertProducts,
    updateProducts,
    deleteProductGroupQuery,
}


