$(document).ready(function() {
    $("#hdm-user-aside").html("");
    $("#hdm-user-aside").append(
    "<li data-nav-id='./Introduction/' title=Introduction class='sidelist'>"+
    "<a href='/sharepoint-helpdesk/modern/user/introduction/'>Introduction</a>"+
    "</li>"+



     "<li class='dropdownicon sidelist'  title=Home Page>" +
        
         "<a href='/sharepoint-helpdesk/modern/user/home-page/'>Home Page</a>"+   
          "<img   class='helpdesk-img aside_dropdown_icon' src='/online-asset-management-application/modern/user/amm-user-assets/down-arrow-svgrepo-com.svg'>"+
     "</li>"+
       "<li data-nav-id='./Settings/'   class='sidelist dropdown_romove_dot'>"+
     "<ul class='sidenavSub-topics aside_dropdown_list'>"+

      "<li data-nav-id='../getting-started/' title='My Requests' class='sidelist'>"+
    "<a href='/sharepoint-helpdesk/modern/user/home-page/#My-Requests'>My Requests</a>"+
    "</li>"+
     "<li data-nav-id='../getting-started/' title='My Closed' class='sidelist'>"+
    "<a href='/sharepoint-helpdesk/modern/user/home-page/#My-Closed'>My Closed</a>"+
    "</li>"+
     "<li data-nav-id='../getting-started/' title='Knowledge Base' class='sidelist'>"+
    "<a href='/sharepoint-helpdesk/modern/user/home-page/#Knowledgebase'>Knowledge Base</a>"+
    "</li>"+

     "</ul>"+
     "</li>"+
    
 

    "<li data-nav-id='../getting-started/' title='Theme' class='sidelist'>"+
    "<a href='/sharepoint-helpdesk/modern/user/theme/'>Theme</a>"+
    "</li>"+
    "<li data-nav-id='./User-Interface/' title='Help' class='sidelist'>"+
    "<a href='/sharepoint-helpdesk/modern/user/help/'>Help</a>"+
    "</li>");
})