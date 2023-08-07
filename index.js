const boxes = document.querySelectorAll(".box");
const radios = document.querySelectorAll("input[type='radio']");

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        const hiddenInfos = document.querySelectorAll(".hidden-info");
        
        boxes.forEach((otherBox) => {
            otherBox.style.borderColor = "lightgray";
            otherBox.style.backgroundColor = "transparent";
        });
        
        hiddenInfos.forEach((hiddenInfo) => {
            hiddenInfo.style.display = "none";
        });
        
        radios.forEach((radio) => {
            radio.checked = false;
        });

        box.style.borderColor = "#007f5f";
        box.style.backgroundColor = "#f6fff8";
        hiddenInfos[index].style.display = "block";
        radios[index].checked = true;
    });
});
