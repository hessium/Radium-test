const main = document.querySelector(".main");
const text = document.querySelector(".text");

main.addEventListener("click", (e) =>{
    e.preventDefault();
    text.style.color = "transparent";    
})

document.addEventListener('keydown', (e) =>{
    if (e.code == 'Space' ) {
     main.removeChild(text);
    }
  });