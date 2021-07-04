
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const text=document.querySelector('.text')
  let deg = 0;

  startButton.addEventListener('click', () => {
   startButton.style.pointerEvents = 'none';

    deg = Math.floor(500 + Math.random() * 100);

    wheel.style.transition = 'all 2s ease-out';

    wheel.style.transform = `rotate(${deg}deg)`;

    wheel.classList.add('blur');
    if(deg<=590 && deg>543 || deg<=229 && deg>183){
      setTimeout( function(){
        text.innerHTML='linke'
       } ,2000) }

       else if(deg<=600 && deg>591 || deg<=271 && deg>230){
        setTimeout( function(){
          text.innerHTML='watch later'
         } ,2000)
    }
    
    else if(deg<=450 && deg>408 || deg<=91 && deg>48){
      setTimeout( function(){
        text.innerHTML='comment'
       } ,2000)
    }
    
    else if(deg<=407 && deg>361 || deg<=47 && deg>0){
      setTimeout( function(){
        text.innerHTML='like'
       } ,2000)
    }
    
    else if(deg<=542 && deg>497){
           setTimeout( function(){
            text.innerHTML='upload'
           } ,2000)   
    }
    
    else if(deg<=360 && deg>317){
      setTimeout( function(){
        text.innerHTML='share'
       } ,2000)
    }
    
    else if(deg<=496 && deg>451 || deg<137 && deg>92){
      setTimeout( function(){
        text.innerHTML='unlike'
       } ,2000)
    }
    
    else if(deg<=316 && deg>272 || deg<182 && deg>138){
      setTimeout( function(){
        text.innerHTML='download'
       } ,2000)
    }
  });
  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';

    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
