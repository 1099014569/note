### 安装mysql

```
npm install mysql
```

```
//1,设置mysql 连接参数
let connection = mysql.createConnection({
    host     : 'localhost',  //主机
    user     : 'root',       //MySQL认证用户名
    password : '',           //MySQL认证用户密码
    port: '3306',            //端口号
    database:'fs_music'
});
//2,连接
connection.connect();
```

### 1，插入数据

```
//编码sql查询语句
let sql =
  "insert into users(name,phone,address) values('小花','222222','成都')";
//查询数据
connection.query(sql, function(error, data) {
  console.log(data);
});
//关闭当前的连接
connection.end();
```

### 2，删除数据

```
//1,编写sql语句
var  userGetSql = 'delete from users where id = 16';
//2,执行删除
connection.query(userGetSql,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log(result);
});
//3,关闭连接
connection.end();
```

### 3，更新数据

```
//1,编写sql语句
var sql = "update users set name ='靴子',passwd = '2019' where id = 1";
//2,执行更新
connection.query(sql,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
});
//3,关闭连接
connection.end();
```



### 4，查询

```
//1,编写sql语句
var  sql = 'SELECT * FROM users';
//2,执行查询
connection.query(sql,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log(result);
});
//3,关闭连接
connection.end();
```

### 5，DISTINCT

在表中，一个列可能会包含多个重复值，有时您也许希望仅仅列出不同（distinct）的值。

SELECT DISTINCT 语法

```
SELECT DISTINCT column_name,column_name  FROM table_name;
```

实例

```
SELECT DISTINCT country FROM Websites;
```

### 6，WHERE

WHERE 语法

```
SELECT column_name,column_name FROM table_name WHERE column_name operator value;
```

实例

```
SELECT * FROM Websites WHERE country='CN';
```

| **运算符** | **描述**                                               |
| ---------- | ------------------------------------------------------ |
| =          | 等于                                                   |
| <>         | 不等于。注释：在 SQL 的一些版本中，该操作符可被写成 != |
| >          | 大于                                                   |
| <          | 小于                                                   |
| >=         | 大于等于                                               |
| <=         | 小于等于                                               |

作业：创建一个学生表（姓名，年龄，性别，籍贯），向里面插入10个学生的数据。获取大于18的学生，获得小于18的学生

### 7，AND 运算符实

```
SELECT * from student WHERE id = 2 AND age = 20;
```

### 8，or

```
SELECT * FROM Websites WHERE country='USA' OR country='CN';
```

### 9，ORDER BY

​      ORDER BY 关键字用于对结果集按照一个列或者多个列进行排序。

​      ORDER BY 关键字默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，您可以使用 DESC 关键字。

​      语法

```
SELECT column_name,column_name
FROM table_name
ORDER BY column_name,column_name ASC|DESC;
```

​      实例

```
SELECT * FROM Websites ORDER BY alexa;
```

​    降序排列

```
SELECT * FROM Websites ORDER BY alexa DESC;
```

  从 "Websites" 表中选取所有网站，并按照 "country" 和 "alexa" 列排序

```
SELECT * FROM Websites  ORDER BY country,alexa;
```

- ​           1，按照某科成绩降序来获得学生的信息表
- ​           2，按照学生的年龄获得学生的信息表

### 10，LIKE 操作符

用于在 WHERE 子句中搜索列中的指定模式

​       语法

```
SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern;
```

​    "%" 符号用于在模式的前后定义通配符

##### 实例1：选取 name 以字母 "G" 开始的所有客户

```
SELECT * FROM Websites WHERE name LIKE 'G%';
```

#####  实例2：选取 name 以字母 "k" 结尾的所有客户

```
SELECT * FROM Websites WHERE name LIKE '%k';
```

##### 实例3：选选取 name 包含模式 "oo" 的所有客户：

```
SELECT * FROM Websites WHERE name LIKE '%oo%';
```

通过使用 NOT 关键字，您可以选取不匹配模式的记录。

##### 实例4：选取 name 不包含模式 "oo" 的所有客户：

```
SELECT * FROM Websites WHERE name NOT LIKE '%oo%';
```

- 把歌曲里面代码有a的歌曲全部查询
- 把歌曲里面不带爱的全部查询出来



### 11，in

IN 操作符允许您在 WHERE 子句中规定多个值

```
SELECT * FROM Websites WHERE name IN ('Google','亚马逊');
```

### 12,between

实例1：选取 alexa 介于 1 和 20 之间的所有网站：

```
SELECT * FROM Websites WHERE alexa BETWEEN 1 AND 20;
```

实例2：显示不在上面实例范围内的网站，请使用 NOT BETWEEN：

```
SELECT * FROM Websites WHERE alexa NOT BETWEEN 1 AND 20;
```

实例3：选取 name 以介于 'A' 和 'H' 之间字母开始的所有网站：

```
SELECT * FROM Websites WHERE name BETWEEN 'A' AND 'H';
```

实例4：选取 name 不介于 'A' 和 'H' 之间字母开始的所有网站：

```
SELECT * FROM Websites WHERE name NOT BETWEEN 'A' AND 'H';
```

### 13,内连接

```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons INNER JOIN Orders ON Persons.Id_P=Orders.Id_P ORDER BY Persons.LastName
```

### 14，左连接

```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
LEFT JOIN Orders
ON Persons.Id_P=Orders.Id_P
ORDER BY Persons.LastName
```

### 15，右连接

```
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
RIGHT JOIN Orders
ON Persons.Id_P=Orders.Id_P
ORDER BY Persons.LastName
```

### 16，多表查询



















































