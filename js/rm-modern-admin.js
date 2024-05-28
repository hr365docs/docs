$(document).ready(function () {
    $("#rmmmodernadmin").html("");

    $("#rmmmodernadmin").append("<li data-nav-id='./Settings/' title=Introduction class=sidelist>"+

    "<a href='/rm365/modern/admin/introduction/'>"+
       " Introduction"+
   " </a>"+
"</li>"+
"<li data-nav-id='./Settings/' title='Architecture Diagram' class=sidelist>"+

    "<a href='/rm365/modern/admin/architecture-diagram/'>"+
        "Architecture Diagram"+
  "</a>"+

"</li>"+
"<li data-nav-id='./Settings/' title='Home Page' class=sidelist>"+

    "<a href='/rm365/modern/admin/home-page/'>"+
        "Home Page"+
  "</a>"+

"</li>"+
"<li class='dropdownicon sidelist' title='Draft'>" +
"<a href='/RM365/modern/admin/draft/'>" +
"Draft" +
"</a>" +


"<li data-nav-id='./Settings/' title=inactive-items class=sidelist>"+

"<a href='/rm365/modern/admin/inactiveitem/'>"+
" Inactive Items"+
    "</a>"+
"</li>"+



"<li data-nav-id='./Settings/' title=Administration class=sidelist>"+

"<a href='/rm365/modern/admin/administration/'>"+
" Administration"+
    "</a>"+
"</li>"+



   
"<li class='dropdownicon sidelist' title=Settings>"+
    "<a  class='qwe' href='/rm365/modern/admin/settings/'>"+
        "Settings"+
    "</a>"+
    "<img src='../../down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>"+
"</li>"+

"<li data-nav-id='./Settings/'  class='sidelist dropdown_romove_dot'>"+
    "<ul class='sidenavSub-topics aside_dropdown_list active'>"+
        
       " <ul>"+
           
           " <li data-nav-id='./General-Settings/' title='Users, Roles and Permissions' class='sidelist'>"+
            "<a href='/rm365/modern/admin/settings/users-departments'>"+
           " Users and Departments"+
            "</a>"+
            "</li>"+
          
           " <li data-nav-id='./Custom-Emails/' title=Integrations class='sidelist'>"+
                "<a href='/rm365/modern/admin/settings/Job-Posting'>"+
                "Job Posting"+
               " </a>"+
            "</li>"+

            "<li data-nav-id='./Column-Setting/' title=Contract Fields class='sidelist'>"+
           "<a href='/rm365/modern/admin/settings/Email-Configration'>"+
           " Email Configuration"+
           "</a>"+
           "</li>"+

           " <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>"+
                "<a href='/rm365/modern/admin/settings/general-setting'>"+
                "General Setting"+
               " </a>"+
            "</li>"+
       
        " <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>"+
        "<a href='/rm365/modern/admin/settings/permissions'>"+
        "Permission"+
       " </a>"+
    "</li>"+
        
    " <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>"+
    "<a href='/rm365/modern/admin/settings/hiring-process'>"+
    "Hiring Process"+
   " </a>"+
"</li>"+
" <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>"+
"<a href='/rm365/modern/admin/settings/Requisition-Templates'>"+
"Requisition Templates"+
" </a>"+
"</li>"+
" <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>"+
"<a href='/rm365/modern/admin/settings/Portal-Configration'>"+
"Portal Configuration"+
" </a>"+
"</li>"+

        "</ul>"+
    "</ul>"+

"</li>"+



"<li class='dropdownicon sidelist' title='Help'>" +
"<a href='/rm365/modern/admin/help/'>" +
"Help" +
"</a>" +
"<img src='../../down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
"</li>" +

"<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +



"<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
"<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
"<a href='/rm365/modern/admin/help/#product-activation'>Product Activation</a>" +
"</li>" )
                                           
});
