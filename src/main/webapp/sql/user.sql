USE blog;

DROP TABLE IF EXISTS user;

CREATE TABLE user(
id INT NOT NULL AUTO_INCREMENT							/*用户id,作为主键*/
,username	VARCHAR(16)	NOT NULL UNIQUE							/*用户名，作为登录用户名*/
,password	VARCHAR(16)	NOT NULL							/*密码，作为登录密码*/
,nickname  VARCHAR(8)												/*昵称，作为用户昵称，用户自己修改*/
,age TINYINT																/*年龄，用户自己修改*/
,email VARCHAR(32)													/*邮箱，用户自己修改*/
,PRIMARY KEY(id)														/*将id设置为主键*/
);

INSERT INTO user(username,password,nickname,age,email) VALUES (123,123,123,21,'123456789@qq.com');
