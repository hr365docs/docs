$(document).ready(function () {
        $("#hcm-admin-guide").html("");

        $("#hcm-admin-guide").append("<ul>" +
                //       intro 
                "<li data-nav-id='./installation/requirments/' title=Introduction class=sidelist>" +
                "<a href='/HCM365/modern/admin/introduction/index.html'>" +
                "Introduction" +
                "</a>" +
                "</li>" +
                // AD 
                "<li data-nav-id='https://github.com/hr365docs/My-project.git/installation/requirments/' title='Architecture Diagram' class=sidelist>" +
                "<a href='/sharepoint-employee-directory/modern/admin/ArchitectureDiagram/'>" +
                "Architecture Diagram" +
                "</a>" +
                "</li>" +
                // profil card  
                "<li data-nav-id='https://github.com/hr365docs/My-project.git/installation/requirments/' title='Home Page' class=sidelist>" +
                "<a href='/HCM365/modern/admin/home-page/index.html'>" +
                "Home Page" +
                "</a>" +
                "</li>" +

                "<li class='dropdownicon sidelist' title='Settings'>" +
                "<a href='/HCM365/modern/admin/settings/'>" +
                "Settings" +
                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIconmainsetting aside_dropdown_icon_setting'>" +
                "</li>" +

                "<li data-nav-id='./Setting/' title='Settings' class='sidelist dropdown_romove_dot'>" +


                "<ul class='sidenavSub-topics aside_dropdown_list_setting' value='settings'>" +

                "<ul id='modernadminmainsetting'>" +
                "<li class='dropdownicon sidelist' title='General'>" +
                "<a  class='qwe' href='/HCM365/modern/admin/settings/general/'>" +
                "General" +
                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
                "</li>" +
                "<li data-nav-id='../advanced/' class='sidelist dropdown_romove_dot' >" +



                "<ul class='sidenavSub-topics aside_dropdown_list' id='edmmoderngeneral'>" +
                "<li  data-nav-id='../advanced/' title='Theme' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#Theme'>Theme</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Date Format' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#DateFormat'>Date Format</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Default Currency' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#DefaultCurrency'>Default Currency</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='GCC Tenant' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#GCC-Tenant'>GCC Tenant</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Show favorite icon' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#ShowFavIcon'>Show favorite icon</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Langauge' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#Langauge'>Langauge</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Brand Logo' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#Brand-logo'>Brand Logo</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Shared Mail Box' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/general/#Brand-logo'>Shared Mail Box</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Sharepoint page components' class='sidelist '>" +
                "<a href='/HCM365/modern/admin/settings/general/#Sharepoint-page'>Sharepoint page components</a>" +
                "</li>" +


                "</ul>" +

                "</li>" +








                // view setting start 




                "<ul id='modernadminmainsetting'>" +
                "<li class='dropdownicon sidelist' title='Administration'>" +
                "<a  class='qwe' href='/HCM365/modern/admin/settings/Administration/'>" +
                "Administration" +
                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
                "</li>" +
                "<li data-nav-id='../advanced/' class='sidelist dropdown_romove_dot' >" +



                "<ul class='sidenavSub-topics aside_dropdown_list' id='edmmoderngeneral'>" +
                "<li  data-nav-id='../advanced/' title='Department' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/Administration/#Department'>Department</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Organization' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/Administration/#Organization'>Organization</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Badges' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/Administration/#Badges'>Badges</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Grade' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/Administration/#Grade'>Grade</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Location' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/Administration/#Location'>Location</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Position' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/Administration/#Position'>Position</a>" +
                "</li>" +



                "</ul>" +

                "</li>" +








                // view setting start 





                "<ul id='modernadminmainsetting'>" +
                "<li class='dropdownicon sidelist' title='view'>" +
                "<a  class='qwe' href='/HCM365/modern/admin/settings/UserRole/index.html'>" +
                "User's Role Permissions" +

                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
                "</li>" +
                "<li data-nav-id='../advanced/' class='sidelist dropdown_romove_dot' >" +



                "<ul class='sidenavSub-topics aside_dropdown_list' id='edmmoderngeneral'>" +
                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/settings/UserRole/#UserRole'>User's</a>" +
                "</li>" +

                // "<li  data-nav-id='../advanced/' title='Allow users to export directory' class='sidelist'>" +
                // "<a href='/sharepoint-employee-directory/modern/admin/settings/views/#Birthday'>Birthdays and work anniversaries images</a>" +
                // "</li>" +


                "</ul>" +

                "</li>" +



                //  exclude option 



                "<ul id='modernadminmainsetting'>" +
                "<li class='dropdownicon sidelist' title='view'>" +
                "<a  class='qwe' href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/'>" +
                "Exclude Options" +
                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIcongeneral aside_dropdown_icon''>" +
                "</li>" +
                "<li data-nav-id='../advanced/' class='sidelist dropdown_romove_dot' >" +



                "<ul class='sidenavSub-topics aside_dropdown_list' id='edmmoderngeneral'>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#ExcludeO365sign-inblockedusers'>Exclude 365 sign-in blocked users</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Excludeuserbydepartment'>Exclude user by department</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Excludeusersbyjobtitle'>Exclude users by job title</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#ExcludeusersbyName'>Exclude users by Name</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Excludeuserbyofficelocation'>Exclude user by Office Location</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Excludeuserbyusingcsvfile'>Exclude user by using csv file</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#ExcludeUsersByUPN'>Exclude Users By UPN</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Excludeuserbycontain'>Exclude user by contain</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Excludeusershiddeninaddresslist'>Exclude users hidden in address list</a>" +
                "</li>" +


                "<li  data-nav-id='../advanced/' title='Search filters' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/settings/exclude-options/#Removesharedmailboxes'>Remove shared mailboxes</a>" +
                "</li>" +






                // "<li data-nav-id='../views/' title='Make user sortabel' class='sidelist'>" +
                // "<a href='/sharepoint-employee-directory/modern/admin/settings/views/#make-user-sortable'>" +
                // "Make user sortable" +
                // "</a>" +
                // "</li>" +


                "<li data-nav-id='../advanced/' title=Advanced class='sidelist dropdown_romove_dot'>" +





                "</ul>" +


                "</ul>" +


                "</a>" +
                "</ul>" +
                // setting end 


                "</ul>" +


                "</ul>" +
                "<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +

                "<li class='dropdownicon sidelist' title='Help'>" +
                "<a href='#'>" +
                "Apps" +
                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
                "</li>" +
                "<li data-nav-id='./Setting/' title='Settings' class='sidelist dropdown_romove_dot'>" +
                "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +

                "</li>" +
                "<a href='#'>ED365</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='ED365' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ED365/introduction/index.html'>Introduction</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='ED365' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ED365/profile-card/index.html'>Profile Card</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='ED365' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ED365/dashboard/index.html'>Dashboard</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='ED365-Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ED365/settings/index.html'>Settings</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='ED365 - Gerenal Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ED365/settings/general/'>General Settings</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='ED365 - Settings - Views' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ED365/settings/views/'>View</a>" +
                "</li>" +
                "<a href='#'>TMP365</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='TMP365 - Home page' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/home-page/'>Home page</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='TMP365 - Profile Card' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/hr-actions/'>HR actions</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='TMP365 - Dashboard' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/holidays/'>Public Holidays</a>" +
                "</li>" +

                "<li  data-nav-id='../advanced/' title='TMP365 - General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/reports/'>Reports</a>" +
                 "</li>" + "<li  data-nav-id='../advanced/' title='TMP365 - General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/settings/'>System Setting</a>" +
                "</li>" + "<li  data-nav-id='../advanced/' title='TMP365 - General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/settings/#general/'>General Setting</a>" +
                "</li>" + "<li  data-nav-id='../advanced/' title='TMP365 - General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/settings/#advance-setting/'>Advance Settings</a>" +
                "</li>" + "<li  data-nav-id='../advanced/' title='TMP365 - General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/settings/#organization/'>Organization</a>" +
               
                "</li>" + "<li  data-nav-id='../advanced/' title='TMP365 - General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TMP365/settings/#leave-type-setting/'>Leave Type Setting</a>" +
                "</li>" + "<a href='#'>EO365</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='EO365 - Home Page' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/home/'>Home Page</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Home Page' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/dashboard/'>Dashboard</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='EO365 - Access Requirements' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/access-requirements/'>Access Requirements</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/'>Settings</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/general-administation/'>General Administration</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/task-administation'>Task Administration</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/general-setting'>General Settings</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/Users-Roles-and-Permissions'>Users,Roles and Permissions</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/Integration'>Integration</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/Features'>Features</a>" +
                "</li>" +
                 "<li data-nav-id='../advanced/' title='EO365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/setting/Notification'>Notifications</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='EO365 - Report' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/report/'>Report</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='EO365 - ShareEss Url' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/share-ess-url/'>ShareEss Url</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='EO365 - Process' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/EO365/process/'>Process</a>" +
                "</li>" +

                "<a href='#'>TS365</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Home page' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/home-page'>Home page</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Reports' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/reports'>Reports</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Administration' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/administration'>Administration</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings'>Settings</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Features' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings/notification'>Nofication</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Features' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings/features'>Features</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='General Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings/Gerenal'>General Settings</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Email Template' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings/email-template'>Email Template</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Advance Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings/advance'>Advance Settings</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Integration' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/TS365/Settings/integration'>Integration</a>" +
                "</li>" +


                "<a href='#'>ET365</a>" +
                "</li>" +

                "<li data-nav-id='../advanced/' title='ET365 - Home Page' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ET365/home-page/'>Home Page</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='ET365 - Reports' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ET365/reports/'>Reports</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='ET365 - Reports' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ET365/administration'>Administration</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='ET365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/ET365/settings/'>Settings</a>" +
                "</li>"
                +
                
                "</li>" +
               
                
                "<a href='#'>RM365</a>" +
                "</li>" +

                "<li data-nav-id='../advanced/' title='RM365 - Home Page' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/home-page/'>Home Page</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='RM365 - Draft' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/draft/'>Draft</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='RM365 - Inactive Items' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/inactiveitem/'>Inactive Items</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='RM365 - Inactive Items' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/administration/'>Administration</a>" +
                "</li>" +
                "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/'>Settings</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/Job-Posting/'>Job Posting</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/Email-Configration/'>Email Configuration</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/general-setting/'>General Settings</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/permissions/'>Permission</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/hiring-process/'>Hiring Process</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/Requisition-Templates/'>Requisition Templates</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/portal-configration'>Portal Configuration</a>" +
                
                "</li>"
                 +
                 "<li data-nav-id='../advanced/' title='RM365 - Settings' class='sidelist'>" +
                "<a href='/HCM365/modern/admin/apps/RM365/settings/'>Settings</a>" +
                
                "</li>"
                 +

                "</li>" +
"<a href='#'>PM365</a>" +
"</li>" +

"<li data-nav-id='../advanced/' title='PM365 - Home Page' class='sidelist'>" +
"<a href='/HCM365/modern/admin/apps/PM365/home-page/'>Home Page</a>" +
"</li>" +

"<li data-nav-id='../advanced/' title='PM365 - Appraisal Cycle' class='sidelist'>" +
"<a href='/HCM365/modern/admin/apps/PM365/appraisal-cycle/'>Appraisal Cycle</a>" +
"</li>" +

"<li data-nav-id='../advanced/' title='PM365 - Roles' class='sidelist'>" +
"<a href='/HCM365/modern/admin/apps/PM365/roles/'>Roles</a>" +
"</li>" +

"<li data-nav-id='../advanced/' title='PM365 - Settings' class='sidelist'>" +
"<a href='/HCM365/modern/admin/apps/PM365/settings/'>Settings</a>" +
"</li>" +

"<li data-nav-id='../advanced/' title='PM365 - Reports' class='sidelist'>" +
"<a href='/HCM365/modern/admin/apps/PM365/reports/'>Reports</a>" +
"</li>"
+
                "</ul>" +

                "<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +



                "</ul>" +

                // help start 

                "<li class='dropdownicon sidelist' title='Help'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/help/'>" +
                "Help" +
                "</a>" +
                "<img src='/js/down-arrow-avgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
                "</li>" +
                "<li data-nav-id='./Setting/' title='Settings' class='sidelist dropdown_romove_dot'>" +
                "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
                "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/help/#Feedback'>Feedback</a>" +
                "</li>" +
                "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
                "<a href='/sharepoint-employee-directory/modern/admin/help/#product-activation'>Product Activation</a>" +
                "</li>" +
                "</li>" +

                "</ul>" +
                "</ul>" +

                "</ul>"

        )



});