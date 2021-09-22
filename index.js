function receivesAFunction (callback) {
    return callback()
}

function returnsANamedFunction () {
    return function potato() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}