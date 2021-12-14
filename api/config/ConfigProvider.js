const logger = require('simple-node-logger').createSimpleLogger();
const rawConfigs = require('./config')

let currentEnvironment = (process.env.APP_ENV && process.env.APP_ENV.trim().length > 0) ? process.env.APP_ENV : 'DEFAULT';

logger.info(`Loding configuration for environment - ${currentEnvironment}`);

let currentConfig = rawConfigs[currentEnvironment]
module.exports.get = (key) => {
    return currentConfig[key]
}