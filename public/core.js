var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http, $filter) {

	$scope.list = [
		{taskName:'Move Down/Up', done:false},
		{taskName:'Fix CSS line-thourgh', done:true},
		{taskName:'Edit Tasks' , done:false},
		{taskName:'Clear Done Tasks' , done:true},
		{taskName:'Finsh CSS' , done:false}
	];
	$scope.todoText = "";

	$scope.grab = function(){
		var task = {
			done: false,
			taskName: $scope.todoText,
		};

		$scope.list.push(task);
		$scope.todoText = "";
	};

	$scope.newList = function(){
		$scope.list = [];
		$scope.todoText = "";
	};

	$scope.deleteBn = function(i){
		$scope.list.splice(i,1);
	};

	$scope.clearDone = function(){
		$scope.list = $filter('filter')($scope.list, { done: "false" });
	};

	$scope.edit = function(e){
		$scope.list.push(e);
	};
}