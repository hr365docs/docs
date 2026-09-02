$(document).ready(function () {
    $("#approvalswebpartadmin").html("");

    $("#approvalswebpartadmin").append(
        // ✅ Introduction
        "<li class='sidelist' data-nav-id='./Settings/' title='Introduction'>" +
            "<a href='/Approval-365/modern/admin/introduction/'>Introduction</a>" +
        "</li>" +

        // ✅ Home Page
        "<li class='sidelist' data-nav-id='./homepage/' title='Home Page'>" +
            "<a href='/Approval-365/modern/admin/homepage'>Home Page</a>" + 
        "</li>" +
        "<li class='sidelist' data-nav-id='./Settings/' title='Home Page'>" +
            "<a href='/Approval-365/modern/admin/settings/'>Settings</a>" +
        "</li>" +
        "<li class='dropdownicon sidelist' title='Help'>" +
            "<a href='/Approval-365/modern/admin/help/'>Help</a>" +
            
        "</li>"
    );
});
