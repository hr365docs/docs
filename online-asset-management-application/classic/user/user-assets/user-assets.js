$(document).ready(function () {
    $("#userasidebar").html(" <ul> <li data-nav-id='./installation/requirments/' title='Introduction' class='sidelist active'> <a href='./introduction/index.html'> Introduction </a> </li><li data-nav-id='./Home-page' title='Getting-Started' class='sidelist'> <a href='../getting-started/'> Getting Started </a> </li><li data-nav-id='./Home-page' title='Home-page' class='sidelist'> <a href='../homepage/'> Home Page </a> </li><li data-nav-id='./installation/requirments/' title='User-Interface' class='sidelist user-items-dropdown'> <a href='../userinterface/'> User Interface </a><img onClick='dropdown()' class='user-img' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'> <ul class='sidenavSub-topics' id='user-dropdown'> <li data-nav-id='../General' title='My_Assets' class='sidelist'> <a href='../userinterface/#my-assets'> My Assets </a> </li><li data-nav-id='../General' title='Book_Assets' class='sidelist'> <a href='../userinterface/#book-assets'> Book Assets </a> </li><li data-nav-id='../General' title='Booking_Details' class='sidelist'> <a href='../userinterface/#booking-details'> Booking Details </a> </li></ul> </li><li data-nav-id='./installation/requirments/' title='Help' class='sidelist'> <a href='../help/'> Help </a> </li></ul>")

})

// User Interface js code

function dropdown(){

    $(".user-items-dropdown .sidenavSub-topics").toggleClass("active");
}