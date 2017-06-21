expenseApp.controller('expenseController', function($scope, $state, Expense) {
    $scope.expense = {};

    $scope.createNewExpense = function() {
        Expense.createNewExpense.save(
            {
                userId: $scope.user.id,
                transactionDate: $scope.expense.transactionDate.getTime(),
                amount: $scope.expense.amount,
                description: $scope.expense.description,
                expenseId: 0
            }, function(response) {
                $state.go('report', {});
            }, function(error) {
                console.log(error);
            });
    }
});