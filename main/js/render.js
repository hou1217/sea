let mediaFollow = false;
var articleId = '5ac33265f3d601394cf4a5cd';
var portrait = '/bomb/img/default_portrait.png';   //用户头像URL
window.onload = function() {
  document.getElementById("topic_hot_chat").style.backgroundImage = "url(http://wander.dev.wallan.tech/media-app/media/download/ORIGIN/NEWS-5a66f227963a654b5dfaf8e1)";
  var contentImg = document.getElementById("article_content").getElementsByTagName("img");
  for(var i=0;i<contentImg.length;i++){
      contentImg[i].setAttribute("src",contentImg[i].getAttribute("src").replace("THUMB","ORIGIN"));
  }
  /*
  *发起ajax请求，用返回的数据填充页面
  */ 
  ajaxJSON("GET","http://houyishuai.dev.dc.wallan-tech.com").then(function(data) 
  {
    console.log(data);
    
    /*
    *声明变量
    *获取页面中所需要的元素
    */
    let article = data.article,
        title = document.getElementById("article_title"),
        content = document.getElementById("article_content"),
        time = document.getElementById("article_time"),
        keywords = document.getElementById("article_keywords"),
        mediaNames = document.getElementsByClassName("article-meta-name"),
        portraits = document.getElementsByClassName("img-media"),
        follow1 = document.getElementById("follow1"), 
        follow2 = document.getElementById("follow2"), 
        originAuthor = document.getElementById("footer_author"), 
        origin = document.getElementById("footer_source"), 
        originUrl = document.getElementById("origin-link"),
        mediaFans = document.getElementById("media-fans"),
        starCounts = document.getElementsByClassName("star-count");
    
    //获取url
    // console.log(window.location.href);
    //公众号名字
    for(let mediaName of mediaNames){
      mediaName.innerHTML = article.media.name;
    }

    //公众号头像
    for(let portrait of portraits){
      portrait.src = article.media.portraitUrl;
    }
    //粉丝数
    mediaFans.innerHTML = `
            <span>关注${article.media.fans}</span>
            <span>粉丝${article.media.follows}</span>
          `;
    //点赞数
    for(let starCount of starCounts){
      starCount.innerHTML = article.likes;
    }
    
    // 查看原文
    originUrl.href = "javascript:originPreview('"+article.originUrl+"')";
    //文本来源
    origin.innerHTML = "本文来源：" + article.origin;
    //作者
    originAuthor.innerHTML = "作者："+article.originAuthor;
    //公众号ID
    let ele_id1 = "";
    ele_id1 += `
                <input type="hidden" id="follow">
                <span class="media-un-follow" id="follow-action" onclick="follow('${article.media.id}');">+关注</span>
                  `;
    follow1.innerHTML = ele_id1;
    let ele_id2 = "";
    ele_id2 += `
                <span class="media-un-follow" id="follow-action-bottom" onclick="follow('${article.media.id}');">+关注</span>
                  `;
    follow2.innerHTML = ele_id2;

    //文章关键字
    let ele_words = "";
    for(let item of article.keywords){
      // if(`${item}`){
        ele_words += `
                <span>${item}</span>
                  `;
      // }
      
    }
    keywords.innerHTML = ele_words;

    // 文章标题
    title.innerHTML = article.title;
    // 文章创建时间
    Date.prototype.Format = function (fmt) { 
      var o = {
          "M+": this.getMonth() + 1, //月份 
          "d+": this.getDate(), //日 
          "h+": this.getHours(), //小时 
          "m+": this.getMinutes(), //分 
          "s+": this.getSeconds(), //秒 
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
          "S": this.getMilliseconds() //毫秒 
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
    time.innerHTML =  new Date(article.createdAt).Format("yyyy-MM-dd hh:mm:ss");
    // 文章内容
    let ele_text = "";
    for(let item of article.items){
      if(item.content){
        ele_text += `
                <p>${item.content}</p>
                  `;
        
      }else{
        ele_text += `
                <div class="content-panel"><img class="content-img" src="${item.url}" alt=""></div>
                  `;
       
      }
      content.innerHTML = ele_text;
    }

  }, function(error) {
    console.error('出错了', error);
  });
}

// 外部定义的函数，在需要时调用

// 封装好的AJAX方法
const ajaxJSON = function(method,url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open(method, url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    /*client.setRequestHeader("WALLAN-TOKEN", "ba88626517342609e76dc8f8d751ec82");
    client.setRequestHeader("WALLAN-DEVICENUM", "12000000000");*/
    client.send();
  });
  return promise;
};

// 查看原文地址
function originPreview(originUrl){
  window.location.href="article-preview:"+originUrl;
  //console.log("article-preview:"+originUrl);
}
//查看公众号ID
function mediaDetail(mediaId){
  window.location.href="article-media-id:"+mediaId;
}
//查看频道ID
function channelDetail(channelId){
  window.location.href="article-channel-id:"+channelId;
}
//查看文章的推荐
function recommendArticleDetail(articleId){
   var article = {};   //article.articleId=articleId;
   article.articleId="5a6e6c3033f17c425b47a520";
   article.mediaType="V_IMAGE";
   //var articleStr = JSON.stringify(article);
   var articleStr = '{"articleId":"5a6e6c3033f17c425b47a520","mediaType":"V_IMAGE"}';
  window.location.href="recommend-article-id:eyJhcnRpY2xlVXJsIjoiaHR0cHM6Ly93YW5kZXIud2FsbGFuLXRlY2guY29tOjE0NDMvbWVkaWEtZGMvYXJ0aWNsZS9kZXRhaWwvNWE3M2MxY2EzM2YxN2M1MGNjN2IxMGM1IiwibWVkaWFUeXBlIjoiVl9JTUFHRSJ9";
}
//公众号关注和取消
function follow(mediaId){
  let followAction = document.getElementById("follow-action"),
      followActionBottom = document.getElementById("follow-action-bottom"),
      url = "";
  if(mediaFollow){    
    followAction.className = "media-un-follow";
    followAction.innerHTML = "+关注";
    followActionBottom.className = "media-un-follow";
    followActionBottom.innerHTML = "+关注";
    mediaFollow = false;
    url = "/media-dc/media/unfollow/"+mediaId;
  }else{
    followAction.className = "media-follow";
    followAction.innerHTML = "已关注";
    followActionBottom.className = "media-follow";
    followActionBottom.innerHTML = "已关注";
    mediaFollow = true;
    url = "/media-dc/media/follow/"+mediaId;
  }
  ajaxJSON("GET",url).then(function(data) {
    //成功执行的事情    
    console.log("success");
  }, function(error) {
    console.error('出错了', error);
  });
}

//点赞功能
function starImg(){
  let isStar = document.getElementById("star_img"), //♥图片
      starNum = document.getElementsByClassName("star-count"), //点赞数
      starImgPanel = document.getElementById("star_img_panel"), //点赞人头像的容器
      url = "";
  //如果已经点赞则取消点赞，否则点赞
  if(isStar.className == "star"){
    isStar.className = "un-star";
    isStar.src = "/bomb/img/un_star.png";
    if(parseInt(starNum[0].innerHTML)-1 >= 0){
      for(let starItem of starNum){
        starItem.innerHTML = parseInt(starItem.innerHTML)-1;
      }
    }
    url = "/media-dc/article/unstar/"+articleId;
    if(starImgPanel.getElementsByTagName("img").length == 5){
      starImgPanel.removeChild(starImgPanel.getElementsByTagName("img")[0]);
      starImgPanel.getElementsByTagName("img")[3].style.display="inline";
    }else{
      starImgPanel.removeChild(starImgPanel.getElementsByTagName("img")[0]);
    }
  }else{
    isStar.className = "star";
    isStar.src = "/bomb/img/star.png";
    for(let starItem of starNum){
      starItem.innerHTML = parseInt(starItem.innerHTML)+1;
    }  
    url = "/media-dc/article/star/"+articleId;
    if(starImgPanel.getElementsByTagName("img").length == 4){
      var img = document.createElement("img");
      img.src = portrait;
      starImgPanel.prepend(img);
      starImgPanel.getElementsByTagName("img")[4].style.display="none";
    }else{
      var img = document.createElement("img");
      img.src = portrait;
      starImgPanel.prepend(img);
    }
  }
  ajaxJSON("GET",url).then(function(data) {
    //成功执行的事情
    console.log("success");    
  }, function(error) {
    console.error('出错了', error);
  });
  
}