module.exports = function(options, recipeFunctions) {
    for (var i = 0; i < recipeFunctions.length; i++) {
        recipeFunctions[i](options);
    };
}