const sql = require("../config/db");
const qu = require("../Querys/products.query");
module.exports = {
    fetchProductgroup:  (req, res, next) => {
         sql.query(qu.fetchQuery(), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
    createProductGroup:  (req, res, next) => {
         sql.query(qu.insertProducts(req.body), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
    updateProductGroup:  (req, res, next) => {
         sql.query(qu.updateProducts(req.body,req.params.id), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
    deleteProductGroup:  (req, res, next) => {
         sql.query(qu.deleteProductGroupQuery(req.params.id), (err, data) => {
            if (err) {
                res.status(403).json({ error: err.message });
            } else {
                res.status(200).json({ status: true, data: data,  })
            }
        })
    },
   

   
  
  
};





