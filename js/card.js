console.log("hey")
const obj = [
    {
        "id" : "1",
        "subject" : "Physics",
        "name" : "YouTube Channel",
        "topic" : "C++",
        "about" : "C++ is not a physics concept",
        "link" : "https://www.youtube.com/embed/h_3pYoL6dPg"
    },
    {
        "id" : "2",
        "subject" : "Physics",
        "name" : "YouTube Channel",
        "topic" : "C++",
        "about" : "C++ is not a physics concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "3",
        "subject" : "Physics",
        "name" : "YouTube Channel",
        "topic" : "C++",
        "about" : "C++ is not a physics concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "4",
        "subject" : "Physics",
        "name" : "YouTube Channel",
        "topic" : "C++",
        "about" : "C++ is not a physics concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "5",
        "subject" : "Physics",
        "name" : "YouTube Channel",
        "topic" : "Java",
        "about" : "Java is not a physics concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "6",
        "subject" : "Physics",
        "name" : "YouTube Channel",
        "topic" : "Python",
        "about" : "Python is not a physics concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "7",
        "subject" : "Chemistry",
        "name" : "YouTube Channel",
        "topic" : "Frontend",
        "about" : "Frontend is not a chem concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "8",
        "subject" : "Chemistry",
        "name" : "YouTube Channel",
        "topic" : "Frontend",
        "about" : "Frontend is not a chem concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "9",
        "subject" : "Biology",
        "name" : "YouTube Channel",
        "topic" : "Physiology",
        "about" : "Physiology is the study of human body",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "10",
        "subject" : "Biology",
        "name" : "YouTube Channel",
        "topic" : "Botany",
        "about" : "Botany is the study of plants",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "11",
        "subject" : "Biology",
        "name" : "YouTube Channel",
        "topic" : "Environment",
        "about" : "Environmental Science is a bio concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        "id" : "12",
        "subject" : "Chemistry",
        "name" : "YouTube Channel",
        "topic" : "Backend",
        "about" : "Backend is not a chem concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY"
    }
]


let selBtn = document.querySelectorAll('.select-category-btn');
for(let j =0;j<obj.length;j++)
{
    let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="card bg-light m-3" style="width: 18rem; height:22rem">
            
             <iframe class="rounded align-self-md-center" width="90%" height="40%" src=${obj[j].link}>
</iframe>
             <div class="card-body">
             <h5 class="card-title">${obj[j].name}</h5>
             <p class="card-text">
             ${obj[j].about}
             </p>
             </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item">${obj[j].topic}</li>
             </ul>
             <div class="card-body">
             <a href="#" class="card-link">Card link</a>
             </div>
             </div>`
             document.getElementById('card-add').appendChild(createCard);
   
}

 for(let i =0;i<selBtn.length;i++)
 {
     selBtn[i].addEventListener('click',()=>{
         console.log('clicked');
         let cd = document.getElementById('card-add');
        //  cd.empty();
        function removeAllChildNodes(cd) {
            while (cd.firstChild) {
                cd.removeChild(cd.firstChild);
            }
        }
        removeAllChildNodes(cd);
         for(let j=0;j<obj.length;j++)
         {
             
             let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="card bg-light m-3" style="width: 18rem">
            
             <iframe class="rounded align-self-md-center" width="90%" height="40%" src=${obj[j].link}>
</iframe>
             <div class="card-body">
             <h5 class="card-title">${obj[j].name}</h5>
             <p class="card-text">
             ${obj[j].about}
             </p>
             </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item">${obj[j].topic}</li>
             </ul>
             <div class="card-body">
             <a href="#" class="card-link">Card link</a>
             </div>
             </div>`
             document.getElementById('card-add').appendChild(createCard);
             if(obj[j].topic!=selBtn[i].value)
             {
                document.getElementById('card-add').removeChild(createCard);
             }
             
            
             
         }
     })
 }
