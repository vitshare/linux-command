module.exports = `
查看Linux系统负载信息

## 补充说明

**uptime命令** 能够打印系统总共运行了多长时间和系统的平均负载。uptime命令可以显示的信息显示依次为：现在时间、系统已经运行了多长时间、目前有多少登陆用户、系统在过去的1分钟、5分钟和15分钟内的平均负载。

###  语法

\`\`\`shell
uptime(选项)
\`\`\`

###  选项

\`\`\`shell
-V：显示指令的版本信息。
\`\`\`

###  实例

使用uptime命令查看系统负载：

\`\`\`shell
[root@LinServ-1 ~]# uptime -V    #显示uptime命令版本信息
procps version 3.2.7

[root@LinServ-1 ~]# uptime
 15:31:30 up 127 days,  3:00,  1 user,  load average: 0.00, 0.00, 0.00
\`\`\`

 **显示内容说明：** 

\`\`\`shell
15:31:30             # 系统当前时间
up 127 days,  3:00   # 主机已运行时间,时间越大，说明你的机器越稳定。
1 user               # 用户连接数，是总连接数而不是用户数
load average: 0.00, 0.00, 0.00         #  系统平均负载，统计最近1，5，15分钟的系统平均负载
\`\`\`

那么什么是系统平均负载呢？ 系统平均负载是指在特定时间间隔内运行队列中的平均进程数。

如果每个CPU内核的当前活动进程数不大于3的话，那么系统的性能是良好的。如果每个CPU内核的任务数大于5，那么这台机器的性能有严重问题。

如果你的linux主机是1个双核CPU的话，当Load Average 为6的时候说明机器已经被充分使用了。


`;
