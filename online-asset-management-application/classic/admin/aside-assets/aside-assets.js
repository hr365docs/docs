$(document).ready(function() {
    $("#asidebar").html(" <li data-nav-id='./Settings/' title='Introduction' class='sidelist'> <a href='/online-asset-management-application/classic/admin/intro/'> Introduction </a></li><li data-nav-id='./Settings/' title='Architecture Diagram' class='sidelist'> <a href='/online-asset-management-application/classic/admin/architecture-diagram/'> Architecture Diagram </a></li><li data-nav-id='./Settings/' title='Home Page' class='sidelist'> <a href='/online-asset-management-application/classic/admin/homepage/'> Home Page </a></li><li data-nav-id='./Settings/' title='Assets' class='sidelist'>  <li class='assets-dropdown sidelist'> <a href='/online-asset-management-application/classic/admin/assets/'> Assets </a><img  class='assets-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li> <li class='admin-items'><ul class='sidenavSub-topics aside_dropdown_list' id='assets-item-dropdown'> <ul> <li data-nav-id='./Email-Notification/' title='Add Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#add-assets'>Add Asset</a> </li><li data-nav-id='./Custom-Emails/' title='Bulk Assets' class='sidelist'> <a href='/online-asset-management-application/classic/admin/assets/#bulk-assets'>Bulk Assets</a> </li><li data-nav-id='./User/' title='Assign_Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#assign-assets'>Assign Assets</a> </li><li data-nav-id='./General-Settings/' title='Return Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#return-assets'>Return Assets </a> </li><li data-nav-id='./Dashboard-Settings/' title='Booking Details' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#booking-details'> Booking Details</a> </li><li data-nav-id='./Dashboard-Settings/' title='Approve/Reject Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#approve-reject'> Approve/Reject Assets</a></li> </li></ul> </ul></li><li data-nav-id='./Settings/' title='consumable' class='sidelist'>  <li class='consumable-dropdown sidelist'><a href='/online-asset-management-application/classic/admin/consumable/'> Consumable </a><img class='consumable-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li> <li class='admin-items'><ul class='sidenavSub-topics aside_dropdown_list' id='consumable-item-dropdown'><ul> <li data-nav-id='./Dashboard-Settings/' title='Add Consumable Item' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#add-consumable'>Add Consumable Item</a> </li><li data-nav-id='./Column-Setting/' title='Bulk Consumable' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#bulk-consumable'>Bulk Consumable</a></li><li data-nav-id='./Dashboard-Settings/' title='Consumable Items' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#consumable-items'> Consumable Items</a> </li><li data-nav-id='./Dashboard-Settings/' title='Request Consumable Items' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#request-consumable'> Request Consumable Items</a> </li><li data-nav-id='./Dashboard-Settings/' title='Approve/Reject Consumable' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#approve-consumable'> Approve/Reject Consumable </a></li> </li></ul> </ul></li><li data-nav-id='./Software/' title='Software' class='sidelist'> <a href='/online-asset-management-application/classic/admin/software/'> Software </a></li><li data-nav-id='./Settings/' title='Settings' class='sidelist'> <li class='settings-dropdown sidelist'> <a href='/online-asset-management-application/classic/admin/settings/'> Settings </a><img class='aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li><li class='admin-items'><ul class='aside_dropdown_list sidenavSub-topics' id='settings-list-dropdown'> <ul> <li data-nav-id='./User/' title='User' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#user'>User</a></li><li data-nav-id='./General-Settings/' title='General Settings' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#general-setting'>General Settings</a> </li><li data-nav-id='./Email-Notification/' title='Email Notification' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#email-notification'>Email Notification</a> </li><li data-nav-id='./Custom-Emails/' title='Custom_Emails' class='sidelist'> <a href='/online-asset-management-application/classic/admin/settings/#custom-email'>Custom Emails</a> </li><li data-nav-id='./Column-Setting/' title='Column Setting' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#column-setting'>Column Setting</a></li><li data-nav-id='./Dashboard-Settings/' title='Dashboard_Settings' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#dashboard-setting'>Dashboard Settings</a> </li></li></ul> </ul></li><li data-nav-id='./Settings/' title='Administration' class='sidelist '>  <li class='administration-dropdown sidelist'><a href='/online-asset-management-application/classic/admin/administration/'> Administration </a><img  class='administr-img aside_dropdown_icon'  src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li><li class='admin-items'><ul class='aside_dropdown_list sidenavSub-topics' id='administr-list-dropdown'> <li data-nav-id='./User/' title='Custom Columns' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#custom-columns'>Custom Columns</a></li><li data-nav-id='./Email-Notification/' title='Add Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-assets'> Add Assets </a> </li><li data-nav-id='./Custom-Emails/' title='Add Status' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-status'>Add Status</a></li><li data-nav-id='./Column-Setting/' title='Add_Asset_Type' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-asset-type'>Add Asset Type</a></li><li data-nav-id='./Dashboard-Settings/' title='Add_Project' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-project'>Add Project</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Model Number' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#model'>Add Model Number</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Vendor' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#vendor'>Add Vendor</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Catagory' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#catagory'>Add Catagory</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Sub Catagory' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#subcatagory'>Add Sub Cateogry</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Location' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#location'>Add Location</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Pickup_Location' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#pickup'>Add Pickup Location</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Search Index' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#search-index'>Add Search Index</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Deleted Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#deleted-asset'>Add Deleted Assets</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Acknowledgement Status' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#acknowledge-status'>Add Acknowledgement Status</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add Equipments' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#equipment'>Add Equipments</a> </li></li></ul></li><li data-nav-id='./Report/' title='Report' class='sidelist'> <a href='/online-asset-management-application/classic/admin/report/'> Report </a></li><li data-nav-id='./Audit-log/' title='Audit log' class='sidelist'> <a href='/online-asset-management-application/classic/admin/audit-log/'> Audit log </a></li><li data-nav-id='./Dashboard/' title='Dashboard' class='sidelist'> <a href='/online-asset-management-application/classic/admin/dashboard/'> Dashboard </a></li><li data-nav-id='./MS-Intune-Integration/' title='MS Intune Integration' class='sidelist'> <a href='/online-asset-management-application/classic/admin/ms-intune-integration/'> MS Intune Integration </a></li><li data-nav-id='./Camera-Scanner/' title='Camera Scanner' class='sidelist'> <a href='/online-asset-management-application/classic/admin/camera-scanner/'> Camera Scanner </a></li><li data-nav-id='./Barcode-Scanner/' title='Barcode Scanner' class='sidelist'> <a href='/online-asset-management-application/classic/admin/barcode-scanner/'> Barcode Scanner </a></li><li data-nav-id='./Depreciation/' title='Depreciation' class='sidelist'> <a href='/online-asset-management-application/classic/admin/depreciation/'> Depreciation </a></li><li data-nav-id='./Book-Assets/' title='Book Assets' class='sidelist'> <a href='/online-asset-management-application/classic/admin/book-assets/'> Book Assets </a></li><li data-nav-id='./Software/' title='QR Code' class='sidelist'> <a href='/online-asset-management-application/classic/admin/qr-code/'> QR Code </a></li>")

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
                console.log(getid[0].baseURI)
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

    // Setting open dropdown js code
    if (document.querySelector(".aside_dropdown_icon_setting")) {
        let dropdownsetting = document.querySelector(".aside_dropdown_icon_setting");
        let dropdownitemssetting = document.querySelector(".aside_dropdown_list_setting");
        dropdownsetting.addEventListener("click", () => {
            dropdownsetting.classList.toggle("active")
            dropdownitemssetting.classList.toggle("active")
        })

    }
})