var Logging = function (argument)
{
	this.logging = null;
	// body...
}

Logging.prototype = 
{
	init : function()
	{
		// get the logger object
			this.log = log4javascript.getLogger("main");
			// set the log level
			this.log.setLevel(log4javascript.Level.ALL);
			// create and add an appender to the logger
			var appender = new log4javascript.PopUpAppender();
			this.log.addAppender(appender);


	},
	trace : function(message)
	{
		this.log.trace(message);

	},
	debug : function (message)
	{

		this.log.debug(message);
	},
	info : function (message)
	{
		this.log.info(message);
	},
	warn : function (message)
	{
		this.log.warn(message);
	},
	error : function (message)
	{
		this.log.error(message);
	},
	fatal : function()
	{
		this.log.fatal(message);
	}




}