$(document).ready(function () {
    $("#epmmodernadmin").html("");

    $("#epmmodernadmin").append("<li data-nav-id='./Settings/' title=Introduction class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/introduction/'>" +
        " Introduction" +
        " </a>" +
        "</li>" +
        "<li data-nav-id='./Settings/' title='Architecture Diagram' class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/architecture-diagram/'>" +
        "Architecture Diagram" +
        "</a>" +

        "</li>" +
        "<li data-nav-id='./Settings/' title='Home Page' class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/home-page/'>" +
        "Home Page" +
        "</a>" +

        "</li>" +
        "<li data-nav-id='./Settings/' title='Dashboard' class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/dashboard/'>" +
        "Dashboard" +
        "</a>" +

        "</li>" +
        "</li>" +
        "<li data-nav-id='./Settings/' title='Appraisal Cycle Process' class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/appraisal-cycle/'>" +
        "Appraisal Cycle Process" +
        "</a>" +

        "</li>" +
        "<li data-nav-id='./Settings/' title='Document' class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/Document/'>" +
        "Document" +
        "</a>" +

        "</li>" +

        "<li class='dropdownicon sidelist' title='Roles'>" +
        "<a  class='qwe' href='/employee-performance-management/modern/admin/roles/'>" +
        " Roles" +
        " </a>" +
        " <img src='../../down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>" +
        "</li>" +
        "<li data-nav-id='./Settings/'  class='sidelist dropdown_romove_dot'>" +
        "<ul class='sidenavSub-topics aside_dropdown_list active'>" +
        "<ul>" +


        "<li data-nav-id='./Email-Notification/' title=users class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#user'>User</a>" +
        "</li>" +

        "<li data-nav-id='./Custom-Emails/' title=Manager class='sidelist'>" +
        " <a href='/employee-performance-management/modern/admin/roles/#manager'>Manager(Employee's Manger)</a>" +
        " </li>" +

        " <li data-nav-id='./User/' title='HR Executive' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#hr-executive-dashboard'>HR Executive</a>" +
        "</li>" +

        "<li data-nav-id='./General-Settings/' title='HR Manager' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#hr-manager-dashboard'>HR Manager </a>" +
        "</li>" +
        "<li data-nav-id='./General-Settings/' title='HR Head' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#hr-head-dashboard'>HR Head </a>" +
        " </li>" +
        "<li data-nav-id='./General-Settings/' title='HR Manager Admin' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#hr-manager-admin-dashboard'>HR Manager Admin </a>" +
        "</li>" +
        "<li data-nav-id='./General-Settings/' title='HR Head Admin' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#hr-head-admin'>HR Head–Admin </a>" +
        "</li>" +
        "<li data-nav-id='./General-Settings/' title='HR Head Admin' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/roles/#admin'>Admin </a>" +
        "</li>" +
        "</ul>" +
        "</ul>" +
        "</li>" +
        "<li class='dropdownicon sidelist' title=Administration>" +
        "<a  class='qwe' href='/employee-performance-management/modern/admin/administration/'>" +
        " Administration" +
        " </a>" +
        " <img src='../../down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>" +
        "</li>" +
        "<li data-nav-id='./Settings/'  class='sidelist dropdown_romove_dot'>" +

        "<ul class='sidenavSub-topics aside_dropdown_list active'>" +

        "<ul>" +
        "<li data-nav-id='./Email-Notification/' title=Users class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#users'>" +
        "Users" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='./Custom-Emails/' title=Department class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#Department'>" +
        "Department" +
        "</a>" +
        "</li>" +
        "<li data-nav-id='./Custom-Emails/' title=Location class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#Location'>" +
        "Location" +
        "</a>" +
        "</li>" +
        "<li data-nav-id='./Custom-Emails/' title=Job Title class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#job-title'>" +
        "Job title" +
        "</a>" +
        "</li>" +
        "<li data-nav-id='./Custom-Emails/' title=Categories class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#categories'>" +
        "Categories" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='./User/' title=KRA class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#kra'>" +
        "KRA(Key Result Area)" +
        "</a>" +
        " </li>" +
        "<li data-nav-id='./User/' title=Goals class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#Goals'>" +
        "Goals" +
        "</a>" +
        " </li>" +
        "<li data-nav-id='./User/' title=Competency & Skills class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#Competency&Skills'>" +
        "Competency & Skills" +
        "</a>" +
        " </li>" +

        "<li data-nav-id='./General-Settings/' title='Role Template' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#role-template'>" +
        "Template(s)" +
        " </a>" +
        " </li>" +
        "<li data-nav-id='./General-Settings/' title='1:1 Template' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#1:1-template'>" +
        " 1:1 Template" +
        " </a>" +
        " </li>" +
        "<li data-nav-id='./General-Settings/' title='Feedback Template' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/administration/#FeedbackTemplate'>" +
        "Feedback template" +
        " </a>" +
        " </li>" +
        "</ul>" +
        " </ul>" +
        "</li>" +



        "<li class='dropdownicon sidelist' title=Settings>" +
        "<a  class='qwe' href='/employee-performance-management/modern/admin/settings/'>" +
        "Settings" +
        "</a>" +
        "<img src='../../down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>" +
        "</li>" +

        "<li data-nav-id='./Settings/'  class='sidelist dropdown_romove_dot'>" +
        "<ul class='sidenavSub-topics aside_dropdown_list active'>" +

        " <ul>" +

        " <li data-nav-id='./General-Settings/' title='General Settings' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/settings/#general-setting'>" +
        " General Settings" +
        "</a>" +
        "</li>" +

        " <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/settings/#users'>" +
        "Users" +
        " </a>" +
        "</li>" +
        " <li data-nav-id='./Custom-Emails/' title=Advance Settings class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/settings/#AdvanceSettings'>" +
        "Advance Settings" +
        " </a>" +
        "</li>" +

        "<li data-nav-id='./Column-Setting/' title=Notification class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/settings/#notification'>" +
        " Notification" +
        "</a>" +
        "</li>" +

        " <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/settings/#features'>" +
        "Features" +
        " </a>" +
        "</li>" +



        "</ul>" +
        "</ul>" +

        "</li>" +

        "<li data-nav-id='./Settings/' title=Reports class=sidelist>" +

        "<a href='/employee-performance-management/modern/admin/reports/'>" +
        " Reports" +
        "</a>" +
        "</li>" +

        "<li class='dropdownicon sidelist' title='Help'>" +
        "<a href='/employee-performance-management/modern/admin/help/'>" +
        "Help" +
        "</a>" +
        "<img src='../../down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>" +

        "<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +



        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/employee-performance-management/modern/admin/help/#product-activation'>Product Activation</a>" +
        "</li>" )

});
