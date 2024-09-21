function getQueryParam(param) {
    let url = window.location.href.split('#')[1]; // Split to ignore the fragment part
    let params = new URLSearchParams(new URL(url).search);
    return params.get(param);
}

let name = getQueryParam('access_token');
console.log(name);
