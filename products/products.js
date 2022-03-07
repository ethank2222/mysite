let data = {
    "prices": {
        "dominoes-red": "$13.99",
        "dominoes-orange": "$14.99",
        "dominoes-yellow": "$14.99",
        "dominoes-light-green": "$14.99",
        "dominoes-green": "$14.99",
        "dominoes-light-blue": "$14.99",
        "dominoes-blue": "$14.99",
        "dominoes-purple": "$14.99",
        "dominoes-pink": "$14.99",
        "dominoes-clear": "$14.99",
        "dominoes-black": "$14.99",
        "dominoes-white": "$14.99",
        
        "templates": "$8.99"
    }
}

var productsOnPage = document.getElementsByClassName("product");
for (var i = 0; i < productsOnPage.length; i++){
    var childDiv = productsOnPage[i].getElementsByClassName('product-actions')[0].getElementsByTagName("p")[0];
    var childDiv1 = productsOnPage[i].getElementsByTagName('h3')[0];
    var id1 = childDiv1.id;
    childDiv.innerText = data.prices[id1];
}
if (document.getElementsByClassName("product-description").length > 0 ){
    var childDiv = document.getElementsByClassName("product-description")[0].getElementsByTagName('div')[0].getElementsByTagName("p")[0];
    var childDiv1 = document.getElementsByClassName("product-description")[0];
    var id1 = childDiv1.id;
    childDiv.innerText = "Price: " + data.prices[id1];
}