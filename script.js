const [input1, input2] = document.querySelectorAll("input");
const btn = document.querySelector("button")

function Logar(){

        if(input1.value && input2.value.length >= 8){
        btn.removeAttribute("disabled")
        btn.classList.add("ativo");
    }
}

input1.addEventListener("input", Logar)
input2.addEventListener("input", Logar)
