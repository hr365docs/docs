$(document).ready(function () {
    $("#ETmodernadmin").html("");

    $("#ETmodernadmin").append("<li data-nav-id='./Settings/' title=Introduction class=sidelist>" +

        "<a href='/Expense-tracker/modern/admin/introduction/'>" +
        " Introduction" +
        " </a>" +
        "</li>" +
        "<li data-nav-id='./Settings/' title='Architecture Diagram' class=sidelist>" +

        "<a href='/Expense-tracker/modern/admin/architecture-diagram/'>" +
        "Architecture Diagram" +
        "</a>" +

        "</li>" +
        "<li data-nav-id='./Settings/' title='Home Page' class=sidelist>" +

        "<a href='/Expense-tracker/modern/admin/home-page/'>" +
        "Home Page" +
        "</a>" +

        "</li>" +


        "<li data-nav-id='./Settings/' title='report' class=sidelist>" +

        "<a href='/Expense-tracker/modern/admin/reports/'>" +
        "Report" +
        "</a>" +

        "</li>" +







        "<li data-nav-id='./Settings/' title=Reports class=sidelist>" +

        "<a href='/Expense-tracker/modern/admin/administration/'>" +
        " Administration" +
        "</a>" +
        "</li>" +




        "<li class='dropdownicon sidelist' title=Settings>" +
        "<a  class='qwe' href='/Expense-tracker/modern/admin/settings/'>" +
        "Settings" +
        "</a>" +
        "<img src='../../down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>" +
        "</li>" +

        "<li data-nav-id='./Settings/'  class='sidelist dropdown_romove_dot'>" +
        "<ul class='sidenavSub-topics aside_dropdown_list active'>" +

        " <ul>" +

        " <li data-nav-id='./General-Settings/' title='Users, Roles and Permissions' class='sidelist'>" +
        "<a href='/Expense-tracker/modern/admin/settings/#General-setting'>" +
        " General Settings " +
        "</a>" +
        "</li>" +

        " <li data-nav-id='./Custom-Emails/' title=Integrations class='sidelist'>" +
        "<a href='/Expense-tracker/modern/admin/settings/#UserPermissions'>" +
        "User Roles and Permissions" +
        " </a>" +
        "</li>" +

        "<li data-nav-id='./Column-Setting/' title=Contract Fields class='sidelist'>" +
        "<a href='/Expense-tracker/modern/admin/settings/#Notification'>" +
        " Notifications" +
        "</a>" +
        "</li>" +

        " <li data-nav-id='./Custom-Emails/' title=Users class='sidelist'>" +
        "<a href='/Expense-tracker/modern/admin/settings/#Features'>" +
        "Features" +
        " </a>" +
        "</li>" +

       



        "</ul>" +
        "</ul>" +

        "</li>" +



        "<li class='dropdownicon sidelist' title='Help'>" +
        "<a href='/Expense-tracker/modern/admin/help/'>" +
        "Help" +
        "</a>" +
        "<img src='../../down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>" +

        "<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +



        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/Expense-tracker/modern/admin/help/#product-activation'>Product Activation</a>" +
        "</li>")

});
