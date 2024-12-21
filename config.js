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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_02_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCbXBreGZqenV2dUpzOVY2T0RDbXZNZGNlcTlkTFRjRlVpZVpKSGpMY0lzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHbi1KUFRVRFRvLUlyVXhFOVludVlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5ZDg0NGJkLTdjMjgtNDM5Zi05MDE1LWE3YzFlYjUzYzU2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICA0MSxcbiAgICAgIDI0LFxuICAgICAgOTUsXG4gICAgICAyMyxcbiAgICAgIDE4MyxcbiAgICAgIDczLFxuICAgICAgMjQ2LFxuICAgICAgMTM3LFxuICAgICAgMjIzLFxuICAgICAgMjEzLFxuICAgICAgMTUsXG4gICAgICAxODIsXG4gICAgICA5NixcbiAgICAgIDIzOCxcbiAgICAgIDIwNSxcbiAgICAgIDIyNCxcbiAgICAgIDI0MyxcbiAgICAgIDg4LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMTE3LFxuICAgICAgMTMzLFxuICAgICAgMjE4LFxuICAgICAgNzYsXG4gICAgICAxNTUsXG4gICAgICAzMixcbiAgICAgIDIzNCxcbiAgICAgIDExNSxcbiAgICAgIDI0NCxcbiAgICAgIDI1MyxcbiAgICAgIDgsXG4gICAgICAxNTYsXG4gICAgICA4NyxcbiAgICAgIDE4NixcbiAgICAgIDE5NCxcbiAgICAgIDEyNSxcbiAgICAgIDc3LFxuICAgICAgMjQ4LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjQyVEFGTExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjQ2ODkxMTQ6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCSUcgRElDRVwiLFxuICAgIFwibGlkXCI6IFwiMTAwNzQ3MjMyNDY1MTM1OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YQnBkVUlFTWE5bkxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnRjNmJDdDhmdjNSUnAvcEFFNlUrOWF6SzVFM2loQWY4NnF0S2VrV0Zrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUR3oyY05BRU15K2laTU5vbFRNSjZobWxFSkdSemZQY0Q2UXFMbUZ4MDBQRDVvRjdhOWJ5U0FXWHM5VXlrWlNRK1NVOHdqenErOHp5alg3ZWhDM2VCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBUkdzcWpndjhlSG5JMHM4N1l1NXBBc1VMeVlwdW1ZUmpIS3NMMnBoTkpUNHVBYkJUQWRjdDB4Rk9vUmsxL2Q0SXY1OFU2eUtKcnJBb0xRYlRWekZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0Njg5MTE0OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODExMzM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRW1IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFbUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0ZlR0eG1hVC9oODVsSjE3VnU5NUQ4cWpVUFlMdkU1cGFRNXVHcHhKL2pzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMjYzNTYxOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDgxMTM0MzY3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Remember Frederick na Pablo get bot",
  ownername:process.env.OWNER_NAME|| "Pablo and Frederick",


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
