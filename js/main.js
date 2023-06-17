// const lightgallry = require("./lightgallry");

let progress = document.querySelector(".progress-div"),
bar = document.querySelectorAll(".progress-bar"),
work = document.querySelector(".work"),
cout=document.querySelectorAll(".work .time");

ScrollOut({
    targets: ".progress-div, .work",
  });
  window.addEventListener("scroll",()=>
  {
if(progress.dataset.scroll == "in")
{
    bar.forEach((el)=>
    {
       let w=el.getAttribute("aria-valuenow");
        let spans =  el.parentElement.parentElement.querySelector("span");
     
       el.style.width=w + "%";
   let interval=  setInterval(() => {
        if(Number(spans.textContent) < +w)
        {
            spans.textContent   = Number(spans.textContent) +  1;
        }
        else
        {
            clearInterval(interval);
        }
     }, 500);
      }  )
    }
else
{
    bar.forEach((el)=>
    {
        let spans =  el.parentElement.parentElement.querySelector("span");
        spans.textContent=0;
        el.style.width=0;

    })
}
if(work.dataset.scroll == "in")
{
cout.forEach((el)=>
{let c= el.dataset.skill;
    let interval2= setInterval(() => {
        if( Number(el.textContent) < +c)
        {
            el.textContent = Number(el.textContent) + 1;
        }
        else
        {
            clearInterval(interval2);
        }
     
    }, 500);
})
}
else
{
    cout.forEach((el)=>
    {
 el.textContent=0;
    })
}

  })

  //portofilo

  let liFilter = document.querySelectorAll(".list-group li"),
  imgFilter= document.querySelectorAll(".filteration a");
  
  liFilter.forEach(list=>
    list.addEventListener("click",()=>{
let clicker = list.dataset.filter;
let classActiceRmove = document.querySelector(".list-group .active");
classActiceRmove.classList.remove("active");
list.classList.add("active");

imgFilter.forEach((e)=>
{

    if(e.classList.contains(clicker))
    {
        e.style.display = "block"
    }
    else
    {
        e.style.display = "none";
    }
}

)
// console.log(clicker);
})
    );
//Light Gallery
// lightGallery(document.getElementById('lightgallery'), {

// });
// //Aos Init
// AOS.init();