const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PWD,
    database        : process.env.DB_NAME
});


exports.cust_typage = (req,res) =>{
    res.render('customer-type-page', {layout: 'customer'});
}

exports.bakview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM bakery',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-bakery',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};

exports.bevview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM beverage',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-bakery',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};


exports.daiview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM dairy',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-beverage',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};


exports.fruview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM fruits',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-fruits',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};


exports.frozview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM frozen_foods',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-frozen',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};

exports.grooview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM grooming_products',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-grooming',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};

exports.oilview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM oils',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-oil',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};


exports.spiview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM spices',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-spices',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};

exports.vegview = (req,res) => {
    const table = req.body;
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT ID,Name,PKD,Availbility,Quantity,Price FROM vegetables',(err , rows) => {
            connection.release();

            if(!err){
                res.render('customer-vegetables',{ rows , layout:'customer' })
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
};


