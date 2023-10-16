var count = 0;
var id = setInterval(function(n){
    document.write(` ${++count}`);
    if (count === 1000){
        clearInterval(id);
    }
}, 10);
setInterval(10000);

