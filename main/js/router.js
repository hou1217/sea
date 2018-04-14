/*
*路由跳转
*2018.04.13 —— 侯义帅
*/ 
 
function Router(){
  // 路由储存
  this.routes={};
  // 当前路由
  this.currentUrl ='';
}
Router.prototype={
  // 路由处理
  route: function (path, callback) {
    this.routes[path] = callback || function(){};
  },
  // 页面刷新
  refresh: function () {
    // 当前的hash值
    this.currentUrl = location.hash.slice(1) || '/';
    // 执行hash值改变后相对应的回调函数
    this.routes[this.currentUrl]();
  }, 
  // 页面初始化
  init: function () {
    // 页面加载事件
    window.addEventListener('load', this.refresh.bind(this), false);
    // hash 值改变事件
    window.addEventListener('hashchange', this.refresh.bind(this), false);
  } 
}
// 全局挂载
window.Router = new Router();
// 初始化
window.Router.init();
let obj = document.querySelector('.list-content');

// 匹配路由做相应的操作
Router.route('/', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `
    <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      煤炉撤了天然气却不来，河北、山西、陕西的人为什么要白白受冻？
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      煤炉撤了天然气却不来，河北、山西、陕西的人为什么要白白受冻？
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      煤炉撤了天然气却不来，河北、山西、陕西的人为什么要白白受冻？
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    煤炉撤了天然气却不来，河北、山西、陕西的人为什么要白白受冻？
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})

Router.route('/hot', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      hot
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      hot
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      hot
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    hot
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})

Router.route('/society', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      society
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      society
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      society
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    society
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})
Router.route('/car', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      car
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      car
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      car
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    car
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})
Router.route('/focus', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      focus
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      focus
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      focus
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    focus
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})
Router.route('/shanghai', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      shanghai
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      shanghai
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      shanghai
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    shanghai
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>` 
  }, 1000)
})
Router.route('/military', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      military
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      military
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      military
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    military
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>` 
  }, 1000)
})
Router.route('/sports', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      sports
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      sports
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      sports
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    sports
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})
Router.route('/finance', () => {
  // ajax 的数据就可以这样去拼接
  setTimeout(() => {
    obj.innerHTML = `<section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics" class="article_link clearfix ">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      finance
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="stick_label space">置顶</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                        <span class="time" title="2018-04-12 09:15">15分钟前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="middle_mode has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix ">
                  <div class="item_detail desc">
                    <h3 class="dotdot line2 image-margin-right">
                      finance
                    </h3>
                    <div class="item_info">
                      <div>
                        <span class="hot_label space">热</span>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论 30</span>
                      </div>
                    </div>
                  </div>
                  <div class="list_img_holder">
                    <img src="../images/new_picture.png">
                    <span class="video-btn"></span>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="">
                <a href="javascript: void(0)" data-action-label="" data-tag="" class="article_link clearfix">
                  <div class="item_detail">
                    <h3 class="dotdot line2">
                      finance
                    </h3>
                    <div class="list_image">
                      <ul class="clearfix">
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-0.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-1.png">
                        </li>
                        <li class="list_img_holder">
                          <img src="../images/QQ20180409-2.png">
                        </li>
                      </ul>
                    </div>
                    <div class="item_info">
                      <div>
                        <span class="src space">生活就是娱乐</span>
                        <span class="cmt space">评论30</span>
                        <span class="time" title="2018-04-12 09:34">1天前</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
              <section class="has_action" data-hot-time="" data-group-id="" data-item-id="" data-format="0">
                <a href="javascript: void(0)" class="article_link clearfix " data-action-label="">
                  <h3 class="dotdot line2">
                    finance
                  </h3>
                  <div class="list_img_holder_large">
                      <img src="../images/big_img-1.png">
                  </div>
                  <div class="item_info">
                    <span class="hot_label space">热</span>
                    <span class="cmt space">评论 30</span>
                    <span class="time" title="2018-04-11 14:09">1天前</span>
                  </div>
                </a>
              </section>`
  }, 1000)
})

/*var channels = document.querySelector('.top_menu_list').getElementsByClassName('btn');
for(var channel of channels){
  channel.onclick=function(e) {   
    for(var c of this.parentNode.children){
      c.classList.remove("cur"); //先去除所有a的 cur 类
    }
    this.classList.add("cur");//再给点击的a添加cur 类 
  }      
}*/



