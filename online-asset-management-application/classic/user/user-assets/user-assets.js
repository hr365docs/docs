$(document).ready(function () {
    $("#userasidebar").html(" <ul> <li data-nav-id='./installation/requirments/' title='Introduction' class='sidelist active'> <a href='/online-asset-management-application/classic/user/introduction/index.html'> Introduction </a> </li><li data-nav-id='./Home-page' title='Getting-Started' class='sidelist'> <a href='/online-asset-management-application/classic/user/getting-started/'> Getting Started </a> </li><li data-nav-id='./Home-page' title='Home_Page' class='sidelist'> <a href='/online-asset-management-application/classic/user/homepage/'> Home Page </a> </li><li data-nav-id='./installation/requirments/' title='User_Interface' class='sidelist user-items-dropdown'> <a href='/online-asset-management-application/classic/user/userinterface/'> User Interface </a><img  class='user-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'> <ul class='sidenavSub-topics aside_dropdown_list' id='user-dropdown'> <li data-nav-id='../General' title='My_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#my-assets'> My Assets </a> </li><li data-nav-id='../General' title='Book_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#book-assets'> Book Assets </a> </li><li data-nav-id='../General' title='Booking_Details' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#booking-details'> Booking Details </a> </li></ul> </li><li data-nav-id='./installation/requirments/' title='Help' class='sidelist'> <a href='/online-asset-management-application/classic/user/help/'> Help </a> </li></ul>")

})



window.addEventListener("load",()=>{
    // common onclick scroll js code 
    let commonscroll = document.querySelectorAll(".common-scroll")
    
    let dropdowminneritem= document.querySelectorAll(".aside_dropdown_list li");

    dropdowminneritem.forEach((element,index)=>{
        element.addEventListener("click",()=>{
            let commonscrollactive =document.querySelector(".common-scroll.active")
            if(commonscrollactive){
                commonscrollactive.classList.remove("active")
                commonscrollactive.removeAttribute("style")
            }
            commonscroll[index].classList.add("active")
            commonscroll[index].setAttribute("style","padding-top:80px")
        })
    })

    
    // Dropdown js Code
    let dropdowmitems= document.querySelectorAll(".aside_dropdown_icon");
    let dropdowmlist= document.querySelectorAll(".aside_dropdown_list");
    dropdowmitems.forEach((element,index)=>{
        element.addEventListener("click",()=>{
            element.classList.toggle("active")
            dropdowmlist[index].classList.toggle("active")
        })
    })
})
