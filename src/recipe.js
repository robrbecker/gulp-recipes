module.exports = function(gulp, options, recipeFunctions) {
    for (var i = 0; i < recipeFunctions.length; i++) {
        recipeFunctions[i](gulp, options);
    };
}