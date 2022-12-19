/*
Bronze, Silver, Gold
Orange, Silver, Blue
Red, Yellow, Blue
Pink, Purple, Turquoise
Light Green, Light Blue, Black
*/

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
        "dominoes-black": "$14.99",
        "dominoes-silver": "$14.99",
        "dominoes-gold": "$14.99",
        "dominoes-bronze": "$14.99",
        
        "templates": "$8.99",

        "build-set": "$79.99",
        "play-set": "$34.99",
        "school-set": "$199.99",

        "domino-container": "$19.99",
        "domino-container-small": "$12.99"
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