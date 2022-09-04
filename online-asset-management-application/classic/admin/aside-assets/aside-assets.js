$(document).ready(function() {
    $("#asidebar").html(" <li data-nav-id='./Settings/' title='Introduction' class='sidelist active'> <a href='/online-asset-management-application/classic/admin/intro/'> Introduction </a></li><li data-nav-id='./Settings/' title='Architecture_Diagram' class='sidelist'> <a href='/online-asset-management-application/classic/admin/architecture-diagram/'> Architecture Diagram </a></li><li data-nav-id='./Settings/' title='Homepage' class='sidelist'> <a href='/online-asset-management-application/classic/admin/homepage'> Home Page </a></li><li data-nav-id='./Settings/' title='Assets' class='sidelist'>  <li class='assets-dropdown'> <a href='/online-asset-management-application/classic/admin/assets/'> Assets </a><img  class='assets-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li> <li class='admin-items'><ul class='sidenavSub-topics aside_dropdown_list' id='assets-item-dropdown'> <ul> <li data-nav-id='./Email-Notification/' title='Add_Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#add-assets'>Add Asset</a> </li><li data-nav-id='./Custom-Emails/' title='Bulk_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/admin/assets/#bulk-assets'>Bulk Assets</a> </li><li data-nav-id='./User/' title='Assign_Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#assign-assets'>Assign Assets</a> </li><li data-nav-id='./General-Settings/' title='Return_Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#return-assets'>Return Assets </a> </li><li data-nav-id='./Dashboard-Settings/' title='Booking_Details' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#booking-details'> Booking Details</a> </li><li data-nav-id='./Dashboard-Settings/' title='Approve/Reject Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/assets/#approve-reject'> Approve/Reject Assets</a></li> </li></ul> </ul></li><li data-nav-id='./Settings/' title='consumable' class='sidelist'>  <li class='consumable-dropdown'><a href='/online-asset-management-application/classic/admin/consumable/'> Consumable </a><img class='consumable-img aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li> <li class='admin-items'><ul class='sidenavSub-topics aside_dropdown_list' id='consumable-item-dropdown'><ul> <li data-nav-id='./Dashboard-Settings/' title='Add_Consumable_Item' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#add-con'>Add Consumable Item</a> </li><li data-nav-id='./Column-Setting/' title='Bulk_Consumable' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#bulk-con'>Bulk Consumable</a></li><li data-nav-id='./Dashboard-Settings/' title='Consumable_Items' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#con-items'> Consumable Items</a> </li><li data-nav-id='./Dashboard-Settings/' title='Request_Consumable_ Items' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#request-con'> Request Consumable Items</a> </li><li data-nav-id='./Dashboard-Settings/' title='Approve/Reject_Consumable' class='sidelist'><a href='/online-asset-management-application/classic/admin/consumable/#approve-con'> Approve/Reject Consumable </a></li> </li></ul> </ul></li><li data-nav-id='./Software/' title='Software' class='sidelist'> <a href='/online-asset-management-application/classic/admin/software/'> Software </a></li><li data-nav-id='./Settings/' title='Settings' class='sidelist'> <li class='settings-dropdown'> <a href='/online-asset-management-application/classic/admin/settings/'> Settings </a><img class='aside_dropdown_icon' src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li><li class='admin-items'><ul class='aside_dropdown_list sidenavSub-topics' id='settings-list-dropdown'> <ul> <li data-nav-id='./User/' title='User' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#user'>User</a></li><li data-nav-id='./General-Settings/' title='General_Settings' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#gen-setting'>General Settings</a> </li><li data-nav-id='./Email-Notification/' title='Email_Notification' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#email-not'>Email Notification</a> </li><li data-nav-id='./Custom-Emails/' title='Custom_Emails' class='sidelist'> <a href='/online-asset-management-application/classic/admin/settings/#custom-email'>Custom Emails</a> </li><li data-nav-id='./Column-Setting/' title='Column_Setting' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#col-setting'>Column Setting</a></li><li data-nav-id='./Dashboard-Settings/' title='Dashboard_Settings' class='sidelist'><a href='/online-asset-management-application/classic/admin/settings/#dash-setting'>Dashboard Settings</a> </li></li></ul> </ul></li><li data-nav-id='./Settings/' title='Administration' class='sidelist '>  <li class='administration-dropdown'><a href='/online-asset-management-application/classic/admin/administration/'> Administration </a><img  class='administr-img aside_dropdown_icon'  src='/online-asset-management-application/classic/user/user-assets/down-arrow-svgrepo-com.svg'></li><li class='admin-items'><ul class='aside_dropdown_list sidenavSub-topics' id='administr-list-dropdown'> <li data-nav-id='./User/' title='Custom_Columns' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#custom-col'>Custom Columns</a></li><li data-nav-id='./Email-Notification/' title='Add_Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-assets'> Add Assets </a> </li><li data-nav-id='./Custom-Emails/' title='Add_Status' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-status'>Add Status</a></li><li data-nav-id='./Column-Setting/' title='Add_Asset_Type' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-type'>Add Asset Type</a></li><li data-nav-id='./Dashboard-Settings/' title='Add_Project' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#add-project'>Add Project</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Model_Number' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#model'>Add Model Number</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Vendor' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#vendor'>Add Vendor</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Catagory' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#catagory'>Add Catagory</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Sub_Catagory' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#subcatagory'>Add Sub Cateogry</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Location' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#location'>Add Location</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Pickup_Location' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#pickup'>Add Pickup Location</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Search_Index' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#search-index'>Add Search Index</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Deleted_Assets' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#deleted-asset'>Add Deleted Assets</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Acknowledgement_Status' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#acknowledge-st'>Add Acknowledgement Status</a> </li><li data-nav-id='./Dashboard-Settings/' title='Add_Equipments' class='sidelist'><a href='/online-asset-management-application/classic/admin/administration/#equipment'>Add Equipments</a> </li></li></ul></li><li data-nav-id='./Report/' title='Report' class='sidelist'> <a href='/online-asset-management-application/classic/admin/report/'> Report </a></li><li data-nav-id='./Audit-log/' title='Audit_log' class='sidelist'> <a href='/online-asset-management-application/classic/admin/audit-log/'> Audit log </a></li><li data-nav-id='./Dashboard/' title='Dashboard' class='sidelist'> <a href='/online-asset-management-application/classic/admin/dashboard/'> Dashboard </a></li><li data-nav-id='./MS-Intune-Integration/' title='MS_Intune_Integration' class='sidelist'> <a href='/online-asset-management-application/classic/admin/ms-intune-integration/'> MS Intune Integration </a></li><li data-nav-id='./Camera-Scanner/' title='Camera_Scanner' class='sidelist'> <a href='/online-asset-management-application/classic/admin/camera-scanner/'> Camera Scanner </a></li><li data-nav-id='./Barcode-Scanner/' title='Barcode_Scanner' class='sidelist'> <a href='/online-asset-management-application/classic/admin/barcode-scanner/'> Barcode Scanner </a></li><li data-nav-id='./Depreciation/' title='Depreciation' class='sidelist'> <a href='/online-asset-management-application/classic/admin/depreciation/'> Depreciation </a></li><li data-nav-id='./Book-Assets/' title='Book_Assets' class='sidelist'> <a href='/online-asset-management-application/classic/admin/book-assets/'> Book Assets </a></li><li data-nav-id='./Software/' title='QR_Code' class='sidelist'> <a href='/online-asset-management-application/classic/admin/qr-code/'> QR Code </a></li>")

})

