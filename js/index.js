let category = document.getElementsByClassName('category');
 
for(let i =0;i<category.length;i++)
{

    category[i].querySelector('.btn-style').addEventListener('click',()=>{

         const active = document.getElementsByClassName('btn-style');
         for(let j=0;j<active.length;j++)
         {
             active[j].style.background="white";
             active[j].style.color="black";
         }
         category[i].querySelector('.btn-style').style.background="black";
         category[i].querySelector('.btn-style').style.color="white";
        //  category[i].querySelector('.btn-style').classList.add('btn-click');
         

        for(let j=0;j<category.length;j++)
        {
            let x = category[j].querySelector('.select-option');
             x.style.display="none";
        }

        let x = category[i].querySelector('.select-option');
        x.style.display="block";
        
    })
}



// download pdf



function func(){
    let title = document.getElementById('title').value;
    let main = document.getElementById('box');
    let text = document.getElementById('message').value;
    let boxStyle = document.getElementById('boxBorder');
    main.innerHTML = `<h1>${title}</h1>
                       <p>${text}</p>`;
    boxStyle.style.border="2px solid black";
    html2pdf()
    .from(main)
    .save();
}

// news
let news = document.getElementById('news-section');
document.getElementById('newsBtn').addEventListener('click',()=>{
   news.style.display="flex";
   news.style.flexDirection="column";
})