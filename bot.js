const Discord = require("Discord.js");

const TOKEN = "Mzg3NDA4NDY2NTc2NDA4NTc2.DQjP2g.5Gf7_3CS80-pJgm2vNfSvmi-JFE";

var bot = new Discord.Client();

bot.on("ready",function() {
        console.log("Ready");
});

bot.on("message", function(message) {
        console.log(message.content); 
        if (message.author.equals(bot.user)) returns;
        
                if (message.content == "Thomas") {
                    message.channel.sendMessage("The booger boi branden")
                    return 
                      console.log(message.content)
                }
});

bot.login(process.env.TOKEN);
