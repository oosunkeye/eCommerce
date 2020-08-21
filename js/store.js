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


var itemObjToJson;
var returnItems;
var returnedArray;

(function() 
{
    const cartBtn = document.querySelectorAll(".block2-img");
    const item = {};
    var arrayOfItems = [];
                /* object constructur */
    function Data(name, img, totalprice) 
        {
            this.name = name;
            this.img = img;
            this.totalprice = totalprice;
            this.orderid = 569969;
        }

                

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
            //console.log(event.target);

             if(event.target.parentElement.classList.contains("block2-btn-addcart"))
             {
                
                let fullPath = event.target.parentElement.parentElement.previousElementSibling.src;
                item.img = fullPath;
            
                let name = event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].textContent;
                item.name = name;
                
                let price = event.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].textContent.trim();
  
                let finalPrice = price.replace("$","");
                item.totalprice = finalPrice;

                arrayOfItems.push(new Data(item.name, item.img, item.totalprice, item.orderid));
                           
                            itemObjToJson = JSON.stringify(arrayOfItems);
                            
                            localStorage.setItem("itemsStored", itemObjToJson);

                            returnItems = localStorage.getItem("itemsStored");
                            returnedArray = JSON.parse(returnItems);

                            
                
                const childIl = document.createElement("li");
                childIl.classList.add("header-cart-item", "header-cart-wrapitem", "header-cart-item-img", "header-cart-item-txt");

                var liContent =    `<li class="header-cart-item">
                                                <div class="header-cart-item-img">
                                                    <img src="${returnedArray[returnedArray.length-1].img}" alt="IMG">
                                                </div>
                                    
                                                <div class="header-cart-item-txt">
                                                    <a href="#" class="header-cart-item-name">
                                                        ${returnedArray[returnedArray.length-1].name}
                                                    </a>
                                    
                                                    <span class="header-cart-item-info">
                                                       ${returnedArray[returnedArray.length-1].totalprice}
                                                    </span>
                                                </div>
                                    </li>`;
                childIl.innerHTML = liContent;
                var menu = document.getElementById("header-cart").getElementsByTagName("ul")[0];
                menu.appendChild(childIl);
                
                menu.insertBefore(childIl, menu.getElementsByTagName("li")[0]);
                menu.getElementsByClassName("header-cart-item-img")[0].addEventListener("click", removeCartItem);
                calcTotal();
             }
        });
    });

    //REMOVE ITEM FROM CART
  function removeCartItem(event) 
    {
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


//localStorage.clear();

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


