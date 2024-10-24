module.exports = `
管理ARP包过滤规则表

## 补充说明

**arptables命令** 用来设置、维护和检查Linux内核中的arp包过滤规则表。

###  语法

\`\`\`shell
arptables(选项)
\`\`\`

###  选项

\`\`\`shell
-A：向规则链中追加规则；
-D：从指定的链中删除规则；
-l：向规则链中插入一条新的规则；
-R：替换指定规则；
-P：设置规则链的默认策略；
-F：刷新指定规则链，将其中的所有规则链删除，但是不改变规则链的默认策略；
-Z：将规则链计数器清零；
-L：显示规则链中的规则列表；
-X：删除指定的空用户自定义规则链；
-h：显示指令帮助信息；
-j：指定满足规则的添加时的目标；
-s：指定要匹配ARP包的源ip地址；
-d：指定要匹配ARP包的目的IP地址。
\`\`\`


`;
