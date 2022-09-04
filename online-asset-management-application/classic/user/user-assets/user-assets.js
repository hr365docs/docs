$(document).ready(function() {
    $("#userasidebar").html(" <ul> <li data-nav-id='./installation/requirments/' title='Introduction' class='sidelist active'> <a href='/online-asset-management-application/classic/user/introduction/index.html'> Introduction </a> </li><li data-nav-id='./Home-page' title='Getting-Started' class='sidelist'> <a href='/online-asset-management-application/classic/user/getting-started/'> Getting Started </a> </li><li data-nav-id='./Home-page' title='Home-page' class='sidelist'> <a href='/online-asset-management-application/classic/user/homepage/'> Home Page </a> </li><li data-nav-id='./installation/requirments/' title='User-Interface' class='sidelist user-items-dropdown'> <a href='/online-asset-management-application/classic/user/userinterface/'> User Interface </a><img  class='user-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'> <ul class='sidenavSub-topics aside_dropdown_list' id='user-dropdown'> <li data-nav-id='../General' title='My_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#my-assets'> My Assets </a> </li><li data-nav-id='../General' title='Book_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#book-assets'> Book Assets </a> </li><li data-nav-id='../General' title='Booking_Details' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#booking-details'> Booking Details </a> </li></ul> </li><li data-nav-id='./installation/requirments/' title='Help' class='sidelist'> <a href='/online-asset-management-application/classic/user/help/'> Help </a> </li></ul>")

})



window.addEventListener("load", () => {
    // common onclick scroll js code 
    let commonscroll = document.querySelectorAll(".common-scroll")

    let dropdowminneritem = document.querySelectorAll(".aside_dropdown_list li");

    dropdowminneritem.forEach((element, index) => {
        element.addEventListener("click", () => {
            let commonscrollactive = document.querySelector(".common-scroll.active")
            if (commonscrollactive) {
                commonscrollactive.classList.remove("active")
                commonscrollactive.removeAttribute("style")
            }
            commonscroll[index].classList.add("active")
            commonscroll[index].setAttribute("style", "padding-top:80px")
        })
    })








    function getid() {
        var baseUrl = (window.location).href;
        var koopId = baseUrl.substring(baseUrl.lastIndexOf('#') + 1);

        let getid = document.getElementsByTagName("div");
        for (let i = 0; i < getid.length; i++) {
            if (koopId == getid[i].id) {
                let id = getid[i];
                id.classList.add("active")
                id.setAttribute("style", "padding-top:80px")

            }

        }

    }
    getid()











    // Dropdown js Code
    let dropdowmitems = document.querySelectorAll(".aside_dropdown_icon");
    let dropdowmlist = document.querySelectorAll(".aside_dropdown_list");


    dropdowmitems.forEach((element, index) => {
        element.addEventListener("click", () => {

            let getheight = dropdowmlist[index].scrollHeight;
            // console.log(getheight.set("style", "display:none"))
            // getheight.setAttribute("style", `height:${getheight}px`)

            let dropdowmlistactive = document.querySelector(".aside_dropdown_list.active")

            if (dropdowmlistactive) {
                // console.log(dropdowmlistactive.classList.remove(".active"))
                dropdowmlistactive.classList.remove("active")

            } else {
                dropdowmlist[index].classList.add("active")
                dropdowmlist[index].setAttribute("style", `height:${getheight}px;opacity:1;`)
            }

            element.classList.toggle("active")

        })
    })
})