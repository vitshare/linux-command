module.exports = `
用于删除给定的用户以及与用户相关的文件

## 补充说明

**userdel命令** 用于删除给定的用户，以及与用户相关的文件。若不加选项，则仅删除用户帐号，而不删除相关文件。

###  语法

\`\`\`shell
userdel(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-f：强制删除用户，即使用户当前已登录；
-r：删除用户的同时，删除与用户相关的所有文件。
\`\`\`

###  参数

用户名：要删除的用户名。

###  实例

userdel命令很简单，比如我们现在有个用户linuxde，其家目录位于\`/var\`目录中，现在我们来删除这个用户：

\`\`\`shell
userdel linuxde       # 删除用户linuxde，但不删除其家目录及文件；
userdel -r linuxde    # 删除用户linuxde，其家目录及文件一并删除；
\`\`\`

请不要轻易用\`-r\`选项；他会删除用户的同时删除用户所有的文件和目录，切记如果用户目录下有重要的文件，在删除前请备份。

其实也有最简单的办法，但这种办法有点不安全，也就是直接在\`/etc/passwd\`中删除您想要删除用户的记录；但最好不要这样做，\`/etc/passwd\`是极为重要的文件，可能您一不小心会操作失误。


`;
