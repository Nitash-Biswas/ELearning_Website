var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 
function searching(){
  let filter = document.getElementById('myinput').value.toUpperCase();
  let cards = document.getElementById('cards');
  let card = cards.getElementsByTagName('card');
  for(var i=0; i<card.length; i++){
    let a = card[i].getElementsByTagName('a')[0];
    let textValue = a.textContent || a.innerHTML;

    if(textValue.toUpperCase().indexOf(filter) > -1){
      card[i].style.display = '';
    }else
    card[i].style.display = 'none';
  }
}

function r(){
  if(card[2].style.display === ''){

    card[2].style.display = 'none';
  }
  else if(card[2].style.display === 'none'){
    card[2].style.display = '';
  }
}

 
function searchin(){
  for(var i=0; i<card; i++){
    let a = card[i].getElementsByTagName('a')[0];
    let textValue = a.textContent || a.innerHTML;

    if(textValue.toUpperCase().indexOf(filter) > -1){
      card[i].style.display = '';
    }else
    card[i].style.display = 'none';
  }
  
}
