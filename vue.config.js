module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asset': '@/asset',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }

    }
  }
}