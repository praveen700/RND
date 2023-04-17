const sql = require("../models/db");
const qu = require("../Querys/products.query");
module.exports = {
    fetchProduct: async (req, res, next) => {
        await sql.query(qu.searchCount(req.query.search), (err, totalCount) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data, totalCount: total })
            }
        })
    },
   

   
  
  
};





