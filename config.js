const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94773283124'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94773283124"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09OeXpESUlBK2tIRUkweEdRK1lRR3pGenFmcTZNNWt2RUtiaEdBTHNubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkNZMlJIaFVFNHU3MzFkUHY2bW1jWHBnWm9OL21NSEZzWERvbHVPTTJXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1JLRGtUWWVLOFNnU1FQOWVGd0xGcjk4b05uWVhPN21VSDlaYmhJREcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdzdydnZ3UlhWeE1Qb1A4K3ZnVnJwQXg4ZFB5YVUyZFVWWVNFelJpMW5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNKzNOTzRFbHo4UjBNWlhNM3U0c2N2U2Z1b3pJTTNWMmUveHpmSnJiSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFsMWxSS2NaeTZWZmRkV0FUMWFkUm9NbWl0U3ZEMXcrUUgzWHlFbkg2SFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09CaW44YWJJMkgzMDFkZ09mWWJLUHdVS0hsVWI1bGozM0RKVElUZTlFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienpTc240dURVSXNORXpqMUJ2anNDa0hzR2hmNVZWSjBXM2d2ZEJXVzMyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM4QnJyT0oxc2FaMXBBNE84K21ERXJNYXE5TlE1aUp2dHlsVEw4ZmJLNlhuY3VkNTd3WGhUL3J0dGc2VXRsK254b1hYMm9sWm8zSTBsbXNQdWJkdkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IkF4VGY1b2V6OW5mdmQ3OUtzeU9pOGlORkRUa1RIcURYSlR5SUtQcDViWEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTM3MzEyMjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDEzRDlEODU1MzM5NTYyRDEwMTkyNzc5RTkzQkIxQUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwODc4MzQyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid0tGVzVhQktUdmVLaWQwQXM4b3RsdyIsInBob25lSWQiOiJhMmMyZjRlZS1iZWMyLTQ2NmItYjM4MC1mYjBiODMzZmExOWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR082NDMwVzFNTmEwV2UyUU5XSThETm9WV1ZFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoYTMxVFVFa1BDTzRTSytpblJGOW1NV0xxUk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN1puSVFCRUxmdTU2NEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXV1VaUHoyTHBaSXlYNzkrWk1tbWl2N2ZxaVRmMktHT1d2WmFjczE5V1U4PSIsImFjY291bnRTaWduYXR1cmUiOiIxU3hxeGYvcHhXT3d2Y25HOEk1MmI1cU0zQ3BKNmhvYVBBWExoMThneEtLc0grMlU1c05wbHAxb25RWTJUR2ZaTDQ4bktsaEhsa1k5akRVbmZWa2ZDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU0FVa00yUUFKKzA4OEtMN1ZWVHZpdjVvZGpGbmxuUUo0aXl1MmFJZGY4Z20yUWNwUmVjWlAvQUdId2JNMDlNS2Mwc3ZoNWJEMFRJcmt6TW1TMEt6Q1E9PSJ9LCJtZSI6eyJpZCI6Ijk0NzEzNzMxMjI5OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdPU1QifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTM3MzEyMjk6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmxsR1Q4OWk2V1NNbCsvZm1USnBvciszNm9rMzlpaGpscjJXbkxOZlZsUCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwODc4MzQxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNVk4ifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'GOST BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'GOST' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
