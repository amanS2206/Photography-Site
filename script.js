const showBtn = document.querySelector('.navbtn');
const topNav = document.querySelector('.top-nav');
const write = document.querySelector('.auto');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('shownav')){
        topNav.classList.remove('shownav');
        showBtn.innerHTML = '<i class = "fa fa-bars"></i>';     
    }else {
        topNav.classList.add('shownav');
        showBtn.innerHTML = '<i class= "fa fa-times"></i>';
    }
})

function writeText(){
    const type = "Welcome to Photography Site";
    let i = 0;
    const typing = () => {
        if(i < type.length){
            write.innerHTML += type.charAt(i);
            i++;
            setTimeout(typing, 30);
        }
    };
    typing();
}

writeText();