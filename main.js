window.setInterval(function() {
    if(window.scrollY > 10 || document.getElementById("menu-small") != null){
        if (document.getElementById("navigation").className.includes("colored") == false) {
            document.getElementById("navigation").classList.add("colored");
        }
    }
    else {
        if (document.getElementById("navigation").className.includes("colored") == true) {
            document.getElementById("navigation").classList.remove("colored");
        }
    }
},100);

document.getElementById("hamburger").addEventListener("click", function(){
    if (document.getElementById("menu-small") == null){
        var nav = document.getElementById("navigation");
        var hamburger = document.getElementById("hamburger");
        nav.classList.add("colored");
        hamburger.className = "fa fa-close menu-item";
        el = document.createElement("div");
        el.id="menu-small";
        el.innerHTML = hamburger.parentNode.innerHTML;
        el.lastChild.remove();
        el.lastChild.remove();
        document.getElementById("navigation").parentNode.appendChild(el);
    }
    else{
        var hamburger = document.getElementById("hamburger");
        document.getElementById("menu-small").remove();
        hamburger.className = "fa fa-bars menu-item";
    }
});

// Shopify Add To Cart
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'testing8173661.myshopify.com',
        storefrontAccessToken: 'bf78e183107f3a8f19881be15d0693e1',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6749097689220',
          node: document.getElementById('product-component-1646507253685'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#5e20cb"
                  },
                  "background-color": "#8f5ce6",
                  ":focus": {
                    "background-color": "#5e20cb"
                  },
                  "border-radius": "5px",
                  "padding-left": "30px",
                  "padding-right": "30px"
                }
              },
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#5e20cb"
                  },
                  "background-color": "#8f5ce6",
                  ":focus": {
                    "background-color": "#5e20cb"
                  },
                  "border-radius": "5px",
                  "padding-left": "30px",
                  "padding-right": "30px"
                }
              },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          ":hover": {
            "background-color": "#5e20cb"
          },
          "background-color": "#8f5ce6",
          ":focus": {
            "background-color": "#5e20cb"
          },
          "border-radius": "5px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#8f5ce6",
          ":hover": {
            "background-color": "#5e20cb"
          },
          ":focus": {
            "background-color": "#5e20cb"
          }
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/