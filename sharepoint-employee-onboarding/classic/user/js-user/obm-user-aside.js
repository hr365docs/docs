$(document).ready(function() {
    $("#obm-user-aside").html("");
    $("#obm-user-aside").append(
        "<ul>"+
        " <li data-nav-id='./installation/requirments/' title=Introduction class=sidelist> "+
        "<a href='/sharepoint-employee-onboarding/classic/user/introduction/'> Introduction </a>"+
        "</li>"+
        "<li data-nav-id=https://github.com/hr365docs/My-project.git/installation/requirments/ title='Getting Started' class=sidelist>"+
        "<a href='/sharepoint-employee-onboarding/classic/user/getting-started/'>Getting Started</a>"+
        "<li data-nav-id='./installation/requirments/' title='Home Page' class=sidelist>"+
        " <a href='/sharepoint-employee-onboarding/classic/user/homepage/'> Home Page </a>"+
        " </li>"+
        
        "<li data-nav-id='./installation/requirments/' class=sidelist>"+
         "<li title='User Interface' class='helpdesk-dropdown sidelist'>"+
         "<a href='/sharepoint-employee-onboarding/classic/user/userinterface/'> User Interface </a>"+
         "<img class='helpdesk-img aside_dropdown_icon' src='/sharepoint-employee-onboarding/classic/user/js-user/down-arrow-svgrepo-com.svg'>"+"<ul class='sidenavSub-topics aside_dropdown_list'>"+
         "<li data-nav-id='../General' title=Profiles class=sidelist>"+
          "<a href='/sharepoint-employee-onboarding/classic/user/userinterface/#update-profiles'> Update Profiles </a>"+
          "</li>"+
          "<li data-nav-id='../General' title=Details class=sidelist>"+
           "<a href='/sharepoint-employee-onboarding/classic/user/userinterface/#update-details'> Update Details </a>"+
            "</li>"+
            "<li data-nav-id='../General' title=Documents class=sidelist>"+
            "<a href='/sharepoint-employee-onboarding/classic/user/userinterface/#upload-documents'> Upload Documents </a>"+
             "</li>"+
             "</ul>"+
             "</li>"+
             "</li>"+
             "</ul>")
})