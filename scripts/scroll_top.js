const d = document,
w = window;

export default function scrollTop(btn){
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
       
        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }
        
    })
    d.addEventListener("click", e => {
        if(e.target.matches(btn) || e.target.matches('.fa-chevron-up')){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    })

}