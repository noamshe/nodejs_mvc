/**
 * Created by noam on 7/3/14.
 */

module.exports = function(app) {
  var usersControllers = require('../controllers/users.js');
  var homeController = require('../controllers/home.js');

  app.get('/', homeController.homePage);
  app.get('/newuser', usersControllers.newUser);
  app.get('/userlist', usersControllers.showUserList);
  app.post('/addUser', usersControllers.addUser);

  app.get('/newuserandtask', usersControllers.newUserAndTask);
  app.post('/adduserandtask', usersControllers.addUserAndTask);

  app.get('/addtasktouser', usersControllers.addTaskToUser);
  app.post('/saveuserwithtask', usersControllers.saveUserAndTask);
}

