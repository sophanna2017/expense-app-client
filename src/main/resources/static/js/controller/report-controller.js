expenseApp.controller('reportController', function($scope, $state, Expense) {
    $scope.report = {};
    $scope.expenses = {};
    $scope.showReport = false;

    $scope.report.startDate = new Date();
    getExpenseByWeek($scope.user.id, $scope.report.startDate);

    function getExpenseByWeek(userId, startDate) {
        startDate = getDateInMilliseconds($scope.report.startDate);
        $scope.showReport = false;
        Expense.getExpenseByUserId.query({userId: userId, startDate: startDate}, function(response) {
            $scope.expenses = response;
            if ($scope.expenses.length > 0) {
                $scope.showReport = true;
            }
        }, function(error) {
            console.log(error);
        });
    }

    $scope.createNewExpense = function() {
        $state.go("createExpense");
    }

    $scope.generateReport = function() {
        getExpenseByWeek($scope.user.id, $scope.report.startDate);
    }

    function getDateInMilliseconds(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0).getTime();
    }
});