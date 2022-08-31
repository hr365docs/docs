$(document).ready(function () {
    $(".edmsidenavadmin").html("");

    $(".edmsidenavadmin").append("<li data-nav-id='./installation/requirments/' title=Introduction class=sidelist adminitro>"+
                                        "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/introduction/'>"+
                                            "Introduction"+
                                        "</a>"+
                                    "</li>"+
                                    "<li>"+
                                        "<li data-nav-id=https://github.com/hr365docs/My-project.git/installation/requirments/"+
                                        "title='Architecture Diagram' class='sidelist admindiagram'>"+
                                        "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/architecturediagram/'>"+
                                            "Architecture Diagram"+
                                        "</a>"+
                                    "<li>"+
                                    "<li data-nav-id=https://github.com/hr365docs/My-project.git/installation/requirments/"+
                                        "title=Users class=sidelist adminusers>"+
                                        "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/user/'>"+
                                            "Users"+
                                        "</a>"+
                                    "</li>"+
                                    "<li data-nav-id='./Setting/' title=Settings class='sidelist active adminsettings' onclick='hideshowdiv(event);'>"+
                                    "<div class='dropdownicon' >"+
                                        "<a class='qwe' href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/settings/'>"+
                                            "<!-- <a href='#MainSettings'></a> -->"+
                                            "Settings"+
                                        "</a>"+
                                        "<img src='./down-arrow-svgrepo-com.svg'  class='imageIcon' onclick='hideshowadminsetting(event)'></img>"+
                                    "</div>"+
                                    "</li>"+
                                    "<li class='setting_side_nav_bar'>"+
                                    "<ul id='settingsadmin'>"+
                                        "<li data-nav-id='../General' title=General class='sidelist admingeneral'>"+
                                            "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/settings/#generalsetting'>"+
                                                "General"+
                                            "</a>"+
                                        "</li>"+
                                        "<li data-nav-id='../Exclude-Options/' title= Exclude_Options class='sidelist adminexclude'>"+
                                            "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/settings/#excludesetting'>"+
                                                "Exclude Options"+
                                            "</a>"+
                                        "</li>"+

                                        "<li data-nav-id='../views/' title=Views class='sidelist adminview'>"+
                                            "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/settings/#viewsetting'>"+
                                                "Views"+
                                            "</a>"+
                                        "</li>"+

                                        "<li data-nav-id='../advanced/' title=Advanced class='sidelist adminadvanced'>"+
                                            "<a href='https://kb.hr365.us/sharepoint-employee-directory/classic/admin/settings/#advancesetting'>"+
                                                "Advanced"+
                                            "</a>"+
                                        "</li>"+

                                    "</ul>"+
                                    "</li>")
                                           
                                        });