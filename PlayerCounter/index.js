//set Initial count
let count = 0;
let count2 = 0;

//select value and buttons

const value = document.querySelector('#value');
const value2 = document.querySelector('#value2');
const btns = document.querySelectorAll('.btn');
const btns2 = document.querySelectorAll('.btn2');

// for each btn we have with same name
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
      const styles = e.currentTarget.classList;
      if(styles.contains("decrease")){
        count--;
      }
      else if ( styles.contains("increase")){
        count++;
      }
      else{
        count = 0;
      }
      if(count<0){
        value.style.color = "green"
      }
      else if(count>0){
        value.style.color = "Red"
      }
      else{
        value.style.color = "Black"
      }
      // text changing in value;
      value.textContent = count;
    })
})

btns2.forEach(function(btn2){
    btn2.addEventListener("click",function(g){
      const styles2 = g.currentTarget.classList;
      if(styles2.contains("decrease2")){
        count2--;
      }
      else if ( styles2.contains("increase2")){
        count2++;
      }
      else{
        count2 = 0;
      }
      if(count2<0){
        value2.style.color = "green"
      }
      else if(count2>0){
        value2.style.color = "Red"
      }
      else{
        value2.style.color = "Black"
      }
      // text changing in value;
      value2.textContent = count2;
    })
})
