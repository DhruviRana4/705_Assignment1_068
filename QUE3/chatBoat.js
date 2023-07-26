module.exports.reply = function (msg) {
    this.Boat_age = 19;
    this.Boat_Name = "Dhruvi";

    msg = msg.toLowerCase();

    if(msg.indexOf("hi")>-1){
        return "Hello..!!";
    }
}