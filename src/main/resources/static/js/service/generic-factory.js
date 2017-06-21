expenseApp.factory('expenseHttpInterceptor', ['$cookies', '$window', '$injector', function($cookies, $window, $injector) {
    return {
        request: function(config) {
            if(config.url.indexOf("http://localhost:8081") != -1) {
                var accessToken = $cookies.get('expense-app-access-token');
                if (accessToken != undefined && accessToken != null && accessToken != '') {
                    config.headers.Authorization = 'bearer ' + accessToken;
                }
            }
            return config;
        }
    }
}]);