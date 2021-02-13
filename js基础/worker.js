let onmessage = function (event) {
    postMessage(f(event.data))
}

function f(n) {
    return n <= 2 ? 1 : f(n - 1) + f(n - 2)
}
