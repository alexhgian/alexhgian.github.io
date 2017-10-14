exports.config = {
    namespace: 'agc',
    generateDistribution: true,
    bundles: [
        { components: ['ag-app'] }
    ],
    publicDir:'/build',
    buildDir:'../build'
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}