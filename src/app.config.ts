export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  style: "v2",
  lazyCodeLoading: "requiredComponents",
  renderer: "skyline",
  rendererOptions: {
    skyline: {
      "disableABTest": true,
      "defaultDisplayBlock": false
    }
  }
}
