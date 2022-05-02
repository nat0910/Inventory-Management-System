router.get('/inventory',invController.inview);
router.get('/typecommodity',invController.typage);
router.get('/adduser',invController.form);
router.get('/:ID',invController.delete);

//Post req
router.post('/searchpage',invController.find);
router.post('/adduser',invController.add);

exports.view = (req,res) => {
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT * FROM inventory',(err , rows) => {
            connection.release();

            if(!err){
                res.render('home', { rows , layout:'admin'});
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
}

exports.typage = (req,res) =>{
    res.render('type-page');
}

exports.inview = (req,res) => {
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('SELECT * FROM inventory',(err , rows) => {
            connection.release();

            if(!err){
                res.render('inv-page',{ rows },{layout: 'admin'});
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
}

exports.find = (req,res) => {
    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        let sterm = req.body.search;

        connection.query('SELECT * FROM inventory WHERE Name LIKE ? OR Type LIKE ?',['%' + sterm + '%','%' + sterm + '%'],(err , rows) => {
            connection.release();

            if(!err){
                res.render('search-page', { rows });
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });
}

exports.form = (req,res) => {
    res.render('add-user');
}

exports.add = (req,res) => {
    const { ID , Serial , Name , Type ,  PKD , Expiry , Quantity , Price } = req.body;

    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('INSERT INTO inventory SET ID = ? , Name = ? , Type = ? , Serial = ? , PKD = ? , Expiry = ? , Quantity = ? , Price = ? ',[ID , Name , Type , Serial , PKD , Expiry , Quantity , Price],(err , rows) => {
            connection.release();

            if(!err){
                res.render('add-user',{alert:'Item added successfully'});
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });    
}

exports.delete = (req,res) => {

    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log('Connected as ID '+connection.threadId);

        connection.query('DELETE FROM inventory WHERE ID = ?',[req.params.ID],(err , rows) => {
            connection.release();

            if(!err){
                res.redirect('/');
            }else{
                console.log(err);
            }
            console.log('Data of Table displayed \n',rows);
        });
    });    
}

