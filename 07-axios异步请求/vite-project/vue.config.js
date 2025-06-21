module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.uomg.com/api/rand.qinghua?format=json', // Replace with your target server
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' // Rewrite '/api' to '' if needed
                }
            }
        }
    }
};