var config = {
    outputStart : 1,
    outputEnd   : 100,
    inputStart  : 1,
    inputEnd    : 100
}


exports.getColor = function(input) {
        // Color Calibration
        // Sets the color range between the minimum acceptable value and the maximum value
        let plus = ((config.outputEnd - config.outputStart) / (config.inputEnd - config.inputStart));
        let i = Math.round(config.outputStart + plus * (input - config.inputStart));
        // Cutoff min and max
        i = (i < config.outputStart) ? config.outputStart : i;
        i = (i > config.outputEnd) ? config.outputEnd : i;

        let r = Math.round(Math.sin(0.024 * i + 0) * 127 + 128);
        let g = Math.round(Math.sin(0.024 * i + 2) * 127 + 128);
        let b = Math.round(Math.sin(0.024 * i + 4) * 127 + 128);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

exports.setConfig = function(newConfig) {
    config = Object.assign({},config,newConfig);
}
