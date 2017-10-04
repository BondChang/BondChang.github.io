/**
* Created with JetBrains WebStorm.
* User: Administrator
* Date: 14-8-18
* Time: 上午11:43
* To change this template use File | Settings | File Templates.
*/
var imgUrl = "/icon.png";
//var lineLinkAfterShare = "http://app.gzlankong.com/200game/";
var lineLink = window.location.href;
var descContent = '我在《基友捡肥皂》成功捡取肥皂,你也来玩吧';
var shareTitle = '基友捡肥皂';
var appid = '';

function resetUrl()
{
    var str = window.location.href;
    var strs = str.split("/");
//    for(var i=0;i<strs.length;i++)
//    {
//        console.log('strs[i]: ' + strs[i]);
//    }
    var nextUrl = "http:/";
    for(var i=2;i<strs.length - 1;i++)
    {
        nextUrl += '/' + strs[i];
    }
//    console.log( 'nextUrl: ' + nextUrl );

    imgUrl = nextUrl + imgUrl;
//    console.log("imgUrl: " + imgUrl );
};
resetUrl();

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
//        "img_width": "200",
//        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        //_report('send_msg', res.err_msg);
//        for( var i in res)
//        {
//            alert(i+" "+res[i]);
//        }
        //err_msg send_app_msg:cancel
        //err_msg send_app_msg:ok
        if( res["err_msg"] == "send_app_msg:ok" )
        {
            document.location.href = lineLinkAfterShare;
        }
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
//        "img_width": "200",
//        "img_height": "200",
        "link": lineLink,
        "desc": shareTitle,
        "title": descContent
    }, function(res) {
        //_report('timeline', res.err_msg);
        if( res["err_msg"] == "send_app_msg:ok" )
        {
            document.location.href = lineLinkAfterShare;
        }
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink
    }, function(res) {
        //_report('weibo', res.err_msg);
        document.location.href = lineLinkAfterShare;
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('showOptionMenu');
    WeixinJSBridge.call('hideToolbar');
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });

}, false);