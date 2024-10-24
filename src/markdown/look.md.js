module.exports = `
显示文件中以指定字符串开头的任意行

## 补充说明

**look命令** 用于显示文件中以指定字符串开头的任意行。

###  语法

\`\`\`shell
look(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-a：使用另一个字典文件web2，该文件也位于/usr/dict目录下；
-d：只对比英文字母和数字，其余一概忽略不予比对；
-f：忽略字符大小写差别；
-t<字尾字符串>：设置字尾字符串。
\`\`\`

###  参数

*   字符串：指定要查找的字符串；
*   文件：指定要查找的目标文件。


`;
