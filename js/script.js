
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const text=document.querySelector('.text')
  let deg =0;
  //text.innerHTML='like'
 
  startButton.addEventListener('click', () => {
   startButton.style.pointerEvents = 'none';

    deg = Math.floor(3000 + Math.random() * 5000);

    wheel.style.transition = 'all 2s ease-out';

    wheel.style.transform = `rotate(${deg}deg)`;

    wheel.classList.add('blur');

    
  });
  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';

    wheel.style.transition = 'none';
    const actualDeg = deg % 360;

    if(actualDeg<=45 && actualDeg>0){
      setTimeout( function(){
        text.innerHTML='like'
       } ,100) }

       else if(actualDeg<=91 && actualDeg>=46){
        setTimeout( function(){
          text.innerHTML='comment'
         } ,100)
    }
    
    else if(actualDeg<=136 && actualDeg>=92){
      setTimeout( function(){
        text.innerHTML='unlike'
       } ,100)
    }
    
    else if(actualDeg<=182 && actualDeg>=137){
      setTimeout( function(){
        text.innerHTML='upload'
       } ,100)
    }
    
    else if(actualDeg<=228 && actualDeg>=183){
           setTimeout( function(){
            text.innerHTML='link'
           } ,100)   
    }
    
    else if(actualDeg<=271 && actualDeg>=229){
      setTimeout( function(){
        text.innerHTML='watchlater'
       } ,100)
    }
    
    else if(actualDeg<=317 && actualDeg>=272){
      setTimeout( function(){
        text.innerHTML='download'
       } ,100)
    }
    
    else if(actualDeg<=360 && actualDeg>=273){
      setTimeout( function(){
        text.innerHTML='share'
       } ,100)
    }
    //console.log(actualDeg)
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
