/**
* loggint Module
*
* Description
*/

angular.module('loggingmodule', [])

.controller('logctrl', function(logging){
	

})


.constant('logging_config',{ 
	tracelevel : {
		_LOG_TRACE_: '_LOG_TRACE_',
		_LOG_DEBUG_: '_LOG_DEBUG_',
		_LOG_INFO_: '_LOG_INFO_',
		_LOG_WARN_: '_LOG_WARN_',
		_LOG_ERROR_: '_LOG_ERROR_',
		_LOG_FATAL_: '_LOG_FATAL_',
	}

})
.factory('logging',function(logging_config){
	var Logging = function (argument)
	{
		this.logging = null;
	// body...
	}

} )