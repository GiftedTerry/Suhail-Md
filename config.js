const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348021428282";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_30_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBQTklkcHVzUmpxOWVINnQ3dW1ZbWxBdFpEejZ5YjdFbHJ5cDQzeFhub289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAyMTQyODI4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDdGOUQ5M0E2QzJDMDY0MTQzQzBDRDBGRDc2NjgwMjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDAyNjIzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGJlSUFidDFRVTJybTNMVjMyYmh1d1wiLFxuICBcInBob25lSWRcIjogXCJjYWM1M2NkNi0xNjhhLTQ5NzAtYWYyMy00NjkxMzQwZGYxYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxMCxcbiAgICAgIDYsXG4gICAgICAyMTAsXG4gICAgICAxMzksXG4gICAgICAxOTIsXG4gICAgICAyMzksXG4gICAgICAxNTMsXG4gICAgICAxMTUsXG4gICAgICA2OCxcbiAgICAgIDIwOCxcbiAgICAgIDIyMyxcbiAgICAgIDI1LFxuICAgICAgOTMsXG4gICAgICAxNTksXG4gICAgICAyMzcsXG4gICAgICAyNDcsXG4gICAgICAxOCxcbiAgICAgIDIwNCxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDQ1LFxuICAgICAgMTU2LFxuICAgICAgNixcbiAgICAgIDExNSxcbiAgICAgIDgsXG4gICAgICAxNDgsXG4gICAgICAyMjYsXG4gICAgICAxNTAsXG4gICAgICAxNTUsXG4gICAgICAyNCxcbiAgICAgIDI2LFxuICAgICAgMjA5LFxuICAgICAgMjQzLFxuICAgICAgMjE3LFxuICAgICAgMjM3LFxuICAgICAgMTA2LFxuICAgICAgMTAxLFxuICAgICAgMjE2LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1ZUjk2UlkxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIxNDI4MjgyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NjczNTY4ODQyOTgwNzoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSRUlHTlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liWWdJa0dFTGZRbExRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN1FtS25JOFJaMUtPR2Y0OHYwNy8yUlVsYzNSVU1PU1llQmhRWkhiRURHbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvN0JmWXFnU2VkL25ydG1aS0s0ZS9PQWs0MmtkeHphQVVvTUxSbWJwUHpDd3YyVTFJd0tzZXU5K2R0UEFIMjE0U2JtZllPWVJaUVZUSkdvTjZNRnpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJaXl0VytkWEE0b3JzeWkzeld0c3dJcXBNQkVKUUk3dE5SVjJiNkJKZUpRaHlVbXIwNnVxZzFaL29ZMXQrQmpoNU0waUExSnpuT3RVTWJIemxnaU5DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIxNDI4MjgyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAwMjYxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsxRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzFGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUmwwOHAwUkZlc2JoWHJ1L2toRklybHlDNUU4VWNGby9udzBPUzRuN2p1OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI5NDk4Mzc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzMjU0MTYyMjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
