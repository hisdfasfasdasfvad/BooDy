const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "_";
client.on('ready', () => {
  client.user.setGame(`_help***By**BooDy**`,'https://www.twitch.tv/ksa.7772');
  console.log('Codes By BooDy');
});


//====================================================================
//command = kick

client.on('message',async message => {
 if (message.author.kick) return;
 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 if (command == "kick") {
              if(!message.channel.guild) return;
        
 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
 let user = message.mentions.users.first();
 let reason = message.content.split(" ").slice(2).join(" ");

 if (message.mentions.users.size < 1) return message.reply("منشن شخص");
 if(!reason) return message.reply ("اكتب سبب الطرد");
 if (!message.guild.member(user)
 .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

 message.guild.member(user).kick(7, user);

 const banembed = new Discord.RichEmbed()
 .setAuthor('Kicked !', user.displayAvatarURL)
 .setColor("RANDOM")
 .setTimestamp()
 .addField("User:",  `[ + ${user.tag} + ]`)
 .addField("By:", `[  + ${message.author.tag} +  ]`)
 .addField("Reason:", `[ + ${reason} +  ]`)
message.guild.channels.find("name","logs").send({embed : banembed})
}
});

//====================================================================
//command = Rainbow

client.on('message', message => {//new msg event
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
   let role = message.guild.roles.find('name', 'Rainbow Rank')
   if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
 //start of create role 
 if(!role){
   rainbow =  message.guild.createRole({
  name: "Rainbow Rank",//the role will create name
  color: "#000000",//the default color
  permissions:[]//the permissions
//end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})

client.on('ready', () => {//new ready event
 setInterval(function(){
     client.guilds.forEach(g => {
                 var role = g.roles.find('name', 'Rainbow Rank');//rainbow role name
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 1500);//the rainbow time
})

client.on('message', message => {
     if (message.content === prefix+"رابط") {
message.author.send("https://discord.gg/zgVqJHp");
    }
});

client.on('message', message => {
     if (message.content === "_help") {
message.author.send(".Best Commands" + `
 ".**Codes..Server**"
**           _ping | سرعة الأتصال
              _id | معلومــات عــن حســابــك
            _say | ي كرر الكلام
               _avatar | صورتك في الدسكورد
".Server Commands"
            _roles | لمعرفت كم رتبه موجوده في اسرفر
              _clear | حذف الرسائل
            _kick | طرد شخص من السيرفر 


".Bot Commands",
             _bot | عدد السيرفرات التي تستخدم البوت
             _يعطيك رابط سيرفر | رابط
".support"
           http://cutt.us/RolBot  | لـ أضافة البوت في سيرفرك
By..BooDy..Bot**
`);
    }
});
 
 
client.on('message', message => {
if(message.content.includes('discord.gg')){
                                  if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
if (!message.member.hasPermissions(['ADMINISTRATOR'])){
message.delete()
return message.reply(`** Not allowed to advertising Here :angry: ! **`)
}
}
});
    client.on('message', message => {
     if (message.content === "_id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الحــساب")
               .setFooter(`RolBot💞.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
       
  message.channel.sendEmbed(embed);
    }
});
 client.on('message', message => {
   
if (message.content === '_avatar') {
 
    message.channel.sendMessage(`` + message.author.avatarURL + `  ,?`);
  }
});
 
client.on("message", message => {
      if (message.content === "_ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
 
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "_clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "RolBot??"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
});
 
 
client.on('message', message => {
    if (message.content === "_roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
 
 
 
client.login(process.env.BOT_TOKEN);
