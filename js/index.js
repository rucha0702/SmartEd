let category = document.getElementsByClassName('category');
 
for(let i =0;i<category.length;i++)
{

    category[i].querySelector('.btn-style').addEventListener('click',()=>{

        for(let i=0;i<category.length;i++)
        {
            let x = category[i].querySelector('.select-option');
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
let news = document.getElementById('news-resource');
document.getElementById('newsBtn').addEventListener('click',()=>{
   news.style.display="flex";
   news.style.flexDirection="column";
})