module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    baseUrl: process.env.NODE_ENV === 'production'
        ? 'http://localhost/intranet/coreui-free-vue-admin-template/dist/'
        : '/'
}
