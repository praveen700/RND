const sql = require("../models/db");
const qu = require("../Querys/products.query");
module.exports = {
    fetchProductgroup: async (req, res, next) => {
        await sql.query(qu.fetchQuery(), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
    createProductGroup: async (req, res, next) => {
        await sql.query(qu.insertProducts(req.body), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
    updateProductGroup: async (req, res, next) => {
        await sql.query(qu.updateProducts(req.body,req.params.id), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
    deleteProductGroup: async (req, res, next) => {
        await sql.query(qu.deleteProductGroupQuery(req.params.id), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
   

   
  
  
};





