function getQueryParam(param) {
    let url = window.location.href.split('#')[1]; // Split to ignore the fragment part
    let result = text.replace("access_token=", "");
    return result;
}

let name = getQueryParam('access_token');
console.log(name);
