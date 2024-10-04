$(document).ready(function () {
    $("#tmpmodernadmin").html("");

    $("#tmpmodernadmin").append("<ul>"+
        "<li data-nav-id='../Introduction' title=Introduction class='sidelist'>"+
        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/introduction/'>"+
        "Introduction"+
        "</a>"+
        "</li>"+
    
        "<li data-nav-id='../Home-page' title=Home-page class=sidelist>"+
            "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/home-page/'>"+
                "Home Page"+
            "</a>"+
            "</li>"+
            "<li data-nav-id='../ArchitectureDiagram' title=ArchitectureDiagram class=sidelist>"+
            "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/ArchitectureDiagram/'>"+
                "Architecture Diagram"+
            "</a>"+
            "</li>"+
        "<li data-nav-id='../ HR-actions' title= HR-actions class=sidelist>"+
        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/hr-actions/'>"+
           "HR actions"+
        "</a>"+
        "</li>"+
    
        "<li data-nav-id='../holidays' title=holidays class='sidelist'>"+
                "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/holidays/'>"+
                    "Public Holidays"+
                "</a>"+
                "</li>"+
    
        "<li data-nav-id='../user' title=user class='sidelist'>"+
                    "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/user/'>"+
                    "Users"+
                    "</a>"+
                    "</li>"+
    
        "<li data-nav-id='../user' title=user class='sidelist'>"+
                        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/reports/'>"+
                        "Reports"+
                        "</a>"+
                        "</li>"+
         

                        "<li class='dropdownicon sidelist'>"+
                        "<a class='qwe' href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/'>"+
                        "System Settings"+
                        "</a>"+
                        "<img src='./down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>"+
                    "</li>"+


        "<li data-nav-id='../system-settings' title=system-settings class='sidelist dropdown_romove_dot'>"+
                        // "<div class='dropdownicon'>"+   
                        //     "<a class='qwe' href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/'>"+
                        //     "System Settings"+
                        //     "</a>"+
                        //     "<img src='./down-arrow-svgrepo-com.svg'  class='imageIconmodernuser aside_dropdown_icon'>"+
                        //     "</div>"+
                            "<ul class='sidenavSub-topics aside_dropdown_list'>"+
                            "<li data-nav-id='../user' title=General class='sidelist'>"+
                            "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/#general'>"+
                            "General"+
                            "</a>"+
                            "</li>"+
                            "<li data-nav-id='../user' title=Advance Setting class='sidelist'>"+
                            "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/#advance-settings'>"+
                            "Advance Settings"+
                            "</a>"+
                            "</li>"+
                                "<li data-nav-id='../user' title=Organization class='sidelist'>"+
                                    "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/#Notifications'>"+
                                    "Notifications"+
                                    "</a>"+
                                    "</li>"+
                                    "<li data-nav-id='../user' title=Leave Settings class='sidelist'>"+
                                        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/#leave-type-settings'>"+
                                        "Leave Settings"+
                                        "</a>"+
                                        "</li>"+
                                        "<li data-nav-id='../user' title=Leave Settings class='sidelist'>"+
                                        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/settings/#Reports'>"+
                                        "Reports"+
                                        "</a>"+
                                        "</li>"+
                                       
                            "</ul>"+
                            "</li >"+
    
                            "<li class='dropdownicon sidelist' title='Help'>" +
        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/help/'>" +
        "Help" +
        "</a>" +
        "<img src='./down-arrow-svgrepo-com.svg' class='imageIconadvanced aside_dropdown_icon' '>" +
        "</li>" +

        "<li data-nav-id='../advanced/' title=Help class='sidelist dropdown_romove_dot'>" +



        "<ul class='sidenavSub-topics aside_dropdown_list' id='modernsettingedm'>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/help/#feedback'>Feedback</a>" +
        "</li>" +
        "<li  data-nav-id='../advanced/' title='Configure SharePoint API permissions' class='sidelist'>" +
        "<a href='/employee-vacation-tracker-time-off-manager/modern/admin/help/#product-activation'>Product Activation</a>" +
        "</li>" )
                                           
                                        });

                                        