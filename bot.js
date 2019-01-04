const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`_help***By**BooDy**`,'https://www.twitch.tv/ksa.7772');
  console.log('Codes By BooDy');
});
client.on('message', message => {
     if (message.content === "_help") {
message.author.send(".Best Commands" + `
 ".**Codes..Server**"
**           _ping | سرعة الأتصال
              _id | معلومــات عــن حســابــك
            _say | ي كرر الكلام
               -avatar | صورتك في الدسكورد
".Server Commands"
            _roles | لمعرفت كم رتبه موجوده في اسرفر
              _clear | حذف الرسائل
            
".Bot Commands",
             _bot | عدد السيرفرات التي تستخدم البوت
".support"
           http://cutt.us/RolBot  | لـ أضافة البوت في سيرفرك
By..BooDy..Bot**
`);
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
    return message.reply(`** يمنع ارسال الانفايتات في هاذا السيرفر : ! **`)
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
            if (message.content.startsWith(prefix + "_lear")) {
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
