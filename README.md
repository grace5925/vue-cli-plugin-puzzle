# :wrench: vue-cli-plugin-puzzle

Vue CLI 3 plugin to add some configurations to your Vue Project for Puzzle-idea's developers.See [Official Website](https://cli.vuejs.org/config/) for basic configuratuin instructions.

## :star: Features

- 简单的图片压缩
- 发布与预发布环境分离
- 对rem和vw的支持（基于sass，基于750宽设计稿，通过`vw(设计稿尺寸)`，自动换算vw）

## :rocket: Getting Started

If yon don't have a project created with Vue CLI 3:

```sh
vue create my-vue-app
```

Install the plugin into your project:

```sh
cd my-vue-app
vue add puzzle
```

## :hammer: 内置命令

- 非语法性代码检查（自动修复）
  
```sh
npm run lint
# OR
yarn lint
```

- 向预发布环境打包
  
  - 代码将被打包到根目录的a04文件夹中
  - 资源路径为相对路径
  - 带`vConsole`调试工具

```sh
npm run build:test
# OR
yarn build:test
```

- 向生产环境打包

  - 代码将被打包到根目录的dist文件夹中
  - **cdn前缀**由相应**env**文件中的`VUE_APP_CDN`变量控制
  - 去除`vConsole`调试工具

```sh
npm run build
# OR
yarn build
```

## :clipboard: Env variables

**production**作用于生产环境
**development**作用于本地开发环境
**staging**作用于预发布环境

- **`VUE_APP_CDN`**
  用于定义静态资源的cdn前缀
- **`VUE_APP_DEBUG`**
  用于控制vConsole存在与否

## :white_check_mark: TODO

* [ ] 增加对多页的支持

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
