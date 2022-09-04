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

    // Setting open dropdown js code

    let dropdownsetting = document.querySelector(".aside_dropdown_icon_setting");
    let dropdownitemssetting = document.querySelector(".aside_dropdown_list_setting");
    dropdownsetting.addEventListener("click", () => {

        dropdownitemssetting.classList.toggle("active")
    })
})