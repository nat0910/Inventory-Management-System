const { query } = require("express");
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

exports.inview = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query("SELECT * FROM inventory", (err, rows) => {
      connection.release();

      if (!err) {
        res.render("inv-page", { rows, layout: "admin" });
      } else {
        console.log(err);
      }
      console.log("Data of Table displayed \n", rows);
    });
  });
};

exports.form = (req, res) => {
  res.render("add-item", { layout: "admin" });
};

exports.bake_form = (req, res) => {
  res.render("admin-bakery-add", { layout: "admin" });
};

exports.bake_add = (req, res) => {
  const { ID, Serial, Name, Availbility, PKD, Quantity, Price } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "INSERT INTO bakery SET ID = ?, Serial = ? , Name = ? , Availbility  = ?  , PKD = ?  , Quantity = ? , Price = ? ",
      [ID, Serial, Name, Availbility, PKD, Quantity, Price],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-bakery-add", {
            alert: "Item added successfully",
            layout: "admin",
          });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.add = (req, res) => {
  const { ID, Serial, Name, Type, PKD, Expiry, Quantity, Price } = req.body;
  console.log(ID);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "INSERT INTO inventory SET ID = ? , Name = ? , Type = ? , Serial = ? , PKD = ? , Expiry = ? , Quantity = ? , Price = ? ",
      [ID, Name, Type, Serial, PKD, Expiry, Quantity, Price],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("add-item", {
            alert: "Item added successfully",
            layout: "admin",
          });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.delete = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "DELETE FROM inventory WHERE ID = ?",
      [req.params.ID],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.redirect("/admin/inventory");
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};
exports.adm_typage = (req, res) => {
  res.render("admin-type-page", { layout: "admin" });
};

exports.salview = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT * , price * quantity As Total FROM sales",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("sale-page", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};
exports.salform = (req, res) => {
  res.render("sale-add", { layout: "admin" });
};

exports.sale_add = (req, res) => {
  const { ID, Serial, Name, Type, PKD, Quantity, Price } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "INSERT INTO sales SET ID = ?, Serial = ? , Name = ? , Type = ?  , PKD = ?  , Quantity = ? , Price = ? ",
      [ID, Serial, Name, Type, PKD, Quantity, Price],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("sale-add", {
            alert: "Item added successfully",
            layout: "admin",
          });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.bakview = (req, res) => {
  const { tabel } = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query("SELECT * FROM bakery", (err, rows) => {
      connection.release();

      if (!err) {
        res.render("admin-bakery", { rows, layout: "admin" });
        console.log(tabel);
      } else {
        console.log(err);
      }
      console.log("Data of Table displayed \n", rows);
    });
  });
};

exports.bakdel = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "DELETE FROM bakery WHERE ID = ?",
      [req.params.ID],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.redirect("/admin/typecommodity/bakery");
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};
exports.bevedel = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "DELETE FROM beverage WHERE ID = ?",
      [req.params.ID],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.redirect("/admin/typecommodity/beverage");
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.saldel = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "DELETE FROM sales WHERE ID = ?",
      [req.params.ID],
      (err, rows) => {
        connection.release();

        if (!err) {
          res.redirect("/admin/sales");
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.bevview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM beverage",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-beverage", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.daiview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM dairy",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-dairy", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.fruview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM fruits",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-fruits", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.frozview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM frozen_foods",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-frozen", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.grooview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM grooming_products",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-grooming", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.oilview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM oils",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-oil", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.spiview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM spices",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-spices", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};

exports.vegview = (req, res) => {
  const table = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    connection.query(
      "SELECT ID,Name,PKD,Availbility,Quantity,Price FROM vegetables",
      (err, rows) => {
        connection.release();

        if (!err) {
          res.render("admin-vegetables", { rows, layout: "admin" });
        } else {
          console.log(err);
        }
        console.log("Data of Table displayed \n", rows);
      }
    );
  });
};
