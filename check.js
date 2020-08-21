(function(){

var jsobj;
var returnToJsObj;

    jsobj = localStorage.getItem("itemsStored");
    returnToJsObj = JSON.parse(jsobj);
    
    //console.log(returnToJsObj);
     $.ajax({
        url:"testpage1.php",
        method:"post",
        data:{phpJson : JSON.stringify(returnToJsObj)},
        success: function(res){
            console.log(res);
        }     
    }) 
    
})();