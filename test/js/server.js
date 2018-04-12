const http = require('http');

const server = http.createServer((req, res) => {

    console.log(`[Request] url: ${req.url}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({article: {
  "articleId": "100022",
  "title": "育儿问答达人现身说法，提高悟空问答收益率，4个重要做法不能少",
  "keywords": [
    "优质问答",
    "阅读量",
    "红包"
  ],
  "createdAt": 1521703574000,
  "items": [
    {
      "type": "text",
      "content": "这几天，总有朋友问我开通悟空问答收益的问题，结果发现，很多朋友已经开通了问答收益，但是就是没有收到过红包，所以误以为没有开通收益。"
    },
    {
      "type": "image",
      "content": "",
      "url": "http://p3.pstatp.com/large/pgc-image/1521703308391f18cfd0137"
    },
    {
      "type": "text",
      "content": "其实，这个问题，早期的我也是迷惑的，还为此问过悟空问答官方，是这样回复我的。"
    },
    {
      "type": "text",
      "content": "系统会根据回答质量判断有无红包及红包金额，请积极答题，用真实、原创、独到的观点、经验切实解答问题，并且没有无关配图，获得红包的概率更大。"
    },
    {
      "type": "text",
      "content": "这个回复的意思很明确了，不是每个问答都有红包，需要系统判定，我们要做的就是好好答题，多答优质问题。"
    },
    {
      "type": "text",
      "content": "这段时间，我总结了以下可以提高收益的小技巧，供大家参考。"
    },
    {
      "type": "image",
      "content": "",
      "url": "http://p3.pstatp.com/large/pgc-image/1521703246362c2765faa5c"
    },
    {
      "type": "text",
      "content": "01选题"
    },
    {
      "type": "text",
      "content": "这个非常重要，如果育儿类题目，像疫苗、纠正偏头、宝宝发展变化、孕检、二胎、母乳喂养、生孩子方式，这些都是热门，大家都非常关注，阅读量就会比较高，有时超过100万阅读量。"
    },
    {
      "type": "text",
      "content": "一定要选自己特熟悉的题目，只有熟悉的才有话可说，才能表达的有理有据，让人信服，切实解决题主的困惑。"
    },
    {
      "type": "text",
      "content": "02领域垂直"
    },
    {
      "type": "text",
      "content": "领域要垂直，我是育儿领域，就一直回答带育儿标签的题目。如果是社会领域，就一直专注社会标签。不要今天育儿、明天社会的，来回串，分不清主次。一直专注一个领域，如果持续输出优质问答，会获得问答达人认证，让你的回答更有权威性，红包分成也会更高。"
    },
    {
      "type": "image",
      "content": "",
      "url": "http://p3.pstatp.com/large/pgc-image/15217032759662b092bb4bd"
    },
    {
      "type": "text",
      "content": "03回答内容"
    },
    {
      "type": "text",
      "content": "回答不是几句话简单一说，建议要300字以上，配3张图片，这样的问答获得优质问答的几率更高，推首页后展示给读者的流量多，那么阅读量就会大。好的内容加高的阅读量，会让你的红包更多。"
    },
    {
      "type": "text",
      "content": "04粉丝互动"
    },
    {
      "type": "text",
      "content": "粉丝阅读你的回答会获得20倍收益，所以我们要重视粉丝建设，如有评论，要及时给予回复。在粉丝很少的情况下，我们多关注别人，多去给点赞、评论，以获得更高的粉丝。当然，持续回答问题，优质问答输出多了，粉丝自然也会找上门来的。"
    },
    {
      "type": "text",
      "content": "上面是我对朋友疑问的整理，如有新的疑问，请关注我，发私信或者在评论里留言，我会及时帮你解决问题。"
    }
  ],
  "media": {
    "id": "5ac33265f3d601394cf4a5cd",
    "name": "凝妈悟语",
    "portraitUrl" : "https://p3.pstatp.com/thumb/150c0012a19081ef0a6f",
    "fans": 0,
    "follows": 0,
    "follow": false
  },
  "reads": 0,
  "likes": 0,
  "origin":"原创",
  "originAuthor": "凝妈悟语",
  "originUrl": "https://www.toutiao.com/a6538000435209306632/",
  "coverUrl": "https://p3.pstatp.com/list/190x124/pgc-image/1521703246362c2765faa5c",
  "coverId": "NEWS-5ac33266963a6531a98c329f",
  "time": 1522728907487,
  "coverNum": 1,
  "type": "IMAGE_TEXT",
  "author": "凝妈悟语"
}}));
});

server.listen(8086);
console.log('Server running at http://127.0.0.1:8086/');