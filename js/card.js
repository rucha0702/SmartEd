console.log("hey")
const obj = [
    {
        "id" : "1",
        "subject" : "Physics",
        "name" : "WALTER LEWIN",
        "topic" : "Classical Physics",
        "about" : "C++ is not a physics concept",
        "link" : "https://www.youtube.com/embed/wWnfJ0-xXRE",
        "y-link" : "https://youtu.be/wWnfJ0-xXRE"
    },
    {
        "id" : "2",
        "subject" : "Physics",
        "name" : "HC VERMA",
        "topic" : "Classical Physics",
        "about" : "C++ is not a physics concept",
        "link" : "https://www.youtube.com/embed/6oVi6UcrIeA",
        "y-link" : "https://youtu.be/6oVi6UcrIeA"
    },
    {
        "id" : "3",
        "subject" : "Physics",
        "name" : "Physics Wallah",
        "topic" : "Classical Physics",
        "about" : "By Alakh Pandey",
        "link" : "https://www.youtube.com/embed/YzxUZzMrlfQ",
        "y-link" : "https://youtu.be/YzxUZzMrlfQ"
    },
    {
        "id" : "4",
        "subject" : "Chemistry",
        "name" : "LearnoHub",
        "topic" : "Organic",
        "about" : "Chemistry for class 11",
        "link" : "https://www.youtube.com/embed/L88uuqmAioU",
        "y-link" : "https://youtu.be/L88uuqmAioU"
    },
    {
        "id" : "5",
        "subject" : "Chemistry",
        "name" : "Unacademy JEE",
        "topic" : "Organic",
        "about" : "Chemistry for JEE prep",
        "link" : "https://www.youtube.com/embed/i_lcQQZ9mm8",
        "y-link" : "https://youtu.be/i_lcQQZ9mm8"
    },
    {
        "id" : "6",
        "subject" : "Physics",
        "name" : "Geek's Lesson",
        "topic" : "Quantum Physics",
        "about" : "Python is not a physics concept",
        "link" : "https://www.youtube.com/embed/xnt2xSNRNn0",
        "y-link" : "https://youtu.be/xnt2xSNRNn0"
    },
    {
        "id" : "7",
        "subject" : "Physics",
        "name" : "Physics Wallah",
        "topic" : "Quantum Physics",
        "about" : "By Alakh Pandey",
        "link" : "https://www.youtube.com/embed/2JYSVsXV3Ac",
        "y-link" : "https://youtu.be/2JYSVsXV3Ac"
    },
    {
        "id" : "8",
        "subject" : "Physics",
        "name" : "HC VERMA",
        "topic" : "Quantum Physics",
        "about" : "Frontend is not a chem concept",
        "link" : "https://www.youtube.com/embed/s8YgJ1LRi1s",
        "y-link" : "https://youtu.be/s8YgJ1LRi1s"
    },
    {
        "id" : "9",
        "subject" : "Chemistry",
        "name" : "Apni Kaksha",
        "topic" : "Organic",
        "about" : "Chemistry for class 12",
        "link" : "https://www.youtube.com/embed/1v5Yt4-Bfio",
        "y-link" : "https://youtu.be/1v5Yt4-Bfio"
    },
    {
        "id" : "10",
        "subject" : "Chemistry",
        "name" : "eCareerPoint",
        "topic" : "Inorganic",
        "about" : "Chemistry for class 12",
        "link" : "https://www.youtube.com/embed/n0LCwO7pzNI",
        "y-link" : "https://youtu.be/n0LCwO7pzNI"
    },
    {
        "id" : "11",
        "subject" : "Chemistry",
        "name" : "YouTube Channel",
        "topic" : "Physical",
        "about" : "Environmental Science is a bio concept",
        "link" : "https://www.youtube.com/embed/tgbNymZ7vqY",
        "y-link" : "https://youtu.be/wWnfJ0-xXRE"
    },
    {
        "id" : "12",
        "subject" : "Chemistry",
        "name" : "Competition Wallah",
        "topic" : "Inorganic",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/3T1p0Q74x7I",
        "y-link" : "https://youtu.be/3T1p0Q74x7I"
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
             <a target="blank" href="${obj[j]["y-link"]}" class="card-link">Card link</a>
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
