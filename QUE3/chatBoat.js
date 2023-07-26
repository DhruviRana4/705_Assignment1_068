module.exports.reply = function (msg) {
    this.Boat_age = 19;
    this.Boat_Name = "Dhruvi";

    msg = msg.toLowerCase();

    if(msg.indexOf("hi") > -1 || 
			msg.indexOf("hello") > -1 || 
			msg.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if(msg.indexOf("age") > -1 && 
			msg.indexOf("your"))
		{
			return "I'm " + this.Bot_Age;
		}
		else if (msg.indexOf("how") > -1 && 
			msg.indexOf("are") && 
			msg.indexOf("you"))
		{
			return "I'm fine ^_^"
		}
		else if(msg.indexOf("where") > -1 
			&& msg.indexOf("live") && 
			msg.indexOf("you"))
		{
			return "I live in " + this.Bot_Country;
		}
		return "Sorry, I didn't get it :( ";
}