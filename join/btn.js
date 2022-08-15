function myFunction(){
let btnSend = document.querySelector('button');

btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Joining...';

    setTimeout(()=>{
        btnSend.style.display = "Joined";
        btnSend.innerText='Joined';
    },1000);
});
}