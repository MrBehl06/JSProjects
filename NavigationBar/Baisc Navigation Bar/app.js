// classList - Show / get all classess
// contains - check classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // 1 st menthod 
    // if(links.classList.contains('show-links')){

    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add('show-links');
    // }
  // 2nr method
    
    links.classList.toggle('show-links');

})