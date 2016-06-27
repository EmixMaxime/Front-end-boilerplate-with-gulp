// Configurations
var path = {
    sassOutDir: './public/css/',
    sass: './sass/**/',
    js: 'js/',
    jsDest: './public/js/',

    html: 'templates/**/',
    htmlOutDir : 'public/',
    injectData: true,
    dataFormat: 'yaml',
    dataFile: 'templates/data.yml',

    data: 'templates/',

    ts: './src/',
    tsOutDir: './public/js'
}

var browsers = [
    'last 2 versions'
]


var env = {
    mode: 'dev'
}

export default {path, env, browsers}