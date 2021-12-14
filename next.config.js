module.exports = {
    basePath: process.env.UI_CONTEXT_ROOT || '',
    useFileSystemPublicRoutes: false,
    poweredByHeader: false,
    publicRuntimeConfig: {
        appInfo: {
            applicationName: 'UI - Scaffolding',
            version: require('./package.json').version
        },
        nonAuthPages: ['/Login', '/_error'],
        HOMEPAGE            : process.env.HOMEPAGE || '/',
        UI_CONTEXT_ROOT     : process.env.UI_CONTEXT_ROOT || '',
        INTERNAL_API_URL    : process.env.INTERNAL_API_URL || '',
        API_URL             : process.env.API_URL || '' 
    }
}