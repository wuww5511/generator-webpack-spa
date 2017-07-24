var path = require('path')

module.exports = {
    plugins: {
        'postcss-sprites': {
            filterBy: function (opts) {
                var name = path.basename(opts.path)
                if (/^_/.test(name)) {
                    return Promise.resolve()
                } else {
                    return Promise.reject()
                }
                
            },
            spritesmith: {
                padding: 30
            }
        },<%if (useRem) {%>
        'postcss-pxtorem': {
            rootValue: 75,
            propList: ['*']
        },<%}%>
        'postcss-import': {},
        'autoprefixer': {}
        
    }
}