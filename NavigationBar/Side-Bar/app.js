var sideBar = document.querySelector('.sidebar');
var btn = document.querySelector('.sidebar-toggle');
var closeBtn = document.querySelector('.close-btn');
btn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click',function(){
    sideBar.classList.remove('show-sidebar');
})
