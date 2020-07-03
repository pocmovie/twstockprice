/*
Sublime編譯: https://ithelp.ithome.com.tw/articles/10184828
爬蟲相關:
https://tutorials.webduino.io/zh-tw/docs/socket/useful/exchange-nodejs.html
https://larrylu.blog/nodejs-request-cheerio-weather-414e33f45c7d
*/
var request = require("request");
var cheerio = require("cheerio");

var stock = function(stockid) {
	request({
		//鉅亨網
		url: "https://invest.cnyes.com/twstock/tws/"+stockid,
		method: "GET"
  	}, function(error, response, body) {
    	if (error || !body) {
      		return;
    	}else{
        	//console.log(body);
        	//顯示當日收盤價
        	var $ = cheerio.load(body);
        	//選擇想爬的元素,檢查,右鍵Copy, Copy Selector
			var target = $("#_profile-TWS\\:3037\\:STOCK > div.jsx-969407034.jsx-1044891830.jsx-3543642977.profile-wrapper__body.is-row > div.jsx-969407034.jsx-1044891830.jsx-3543642977.profile-data > div:nth-child(6) > div.jsx-969407034.jsx-1044891830.jsx-3543642977.block-value.block-value--");
			console.log(target[0].children[0].data);
    	}
  	});
};

stock(3037);