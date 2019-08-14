module.exports = [
  {
    type: 'list',
    name: 'compress',
    message: '是否开启图片压缩（依赖安装速度可能比较慢）',
    choices: [
      { name: '是', value: true },
      { name: '否', value: false }
    ],
    default: false
  }
  // {
  //   when: answers => answers.SPA === 'pages',
  //   type: 'confirm',
  //   name: 'customTheme',
  //   message: 'Do you wish to overwrite Element\'s SCSS variables?',
  //   default: false,
  // },
  // {
  //   type: 'list',
  //   name: 'lang',
  //   message: 'Choose the locale you want to load',
  //   choices: ['1', '2'],
  //   default: 'zh-CN'
  // }
]
