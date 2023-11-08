const kontaktBtn = document.getElementById("kontaktBtn");

const func1=(x,y)=> x + y

console.log(func1(1,2));
 const func2= ()=>{
    return(
        kontaktBtn.classList.remove("test")
    )
}


function func3(e){

    return(
        e.target.classList.toggle("test")
    )
}

kontaktBtn && kontaktBtn.addEventListener("click", func3);