
// Method 1 from child to parent
//using selectors inside the element 
// const btns = document.querySelectorAll('.question-btn');
// const question = document.querySelectorAll('.question')
// btns.forEach(function(btn){
// btn.addEventListener("click",function(e){
//     const questionParent = e.currentTarget.parentElement.parentElement;
//     question.forEach(function(item){
//         if(item!=questionParent){
//             item.classList.remove('show-text');
//         }
//     })
//     questionParent.classList.toggle('show-text');
// });
// });

// method 2 from parent to child
// Traversing the Dom
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click',function(){
    questions.forEach(function(items){
        if(items!=question){
            items.classList.remove('show-text');
        }
    });
    question.classList.toggle('show-text');
  })
})
