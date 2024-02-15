const clock = document.getElementById('clock');



clock.addEventListener("click", (e) => {
    e.target.innerText = time;
});


setInterval(function(){
    let date = new Date();
    clock.innerText = date.toLocaleString().slice(11);
}, 1000)