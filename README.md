
## 关于项目
项目来自于今年中国软件杯赛题：[基于WIFI探针的商业大数据分析技术](http://www.cnsoftbei.com/bencandy.php?fid=148&aid=1515)

赛题包括探针程序，数据分析程序，展示界面等，我做的是可视化展示部分和后台管理页面

这个仓库是数据可视化程序，将分析好的数据可视化的展示出来

因为后台是java写的，为了简单的产生数据，我用node写了个小后台，提供数据

可直接到我的服务器看：[47.93.254.91:3000](http://47.93.254.91:3000)


### 调试运行
```
npm run dev

```
### 打开数据后台
```
cd server/demo1
npm start
```
我已经把打包好的dist文件拷贝到server的静态目录下，所以打开数据后台可以直接访问[localhost:3000](localhost:3000)看到页面

### 修改后打包
```
npm run deploy
```
生成的文件在`dist`目录中。
#### 因为是windows下，需要手动复制静态文件：
将`lib`目录复制到`dist`目录下，将`favicon.ico`复制到`dist`目录下。

## 使用的相关技术
* 使用es6写法，安装一堆babel插件(现在有babel-preset-env可以少很多了)
* react、react-redux、react-router,页面结构较多，这样用是比较合适的。当然也可以用mobx
* 使用了不可变数据，因为要渲染的数据层级深，用immutable很有必要
* 使用webpack2做模块化，打包，做了代码分割加快首屏渲染
* 使用百度的echarts做可视化

### 功能结构
![](https://ooooevan.github.io/2017/10/07/react-redux-router-echarts%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/echarts-modules.png)

详细内容请看我写的[文章](https://ooooevan.github.io/2017/10/07/react-redux-router-echarts%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/)

如果有错，望指正，如果觉得可以，欢迎star
