/**
 * Created by noam shemesh on 7/3/14.
 */

module.exports = function(app) {
  var usersControllers = require('../controllers/users.js');
  var homeController = require('../controllers/home.js');
  var loginController = require('../controllers/login.js');

  app.get('/', homeController.homePage);
  app.get('/newuser', usersControllers.newUser);
  app.get('/userlist', usersControllers.showUserList);
  app.post('/addUser', usersControllers.addUser);

  app.get('/newuserandtask', usersControllers.newUserAndTask);
  app.post('/adduserandtask', usersControllers.addUserAndTask);

  app.get('/addtasktouser', usersControllers.addTaskToUser);
  app.post('/saveuserwithtask', usersControllers.saveUserAndTask);

  app.get('/angular', usersControllers.angular);
  app.get('/ajax_example', usersControllers.ajax_view);
  app.get('/save_ajax_example', usersControllers.save_ajax);

  app.get('/bootstrap', usersControllers.admin);
  app.get('/login', loginController.loginPage);
  app.post('/login', loginController.login);
}

