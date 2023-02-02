    var userChoice;
    var compChoice;
    var wins=0;
    var losses=0;
    var guesses_left=5;
    var Your_guesses_so_far=[];
    
    var x=function (){
    return(Math.floor(Math.random()*9));
    }

    function reload(){
        guesses_left=5
        Your_guesses_so_far=[]
    }
   
    
    window.addEventListener('keyup',e=>{
        userChoice=parseInt(e.key);
        compChoice=x();

        if(userChoice===compChoice){
            wins++;
            console.log('duzgun qerar');
            alert('qalib geldiniz')
            guesses_left=5;
            console.log('user:'+userChoice,'comp:'+compChoice,Your_guesses_so_far,"left:"+guesses_left)
            Your_guesses_so_far=[]
        }
        else if(userChoice!==compChoice){
            Your_guesses_so_far.push(userChoice);
            guesses_left--;
            console.log('user:'+userChoice,'comp:'+compChoice,Your_guesses_so_far,"left:"+guesses_left)
            if(guesses_left===0){
                alert('meglub oldunuz')
                losses++
                reload();
            }
        }
    })

    
    
