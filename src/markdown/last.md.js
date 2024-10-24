module.exports = `
列出目前与过去登入系统的用户相关信息

## 补充说明

**last命令** 用于显示用户最近登录信息。单独执行last命令，它会读取\`/var/log/wtmp\`的文件，并把该给文件的内容记录的登入系统的用户名单全部显示出来。

###  语法

\`\`\`shell
last(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-a：把从何处登入系统的主机名称或ip地址，显示在最后一行；
-d：将IP地址转换成主机名称；
-f <记录文件>：指定记录文件。
-n <显示列数>或-<显示列数>：设置列出名单的显示列数；
-R：不显示登入系统的主机名称或IP地址；
-x：显示系统关机，重新开机，以及执行等级的改变等信息。
\`\`\`

###  参数

*   用户名：显示用户登录列表；
*   终端：显示从指定终端的登录列表。

###  实例

last命令用了显示用户登录情况，以下是直接显示固定行数的记录：

\`\`\`shell
last -10
root     pts/0        221.6.45.34      Tue Dec 17 09:40   still logged in
root     pts/0        221.6.45.34      Mon Dec 16 09:00 - 11:57  (02:56)
root     pts/0        222.94.97.122    Sun Dec 15 20:39 - 23:28  (02:48)
root     pts/0        222.95.209.80    Sat Dec 14 14:39 - 14:58  (00:18)
root     pts/0        221.6.45.34      Thu Dec 12 16:55 - 17:37  (00:41)
root     pts/0        49.65.139.195    Wed Dec 11 20:40 - 21:16  (00:35)
root     pts/0        49.65.139.195    Wed Dec 11 19:46 - 20:03  (00:17)
root     pts/0        221.6.45.34      Tue Dec 10 14:41 - 15:52  (01:10)
root     pts/0        221.6.45.34      Mon Dec  9 17:24 - 17:30  (00:06)
root     pts/0        221.6.45.34      Mon Dec  9 09:38 - 11:41  (02:02)
\`\`\`


`;
