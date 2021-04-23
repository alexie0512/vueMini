# vuemini

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# HTML，CSS, JavaScript 基础
## **HTML**
## **CSS**
### 样式优先级：
- !important : 优先级最高
- 行内样式：行内样式的优先级高于ID选择器，行内样式会覆盖 style 标签里面所有的 CSS 声明。
- ID 选择器: id 选择器无论在style 标签的任何位置声明，都会覆盖class声明的样式
- Class 选择器: Class 选择器的优先级高于继承样式
  - 注意：HTML 元素里应用的 class 的先后顺序无关紧要。但是在 style标签里面声明的 class 顺序十分重要，之后的声明会覆盖之前的声明。 第二个声明的优先级始终高于第一个声明。
- [attr=value] 属性选择器
### 颜色：
- 英文： red
- 十六进制编码：#000000 代表 黑色；
    红（R）、绿（G）、蓝（B）三原色。



      - 颜色	    | 十六进制编码 
      - 道奇蓝     |  #1E90FF
      - 绿色	    |  #00FF00
      - 橙色   	|  #FFA500
      - 红色  	    |  #FF0000    

- 缩写的十六进制编码：
     红（R）、绿（G）、蓝（B）三原色。
 

      - 颜色	    | 缩写的十六进制编码 
      - 蓝绿色     |  #0FF
      - 绿色	    |  #0F0
      - 紫红色   	|  #F0F
      - 红色  	    |  #F00    

- RGB: rgb(0, 0, 0) RGB 值与我们之前学到的十六进制编码不同。RGB 值不需要用到 6 位十六进制数字，而只需要指定每种颜色的亮度大小，数值范围从 0 到 255。
### 变量
- 声明变量并赋值：

       - --penguin-skin: gray;

- 调用变量：
     
       - background:var(--penguin-skin);

## **JavaScript**
### 数据类型：
 - undefined（未定义)
 - null（空）
 - boolean（布尔型）
 - string（字符串）
 - symbol
 - number（数字）
 - bigint（可以表示任意大的整数）
 - object（对象）




# Vue的生命周期
- URL：https://cn.vuejs.org/v2/guide/instance.html
- beforeCreate->created
- beforeMount->mounted
- beforeUpdate->updated
- beforeDestroy->destroyed


# 安装

- 全局安装vue-cli:
```
npm install vue-cli -g
vue -V
```
- Vue-Cli 基于webpack构建，并带有合理的默认配置。
- 关于webpack: Webpack 是一个前端资源加载/打包工具
              https://www.runoob.com/w3cnote/webpack-tutorial.html
- 可视化创建项目：
```
vue ui
```
- 安装插件：








