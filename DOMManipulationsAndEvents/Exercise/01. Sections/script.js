function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', reveal);

   for (let word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);

      content.appendChild(div);
   }

   function reveal(ev) {
      if (ev.target.tagName == 'DIV' && ev.target != content){
         ev.target.children[0].style.display = '';
      }
   }
}


// function create(words) {
//    //Create <div>
//    //Create <p>
//    //Set <p> content
//    //Configure <p> to be hidden
//    //Add <p> to <div>
//    //Add <div> to page
//    //Configure div eventListener

//    const content = document.getElementById('content');

//    for (let word of words) {
//       let div = document.createElement('div');
//       let paragraph = document.createElement('p');
//       paragraph.textContent = word;
//       paragraph.style.display = 'none';
//       div.appendChild(paragraph);

//       div.addEventListener('click', reveal);

//       content.appendChild(div);
//    }

//    function reveal(ev) {
//       ev.currentTarget.children[0].style.display = '';
//    }
// }