function setColor(set) {
        let changeColor = set;
        return () => {if(changeColor) {
            let userColor = document.getElementById('color').value;
            console.log(userColor)
            console.log(document.getElementById('myPara').style.color)
            document.getElementById('myPara').style.color = userColor;
        }
    }//body of fucn is returned where change color is bound to setcolor
        
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}
