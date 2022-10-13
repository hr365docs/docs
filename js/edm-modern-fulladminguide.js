$(document).ready(function() {
    $("#edmfullyadminguide").html("");

    $("#edmfullyadminguide").append("<ul>" +

        "<li data-nav-id='./installation/requirments/' title=Introduction class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/introduction/'>" +
        "Introduction" +
        "</a>" +
        "</li>" +

        "<li data-nav-id=https://github.com/hr365docs/My-project.git/installation/requirments/" +
        "title=' Profile Card' class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/profilecard/'>" +
        "Profile Card" +
        "</a>" +
        "</li>" +

        "<li class='dropdownicon sidelist'>"+
        "<a href='/sharepoint-employee-directory/modern/admin/settings/'>" +
        "Settings" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting''>" +
    "</li>"+

        "<li data-nav-id='./Setting/' title=Settings class='sidelist dropdown_romove_dot'>" +
        // "<div class='dropdownicon'>" +
        // "<a href='/sharepoint-employee-directory/modern/admin/settings/'>" +
        // "Settings" +
        // "</a>" +
        // "<img src='./down-arrow-svgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting''>" +
        // "</div>" +

        "<ul class='sidenavSub-topics aside_dropdown_list_setting' value='settings'>" +

        "<ul id='modernadminmainsetting'>" +
        "<li class='dropdownicon sidelist'>"+
        "<a  class='qwe' href='/sharepoint-employee-directory/modern/admin/settings/general/'>" +
        "General" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
        "</li>"+
        "<li data-nav-id='../advanced/' title=General class='sidelist dropdown_romove_dot' >" +

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

        "</ul>" +

        "</li>" +


        "<li data-nav-id='../Exclude-Options/' title='Exclude Options' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/excludeoptions/'>" +
        "Exclude Options" +
        "</a>" +
        "</li>" +

        "<li data-nav-id='../views/' title=Views class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/views/'>" +
        "Views" +
        "</a>" +
        "</li>" +

        "<li class='dropdownicon sidelist'>"+
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/'>" +
        "Advanced" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>"+

        "<li data-nav-id='../advanced/' title=Advanced class='sidelist dropdown_romove_dot'>" +

        // "<div class='dropdownicon'>" +
        // "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/'>" +
        // "Advanced" +
        // "</a>" +
        // "<img src='./down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        // "</div>" +

        
        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='SharePoint API' class='sidelist'>" +
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
        "<li  data-nav-id='../advanced/' title='profile images' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#sync-profile-image'>Sync employee profile images</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title=' display mobile number' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#sync-mobile-number'>Sync and display mobile number from azure</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title=' User presence' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#user-presence'>User presence </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Auto load' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#auto-load'>Auto load instead load more button </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Hide side navigation panel'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#hide-navigation-panel'>Hide side navigation panel in SharePoint page  </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Hide webpart title' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#hide-webpart-title'>Hide webpart title in SharePoint page  </a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Custom css for webpart' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#custom-css'>Custom css for webpart to remove spaces  </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Records to load' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#records'>Records to load  </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Birthday and anniversary templates'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#birthday-template'>Birthday and anniversary templates</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Custom fields'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#custom-fields'>Custom fields </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Image Profile Tag'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#image-profile-tag'>Image Profile Tag </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Custom Function'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#custom-function'>Custom Function</a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Executive Assistant'  class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#executive-assistant'>Executive Assistant relationship </a>" +
        "</li>" +
        "<li  data-nav-id='../Records/' title='Import non M365 users' class='sidelist'>" +
        "<a href='/sharepoint-employee-directory/modern/admin/settings/advanced/#import-nonM365-users'>Import non M365 users </a>" +
        "</li>" +

        "</ul>" +
        "</li>" +

        "</ul>" +

        "</a>" +
        "</ul>" +
        "<li data-nav-id=https://github.com/hr365docs/My-project.git/installation/requirments/" +
        "title=Help class=sidelist>" +
        "<a href='/sharepoint-employee-directory/modern/admin/help/'>" +
        "Help" +
        "</a>" +
        "</li>" +

        "</ul>")



});