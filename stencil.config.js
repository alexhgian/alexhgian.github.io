exports.config = {
    namespace: 'agc',
    generateDistribution: true,
    bundles: [
        { components: ['ag-search'] }
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}