window.addEventListener("load", () => {

    // common onclick scroll js code 
    let commonscroll = document.querySelectorAll(".common-scroll")
    let dropdowmperent = document.querySelectorAll(".aside_dropdown_list");
    for (let i of dropdowmperent) {
        let dropdowminneritem = i.querySelectorAll(".aside_dropdown_list li");
        dropdowminneritem.forEach((element, index) => {
            element.addEventListener("click", () => {
                let commonscrollactive = document.querySelector(".common-scroll.active")
                if (commonscrollactive) {
                    commonscrollactive.classList.remove("active")
                    commonscrollactive.removeAttribute("style")
                }
                commonscroll[index].classList.add("active")
                commonscroll[index].setAttribute("style", "padding-top:80px!important")
            })
        })
    }



    // new page add padding onclick js code
    function getid() {
        var baseUrl = (window.location).href;
        var koopId = baseUrl.substring(baseUrl.lastIndexOf('#') + 1);
        let getid = document.getElementsByTagName("div");
        for (let i = 0; i < getid.length; i++) {
            if (koopId == getid[i].id) {
                let id = getid[i];
                id.classList.add("active")
                id.setAttribute("style", "padding-top:80px!important")

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
            let dropdowmlistactive = document.querySelector(".aside_dropdown_list.active")
            if (dropdowmlistactive) {
                dropdowmlistactive.classList.remove("active")
                dropdowmlist[index].setAttribute("style", `height:0px;overflow:hidden;opacity:0;`)

            } else {
                dropdowmlist[index].classList.add("active")
                dropdowmlist[index].setAttribute("style", `height:${getheight}px;opacity:1;opacity: 1;`)
            }

            element.classList.toggle("active")

        })
    })
})