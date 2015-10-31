var scotchTodo = angular.module('calc', []);
//shit dawg
//fourth
function mainController($scope, $http, $filter) {
	$scope.displayNumber = 0;
	$scope.displayNumber2 = 0;
	$scope.displayValue = "0";
	$scope.memory = "0";
	$scope.operatorSign = "";
	$scope.answer = "0";
//random comment
// comment 2
	$scope.numberClicked = function(numberPushed) {
		if ($scope.displayValue == "0") {
			$scope.displayValue = numberPushed;
		}
		else if ($scope.answer != "0") {
			$scope.displayValue = numberPushed;
			$scope.answer = "0";
		}
		else {
			$scope.displayValue += numberPushed;
		}

	}
	$scope.opSign = function (signPushed) {
		$scope.answer = "0";
		$scope.displayNumber = $scope.displayValue;
		$scope.displayNumber2= "0";
		$scope.operatorSign = signPushed;
		$scope.displayValue += signPushed;
	}
	$scope.clear =function(){
		$scope.displayValue = "0";
	}

	$scope.clearCE =function() {
		$scope.displayNumber = 0;
		$scope.displayNumber2 = 0;
		$scope.displayValue = "0";
		$scope.memory = "0";
		$scope.operatorSign = "";
		$scope.answer = "0";
	}

	$scope.del = function() {
		$scope.displayValue = $scope.displayValue.slice(0,$scope.displayValue.length-1);
	}

	$scope.save = function() {
		$scope.displayValue += $scope.memory;
	}

	$scope.solve = function() {
		$scope.displayNumber2 = $scope.displayValue.substring($scope.displayNumber.length+1,$scope.displayValue.length);
		var x = $scope.displayNumber;
		var y = $scope.displayNumber2;
		var z = 0;

		switch ($scope.operatorSign) {
			case '+':
				z = Number(x) + Number(y);
				break;
			case '-':
				z = Number(x) - Number(y);
				break;
			case '×':
				z = Number(x) * Number(y);
				break;
			case '÷':
				z = Number(x) / Number(y);
				break;
		}
		z = ''+z;
		$scope.displayValue = z;
		$scope.answer = z;
		$scope.memory =z;

	}

}