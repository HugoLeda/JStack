const UserController = require('./controllers/UserController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/user/:id',
    method: 'GET',
    handler: UserController.getUserByID,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  }
];