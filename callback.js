function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Example usage:
let name = getQueryParam('name');
console.log(name); // Will log the value of the 'name' query parameter if present.
