$("#settingsadmin").hide();  
$("#modernsettingedm").hide();
$("#edmmoderngeneral").hide();
$("#modernadminmainsetting").hide();
$("#userinterecenavbar").hide();

var hideshowinterfacenew="show"
var hideshowinterface="show"
var hideshowedpadmin="show"
var hideshowgeneral="show"
var hideshowmainsetting="show"



function hideshowadminsetting(event){
         event.stopPropagation();
       event.preventDefault();
       
       
       $(".imageIcon").toggleClass("drodown_icon");
        // $(".dropdownicon img").css("border", "1px solid black")
         if(hideshowinterfacenew == "show"){

             $("#settingsadmin").hide(); 
             hideshowinterfacenew="hide";
         }
         else{

             $("#settingsadmin").show();
             hideshowinterfacenew="show";
         }
     }



    //  Employee-directory modern admin guide advancedsetting 
    function hideshowmodern(event){
        event.stopPropagation();
      event.preventDefault();
      
      
      $(".imageIconadvanced").toggleClass("drodown_icon");
       // $(".dropdownicon img").css("border", "1px solid black")
        if(hideshowedpadmin == "show"){

            $("#modernsettingedm").hide(); 
            hideshowedpadmin="hide";
        }
        else{

            $("#modernsettingedm").show();
            hideshowedpadmin="show";
        }
    }


    // employee-directory modern adminguide general setting

    function hideshowmoderngeneral(event){
        event.stopPropagation();
      event.preventDefault();
      
      $(".imageIcongeneral").toggleClass("drodown_icon");
       // $(".dropdownicon img").css("border", "1px solid black")
        if(hideshowgeneral == "show"){

            $("#edmmoderngeneral").hide(); 
            hideshowgeneral="hide";
        }
        else{

            $("#edmmoderngeneral").show();
            hideshowgeneral="show";
        }
    }


    // employee directory admin main settings dropdowm

    function hideshowmodernmainsetting(event){
        event.stopPropagation();
      event.preventDefault();
      
      
     
      $(".imageIconmainsetting").toggleClass("drodown_icon");
       // $(".dropdownicon img").css("border", "1px solid black")
        if(hideshowmainsetting == "show"){

            $("#modernadminmainsetting").hide(); 
            hideshowmainsetting="hide";
        }
        else{

            $("#modernadminmainsetting").show();
            hideshowmainsetting="show";
        }
    }
// userguide js fun



function hideshowuserinterface(event){
         event.stopPropagation();
       event.preventDefault();
       
       
       $(".imageIcon").toggleClass("drodown_icon");
        // $(".dropdownicon img").css("border", "1px solid black")
         if(hideshowinterface == "show"){

             $("#userinterecenavbar").hide(); 
             hideshowinterface="hide";
         }
         else{

             $("#userinterecenavbar").show();
             hideshowinterface="show";
         }
     }
