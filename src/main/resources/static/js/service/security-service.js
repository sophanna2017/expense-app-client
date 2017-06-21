expenseApp.factory('Oauth', ['$resource', 'AUTHORIZATION_HEADER', function($resource, AUTHORIZATION_HEADER) {
    return $resource("http://localhost:8080/oauth/token", { }, {
        getJWTToken: {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': AUTHORIZATION_HEADER},
            params: {username: '@username', password: '@password', grant_type: 'password'}
        }
    })
}]);