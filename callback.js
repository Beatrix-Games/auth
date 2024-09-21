function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

let name = getQueryParam('accesstoken');
console.log(name);
