const showBtn = document.querySelector('.navbtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('shadow');
        showBtn.innerHTML = '<i class = "fa fa-bars"></i>';     
    }else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class= "fa fa-times"></i>'
    }
})