let data = {
    "prices": {
        "dominoes-red": "$14.99",
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
        
        "templates": "8.99"
    }
}

var productsOnPage = document.getElementsByClassName("product");
for (var i = 0; i < productsOnPage.length; i++){
    childDiv = productsOnPage[i].getElementsByClassName('product-actions')[0];
    childDiv1 = productsOnPage[i].getElementsByTagName('h3')[0];
    id1 = childDiv1.id;
    childDiv.firstChild.innerText = data.prices[3];
}