(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.butt');
    let buttones=document.querySelectorAll('.butt1');
    let clear=document.querySelector('.but-clr');
    let equal = document.querySelector('.but-eql');
    let remove = document.querySelector('.but-del');
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
        screen.value += value;
    })

});
buttones.forEach(function(button){
    button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
        screen.value += value;
    })
})



equal.addEventListener('click',function(e){
    if(screen.value === ''){
        screen.value= "please enter";
}
else{
    let answer =eval(screen.value);  
    screen.value= answer;
}
})

clear.addEventListener('click',function(e){
    screen.value="" ;
})

remove.addEventListener('click',function(e){
    screen.value=screen.value.slice(0,-1);
})

})();