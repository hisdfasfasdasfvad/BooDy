const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";
const token = process.env.BOT_TOKEN;
const owner = "``TGS_Super | Huler#2399``";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${prefix}help | Bot ON ${client.guilds.size} Servers!`, `${prefix}help | Bot has ${client.users.size} Users!`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`           [Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`  Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('  Informations :')
  console.log('')
  console.log(`  servers! [ " ${client.guilds.size} " ]`);
  console.log(`  Users! [ " ${client.users.size} " ]`);
  console.log(`  channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════]╗')
  console.log('  Bot Is Online')
  console.log('╚[═════════════]╝')
  console.log('')
  console.log('')
});


// ================================================================================





client.on("message", message => {
    if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#111111")
      .setDescription(`**
${prefix}ban
${prefix}kick
${prefix}mute
${prefix}unmute
**`)
   message.channel.sendEmbed(embed)
   
   }
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
message.guild.channels.find("name","➜✽『log-family』").send({embed : banembed})
}
});

//====================================================================
//command = clear

client.on("message", message => {
var args = message.content.substring(prefix.length).split(" ");
 if (message.content.startsWith(prefix+"clear")) {
   if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
             }

});

//====================================================================
//command = ban

client.on('message', async message => {
 var moment = require('moment');
 var mmss = require('ms')
 let date = moment().format('Do MMMM YYYY , hh:mm');
 let User = message.mentions.users.first();
 let Reason = message.content.split(" ").slice(3).join(" ");
 let messageArray = message.content.split(" ");
 let time = messageArray[2];
 if(message.content.startsWith(prefix + "ban")) {
   if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**ماعندك برمشن :X:**");
    if(!User) message.channel.send("Mention Someone");
    if(User.id === client.user.id) return message.channel.send("** :X: ماتقدر تبند البوت**");
    if(User.id === message.guild.owner.id) return message.channel.send("** :X:لااستطيع تبنيد الاونر **");
    if(!time) return message.channel.send("**- اكتب الوقت**");
    if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('** :X: البوت لايدعم هذا الوقت**');
   if(!Reason) Reason = "Null";
    let banEmbed = new Discord.RichEmbed()
    .setAuthor(`New Banned User !`)
    .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
    .addField('- Banned By: ',message.author.tag,true)
    .addField('- Banned User:', `${User}`)
    .addField('- Reason:',Reason,true)
    .addField('- Time & Date:', `${message.createdAt}`)
    .addField('- Duration:',time,true)
    .setFooter(message.author.tag,message.author.avatarURL);
    let logchannel = message.guild.channels.find(`name`, "➜✽『log-family』");
if(!logchannel) return message.channel.send("Can't find log channel.");
incidentchannel.send(banEmbed);
message.channel.send(`**:white_check_mark: ${User} has been banned :airplane: **`).then(() => message.guild.member(User).ban({reason: Reason}))
User.send(`**:airplane: You are has been banned in ${message.guild.name} reason: ${Reason} by: ${message.author.tag} :airplane:**`)
    .then(() => { setTimeout(() => {
        message.guild.unban(User);
    }, mmss(time));
 });
}
});

//====================================================================
//command = mute

client.on('message', async message =>{
if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)
message.guild.channels.find("name","➜✽『log-family』").send({embed : muteembed})
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`**     
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
====================================================
${message.author.tag} تمت معاقبتك بواسطة
====================================================
[ ${reason} ] : السبب
====================================================
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
**`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
user.send( muteembeddm);
}
if(command === `unmute`) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

let role = message.guild.roles.find (r => r.name === "Muted");

if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

await toMute.removeRole(role)
message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

return;

}

});

// ================================================================================
const developers = ["531059183282421800","359023200371212298"]
var adminprefix = '!'
client.on('message', message => {
    var argresult = message.content.split(``).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`:white_check_mark:   ${argresult}`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:white_check_mark:   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:white_check_mark:   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`:white_check_mark:`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :${argresult} `);
}
});

// ================================================================================
client.login(token);
