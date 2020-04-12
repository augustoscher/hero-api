//npm i jsonwebtoken
//npm i hapi-auth-jwt2

const BaseRoute = require('./base/baseRoute');
const { join } = require('path');

class UtilRoutes extends BaseRoute {
  constructor() {
    super();
  }

  coverage() {
    return {
      path: "/coverage/{param*}",
      method: "GET",
      handler: {
        directory: {
          path: join(__dirname, '../../coverage'),
          redirectToSlash: true,
          index: true,
        }
      },
      options: {
        auth: false,
        tags: ['api'],
        description: 'API Test Coverage',
        notes: 'Returns code coverage for API',
      }
    };
  }

}

module.exports = UtilRoutes;
