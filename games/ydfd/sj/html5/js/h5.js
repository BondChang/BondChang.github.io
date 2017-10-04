var Cookie = {
    //添加cookie 
    add : function(name, value, hours) {
        var life = new Date().getTime();
        life += hours * 1000 * 60;
        var cookieStr = name + "=" + escape(value) + ";expires=" + new Date(life).toGMTString();
        document.cookie = cookieStr;
    },
    //获取cookie值 
    get : function(name) {
        var cookies = document.cookie.split(";");
        if (cookies.length > 0) {
            var cookie = cookies[0].split("=");
            if (cookie[0] == name) return unescape(cookie[1]);
        }
        return null;
    },
    //删除cookie 
    remove : function(name) {
        var cookieStr = name + "=" + escape('null') + ";expires=" + new Date().toGMTString();
        document.cookie = cookieStr;
    }
}

var H5Interface =  {

	islandscape : 0,//0：未初始化，1：横屏，2：竖屏

	score : 0,
	
	percent : 0,

	PROGRESS_MAX : 50,
	
	progress : 0,
	
	isSpecial : false,
	
	_isShowResultPage : false,
	
	init : function()
	{
		var progressCss = '<link href="sj/html5/css/h5.css" rel="stylesheet">';
		var progressNode = '<div ></div> <div class="jin"><span style="width:80%" id="progressBar"></span></div> <div class="jtxt"></div>';
		
		var progressCssEle = document.createElement("link");
		progressCssEle.setAttribute("href", "sj/html5/css/h5.css");
		progressCssEle.setAttribute("rel", "stylesheet");
		
		var progressNodeEle = document.createElement("div");
		progressNodeEle.setAttribute("class", "wb");
		progressNodeEle.setAttribute("id", "progressBox");
		progressNodeEle.innerHTML = progressNode;
		
		(document.getElementsByTagName("head")[0]||document.body).appendChild(progressCssEle);
		document.body.appendChild(progressNodeEle);
	},
	
	playProgress : function()
	{
		H5Interface.init();
		var intervalId = setInterval(function()
		{
			++H5Interface.progress;
			H5Interface.setProgress(H5Interface.progress*2);
			if (H5Interface.progress >= H5Interface.PROGRESS_MAX)
			{
				H5Interface.removeProgress();
				clearInterval(intervalId);
			}
		}, 100);
		H5Interface.showWrap();
		H5Interface.rotationTip();
	},
	
	setProgress : function(percent)
	{
		var progressBar = document.getElementById("progressBar");
		progressBar.style.width = percent + "%";
	},
	
	removeProgress : function()
	{
		var progressBar = document.getElementById("progressBox");
		progressBar.parentNode.removeChild(progressBar);
	},

	submitActivityScore : function(game, score, activity)
	{
		if (H5Interface._isShowResultPage)
		{
			return;
		}
		H5Interface._isShowResultPage = true;
		H5Interface.score = score;
		
		
		
		if (H5Interface.isSpecial)
		{
			H5Interface._showSpecialResultPanel();
		}
		else
		{
			H5Interface._showCommonResultPanel();
		}
	},
	
	submitScore : function(game, score)
	{
		if (H5Interface._isShowResultPage)
		{
			return;
		}
		H5Interface._isShowResultPage = true;
		H5Interface.score = score;
		
		
		
		if (H5Interface.isSpecial)
		{
			H5Interface._showSpecialResultPanel();
		}
		else
		{
			H5Interface._showCommonResultPanel();
		}
	},
	
	_showCommonResultPanel : function()
	{
		var result_css = '<link href="sj/html5/css/common.css" rel="stylesheet">';
		
		var result_node = '<div class="txt"> ' + result() + ' <ul class="button"> <li><div class="endplay" id="replaybtn" onclick="hideResult();">再来一次</div> <li><div class="shares"><a href="#" onclick="dp_share();">炫耀一下</a></div> <li><div class="shares" onclick="clickMore();">更多游戏</div> </ul> </div>';
		
		
		
		var result_css_ele = document.createElement("link");
		result_css_ele.setAttribute("href", "sj/html5/css/common.css");
		result_css_ele.setAttribute("rel", "stylesheet");
		var result_node_ele = document.createElement("div");
		result_node_ele.setAttribute("class", "middle");
		result_node_ele.setAttribute("id", "tips01");
		result_node_ele.innerHTML = result_node;
		
		(document.getElementsByTagName("head")[0]||document.body).appendChild(result_css_ele);
		document.body.appendChild(result_node_ele);
	},
	
	_showSpecialResultPanel : function()
	{
		var result_node = '<div class="txt"> ' + result() + '</div> <ul class="button"> <li id="replaybtn" onclick="hideResult();"><strong>再来一次</strong> <li><span onclick="dp_share();">炫耀一下</span> </ul> <div class="link"><a class="more" href="#" onclick="clickMore();">更多游戏 </a></div>';
	

		var result_node_ele = document.createElement("div");
		result_node_ele.setAttribute("class", "middle");
		result_node_ele.setAttribute("id", "tips01");
		result_node_ele.innerHTML = result_node;
		
		document.body.appendChild(result_node_ele);
	},
	
	rotationTip:function()
	{
		window.addEventListener('orientationchange',H5Interface.showWrap,false);
	},
	
	showWrap:function()
	{
			if (H5Interface.islandscape == 0)
			{
				if (window.orientation == 0 || window.orientation == 180) 
				{
					//alert("H5Interface.islandscape = 2;");
					H5Interface.islandscape = 2;
				}
				else if  (window.orientation == 90 || window.orientation == -90) 
				{
					//alert("H5Interface.islandscape = 1;");
					H5Interface.islandscape = 1;
				}
			}
			var doc = document;
			var dq = function(ele)
			{
				return doc.querySelector(ele);
			}
    		//islandscape是0为竖，1 为横
    		var wbody = document.body;
			if (window.orientation == 0 || window.orientation == 180) 
			{
					if(dq('#usetips_v'))  wbody.removeChild(dq('#usetips_v'));
					if(dq('#usetips_h'))  wbody.removeChild(dq('#usetips_h'));
					if(islandscape==1 && !dq('#usergba_h'))
					{
						var divs = doc.createElement('div');
						divs.id = "usetips_h";
						divs.className = 'usewraps';
						divs.innerHTML = '<div class="tan"></div><div class="usergba_h"></div>';
						wbody.appendChild(divs);
					}
			}
			else if  (window.orientation == 90 || window.orientation == -90) 
			{
					if(dq('#usetips_v'))  wbody.removeChild(dq('#usetips_v'));
					if(dq('#usetips_h'))  wbody.removeChild(dq('#usetips_h'));
					if(islandscape==0 && !dq('#usergba_v'))
					{
						var divs = doc.createElement('div');
						divs.id = "usetips_v";
						divs.className = 'usewraps';
						divs.innerHTML = '<div class="tan"></div><div class="usergba_v"></div>';
						wbody.appendChild(divs);
					}
					
					if (islandscape && H5Interface.islandscape == 2)
					{
						//alert("sdjkk");
						window.location.reload();
					}
			}
			
			if (dq('#usetips_h'))
			{
				dq('#usetips_h').addEventListener('click',removeScreenHTip,false);
			}
			
			function removeScreenHTip()
			{
				if(dq('#usetips_h'))  wbody.removeChild(dq('#usetips_h'));
			}
			
			if (dq('#usetips_v'))
			{
				dq('#usetips_v').addEventListener('click',removeScreenVTip,false);
			}
			
			function removeScreenVTip()
			{
				if(dq('#usetips_v'))  wbody.removeChild(dq('#usetips_v'));
			}

	}
}
H5Interface.playProgress();
 function hideResult()
	{
		var wbody = document.body;
		wbody.removeChild(dq('#tips01'));
		H5Interface._isShowResultPage = false;
	}
	function dq(ele){

        return document.querySelector(ele);

    };
 