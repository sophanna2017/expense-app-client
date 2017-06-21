expenseApp.factory('User', ['$resource', function($resource) {
    return {
        userInfo: $resource("http://localhost:8081/user/getByUsername" + '/:username')
    }
}]);