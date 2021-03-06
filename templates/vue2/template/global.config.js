const ip = require('ip');
const path = require('path');
const localIp = ip.address();
const port = '8080';
const buildPath = path.resolve(__dirname, 'dist');
const localPath = 'http://' + localIp + ':' + port + '/';

module.exports = {
    ip: localIp,
    port: port,
    localPath: localPath,
    buildPath: buildPath,
    staticPublicPath: 'static/'
}
