expenseApp.controller('loginController', function($scope, $state, $cookies, $window, Oauth, User) {
    $scope.login = function() {
        Oauth.getJWTToken({username: $scope.login.username, password: $scope.login.password},
            function(response) {
                var accessTokenExpireDate = new $window.Date();
                accessTokenExpireDate.setTime(accessTokenExpireDate.getTime() + (response.expires_in - 1800));
                $cookies.put('expense-app-access-token', response.access_token, {expires: accessTokenExpireDate});
                $cookies.put('expense-app-refresh-token', response.refresh_token);
                retrieveUserInfo();
            }, function(error) {
                $scope.login.showInvalidCredentialErrorMessage = true;
            });
    };

    function retrieveUserInfo() {
        User.userInfo.get({username: $scope.login.username},
            function(response) {
                $scope.user.id = response.id;
                $scope.user.name = response.username;
                $state.go('report', {});
            }, function(error) {
                console.log(error);
            });
    };
});