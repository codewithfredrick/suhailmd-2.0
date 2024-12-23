const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_31_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwL08xRDc1S3FSbEJtdDN0UGI0OTc1WWV6UXUxd2NzTU4zTGdaL3JRdENrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2RHJCdkkxNFF1Q2RUYkpDOS1ENHNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhNTFmZWJkLTVkMDEtNGU5NS1hMTc0LTQyOWNkODYwYjU2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxOTIsXG4gICAgICAxMjcsXG4gICAgICA2OSxcbiAgICAgIDE3OSxcbiAgICAgIDE0NixcbiAgICAgIDIyMyxcbiAgICAgIDEyOSxcbiAgICAgIDk0LFxuICAgICAgMzIsXG4gICAgICA0MSxcbiAgICAgIDIzNyxcbiAgICAgIDIzNixcbiAgICAgIDU5LFxuICAgICAgNjUsXG4gICAgICAyMzEsXG4gICAgICAyMDksXG4gICAgICAxMDAsXG4gICAgICAxNzMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDEwMSxcbiAgICAgIDg5LFxuICAgICAgMTc1LFxuICAgICAgMzMsXG4gICAgICAxMixcbiAgICAgIDEwNSxcbiAgICAgIDIzOCxcbiAgICAgIDE5NSxcbiAgICAgIDY1LFxuICAgICAgNjQsXG4gICAgICAxMDQsXG4gICAgICAxMjgsXG4gICAgICAxMzQsXG4gICAgICAyMDIsXG4gICAgICAxNzQsXG4gICAgICAxMDYsXG4gICAgICAxODUsXG4gICAgICA3LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR2N0NnNLRUpMNHBMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkp0YzZiQ3Q4ZnYzUlJwL3BBRTZVKzlheks1RTNpaEFmODZxdEtla1dGa3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiby93WTE0Yi8zMkcydWFvc1lIbHQzcHNGY0JENkZQS243SEpLa0orUVJjUVgrRllMb21YZW5GSWNnS21xQ1JJOUJCSFI0Rlo2eDNHemN4aFFIbTkwQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXJjc2l5d0JScDd1dHhUbVVyVnYrcjZLaWU3c013OE85THhYS3puOG9IUUJtakdhMUJvVit5WVNvNDVwMWhrc1hueENOQUJqL01ZdVlra3Q5M0N2amc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY0Njg5MTE0OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQklHIERJQ0VcIixcbiAgICBcImxpZFwiOiBcIjEwMDc0NzIzMjQ2NTEzNToyN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjQ2ODkxMTQ6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5NDk5MTFcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
