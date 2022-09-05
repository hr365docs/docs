let commonscroll = document.querySelectorAll(".releasenotepadding")

    let dropdowminneritem = document.querySelectorAll(".versiononclick");
    dropdowminneritem.forEach((element, index) => {
        element.addEventListener("click", () => {
            let commonscrollactive = document.querySelector(".releasenotepadding.active")
            if (commonscrollactive) {
                commonscrollactive.classList.remove("active")
                commonscrollactive.removeAttribute("style")
            }
            commonscroll[index].classList.add("active")
            commonscroll[index].setAttribute("style", "padding-top:80px!important")
        })
    })
