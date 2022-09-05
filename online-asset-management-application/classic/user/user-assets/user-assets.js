$(document).ready(function() {
    $("#userasidebar").html(" <ul> <li data-nav-id='./installation/requirments/' title='Introduction' class='sidelist'> <a href='/online-asset-management-application/classic/user/introduction/index.html'> Introduction </a> </li><li data-nav-id='./Home-page' title='Getting_Started' class='sidelist'> <a href='/online-asset-management-application/classic/user/getting-started/'> Getting Started </a> </li><li data-nav-id='./Home-page' title='Home_Page' class='sidelist'> <a href='/online-asset-management-application/classic/user/homepage/'> Home Page </a> </li><li data-nav-id='./installation/requirments/' title='User_Interface' class='sidelist user-items-dropdown'> <a href='/online-asset-management-application/classic/user/userinterface/'> User Interface </a><img  class='user-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'> <ul class='sidenavSub-topics aside_dropdown_list' id='user-dropdown'> <li data-nav-id='../General' title='My_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#my-assets'> My Assets </a> </li><li data-nav-id='../General' title='Book_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#book-assets'> Book Assets </a> </li><li data-nav-id='../General' title='Booking_Details' class='sidelist'> <a href='/online-asset-management-application/classic/user/userinterface/#booking-details'> Booking Details </a> </li></ul> </li><li data-nav-id='./installation/requirments/' title='Help' class='sidelist'> <a href='/online-asset-management-application/classic/user/help/'> Help </a> </li></ul>")


})



window.addEventListener("load", () => {


    // new page add padding onclick js code
    function getid() {
        var baseUrl = (window.location).href;
        var koopId = baseUrl.substring(baseUrl.lastIndexOf('#') + 1);
        let getid = document.getElementsByTagName("div");
        let getancher = document.getElementsByTagName("a");
        for (let i = 0; i < getid.length; i++) {
            if (koopId == getid[i].id) {
                let id = getid[i];
                id.classList.add("active")
                id.setAttribute("style", "padding-top:80px!important");
            }
            if (getid[0].baseURI == getancher[i].href) {
                getancher[i].parentNode.classList.add("active")
            }

        }

    }
    getid()

    // common onclick scroll js code 
    let commonscroll = document.querySelectorAll(".common-scroll")
    let dropdowmperent = document.querySelectorAll(".aside_dropdown_list");
    for (let i of dropdowmperent) {
        let dropdowminneritem = i.querySelectorAll(".aside_dropdown_list li");
        dropdowminneritem.forEach((element, index) => {
            element.addEventListener("click", () => {
                for (let i of dropdowminneritem) {
                    i.classList.remove("active")
                    for (let j of commonscroll) {
                        j.classList.remove("active")
                        j.removeAttribute("style")
                    }
                }
                element.classList.add("active")
                commonscroll[index].classList.add("active")
                commonscroll[index].setAttribute("style", "padding-top:80px!important")
            })
        })
    }


    // Dropdown js Code
    let dropdowmitems = document.querySelectorAll(".aside_dropdown_icon");
    let dropdowmlist = document.querySelectorAll(".aside_dropdown_list");

    dropdowmitems.forEach((element, index) => {
        element.addEventListener("click", () => {
            let getheight = dropdowmlist[index].scrollHeight;
            let dropdowmlistactive = document.querySelector(".aside_dropdown_list.active")
            if (element.classList.contains("active")) {
                element.classList.remove("active");
                dropdowmlistactive.setAttribute("style", "height:0px;overflow:hidden;opacity:0;")
            } else {
                for (let i of dropdowmitems) {
                    i.classList.remove("active");
                }
                for (let j of dropdowmlist) {
                    j.classList.remove("active");
                    j.setAttribute("style", "height:0px;overflow:hidden;opacity:0;")
                }
                element.classList.add("active");
                dropdowmlist[index].classList.add("active")
                dropdowmlist[index].setAttribute("style", `height:${getheight}px;opacity: 1;`)
            }
        })
    })
})