$('.block2-btn-addcart').each(function(){
    var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    $(this).on('click', function(){
        swal(nameProduct, "is added to cart !", "success");
    });
});

$('.block2-btn-addwishlist').each(function(){
    var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    $(this).on('click', function(){
        swal(nameProduct, "is added to wishlist !", "success");
    });
});

(function() 
{
    const cartBtn = document.querySelectorAll(".block2-img");

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
            // console.log(event.target);

             if(event.target.parentElement.classList.contains("block2-btn-addcart"))
             {
                

                const item = {};
                var arrayOfItems = [];
                var x = 0;
                /* object constructur */
                function Data(name, img, totalprice) {
                    this.name = name;
                    this.img = img;
                    this.totalprice = totalprice;
                    this.OrderItem = function() {
                    return (this.name + " " + this.img + " " + this.totalprice);
                    };
                }
                let fullPath = event.target.parentElement.parentElement.previousElementSibling.src;
                item.img = fullPath;
            
                let name = event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].textContent;
                item.name = name;
                
                let price = event.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].textContent.trim();
  
                let finalPrice = price.replace("$","");
                item.totalprice = finalPrice;

                /* loop arrray */
                // for (var x in arrayOfItems) {
                //     console.log(arrayOfItems[x].OrderItem());
                //     console.log(arrayOfItems.length);
                    
                // }

                // var itemObjToJson = JSON.stringify(item);
                // localStorage.setItem("item", itemObjToJson);

                // var jsObj = localStorage.getItem("item");
                // var returnToJsObj = JSON.parse(jsObj);
                // console.log(returnToJsObj);
                
                const childIl = document.createElement("li");
                childIl.classList.add("header-cart-item", "header-cart-wrapitem", "header-cart-item-img", "header-cart-item-txt");

                var liContent =    `<li class="header-cart-item">
                                                <div class="header-cart-item-img">
                                                    <img src="${item.img}" alt="IMG">
                                                </div>
                                    
                                                <div class="header-cart-item-txt">
                                                    <a href="#" class="header-cart-item-name">
                                                        ${item.name}
                                                    </a>
                                    
                                                    <span class="header-cart-item-info">
                                                       ${item.totalprice}
                                                    </span>
                                                </div>
                                        </li>`;
                childIl.innerHTML = liContent;
                var menu = document.getElementById("header-cart").getElementsByTagName("ul")[0];
                menu.appendChild(childIl);
                arrayOfItems.push(new Data(item.name, item.img, item.totalprice));
                console.log(arrayOfItems.length);
                

                menu.insertBefore(childIl, menu.getElementsByTagName("li")[0]);
                menu.getElementsByClassName("header-cart-item-img")[0].addEventListener("click", removeCartItem);
                calcTotal();
             }
        });
    });

    //REMOVE ITEM FROM CART
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.remove();
    calcTotal();
   
}

    //CALCULATE THE TOTAL COST AND NUMBERS OF ITEMS
    function calcTotal()
    {
        const storePrice = [];
        const items = document.querySelectorAll(".header-cart-item-info");

        items.forEach(function(item)
            {
                //console.log(item.textContent);
                storePrice.push(parseFloat(item.textContent));
            });
        
        var totalSum = 0;
        for(var i = 0; i<items.length; i++)
            {
                totalSum += storePrice[i];
            }
        
        if(totalSum == 0)
            {
                document.getElementById("header-cart-totalt").innerHTML = "Total $0" ;
                document.getElementById("header-icons-notification").innerHTML = 0;
            }else 
            {   
                document.getElementById("header-cart-totalt").innerHTML = "Total $" + totalSum.toFixed(2);
                document.getElementById("header-icons-notification").innerHTML = items.length;
            }
    };
        
})();




/*

UNSUED CODE; 
//console.log("the value:" + storePrice);
    //     const totalMoney = storePrice.reduce(function(storePrice, item){
    //         storePrice += item;
    //         return storePrice;
    // }, 0)
    // console.log(totalMoney);


    ------------------

    //   var removeItem = document.getElementsByClassName("header-cart-item-img");

//   for(i=0; i<removeItem.length; i++){
//     var buttonClicked = removeItem[i];
//     buttonClicked.addEventListener("click", removeCartItem);
//   }
  
*/


