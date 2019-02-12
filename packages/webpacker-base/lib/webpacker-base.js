'use strict';

module.exports = webpackerBase;

function webpackerBase() {

    return {
        loaders(isSourceMap) {
            return require('./loaders')(isSourceMap);
        },
        plugins(htmlSourcePath){
            return require('./plugins')(htmlSourcePath);
        }
    }
    // TODO
}
