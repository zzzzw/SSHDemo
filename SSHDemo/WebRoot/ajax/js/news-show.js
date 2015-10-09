//文档加载完毕执行
$(function() {
		     
	//alert(GetQueryString("entity.id"));
	
	// 加载新闻
	$.ajax( {
		type : 'POST',
		dataType : 'json', // json对象
		url : 'news-ajax!showContent.action',
		data : {
		'entity.id':GetQueryString("entity.id")   //kv传参
	        },
		success : function(response, status, xhr) {
			var s = "";
            s+='<h2 class="page-header text-center">'+response.title;
            s+='</h2><h6 class="text-center">发布时间：'+response.pubdate;
            s+='&nbsp;&nbsp;阅读量：'+response.clicknumber;
            s+='</h6><div><pre>'+response.content;
            s+='</pre></div>';	
 
			$("#xwcontent").append(s);

		},
		error : function() {
			alert("加载失败");
		}

	})

})

//JSP传过来的参数，要在js中取到
//采用正则表达式获取地址栏参数
//http://www.cnblogs.com/fishtreeyu/archive/2011/02/27/1966178.html
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}