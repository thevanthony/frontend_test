/*
    Permited to simplify import in the project
*/
const path = require('path');

module.exports = function override(config, env) {
    config["resolve"] = {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            scenes: path.resolve(__dirname, 'src/scenes/'),
            services: path.resolve(__dirname, 'src/services/'),
        },
        extensions: ['.js']
    }

    return config;
}