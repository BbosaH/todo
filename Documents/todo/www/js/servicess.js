/**
*  Module
*
* Description
*/

angular.module('dataservicess', [])

.factory('myloginService',['$http','$window','$q', function($http,window,$q) {
	
	var successtoken = {

		getloginTocken : function(link,dataobj,callback){
			var promisse = function(){
				var deffered = $q.defer()
				$http.post(link,dataobj).success(function(response){
			 	deffered.resolve(response)
			 }).error(function(){
			 	deffered.reject(response)
			 });
				
				return deffered.promise;
			}
			var something = this;
			promisse().then(function(data){

					data = JSON.parse(data);
					console.log('ourdata =',data);
				if(data.errors.length>0){

					for (var i = 0; i < data.errors.length; i++) {
						console.log(data.errors[i])	
					}
					

				}else{
					console.log("this is this",something);
					if(data.data !== ""){	
						something.mydata=data.data;

						window.localStorage.setItem("signed", something.mydata);
						callback(something.mydata);
						$location.path('/strippedtabs');
					}else{
						console.log("tolina tocken");
						$location.path('/strippedtabs');
					}
				}
				

			},function(error){
				return $q.reject(error)

			});
		}

	};
	return successtoken;

	
}])
.factory('mysignupservice', ['$http','$window','$q', function($http,window,$q){
	
	this.signupsuccesstocken = {
		//object members
		mydata : '',
		//methods
		getTocken:function(link,dataobj,callback){
			
			console.log("this is this here ",this);


			var pro = function(){
				var deffered = $q.defer()
			 $http.post(link,dataobj).success(function(response){
			 	deffered.resolve(response)
			 }).error(function(){
			 	deffered.reject(response)
			 });
				
				return deffered.promise;
			}
			var something = this;
			pro().then(function(data){

					data = JSON.parse(data);
					console.log('ourdata =',data);
				if(data.errors.length>0){

					for (var i = 0; i < data.errors.length; i++) {
						console.log(data.errors[i])	
					}
					

				}else{
					console.log("this is this",something);
					if(data.data !== null){
						something.mydata=data.data;
						window.localStorage.setItem("signedup", something.mydata);
						callback(something.mydata);
						$location.path('/login');
					}

					
					
				}
				

			},function(error){
				return $q.reject(error)

			});

			

		},
		
	};
	
	return this.signupsuccesstocken;
	
}])
