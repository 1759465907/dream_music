     //引入基于小程序的wxmock
     var Mock = require('./WxMock.js')
     //基于ajax请求地址的模拟数据
     //格式： Mock.mock('请求地址',数据模板)

     var users = Mock.mock('http://localhost:3000/mock/getVideoData', {
       "codeText": "成功返回",
       "code": 200,
       "data": [{
         "type": 1,
         "displayed": false,
         "alg": "onlineHotGroup",
         "extAlg": null,
         "data": {
           "alg": "onlineHotGroup",
           "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
           "threadId": "R_VI_62_D2669D47F7011995AED7B88D058FD013",
           "coverUrl": "https://p1.music.126.net/t0eSpeyX7dBI3pzKRTV4qw==/109951163725630341.jpg",
           "height": 720,
           "width": 1280,
           "title": "崔子格 一首《卜卦》，听了那么多年，怎么听都不够！",
           "description": "崔子格 一首《卜卦》，听了那么多年，怎么听都不够！",
           "commentCount": 1255,
           "shareCount": 3592,
           "resolutions": [{
             "resolution": 240,
             "size": 23063424
           }, {
             "resolution": 480,
             "size": 39170623
           }, {
             "resolution": 720,
             "size": 67630971
           }],
           "creator": {
             "defaultAvatar": false,
             "province": 450000,
             "authStatus": 0,
             "followed": false,
             "avatarUrl": "http://p1.music.126.net/OvMvp3KTR215HKWOZ-jvcw==/109951163716272270.jpg",
             "accountStatus": 0,
             "gender": 0,
             "city": 450100,
             "birthday": 542390400000,
             "userId": 1694861984,
             "userType": 0,
             "nickname": "丽枫玉玉",
             "signature": "分享好音乐好音质的唯美歌曲",
             "description": "",
             "detailDescription": "",
             "avatarImgId": 109951163716272270,
             "backgroundImgId": 109951162868126480,
             "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
             "authority": 0,
             "mutual": false,
             "expertTags": null,
             "experts": null,
             "djStatus": 0,
             "vipType": 0,
             "remarkName": null,
             "backgroundImgIdStr": "109951162868126486",
             "avatarImgIdStr": "109951163716272270"
           },
           "urlInfo": null,
           "videoGroup": [{
             "id": 58100,
             "name": "现场",
             "alg": null
           }, {
             "id": 9102,
             "name": "演唱会",
             "alg": null
           }, {
             "id": 59101,
             "name": "华语现场",
             "alg": null
           }, {
             "id": 57108,
             "name": "流行现场",
             "alg": null
           }, {
             "id": 1100,
             "name": "音乐现场",
             "alg": null
           }, {
             "id": 5100,
             "name": "音乐",
             "alg": null
           }, {
             "id": 72116,
             "name": "短片",
             "alg": null
           }, {
             "id": 23116,
             "name": "音乐推荐",
             "alg": null
           }],
           "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2186485187_3BugHRC2.webp?wsSecret=12095e0f2507b7938bd82b9ec3b39757&wsTime=1669437633",
           "previewDurationms": 4000,
           "hasRelatedGameAd": false,
           "markTypes": null,
           "relateSong": [],
           "relatedInfo": null,
           "videoUserLiveInfo": null,
           "vid": "D2669D47F7011995AED7B88D058FD013",
           "durationms": 214994,
           "playTime": 2700257,
           "praisedCount": 14413,
           "praised": false,
           "subscribed": false
         }
       }, {
         "type": 1,
         "displayed": false,
         "alg": "onlineHotGroup",
         "extAlg": null,
         "data": {
           "alg": "onlineHotGroup",
           "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
           "threadId": "R_VI_62_B69FDCD2926265CEF8FCDE065F5A6124",
           "coverUrl": "https://p1.music.126.net/AG8ijNJV4K-QcxgG-DtFLg==/109951163755374726.jpg",
           "height": 1080,
           "width": 1920,
           "title": "现场版 超燃 'SOLO' + '뚜두뚜두(DDU-DU DDU-DU)",
           "description": "现场版 超燃 'SOLO' + '뚜두뚜두(DDU-DU DDU-DU)",
           "commentCount": 1133,
           "shareCount": 1849,
           "resolutions": [{
             "resolution": 240,
             "size": 108410268
           }, {
             "resolution": 480,
             "size": 184674098
           }, {
             "resolution": 720,
             "size": 279528736
           }, {
             "resolution": 1080,
             "size": 384827315
           }],
           "creator": {
             "defaultAvatar": false,
             "province": 110000,
             "authStatus": 0,
             "followed": false,
             "avatarUrl": "http://p1.music.126.net/R7ufUH3WHTZp8Lts2W_NZw==/109951163072064506.jpg",
             "accountStatus": 0,
             "gender": 2,
             "city": 110101,
             "birthday": 946656000000,
             "userId": 469563109,
             "userType": 0,
             "nickname": "红豆热影铺",
             "signature": "经典、吐槽、拉郎拉娘配。",
             "description": "",
             "detailDescription": "",
             "avatarImgId": 109951163072064510,
             "backgroundImgId": 109951162910626850,
             "backgroundUrl": "http://p1.music.126.net/WTMmqcYdKjFIyeZM9qkTTw==/109951162910626842.jpg",
             "authority": 0,
             "mutual": false,
             "expertTags": null,
             "experts": {
               "1": "视频达人(二次元)"
             },
             "djStatus": 0,
             "vipType": 0,
             "remarkName": null,
             "backgroundImgIdStr": "109951162910626842",
             "avatarImgIdStr": "109951163072064506"
           },
           "urlInfo": null,
           "videoGroup": [{
             "id": 58100,
             "name": "现场",
             "alg": null
           }, {
             "id": 1101,
             "name": "舞蹈",
             "alg": null
           }, {
             "id": 57107,
             "name": "韩语现场",
             "alg": null
           }, {
             "id": 57108,
             "name": "流行现场",
             "alg": null
           }, {
             "id": 59108,
             "name": "巡演现场",
             "alg": null
           }, {
             "id": 1100,
             "name": "音乐现场",
             "alg": null
           }, {
             "id": 5100,
             "name": "音乐",
             "alg": null
           }, {
             "id": 92105,
             "name": "BLACKPINK",
             "alg": null
           }],
           "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2220206600_cEIVTTTt.webp?wsSecret=62d3174d2dc480d4edd114022498e9c8&wsTime=1669437633",
           "previewDurationms": 4000,
           "hasRelatedGameAd": false,
           "markTypes": [101],
           "relateSong": [{
             "name": "DDU-DU DDU-DU",
             "id": 1325896374,
             "pst": 0,
             "t": 0,
             "ar": [{
               "id": 12068017,
               "name": "BLACKPINK",
               "tns": [],
               "alias": []
             }],
             "alia": [],
             "pop": 100,
             "st": 0,
             "rt": null,
             "fee": 8,
             "v": 25,
             "crbt": null,
             "cf": "",
             "al": {
               "id": 74266151,
               "name": "BLACKPINK IN YOUR AREA",
               "picUrl": "http://p3.music.126.net/yKysEblB7-HOVrUCjvRhqw==/109951163678530141.jpg",
               "tns": [],
               "pic_str": "109951163678530141",
               "pic": 109951163678530140
             },
             "dt": 209493,
             "h": {
               "br": 320000,
               "fid": 0,
               "size": 8382215,
               "vd": -64475
             },
             "m": {
               "br": 192000,
               "fid": 0,
               "size": 5029346,
               "vd": -64475
             },
             "l": {
               "br": 128000,
               "fid": 0,
               "size": 3352912,
               "vd": -64475
             },
             "a": null,
             "cd": "1",
             "no": 6,
             "rtUrl": null,
             "ftype": 0,
             "rtUrls": [],
             "djId": 0,
             "copyright": 0,
             "s_id": 0,
             "rurl": null,
             "mst": 9,
             "cp": 457010,
             "mv": 14541193,
             "rtype": 0,
             "publishTime": 1542902400000,
             "privilege": {
               "id": 1325896374,
               "fee": 8,
               "payed": 0,
               "st": 0,
               "pl": 128000,
               "dl": 0,
               "sp": 7,
               "cp": 1,
               "subp": 1,
               "cs": false,
               "maxbr": 999000,
               "fl": 128000,
               "toast": false,
               "flag": 261,
               "preSell": false
             }
           }],
           "relatedInfo": null,
           "videoUserLiveInfo": null,
           "vid": "B69FDCD2926265CEF8FCDE065F5A6124",
           "durationms": 463122,
           "playTime": 2560236,
           "praisedCount": 25380,
           "praised": false,
           "subscribed": false
         }
       }, {
         "type": 1,
         "displayed": false,
         "alg": "onlineHotGroup",
         "extAlg": null,
         "data": {
           "alg": "onlineHotGroup",
           "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
           "threadId": "R_VI_62_247ACF98730B733DECB44B1493DE063B",
           "coverUrl": "https://p1.music.126.net/l4JD1v8chWl__NrxwVS5fQ==/109951163573308314.jpg",
           "height": 720,
           "width": 1280,
           "title": "Taylor Swift格莱美博物馆现场表演热单 Wildest Dreams",
           "description": "#Taylor Swift#于格莱美博物馆（The GRAMMY Museum）现场表演电吉他版“狂野之梦”《Wildest Dream》官方视频！一把电吉他,让这本来虚幻飘渺的梦境变得更加令人心驰神往,我仿佛又看见了那随风而起的黄色纱裙.明知困境重重却还要坠入其中,或许这就是Wildest Dream的魔力！",
           "commentCount": 57,
           "shareCount": 306,
           "resolutions": [{
             "resolution": 240,
             "size": 13348512
           }, {
             "resolution": 480,
             "size": 21035114
           }, {
             "resolution": 720,
             "size": 30396038
           }],
           "creator": {
             "defaultAvatar": false,
             "province": 1000000,
             "authStatus": 0,
             "followed": false,
             "avatarUrl": "http://p1.music.126.net/vUMDn0fg2PGvt1RNN--bdw==/109951164195226542.jpg",
             "accountStatus": 0,
             "gender": 1,
             "city": 1010000,
             "birthday": 842716800000,
             "userId": 1329747020,
             "userType": 204,
             "nickname": "罗伊佐",
             "signature": "Welcome back to my channel,How are ya!",
             "description": "",
             "detailDescription": "",
             "avatarImgId": 109951164195226540,
             "backgroundImgId": 109951165430502450,
             "backgroundUrl": "http://p1.music.126.net/0iCQUuyLWkMOdI5-LCfqXw==/109951165430502447.jpg",
             "authority": 0,
             "mutual": false,
             "expertTags": null,
             "experts": {
               "1": "音乐视频达人"
             },
             "djStatus": 10,
             "vipType": 0,
             "remarkName": null,
             "backgroundImgIdStr": "109951165430502447",
             "avatarImgIdStr": "109951164195226542"
           },
           "urlInfo": null,
           "videoGroup": [{
             "id": 58100,
             "name": "现场",
             "alg": null
           }, {
             "id": 57106,
             "name": "欧美现场",
             "alg": null
           }, {
             "id": 57108,
             "name": "流行现场",
             "alg": null
           }, {
             "id": 59108,
             "name": "巡演现场",
             "alg": null
           }, {
             "id": 1100,
             "name": "音乐现场",
             "alg": null
           }, {
             "id": 5100,
             "name": "音乐",
             "alg": null
           }, {
             "id": 64100,
             "name": "Taylor Swift",
             "alg": null
           }, {
             "id": 16148,
             "name": "电吉他",
             "alg": null
           }, {
             "id": 14191,
             "name": "清新",
             "alg": null
           }],
           "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_1509019650_QchCKKiz.webp?wsSecret=ce63165fc7dfcd3b5d0ccebfaf34157a&wsTime=1669437633",
           "previewDurationms": 4000,
           "hasRelatedGameAd": false,
           "markTypes": null,
           "relateSong": [{
             "name": "Wildest Dreams",
             "id": 490173581,
             "pst": 0,
             "t": 0,
             "ar": [{
               "id": 12779625,
               "name": "Braunshall",
               "tns": [],
               "alias": []
             }, {
               "id": 44266,
               "name": "Taylor Swift",
               "tns": [],
               "alias": []
             }, {
               "id": 13171685,
               "name": "Max Martin",
               "tns": [],
               "alias": []
             }, {
               "id": 13392402,
               "name": "Shellback",
               "tns": [],
               "alias": []
             }],
             "alia": [],
             "pop": 75,
             "st": 0,
             "rt": null,
             "fee": 8,
             "v": 10,
             "crbt": null,
             "cf": "",
             "al": {
               "id": 35747448,
               "name": "January 2017 Fusion Compilation Pop - FolK - Electro",
               "picUrl": "http://p3.music.126.net/jzuJayudPw0P2r5N1WSfPw==/18288176905349465.jpg",
               "tns": [],
               "pic_str": "18288176905349465",
               "pic": 18288176905349464
             },
             "dt": 219834,
             "h": {
               "br": 320000,
               "fid": 0,
               "size": 8795995,
               "vd": -55552
             },
             "m": {
               "br": 192000,
               "fid": 0,
               "size": 5277614,
               "vd": -55552
             },
             "l": {
               "br": 128000,
               "fid": 0,
               "size": 3518424,
               "vd": -55552
             },
             "a": null,
             "cd": "1",
             "no": 15,
             "rtUrl": null,
             "ftype": 0,
             "rtUrls": [],
             "djId": 0,
             "copyright": 1,
             "s_id": 0,
             "rurl": null,
             "mst": 9,
             "cp": 405025,
             "mv": 0,
             "rtype": 0,
             "publishTime": 1484582400007,
             "privilege": {
               "id": 490173581,
               "fee": 8,
               "payed": 0,
               "st": 0,
               "pl": 128000,
               "dl": 0,
               "sp": 7,
               "cp": 1,
               "subp": 1,
               "cs": false,
               "maxbr": 999000,
               "fl": 128000,
               "toast": false,
               "flag": 0,
               "preSell": false
             }
           }],
           "relatedInfo": null,
           "videoUserLiveInfo": null,
           "vid": "247ACF98730B733DECB44B1493DE063B",
           "durationms": 235733,
           "playTime": 144937,
           "praisedCount": 1695,
           "praised": false,
           "subscribed": false
         }
       }],
     })
     export default {
       users,
     }