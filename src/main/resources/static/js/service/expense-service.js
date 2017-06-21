expenseApp.factory('Expense', ['$resource', function($resource) {
    return {
        getExpenseByUserId: $resource('http://localhost:8081/expense/getExpenseByWeek/:userId/:startDate'),

        createNewExpense: $resource('http://localhost:8081/expense/create/:userId')
    }
}])