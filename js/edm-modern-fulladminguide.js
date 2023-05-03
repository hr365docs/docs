$(document).ready(function() {
    $("#edmfullyadminguide").html("");

    $("#edmfullyadminguide").append("<ul>" +

        "<li data-nav-id='./installation/requirments/' title=Introduction class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/introduction/'>" +
        "Introduction" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='https://github.com/hr365docs/My-project.git/installation/requirments/' title='Profile Card' class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/profile-card/'>" +
        "Profile Card" +
        "</a>" +
        "</li>" +

        "<li class='dropdownicon sidelist' title='Settings'>"+
        "<a href='/sharepoint-employee-directory/modern/admin/settings/'>" +
        "Settings" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting''>" +
    "</li>"+

        "<li data-nav-id='./Setting/' title='Settings' class='sidelist dropdown_romove_dot'>" +
        // "<div class='dropdownicon'>" +
        // "<a href='/sharepoint-employee-directory/modern/admin/settings/'>" +
        // "Settings" +
        // "</a>" +
        // "<img src='./down-arrow-svgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting''>" +
        // "</div>" +

        "<ul class='sidenavSub-topics aside_dropdown_list_setting' value='settings'>" +

        "<ul id='modernadminmainsetting'>" +
        "<li class='dropdownicon sidelist' title='General'>"+
        "<a  class='qwe' href='/sharepoint-employee-directory/modern/admin/settings/general/'>" +
        "General" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
        "</li>"+
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


        "<li data-nav-id='../Exclude-Options/' title='Exclude Options' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/'>" +
        "Exclude Options" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='../views/' title=Views class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/views/'>" +
        "Views" +
        "</a>" +
        "</li>" +
        "<li data-nav-id='../views/' title='Make user sortabel' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/views/#make-user-sortable'>" +
        "Make user sortable" +
        "</a>" +
        "</li>" +

        "<li class='dropdownicon sidelist' title='Advanced'>"+
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/'>" +
        "Advanced" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>"+

        "<li data-nav-id='../advanced/' title=Advanced class='sidelist dropdown_romove_dot'>" +


        
        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#configure-permission'>Configure SharePoint API permissions</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Sync unlicensed users' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#sync-unlicensed-users'>Sync unlicensed users</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Show external users' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#show-external-users'>Show external users</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Organizational Chart' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#organizational-chart'>Organizational Chart</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Sync employee profile images' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#sync-profile-image'>Sync employee profile images</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Sync and display mobile number from azure' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#sync-mobile-number'>Sync and display mobile number from azure</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title=' User presence' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#user-presence'>User presence </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Auto load instead load more button' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#auto-load'>Auto load instead load more button </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Hide side navigation panel in SharePoint page'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#hide-navigation-panel'>Hide side navigation panel in SharePoint page  </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Hide webpart title in SharePoint page' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#hide-webpart-title'>Hide webpart title in SharePoint page  </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Custom css for webpart to remove spaces' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#custom-css'>Custom css for webpart to remove spaces  </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Records to load' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#records'>Records to load  </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Birthday and anniversary templates'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#birthday-template'>Birthday and anniversary templates</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Make birth date and hire date searchable'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#make-birth-date-and-hire-date-searchable'>Make birth date and hire date searchable</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Custom fields'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#custom-fields'>Custom fields </a>" +
        "</li>" +
        " <li  data-nav-id='../Records/' title='Extend custom fields search capability' class='sidelist '>"+
        " <a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#extend-custom-field'>Extend custom fields search capability </a>"+

        
       "  </li>"+
       " <li  data-nav-id='../Records/' title='Extend mobile number and phone number search capability' class='sidelist '>"+
                           " <a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#extend-mobile-number'>Extend mobile number and phone number search capability </a>"+

                           
                          "  </li>"+
        "<li  data-nav-id='../Records/' title='Image Profile Tag'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#image-profile-tag'>Image Profile Tag </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Custom Function'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#custom-function'>Custom Function</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Select topbar filters'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#Select-topbar-filters'>Select topbar filters</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Executive Assistant relationship'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#executive-assistant'>Executive Assistant relationship </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Employee info page'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#employee-info-page'>Employee info page</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Import non M365 users' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#import-non-M365-users'>Import non M365 users </a>" +
        "</li>" +

        "</ul>" +
        "</li>" +

        "</ul>" +

        "</a>" +
        "</ul>" +
        "<li class='dropdownicon sidelist' title='Help'>"+
        "<a href='/sharepoint-employee-directory/modern/admin/help/'>" +
        "Help" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>"+

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