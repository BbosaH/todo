/**
* celebs Module
*
* Description
*/
angular.module('celebs', ['ionic'])

  .filter('inSlicesOf', 
		['$rootScope',  
		function($rootScope) {
			makeSlices = function(items, count) { 
				if (!count)            
					count = 3;
				
				if (!angular.isArray(items) && !angular.isString(items)) return items;
				
				var array = [];
				for (var i = 0; i < items.length; i++) {
					var chunkIndex = parseInt(i / count, 10);
					var isFirst = (i % count === 0);
					if (isFirst)
						array[chunkIndex] = [];
					array[chunkIndex].push(items[i]);
				}

				if (angular.equals($rootScope.arrayinSliceOf, array))
					return $rootScope.arrayinSliceOf;
				else
					$rootScope.arrayinSliceOf = array;
					
				return array;
			};
			
			return makeSlices; 
		}]
	)

.controller('celebsCtrl', function($scope) {
  $scope.myTitle = 'Template';
  $scope.items = [
    'img/alikiba.jpg',
    'img/saha.jpg',
    'img/mike.png',
    'img/saha.jpg',
    'img/alikiba.jpg',
    'img/perry.png',
    'img/alikiba.jpg',
    'img/saha.jpg',
    'img/chameleone.jpg'
    
    
  ];
});