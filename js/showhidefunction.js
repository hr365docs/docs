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


  
    
            // common onclick scroll js code 
            let commonscroll =document.querySelectorAll(".common-scroll")
            let dropdowminneritem= document.querySelectorAll(".aside_dropdown_list li");
            
           
        
            dropdowminneritem.forEach((element,index)=>{
                element.addEventListener("click",()=>{
                    
                    let commonscrollactive =document.querySelector(".common-scroll.active")
                    if(commonscrollactive){
                        commonscrollactive.classList.remove("active")
                        commonscrollactive.removeAttribute("style")
                    }
                    commonscroll[index].classList.add("active")
                    commonscroll[index].setAttribute("style","padding-top:80px!important")
                })
            })
    })