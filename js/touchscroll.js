var _0xcdca=["\x6D\x61\x74\x63\x68","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x54\x6F\x75\x63\x68\x45\x76\x65\x6E\x74","\x63\x72\x65\x61\x74\x65\x45\x76\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x70\x61\x67\x65\x59","\x74\x6F\x75\x63\x68\x65\x73","\x73\x63\x72\x6F\x6C\x6C\x4C\x65\x66\x74","\x70\x61\x67\x65\x58","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65","\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74","\x6F\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x73\x63\x72\x6F\x6C\x6C\x57\x69\x64\x74\x68","\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68","\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x73\x75\x62\x73\x74\x72","\x34","","\x6A\x6F\x69\x6E","\x6F\x66\x66\x73\x65\x74\x4C\x65\x66\x74","\x6F\x66\x66\x73\x65\x74\x54\x6F\x70","\x6F\x66\x66\x73\x65\x74\x50\x61\x72\x65\x6E\x74"];function isTouchDevice(){if((navigator[_0xcdca[1]][_0xcdca[0]](/android 3/i))|| (navigator[_0xcdca[1]][_0xcdca[0]](/honeycomb/i))){return false};try{document[_0xcdca[3]](_0xcdca[2]);return true}catch(e){return false}}function touchScroll(_0x30f6x3){if(isTouchDevice()){var _0x30f6x4=document[_0xcdca[4]](_0x30f6x3);var _0x30f6x5=0;var _0x30f6x6=0;document[_0xcdca[4]](_0x30f6x3)[_0xcdca[11]](_0xcdca[5],function(_0x30f6x7){_0x30f6x5= this[_0xcdca[6]]+ _0x30f6x7[_0xcdca[8]][0][_0xcdca[7]];_0x30f6x6= this[_0xcdca[9]]+ _0x30f6x7[_0xcdca[8]][0][_0xcdca[10]]},false);document[_0xcdca[4]](_0x30f6x3)[_0xcdca[11]](_0xcdca[12],function(_0x30f6x7){if((this[_0xcdca[6]]< this[_0xcdca[13]]- this[_0xcdca[14]]&& this[_0xcdca[6]]+ _0x30f6x7[_0xcdca[8]][0][_0xcdca[7]]< _0x30f6x5- 5)|| (this[_0xcdca[6]]!= 0&& this[_0xcdca[6]]+ _0x30f6x7[_0xcdca[8]][0][_0xcdca[7]]> _0x30f6x5+ 5)){_0x30f6x7[_0xcdca[15]]()};if((this[_0xcdca[9]]< this[_0xcdca[16]]- this[_0xcdca[17]]&& this[_0xcdca[9]]+ _0x30f6x7[_0xcdca[8]][0][_0xcdca[10]]< _0x30f6x6- 5)|| (this[_0xcdca[9]]!= 0&& this[_0xcdca[9]]+ _0x30f6x7[_0xcdca[8]][0][_0xcdca[10]]> _0x30f6x6+ 5)){_0x30f6x7[_0xcdca[15]]()};this[_0xcdca[6]]= _0x30f6x5- _0x30f6x7[_0xcdca[8]][0][_0xcdca[7]];this[_0xcdca[9]]= _0x30f6x6- _0x30f6x7[_0xcdca[8]][0][_0xcdca[10]]},false)}}function uuid(){var _0x30f6x9=[];var _0x30f6xa=_0xcdca[18];for(var _0x30f6xb=0;_0x30f6xb< 36;_0x30f6xb++){_0x30f6x9[_0x30f6xb]= _0x30f6xa[_0xcdca[21]](Math[_0xcdca[20]](Math[_0xcdca[19]]()* 0x10),1)};_0x30f6x9[14]= _0xcdca[22];_0x30f6x9[19]= _0x30f6xa[_0xcdca[21]]((_0x30f6x9[19]& 0x3)| 0x8,1);_0x30f6x9[8]= _0x30f6x9[13]= _0x30f6x9[18]= _0x30f6x9[23]= _0xcdca[23];var uuid=_0x30f6x9[_0xcdca[24]](_0xcdca[23]);return uuid}function getElementPoint(_0x30f6x3){var _0x30f6xd=document[_0xcdca[4]](_0x30f6x3);var _0x30f6xe=0,_0x30f6xf=0;while(_0x30f6xd[_0xcdca[27]]){_0x30f6xe+= _0x30f6xd[_0xcdca[25]];_0x30f6xf+= _0x30f6xd[_0xcdca[26]];_0x30f6xd= _0x30f6xd[_0xcdca[27]]};_0x30f6xe+= _0x30f6xd[_0xcdca[25]];_0x30f6xf+= _0x30f6xd[_0xcdca[26]];return {"\x78":_0x30f6xe,"\x79":_0x30f6xf}}