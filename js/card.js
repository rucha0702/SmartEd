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
        "about" : "Python",
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
        "about" : "Quantum",
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
        "name" : "Unacademy",
        "topic" : "Physical",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/AS76FtoJsB0",
        "y-link" : "https://youtu.be/AS76FtoJsB0"
    },
    {
        "id" : "12",
        "subject" : "Chemistry",
        "name" : "Competition Wallah",
        "topic" : "Inorganic",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/3T1p0Q74x7I",
        "y-link" : "https://youtu.be/3T1p0Q74x7I"
    },
    {
        "id" : "13",
        "subject" : "Chemistry",
        "name" : "Competition Wallah",
        "topic" : "Inorganic",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/3T1p0Q74x7I",
        "y-link" : "https://youtu.be/3T1p0Q74x7I"
    },
    {
        "id" : "14",
        "subject" : "Social Science",
        "name" : "Unacademy",
        "topic" : "History",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/OQhJMSoTY9c",
        "y-link" : "https://youtu.be/OQhJMSoTY9c"
    },
    {
        "id" : "15",
        "subject" : "Social Science",
        "name" : "Magnet Brains",
        "topic" : "History",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/7MU379LucF0",
        "y-link" : "https://youtu.be/7MU379LucF0"
    },
    {
        "id" : "16",
        "subject" : "Biology",
        "name" : "Vedantu",
        "topic" : "Physiology",
        "about" : "By Garima Goel",
        "link" : "https://www.youtube.com/embed/0-_8CMmaSBg",
        "y-link" : "https://youtu.be/0-_8CMmaSBg"
    },
    {
        "id" : "17",
        "subject" : "Biology",
        "name" : "Unacademy NEET",
        "topic" : "Physiology",
        "about" : "By Sachin Kapur",
        "link" : "https://www.youtube.com/embed/57nD74vhvtg",
        "y-link" : "https://youtu.be/57nD74vhvtg"
    },
    {
        "id" : "18",
        "subject" : "Biology",
        "name" : "Physiological Society",
        "topic" : "Physiology",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/nkfunphAKqo",
        "y-link" : "https://youtu.be/nkfunphAKqo"
    },
    {
        "id" : "19",
        "subject" : "Maths",
        "name" : "freeCodeCamp.org",
        "topic" : "Algebra",
        "about" : " by Dr. Linda Green",
        "link" : "https://www.youtube.com/embed/LwCRRUa8yTU",
        "y-link" : "https://youtu.be/LwCRRUa8yTU"
    },
    {
        "id" : "20",
        "subject" : "Biology",
        "name" : "Wondrium",
        "topic" : "Botany",
        "about" : "Plant Science",
        "link" : "https://www.youtube.com/embed/8-G7D_sy7qE",
        "y-link" : "https://youtu.be/8-G7D_sy7qE"
    },
    {
        "id" : "21",
        "subject" : "Biology",
        "name" : "Unacademy NEET",
        "topic" : "Botany",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/yyI2ftqGFVI",
        "y-link" : "https://youtu.be/yyI2ftqGFVI"
    },
    {
        "id" : "22",
        "subject" : "Biology",
        "name" : "Vedantu",
        "topic" : "Botany",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/gTyALD1uDOg",
        "y-link" : "https://youtu.be/gTyALD1uDOg"
    },
    {
        "id" : "23",
        "subject" : "Biology",
        "name" : "Bozeman Science",
        "topic" : "Environment",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/LE9KTG9PFho",
        "y-link" : "https://youtu.be/LE9KTG9PFho"
    },
    {
        "id" : "24",
        "subject" : "Biology",
        "name" : "Let's LEARN",
        "topic" : "Environment",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/BeBETJ0Bnls",
        "y-link" : "https://youtu.be/BeBETJ0Bnls"
    },
    {
        "id" : "25",
        "subject" : "Maths",
        "name" : "Geek's Lesson",
        "topic" : "Algebra",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/PVoTRu3p6ug",
        "y-link" : "https://youtu.be/PVoTRu3p6ug"
    },
    {
        "id" : "26",
        "subject" : "Maths",
        "name" : "mathantics",
        "topic" : "Algebra",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/NybHckSEQBI",
        "y-link" : "https://youtu.be/NybHckSEQBI"
    },
    {
        "id" : "27",
        "subject" : "Maths",
        "name" : "Math Fortress",
        "topic" : "Geometry",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/OgNH3xrhtdg",
        "y-link" : "https://youtu.be/OgNH3xrhtdg"
    },
    {
        "id" : "28",
        "subject" : "Maths",
        "name" : "Organic Chemistry Tutor",
        "topic" : "Geometry",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/302eJ3TzJQU",
        "y-link" : "https://youtu.be/302eJ3TzJQU"
    },
    {
        "id" : "29",
        "subject" : "Maths",
        "name" : "wifistudy",
        "topic" : "Geometry",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/58p8KUVxWCs",
        "y-link" : "https://youtu.be/58p8KUVxWCs"
    },
    {
        "id" : "30",
        "subject" : "Maths",
        "name" : "freeCodeCamp.org",
        "topic" : "Calculus",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/HfACrKJ_Y2w",
        "y-link" : "https://youtu.be/HfACrKJ_Y2w"
    },
    {
        "id" : "31",
        "subject" : "Maths",
        "name" : "Academic Lesson",
        "topic" : "Calculus",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/8stueNPVl-I",
        "y-link" : "https://youtu.be/8stueNPVl-I"
    },
    {
        "id" : "32",
        "subject" : "Maths",
        "name" : "Vedantu",
        "topic" : "Calculus",
        "about" : "JEE Prep",
        "link" : "https://www.youtube.com/embed/x8f0DYrrd60",
        "y-link" : "https://youtu.be/x8f0DYrrd60"
    },
    {
        "id" : "34",
        "subject" : "Social Science",
        "name" : "Simran Sahni",
        "topic" : "History",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/ifdJ1frDef8",
        "y-link" : "https://youtu.be/ifdJ1frDef8"
    },
    {
        "id" : "35",
        "subject" : "Social Science",
        "name" : "Magnet Brains",
        "topic" : "Geography",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/Q-DO0yZufbc",
        "y-link" : "https://youtu.be/Q-DO0yZufbc"
    },
    {
        "id" : "36",
        "subject" : "Social Science",
        "name" : "Unacademy",
        "topic" : "Geography",
        "about" : "by Anirudh Malik",
        "link" : "https://www.youtube.com/embed/VRQg6pGiPG8",
        "y-link" : "https://youtu.be/VRQg6pGiPG8"
    },
    {
        "id" : "37",
        "subject" : "Social Science",
        "name" : "Study IQ Education",
        "topic" : "Geography",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/6WKF9s_Zl5w",
        "y-link" : "https://youtu.be/6WKF9s_Zl5w"
    },
    {
        "id" : "38",
        "subject" : "Social Science",
        "name" : "Unacademy",
        "topic" : "Political Science",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/H7CJLB9cM-U",
        "y-link" : "https://youtu.be/H7CJLB9cM-U"
    },
    {
        "id" : "39",
        "subject" : "Social Science",
        "name" : "Study IQ Education",
        "topic" : "Political Science",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/XcvaO3k5vg4",
        "y-link" : "https://youtu.be/XcvaO3k5vg4"
    },
    {
        "id" : "40",
        "subject" : "Social Science",
        "name" : "Shubhra Ranjan IAS",
        "topic" : "Political Science",
        "about" : "Inorganic in one shot",
        "link" : "https://www.youtube.com/embed/ZbjS5mV8gVI",
        "y-link" : "https://youtu.be/ZbjS5mV8gVI"
    },
    {
        "id" : "41",
        "subject" : "English",
        "name" : "YouTube Channel",
        "topic" : "Literature",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/TjZ-uQuFBBQ",
        "y-link" : "https://youtu.be/TjZ-uQuFBBQ"
    },
    {
        "id" : "42",
        "subject" : "English",
        "name" : "YouTube Channel",
        "topic" : "Literature",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/TjZ-uQuFBBQ",
        "y-link" : "https://youtu.be/TjZ-uQuFBBQ"
    },
    {
        "id" : "43",
        "subject" : "English",
        "name" : "YouTube Channel",
        "topic" : "Literature",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/TjZ-uQuFBBQ",
        "y-link" : "https://youtu.be/TjZ-uQuFBBQ"
    },
    {
        "id" : "44",
        "subject" : "English",
        "name" : "YouTube Channel",
        "topic" : "Grammar",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/B1ed-pfqdZg",
        "y-link" : "https://youtu.be/B1ed-pfqdZg"
    },
    {
        "id" : "45",
        "subject" : "English",
        "name" : "YouTube Channel",
        "topic" : "Grammar",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/B1ed-pfqdZg",
        "y-link" : "https://youtu.be/B1ed-pfqdZg"
    },
    {
        "id" : "46",
        "subject" : "English",
        "name" : "Sundar Pichai",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/ic5O2sxhH9M",
        "y-link" : "https://youtu.be/ic5O2sxhH9M"
    },
    {
        "id" : "47",
        "subject" : "English",
        "name" : "Steve Jobs",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/Tuw8hxrFBH8",
        "y-link" : "https://youtu.be/Tuw8hxrFBH8"
    },
    {
        "id" : "48",
        "subject" : "English",
        "name" : "Elon Musk",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/t1XCzWlYWeA",
        "y-link" : "https://youtu.be/t1XCzWlYWeA"
    },
    {
        "id" : "49",
        "subject" : "English",
        "name" : "YouTube Channel",
        "topic" : "Grammar",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/B1ed-pfqdZg",
        "y-link" : "https://youtu.be/B1ed-pfqdZg"
    },
    {
        "id" : "50",
        "subject" : "Chemistry",
        "name" : "Unacademy",
        "topic" : "Physical",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/AS76FtoJsB0",
        "y-link" : "https://youtu.be/AS76FtoJsB0"
    },
    {
        "id" : "51",
        "subject" : "Chemistry",
        "name" : "Unacademy",
        "topic" : "Physical",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/AS76FtoJsB0",
        "y-link" : "https://youtu.be/AS76FtoJsB0"
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Bill Gates",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/JaF-fq2Zn7I",
        "y-link" : "https://youtu.be/JaF-fq2Zn7I"
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Linus Torvalds",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "link" : "https://www.youtube.com/embed/o8NPllzkFhE",
        "y-link" : "https://youtu.be/o8NPllzkFhE"
    }
]


