    // Dropdown js Code
    window.addEventListener("load",()=>{
        let dropdowmitems= document.querySelectorAll(".aside_dropdown_icon");
        let dropdowmlist= document.querySelectorAll(".aside_dropdown_list");
        dropdowmitems.forEach((element,index)=>{
            element.addEventListener("click",()=>{
                element.classList.toggle("active")
                dropdowmlist[index].classList.toggle("active")
            })
        })


        let dropdowmitem= document.querySelectorAll(".aside_dropdown_list li");
        dropdowmitem.forEach((element,index)=>{
            console.log(index)
            element.addEventListener("click",()=>{
                    console.log(element)
            })
        })
    })