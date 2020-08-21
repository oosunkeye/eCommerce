// console.log("running");

(function(){

    var jsobj;
    var returnToJsObj;
    
    jsobj = localStorage.getItem("itemsStored");
    returnToJsObj = JSON.parse(jsobj);
    
    const cartList = document.getElementById("table-shopping-cart");
    cartList.classList.add("table-row", "column-1");
    var getItem;
    var itemName;
    var quantityCount;
    var itemsRestore = [];

    

    function removeCartItem(e)
        {
            if(e.target.className == "remove"){
                var buttonClicked = e.target;
                var getTarget = buttonClicked.parentElement;
                itemName = getTarget.getElementsByClassName("column-2")[0].innerText;
                buttonClicked.parentElement.remove();
                searchArray(returnToJsObj);
                localStorage.removeItem('itemsStored')
                restoreLocalStorage(returnToJsObj);

            }
        }
    
    function searchArray(find)
                        {
                            for(var i = 0; i<find.length; i++)
                            {
                                if(find[i].name.trim() === itemName ){
                                    console.log(find[i].name.trim() + " index of " + i);
                                    returnToJsObj.splice(i, 1);
                                }
                            }
                            calcTotal();
                        }

    function restoreLocalStorage(items)
        {
            console.log(items);
            
            if(items.length > 0)
            {
                var itemsRestoree = JSON.stringify(items);
                localStorage.setItem("itemsStored", itemsRestoree);
            } else
            {
                localStorage.removeItem('itemsStored');
                setTimeout(function(){ location.reload();
                }, 1000);
                
            }
        }                 

    displayData(returnToJsObj);
    
    function displayData(data)
        {            
            for(var i = 0; i<data.length; i++)
            {
    
                        const trContent = `
                                <tr id="table-row" class="table-row">
                                        <td class="column-1">
                                            <div id="cart-img-product" class="cart-img-product b-rad-4 o-f-hidden">
                                                <img src="${data[i].img}" alt="IMG-PRODUCT">
                                            </div>
                                        </td>
                                            <td class="column-2">${data[i].name}</td>
                                            <td class="column-3">${data[i].totalprice}</td>
                                            <td class="column-5">1</td>
                                        <td class="remove">Remove</td>
                                </tr>`
    
                            cartList.innerHTML += trContent;
                            
            }
            getItem = document.querySelector(".table-row");
            getItem.addEventListener("click", removeCartItem);

            calcTotal();
           
        } 


        function calcTotal(){
            var i;
            var totalOfItems = 0;
            for(i = 0; i<returnToJsObj.length; i++){
                totalOfItems += parseFloat(returnToJsObj[i].totalprice);
            }
            var itemCount = returnToJsObj.length;
            document.getElementById("header-icons-noti").innerHTML = itemCount;
            document.getElementById("totalCart").innerHTML = "CAD " + totalOfItems.toFixed(2);
        }
            

    })();

    
   

// UN-USED CODE


// function qtyCount(e)
    //     {
    //         if(e.target.className = "remove"){
    //             var buttonClicked = e.target;
    //             var getTarget = buttonClicked.parentElement;
    //             //var itemName = buttonClicked.getElementsByClassName("itemNumber")[0].value;
    //             //var gg = buttonClicked.textContent;
    //             console.log(getTarget);
                
    //         }
    //     }

    // function loopclick(e){
    //     if(e.target.className == "btn-num-product-up"){
    //     alert("clicked");
    //     }
    // }

    // function removeCartItem(e)
    //     {   
    //         if(e.target.className == "btn-num-product-up"){
    //             var buttonClicked = e.target;
    //             console.log(buttonClicked);

    //             //var getTarget = buttonClicked.children[0];
    //             //var itemName = buttonClicked.getElementsByClassName("flex-w")[0].children[0];
    //             //var itemchild = itemName.children[1].innerHTML;
                
    //         }
    //     }