## 为React开发和生产准备的webpack基本配置

想想，开发React还要考虑和着手准备webpack的各种配置问题，实在让人头疼  
特别是babel、react这些升级后，依赖库拆分的太多，配置起来让人不要不要的


参考[survivejs](https://github.com/survivejs/webpack_react)的第二三章中的基本配置自己整了一遍，具备了开发的需要了。

### 主要由两个命令：
* npm start
* npm run build

第一个是开发用，第二个是打包上线用


### 项目里的各种插件的用途：

核心应用级插件：
* react  react-dom  这两个就不说了

开发插件：
* webpack  这个不用说了，打包构建用
* html-webpack-plugin  自动生成index.html
* html-webpack-template   比默认的html设置更好，里面包括了可以初始化一些数据之类的
* webpack-dev-server  开发用的服务器，用于npm start，不用每次去执行打包命令，而且会liveload
* webpack-merge  用于开发环境和生产环境的web pack配置文件的配置合并
* css-loader  style-loader  css的加载以及内联css用
* babel-loader  babel-core    babel6之后的拆分，babel的主要核心代码
* babel-preset-es2015  es6的解析器
* babel-preset-react  jsx的解析器
* babel-plugin-syntax-class-properties babel-plugin-syntax-decorators babel-plugin-syntax-object-rest-spread babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-object-rest-spread   解锁更多es6特性
* babel-plugin-react-transform  多种方式来使用React Component
* react-transform-hmr  react的热加载，不每次都是自动刷新浏览器


本来想翻译下来的，但是....懒！