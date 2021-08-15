const buttonContainer = document.querySelector(".buttons");


buttonContainer.addEventListener('click', (event) => {


if( event.target.innerText === "Press 1") {
    alert("button 1");
} else if(event.target.innerText === "Press 2") {
    alert("button 2");
} else if(event.target.innerText === "Press 3"){
    alert("button 3");
}

} )