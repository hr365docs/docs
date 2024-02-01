$(document).ready(function () {
    $("#edmfullyadminguide").html("");

    $("#edmfullyadminguide").append("<ul>" +
        // ritika dasboard
        "<li data-nav-id='./installation/requirments/' title=Introduction class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/introduction/'>" +
        "Introduction" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='https://github.com/hr365docs/My-project.git/installation/requirments/' title='Profile Card' class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/ArchitectureDiagram/'>" +
        "Architecture Diagram" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='https://github.com/hr365docs/My-project.git/installation/requirments/' title='Profile Card' class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/profile-card/'>" +
        "Profile Card" +
        "</a>" +
        "</li>" +

        "<li class='dropdownicon sidelist' title='dashboard'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/dashboard/'>" +
        "Dashboard" +
        "</a>" +
        "<img src='../down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>" +

        "<li data-nav-id='../advanced/' title=dashboard class='sidelist dropdown_romove_dot'>" +



        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/dashboard/general'>General</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/dashboard/advance'>Advance</a>" +
        "</li>" +
        
        "</ul>" +
       
        


// setting start 
        "<li class='dropdownicon sidelist' title='Settings'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/'>" +
        "Settings" +
        "</a>" +
        "<img src='../down-arrow-svgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting''>" +
        "</li>" +

        "<li data-nav-id='./Setting/' title='Settings' class='sidelist dropdown_romove_dot'>" +
        // "<div class='dropdownicon'>" +
        // "<a href='/sharepoint-employee-directory/modern/admin/settings/'>" +
        // "Settings" +
        // "</a>" +
        // "<img src='./down-arrow-svgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting''>" +
        // "</div>" +

        "<ul class='sidenavSub-topics aside_dropdown_list_setting' value='settings'>" +

        "<ul id='modernadminmainsetting'>" +
        "<li class='dropdownicon sidelist' title='General'>" +
        "<a  class='qwe' href='/sharepoint-employee-directory/modern/admin/settings/general/'>" +
        "General" +
        "</a>" +
        "<img src='../down-arrow-svgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
        "</li>" +
        "<li data-nav-id='../advanced/' class='sidelist dropdown_romove_dot' >" +

        // "<div class='dropdownicon'>" +
        // "<a  class='qwe' href='/sharepoint-employee-directory/modern/admin/settings/general/'>" +
        // "General" +
        // "</a>" +
        // "<img src='./down-arrow-svgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
        // "</div>" +

        "<ul class='sidenavSub-topics aside_dropdown_list' id='edmmoderngeneral'>" +
        "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#search-filter'>Search filters</a>" +
        "</li>" +

        "<li  data-nav-id='../advanced/' title='Allow users to export directory' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#allow-user-export-directory'>Allow users to export directory</a>" +
        "</li>" +

        "<li  data-nav-id='../advanced/' title='Language selection' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#language-selection-as-browser'>Language selection as browser default language</a>" +
        "</li>" +

        "<li  data-nav-id='../advanced/' title='Language selection' class='sidelist '>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#language-selection'>Language selection in case browser default language is not detected</a>" +
        "</li>" +

        "<li  data-nav-id='../advanced/' title=' Update users role and permissions' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#update-roles'>Update users role and permissions</a>" +
        "</li>" +

        "<li  data-nav-id='../advanced/' title=' Update users department' class='sidelist '>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#update-department'>Update users department" +
        "</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title=' Update job title ' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#update-jobtitle'>Update job title" +
        "</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title=' Update users location  ' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#update-location'>Update users location  </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Collaboration ' class='sidelist '>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#collaboration'>Collaboration </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Custom link ' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#custom-link'>Custom link</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Organization chart type ' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/general/#organization-chart-type'>Organization chart type</a>" +
        "</li>" +
        "</ul>" +

        "</li>" +
        "<li data-nav-id='../views/' title=Views class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/views/'>" +
        "Views" +
        "</a>" +
        "</li>" +


        "<li data-nav-id='../Exclude-Options/' title='Exclude Options' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/'>" +
        "Exclude Options" +
        "</a>" +
        "</li>" +

      
        // "<li data-nav-id='../views/' title='Make user sortabel' class='sidelist'>" +
        // "<a href='/sharepoint-employee-directory/modern/admin/settings/views/#make-user-sortable'>" +
        // "Make user sortable" +
        // "</a>" +
        // "</li>" +

        "<li class='dropdownicon sidelist' title='Advanced'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/'>" +
        "Advanced" +
        "</a>" +
        
        "</li>" +

        "<li data-nav-id='../advanced/' title=Advanced class='sidelist dropdown_romove_dot'>" +



       

        "</ul>" +
        "</li>" +

        "</ul>" +

        "</a>" +
        "</ul>" +
        // setting end 
        "<li class='dropdownicon sidelist' title='Help'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/help/'>" +
        "Help" +
        "</a>" +
        "<img src='../down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>" +

        "<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +



        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/help/#product-activation'>Product Activation</a>" +
        "</li>" +









        "</ul>" +
        // "<li data-nav-id='https://github.com/hr365docs/My-project.git/installation/requirments/' title='Help' class=sidelist>" +
        // "<a href='/sharepoint-employee-directory/modern/admin/help/'>" +
        // "Help" +
        // "</a>" +
        // "</li>" +



        "</ul>")



});