let selBtn = document.querySelectorAll('.select-category-btn');
for(let j =0;j<obj.length;j++)
{
    let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="card bg-light m-3 card-style" style="width: 18rem; height:22rem">
            
             <iframe class="rounded align-self-md-center" width="90%" height="40%" src=${obj[j].link}>
</iframe>
             <div class="card-body">
             <h5 class="card-title text-center">${obj[j].name}</h5>
             <p class="card-text text-center">
             SmartEd
             </p>
             </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item">${obj[j].topic}</li>
             </ul>
             <div class="card-body">
             <a class="btn btn-secondary" target="blank" href="${obj[j]["y-link"]}" class="card-link">Start Watching</a>
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
             createCard.innerHTML= `<div class="card bg-light m-3" style="width: 18rem; height:22rem"">
            
             <iframe class="rounded align-self-md-center" width="90%" height="40%" src=${obj[j].link}>
</iframe>
             <div class="card-body">
             <h5 class="card-title text-center">${obj[j].name}</h5>
             <p class="card-text text-center">
             SmartEd
             </p>
             </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item">${obj[j].topic}</li>
             </ul>
             <div class="card-body">
             <a class="btn btn-secondary" target="blank" href="${obj[j]["y-link"]}" class="card-link">Start Watching</a>
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
