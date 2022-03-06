let x = document.getElementById("image-carousel-options").children;
for (var i = 0; i < x.length; i++){
    x[i].addEventListener('click',function (e){
        var tar = e.target;
        document.getElementById("main-image").src= tar.src;
    });
}
document.getElementById("arrow-next").addEventListener("click", function(){
    var y = document.getElementById("image-carousel-options");
    var tar = document.getElementById("main-image");
    let found = 0;
    var currentsrc= tar.src;
    for (var i = 0; i < y.children.length; i++){
        if (y.children[i].src==currentsrc){
            found=i;
        }
    }
    found++;
    if (found == y.children.length){
        found=0;
    }
    tar.src = y.children[found].src;
});
document.getElementById("arrow-prev").addEventListener("click", function(){
    var y = document.getElementById("image-carousel-options");
    var tar = document.getElementById("main-image");
    let found = 0;
    var currentsrc= tar.src;
    for (var i = 0; i < y.children.length; i++){
        if (y.children[i].src==currentsrc){
            found=i;
        }
    }
    found--;
    if (found == -1){
        found=y.children.length-1;
    }
    tar.src = y.children[found].src;
});