/**
* startercontrollers Modulecontroller('toDoListController',function($scope){
	
})
*
* Description
*/
angular.module('startercontrollers', [])

.controller('toDoListController',function($scope){

	$scope.toDoListItems=[];
	//init the modal
	$ionicModal.fromTemplateUrl('modal.html', {
	  scope: $scope,
	  animation: 'slide-in-up'
	}).then(function (modal) {
	  $scope.modal = modal;
	});
	// function to open the modal
	$scope.openModal = function () {
	  $scope.modal.show();
	};

		// function to close the modal
	$scope.closeModal = function () {
  		$scope.modal.hide();
	};

	$scope.$on('$destroy', function () {
  		$scope.modal.remove();
	});
		
		//function to add items to the existing list
	$scope.AddItem = function (data) {
  		$scope.toDoListItems.push({
    	task: data.newItem,
    	status: 'not done'
 	 });
  		data.newItem = '';
  $scope.closeModal();
	};

});