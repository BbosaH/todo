/**
* account Modul
e
*
* Description
*/
angular.module('account', ['dataservicess'])

.controller('logincontroller',['$scope','myloginService','loginmodel','$location', function($scope,myloginService,loginmodel,$location){
	var self = this;

	self.username='';

	self.password='';

	self.link ='http://smuwanguzi-001-site2.btempurl.com/app/api/accounts/fan/SignIn';
	self.locallink='http://localhost:49163/api/accounts/fan/SignIn'

	self.goinglogmodel =  loginmodel;

	self.login = function(){
		myloginService.getloginTocken(self.link,self.goinglogmodel,function(data){
				//console.log("mydata  ",myloginService.mydata);
				$scope.datas=data;
				console.log("mydata  ",$scope.datas);
		});

	}
	self.isloggedin = function(){

	}
	self.logout = function(){

	}
	
}]).controller('signupcontroller',['$scope','mysignupservice','signupmodel','$location', function($scope,mysignupservice,signupmodel,$location){
	
	var self = this;
	self.phonenumber = '';
	self.gender = '';
	self.password = '';
	self.confirm = '';
	self.link ='http://smuwanguzi-001-site2.btempurl.com/app/api/accounts/fan/signup';
	//self.locallink='http://localhost:49163/api/accounts/fan/signup'
	//populating the signup model

	self.goingmodel =  signupmodel;
	

	 self.submitform = function(){
			
			/*goingmodel.pnumber=self.phonenumber;
			goingmodel.password=self.password;
			goingmodel.gender = self.gender;*/

		console.log("goingmodel",self.goingmodel,self.phonenumber);
			/*self.phonenumber = '';
			self.gender = '';
			self.password = '';
			self.confirm = '';*/


		if(self.goingmodel.password === self.goingmodel.confirm){
			
			//mysignupservice.signupsuccesstocken.getTocken(self.link,goingmodel)

			mysignupservice.getTocken(self.link,self.goingmodel,function(data){
				console.log("mydata  ",mysignupservice.mydata);
				
				$scope.datas=data;
				console.log("mydata  ",$scope.datas);
			});
			
			
		}else{

			alert("passwords don't match");
		}




	}
	
}]).value('signupmodel', signupmodel).value('loginmodel',loginmodel)