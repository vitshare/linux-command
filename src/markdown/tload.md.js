module.exports = `
显示系统负载状况

## 补充说明

**tload命令** 以图形化的方式输出当前系统的平均负载到指定的终端。假设不给予终端机编号，则会在执行tload指令的终端机显示负载情形。

###  语法

\`\`\`shell
tload(选项)(参数)
\`\`\`

###  选项

\`\`\`shell
-s：指定闲时的刻度；
-d：指定间隔的时间（秒）。
\`\`\`

###  参数

终端：指定显示信息的终端设备文件。

###  实例

使用tload命令查看系统负载情况：

\`\`\`shell
tload -d 1
0.08, 0.02,0.01
0.04, 0.01, 0.00
0.04, 0.01, 0.00
0.04, 0.01,0.00
0.06, 0.02, 0.00
\`\`\`


`;
