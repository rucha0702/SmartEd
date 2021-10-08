function inp() {
    let inputText = document.getElementById('inputText').value;
    return inputText;
  }
  let outputText = document.getElementById('outputText');
  //   var input =
  //     'The first challenge is the internet connection and availability. Due to demonetization, many people would go cashless. Therefore, they would resort to E-cash and E-payment. However, in many developing nations, internet connectivity is quite poor. Hence, this forms a major challenge for any government which intends to implement demonetization.Cash shortage is a natural consequence of demonetization. The scarcity of cash can certainly lead to chaos. This is exactly what took place during the 2016 Indian banknote demonetization. Furthermore, people face various difficulties in depositing or exchanging the demonetized banknotes. Also, the ATM’s can run short of cash for many weeks or months.';

  //   var input = `${inputText.value}`;
  // console.log(input);
document.getElementById('sumBtn').addEventListener('click',()=>{
  console.log("clicked")
  var input = inp();
  Algorithmia.client('sim6fYfoZ7t75cTwEvyAJG73WcK1')
    .algo('nlp/Summarizer/0.1.8?timeout=300') // timeout is optional
    .pipe(input)
    .then(function (output) {
      console.log(output);
      outputText.innerText = output.result;
    });
})

  // function summ() {
  //   console.log("clicked")
  //   var input = inp();
  //   Algorithmia.client('sim6fYfoZ7t75cTwEvyAJG73WcK1')
  //     .algo('nlp/Summarizer/0.1.8?timeout=300') // timeout is optional
  //     .pipe(input)
  //     .then(function (output) {
  //       console.log(output);
  //       outputText.innerText = output.result;
  //     });
  // }






  document.getElementById('download').addEventListener('click',()=>{
    const invoice = this.document.getElementById('invoice').innerText;
    console.log(invoice);
    var opt = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().from(invoice).set(opt).save();
})

document.getElementById('cpyTxt').addEventListener('click',()=>{
  const invoice2 = this.document.getElementById('invoice').innerText;
  invoice2.select();

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(invoice2);

  /* Alert the copied text */
  alert("Copied the text: " + invoice2);
})

  document.getElementById('refresh').addEventListener("click",()=>{
    location. reload();
  })
//   document.getElementById('download2').addEventListener('click',()=>{
//       const invoice2 = this.document.getElementById('invoice2');
//       console.log(invoice2);
//       var opt = {
//         margin:       1,
//         filename:     'myfile.pdf',
//         image:        { type: 'jpeg', quality: 0.98 },
//         html2canvas:  { scale: 2 },
//         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//       };
      
//       html2pdf().from(invoice2).set(opt).save();
//   })
