var resolve = require('path').resolve

module.exports = {
    port: 8080,
    devPublicPath: '/',
    prodPublicPath: './',
    htmlTpl: resolve(__dirname, '../src/html/index.html'),
    assetsRoot: resolve(__dirname, '../dist'),
    proxyTable: {},
    defaultPage: 'http://localhost:8080'
}