/**
 *
 * Created by noam on 13/07/14.
 */

module.exports.loginPage = function(req, res) {
  // do something
  res.render('login', { title: '' });
}

module.exports.login = function(req, res) {
  // do something
  var userName = req.body.username;
  var password = req.body.password;
  console.log("req.body");
  console.log(userName + " " + password);
  res.render('ajax_view', { title: '' });
}

module.exports.check_credentials = function(req, res) {
  // do something
  var obj = {};
  var userName = req.body.username;
  var password = req.body.password;
  if (userName == 'admin' && password == '1234') {
    //$location.path('/dashboard')
    obj.status = "OK";
  } else {
    obj.status = "Fail";
  }
  var myJsonString = JSON.stringify(obj);
  res.send(myJsonString)
}

