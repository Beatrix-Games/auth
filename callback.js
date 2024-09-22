var ws = new WebSocket("ws://localhost:47477/");
connectWebSocket();

function getQueryParam(param) {
    let url = window.location.href.split('#')[1]; // Split to ignore the fragment part
    let result = url.replace("access_token=", "");
    ws.onopen = function() {
        var queryString = result;
        ws.send(JSON.stringify({ type: "itchiologin", message: queryString }));
    };
    return result;
}

let name = getQueryParam('access_token');
console.log(name);
