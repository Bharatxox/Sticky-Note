const btn = document.querySelector("#buttonInput");

btn.addEventListener('click',(e)=>{
    const text = document.querySelector("#textInput");
    const color = document.querySelector("#colorInput");
    const output = document.querySelector(".inside-note");
    const content = document.querySelector(".content");

    const textVal = text.value;
    const colorVal = color.value;

    if(textVal === ""){
        text.classList.add("abcd")
        return alert("Entre the value");
    }

    console.log(textVal);
    console.log(colorVal);

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = colorVal;
    content.innerHTML = "";
    output.appendChild(card);


    let cross = document.createElement("div");
    cross.classList.add("cross");
    cross.innerHTML = '<i class="uil uil-times"></i>';
    card.appendChild(cross);

    let paraDiv = document.createElement("div");
    paraDiv.classList.add("paraDiv");
    card.appendChild(paraDiv);

    let para = document.createElement("p");
    para.innerText = textVal;
    para.classList.add("para");
    paraDiv.appendChild(para);

    output.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.className == 'uil uil-times'){
            e.target.parentNode.parentNode.remove();
        }
    })
    text.value = '';
});
