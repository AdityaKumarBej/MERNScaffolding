module.exports.DEFAULT = {
    port: 9086,
    contextRoot : '/api',
    url : 'http://localhost:9086/api',
    nonAuthPaths: [
                ],
    appConfig:  { jwtConfig : {
                        "secret": parseInt(process.env.JWT_SECRET) || "bej",
                        "expiry" : parseInt(process.env.JWT_EXPIRY, 10) || 8640000
                    }
                }
}