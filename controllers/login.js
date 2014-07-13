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

