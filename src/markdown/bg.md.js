module.exports = `
将前台终端作业移动到后台运行

## 概要

\`\`\`shell
bg [job_spec ...]
\`\`\`

## 主要用途

- 用于将作业放到后台运行，使前台可以执行其他任务。该命令的运行效果与在指令后面添加符号\`&\`的效果是相同的，都是将其放到系统后台执行。

- 若后台任务中只有一个，则使用该命令时可以省略任务号。

## 参数

job_spec（可选）：指定要移动到后台执行的作业标识符，可以是一到多个。

## 返回值

返回成功除非未开启作业控制或发生了错误。

## 例子

\`\`\`shell
# 运行sleep命令，然后按下ctrl+z。
sleep 60
^Z
[1]+  Stopped                 sleep 60

# 使用bg命令使得作业在后台运行。
bg %1

# 返回信息：
[1]+ sleep 60 &
\`\`\`

### 注意

1. \`bash\`的作业控制命令包括\`bg fg kill wait disown suspend\`。
2. 该命令需要\`set\`选项\`monitor\`处于开启状态时才能执行；查看作业控制状态：输入\`set -o\`查看\`monitor\`行；执行\`set -o monitor\`或\`set -m\`开启该选项。
3. 该命令是bash内建命令，相关的帮助信息请查看\`help\`命令。



`;
