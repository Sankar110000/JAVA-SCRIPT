const body = document.querySelector('body');
const buttons  = document.querySelectorAll('.button');

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let targetElement = e.target.id;

        if(targetElement == "box1"){
            body.style.backgroundColor = 'gray';
        }else if(targetElement == "box2"){
            body.style.backgroundColor = 'white'
        }else if(targetElement == "box3"){
            body.style.backgroundColor = 'blue'
        }else if(targetElement == "box4"){
            body.style.backgroundColor = 'yellow'
        }
    })
})