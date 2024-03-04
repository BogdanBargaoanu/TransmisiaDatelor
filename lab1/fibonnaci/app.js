document.getElementById("input").addEventListener("input", function() {
    print(parseInt(this.value));
});

function getFibbonaci(n) {
    if(n < 1 || n > 10) {
        return "Invalid";
    }
    let a = 0;
    let b = 1;
    let arr = [];
    arr.push(b);
    for (let i = 0; i < n-1; i++) {
        let temp = a;
        a = b;
        b = temp + b;
        arr.push(b);
    }
    return arr;
}

function print(n) {
    document.getElementById("message").innerHTML = getFibbonaci(n);
}