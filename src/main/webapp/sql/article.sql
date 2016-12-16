USE blog;

DROP TABLE IF EXISTS article;

CREATE TABLE article
(
id INT NOT NULL AUTO_INCREMENT        /* 文章id */
,article_author INT                   /* 文章作者id */
,article_time DATETIME                /* 发布时间 */
,article_title VARCHAR(64)           /* 文章标题 */
,article_content TEXT                 /* 文章内容 */
,article_classes VARCHAR(8)          /* 文章类型  1 我们的故事,2 奇闻趣事,3 美食风景,4 其他*/
,article_url  VARCHAR(64)  UNIQUE          /* 文章链接 */
,click_rate INT                       /* 点击次数 */
,PRIMARY KEY(id)
);

INSERT INTO article(article_author,article_time,article_title,article_content,article_classes,article_url,click_rate)
VALUES (1,"2016-10-24 11:12:25","bbb","ABCD","我们的故事","www.baidu.com",5);