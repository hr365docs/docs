$("#settingsadmin").hide();  
var hideshowinterface="hide"
function hideshowadminsetting(event){
         event.stopPropagation();
       event.preventDefault();
       
       
       $(".imageIcon").toggleClass("drodown_icon");
        // $(".dropdownicon img").css("border", "1px solid black")
         if(hideshowinterface == "show"){

             $("#settingsadmin").hide(); 
             hideshowinterface="hide";
         }
         else{

             $("#settingsadmin").show();
             hideshowinterface="show";
         }
     }