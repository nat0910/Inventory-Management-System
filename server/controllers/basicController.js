const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PWD,
    database        : process.env.DB_NAME
});
exports.start = (req, res) => {
    res.render('start-content', {layout: 'start-page'});
};

exports.login = (req,res) =>{
    res.render('login-page',{layout:'start-page'});
}
exports.login = (req,res) =>{
    res.render('login-page',{layout:'start-page'});
}

exports.logform = (req,res) =>{

    pool.getConnection((err,connection)=>{
        
        const {user,pwd} = req.body;

        connection.query('SELECT Pwd FROM user WHERE Username = ? ',[user],(err,password)=>{
            connection.release();{}
                let val = JSON.stringify(password)
                const val2 = JSON.parse(val)
                let vpwd = val2[0].Pwd;
                console.log(vpwd);
            if(!err){

                if (vpwd===pwd) {
                    res.redirect('admin/home');
                }
                else{
                    res.render('login-page',{alert:'The username or password you have entered is wrong!!',layout: 'start-page'});
                   console.log('fuck')
                }
            }else{
                console.log(err);
            }
        });
    })

}
 

exports.admins = (req, res)=> {
    res.render('admin-home', {layout: 'admin'});
};

exports.customer = (req, res)=> {
    res.render('customer-home', {layout: 'customer'});
};

exports.find = (req,res) => {
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        let sterm = req.body.search;

        connection.query('SELECT * FROM inventory WHERE Name LIKE ? OR Type LIKE ?',['%' + sterm + '%','%' + sterm + '%'],(err , rows) => {
            connection.release();

            if(!err){
                res.render('search-page', { rows , layout:'admin'});
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
}