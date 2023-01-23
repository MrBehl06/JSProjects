const reviews = [{
    id:1,
    name:"Sandeep Behl",
    job:"Software Developer",
    img: "hi",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur ea velit repellat magni veritatis quas voluptatem saepe consequatur ex voluptasnatus atque error, doloremque etrecusandae quae suscipit. Doloribus qui illum aliquid consequuntur nesciunt mollitia inventore dignissimos aperiam aliquam!",
},
{
    id:2,
    name:"Chinmay Jain",
    job:"Data Scientist",
    img: "hi",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur ea velit repellat magni veritatis quas voluptatem saepe consequatur ex voluptasnatus atque error, doloremque etrecusandae quae suscipit. Doloribus qui illum aliquid consequuntur nesciunt mollitia inventore dignissimos aperiam aliquam!",
},
{
    id:3,
    name:"Rishav Pandey",
    job:"Game Developer",
    img: "hi",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur ea velit repellat magni veritatis quas voluptatem saepe consequatur ex voluptasnatus atque error, doloremque etrecusandae quae suscipit. Doloribus qui illum aliquid consequuntur nesciunt mollitia inventore dignissimos aperiam aliquam!",
},
{
    id:4,
    name:"Naresh Kumar ",
    job:"web Developer",
    img: "hi",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur ea velit repellat magni veritatis quas voluptatem saepe consequatur ex voluptasnatus atque error, doloremque etrecusandae quae suscipit. Doloribus qui illum aliquid consequuntur nesciunt mollitia inventore dignissimos aperiam aliquam!",
},
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 2;

window.addEventListener("DOMContentLoaded",function(){ 
    
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem=0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem=reviews.length -1;
    }
    showPerson(currentItem);
})
})
function showPerson(person){
    const items = reviews[person];
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text;
}

randomBtn.addEventListener('click',function(){
    showPerson( Math.floor(Math.random() *reviews.length));
})
