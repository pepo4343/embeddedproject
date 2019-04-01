
const db = require('../utils/database')

exports.getUser = (req,res,next)=>{
    db.execute('SELECT * FROM user')
    .then(([row , fielddata])=>{
        res.status(200).json({results:row})
    })
    .catch(err =>{
        console.log(err);
        
    })
};