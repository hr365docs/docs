$(document).ready(function() {
    $(".common-header").html("<ul class='navbar-nav ml-auto headerstyle'></li><li class='nav-item'><a class='nav-link text-dark employeedirectorylink'href='/sharepoint-employee-directory/'>Employee Directory</a></li><li class='nav-item'><a class='nav-link text-dark assetmanagementlink' href='/online-asset-management-application/index.html'>Asset Management</a></li><li class='nav-item'> <a class='nav-link text-dark helpdesklink' href='/sharepoint-helpdesk/'>Helpdesk</a></li><li class='nav-item'><a class='nav-link text-dark timeofmanagerlink' href='/employee-vacation-tracker-time-off-manager/'>Time-Off Manager</a></li><li class='nav-item'><a class='nav-link text-dark timesheetlink' href='/online-timesheet-software/'>Timesheet</a></li><li class='nav-item'><a class='nav-link text-dark onboardinglink' href='/sharepoint-employee-onboarding/'>On-boarding</a></li><li class='nav-item'><a class='nav-link text-dark performancelink' href='/employee-performance-management/'>Performance Management</a></li></ul>");
});

// console.log(document.querySelectorAll("head link")[2])

let sdfs = document.querySelectorAll("head link")[2]
console.log(sdfs.href='/images/headericon.png.ico/')