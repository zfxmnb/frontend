const vueRender = require('vue-ssr');
let indexRenderer;

const init = (serverConfig)=>{
    indexRenderer = vueRender({
        projectName: 'index', 
        rendererOptions: {
            cache: require('lru-cache')({
                max: 1000,
                maxAge: 1000 * 60 * 15
            })
        }, 
        webpackServer: serverConfig
    })
}

const render = (template)=>{
    indexRenderer(req, res, template)
}

export default {
    init,
}