window.addEventListener("load", () => {


    // new page add padding onclick js code
    function getid() {
        var baseUrl = (window.location).href;
        var koopId = baseUrl.substring(baseUrl.lastIndexOf('#') + 1);
        let getid = document.getElementsByTagName("div");
        let getancher = document.getElementsByTagName("a");
        let countlenght = getancher.length
        for (let i = 0; i < countlenght; i++) {
            if (getid.length > i) {
                if (koopId == getid[i].id) {
                    let id = getid[i];
                    id.classList.add("active")
                    id.setAttribute("style", "padding-top:80px!important");
                }
            }
            if (getid[0].baseURI == getancher[i].href) {
                getancher[i].parentNode.classList.add("active")
                    // console.log(getid[0].baseURI)
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