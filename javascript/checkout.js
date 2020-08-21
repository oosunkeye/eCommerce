(function(){

//alert("connected");

var jsobj;
var returnToJsObj;

    jsobj = localStorage.getItem("itemsStored");
    returnToJsObj = JSON.parse(jsobj);

    var ul = document.getElementById("list-items");
    console.log(ul);
    var newLI = document.createElement("LI");
    
    displayItems(returnToJsObj);
    function displayItems(data)
        {
            
            for(var i = 0; i<data.length; i++)
            {
                const items = `<li class="list-item-checkout">
                        <div class="image-column-checkout">
                        <img src="${data[i].img}">
                        </div>
                        <div class="list-item-checkout-right">
                        <div class="shopping-item-description-checkout">
                            <p><b>${data[i].name}</b></p>
                            <p>Size: IT 46</p>
                            <div>
                                <div id="one-item-left" class="stock-left">Only one left</div>
                            </div>
                        </div>
                        <div class="price-column-checkout">
                            <div class="price-checkout">
                                <div id="regular-price" class="regular-price-checkout">
                                ${data[i].totalprice} CAD
                                </div>
                                <!----><!----><!----><!---->
                            </div>
                        </div>
                        </div>
                    </li>`

                    newLI.innerHTML += items;
                    ul.insertBefore(newLI, ul.childNodes[0]);
                    
            }
        }
        calcTotal()
        function calcTotal(){
            var i;
            var totalOfItems = 0;
            for(i = 0; i<returnToJsObj.length; i++){
                totalOfItems += parseFloat(returnToJsObj[i].totalprice);
            }
            document.getElementById("totalCart").innerHTML = totalOfItems.toFixed(2) + " CAD";
            console.log(totalOfItems.toFixed(2));
            
        }
            
})();

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address1");
const city = document.getElementById("city");
const postCode = document.getElementById("postCode");
const phone = document.getElementById("phone");

    function validateFirstName()
        {
            if(firstName.value == ""){
                document.getElementById("errorFirstName").innerHTML = "Please fill out this field.";
            }else if(firstName.value.length < 3){
                document.getElementById("errorFirstName").innerHTML = "enter more";
            }else {
                document.getElementById("errorFirstName").innerHTML = "";
            }
            
        }

    function validateLastName()
        {
            if(lastName.value == ""){
                document.getElementById("errorLastName").innerHTML = "Please fill out this field.";
            }else if(lastName.value.length < 3){
                document.getElementById("errorLastName").innerHTML = "enter more";
            }else {
                document.getElementById("errorLastName").innerHTML = "";
            }
            
        }

    function validateAddress()
        {
            if(address.value == ""){
                document.getElementById("errorAddress").innerHTML = "Please fill out this field.";
            }else if(address.value.length < 3){
                document.getElementById("errorAddress").innerHTML = "enter more";
            }else {
                document.getElementById("errorAddress").innerHTML = "";
            }
            
        }
    
    function validateCity()
        { 
            if(city.value == ""){
                document.getElementById("errorCity").innerHTML = "Please fill out this field.";
            }else if(city.value.length < 3){
                document.getElementById("errorCity").innerHTML = "enter more";
            }else {
                document.getElementById("errorCity").innerHTML = "";
            }
            
        }

    function validateZip()
        {
            if(postCode.value == ""){
                document.getElementById("errorZip").innerHTML = "Please fill out this field.";
            }else if(postCode.value.length < 3){
                document.getElementById("errorZip").innerHTML = "enter more";
            }else {
                document.getElementById("errorZip").innerHTML = "";
            }
            
        }

    function validatePhone()
        {
            if(phone.value == ""){
                document.getElementById("errorPhone").innerHTML = "Please fill out this field.";
            }else if(phone.value.length < 3){
                document.getElementById("errorPhone").innerHTML = "enter more";
            }else {
                document.getElementById("errorPhone").innerHTML = "";
            }
            
        }

    
 function validateForm() {
        
      if ( firstName.value == "") {
        document.getElementById("errorFirstName").innerHTML = "Please fill out this field.";
        return false;
      } 
      if (lastName.value == "") {
        document.getElementById("errorLastName").innerHTML = "Please fill out this field.";
        return false;
      }
        
     if (address.value == "") {
        document.getElementById("errorAddress").innerHTML = "Please fill out this field.";
        return false;
      }
        
    if (city.value == "") {
        document.getElementById("errorCity").innerHTML = "Please fill out this field.";
        return false;
      }
    if (postCode.value == "") {
        document.getElementById("errorZip").innerHTML = "Please fill out this field.";
        return false;
      }
     if (phone.value == "") {
        document.getElementById("errorPhone").innerHTML = "Please fill out this field.";
        return false;
      }
        
        
    }