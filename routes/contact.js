var express = require('express');
var router = express.Router();
var db = require('../database/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Mano dile a tu coñao que le quiero puyar la cagalera a su hermana menor' });
});

router.post('/crear', function(req, res, next) {
  var {email, name, comment} = req.body;
  var ip = req.ip;
  var now= new Date();
  var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute:'numeric', second:'numeric'};
  var date = now.toLocaleDateString('es-VE', options)
  console.log(now.toLocaleDateString('es-VE', options))
  console.log("ipppppppppppppppp",ip);
  var sql = 'INSERT INTO contact (email, name, comment, ip, date) VALUES (?,?,?,?,?)';
  db.run(sql, [email,name,comment,ip,date]);

    // db.serialize(function() {
        // var stmt = db.prepare('INSERT INTO contact VALUES (?,?,?)');
        // stmt.run('asdasd');
    //     stmt.finalize();

    //     console.log("router.post('/create', function(req, res, next)");
    //     console.log(req.body)
    //     res.render('contact');
    // });

    // db.close();
    res.render('contact');

  });
  router.get('/list', function(req, res) {
    var sql = "select * from contact"
    var params = []
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
        "message":"success",
        "data":rows
      })
      console.log(" db.all(sql, params, (err, rows) => {")
    });

  });


module.exports = router;
