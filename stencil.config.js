exports.config = {
    namespace: 'agc',
    generateDistribution: true,
    bundles: [
        { components: ['ag-app'] }
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}