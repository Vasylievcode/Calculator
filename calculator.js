const ref = {
    display: document.querySelector("#display"),
    buttons: document.querySelector(".buttons"),
    equalButton: document.querySelector("[data-type='equal']"),
    clearButton: document.querySelector("[data-type='clear']"),
    deleteButton: document.querySelector("[data-type='delete']")
}
let operator = "";
let number = 0;
let shouldClearDisplay = false
// to do as a switchcase 
ref.buttons.addEventListener("click",(event)=>{
    
    if(event.target.dataset.type === "number"){
        if(shouldClearDisplay){
            ref.display.value = ""
            shouldClearDisplay = false
        }
        const value = event.target.dataset.value
        ref.display.value += value
        
    }
    else if(event.target.dataset.type ===  "operator"){
        operator = event.target.dataset.value
        number = ref.display.value
        shouldClearDisplay = true
    }
    
})



ref.equalButton.addEventListener("click", (event)=>{
    const value = ref.display.value
    switch(operator){
        case "/":
            ref.display.value = number/value
            break
        case "*":
            ref.display.value = number*value
            break
        case "+":
            ref.display.value = number+value
            break
        case "-":
            ref.display.value = number-value
            break
        default: throw new Error("Unexpected operator")
    }
    
})
ref.clearButton.addEventListener("click", (event)=>{
    ref.display.value = ""
    operator = ""
    number = 0
    shouldClearDisplay = false
})
ref.deleteButton.addEventListener("click", (event)=>{
    ref.display.value=ref.display.value.slice(0, ref.display.value.length - 1)
})