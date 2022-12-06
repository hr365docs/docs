document.querySelectorAll("head link")[2].href=window.location.origin + "/images/headericon.png.ico"
$(document).ready(function() {
    document.getElementsByName("description")[0].content=document.title;
    $(".common-header").html(
        "<ul class='navbar-nav ml-auto headerstyle'>"+
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark employeedirectorylink'href='/sharepoint-employee-directory/'>Employee Directory</a>"+
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark assetmanagementlink' href='/online-asset-management-application/'>Asset Management</a>"+
    
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark helpdesklink' href='/sharepoint-helpdesk/'>Helpdesk</a>"+
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark timeofmanagerlink' href='/employee-vacation-tracker-time-off-manager/'>Time-Off Manager</a>"+
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark timesheetlink' href='/online-timesheet-software/'>Timesheet</a>"+
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark onboardinglink' href='/sharepoint-employee-onboarding/'>On-boarding</a>"+
    "</li>"+
    "<li class='nav-item'>"+
    "<a class='nav-link text-dark performancelink' href='/employee-performance-management/'>Performance Management</a>"+
    "</li>"+
    "</ul>");
});




    // Header Active  js code
    window.addEventListener("load", () => {
        let headerItems = document.querySelectorAll(".navbar-nav .nav-item a")
        for (let i = 0; i < headerItems.length; i++) {
        
            if (window.location.pathname.split('/')[1] == headerItems[i].pathname.split('/')[1]) {
                if(document.querySelector("header.shadow-bottom.sticky-top.bg-white")){
                    headerItems[i].classList.add("active-dark")
                }
                else{
                    headerItems[i].classList.add("active")
                }
            }
    
        }
    })
