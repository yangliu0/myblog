USE blog;

DROP TABLE IF EXISTS article;

CREATE TABLE article
(
id INT NOT NULL AUTO_INCREMENT        /* 文章id */
,article_author INT                   /* 文章作者id */
,article_time DATETIME                /* 发布时间 */
,article_title VARCHAR(64)           /* 文章标题 */
,article_content TEXT                 /* 文章内容 */
,article_classes VARCHAR(8)          /* 文章类型 */
,click_rate INT                       /* 点击次数 */
,PRIMARY KEY(id)
);

INSERT INTO article(article_author,article_time,article_title,article_content,article_classes,click_rate)
VALUES (1,"2016-10-24 11:12:25","bbb","ABCD","我们的故事",5);