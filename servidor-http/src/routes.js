const UserController = require('./controllers/UserController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/user',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
];