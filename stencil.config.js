exports.config = {
    namespace: 'agc',
    generateDistribution: true,
    bundles: [
        { components: ['ag-app'] }
    ],
    publicDir:'www/build'
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}