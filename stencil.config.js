exports.config = {
    namespace: 'agc',
    generateDistribution: true,
    bundles: [
        { components: ['ag-search'] }
    ],
    buildDir: 'app/build'
};

exports.devServer = {
    root: 'app',
    watchGlob: '**/**'
}