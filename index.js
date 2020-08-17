var list= document.querySelectorAll(".drum");           //wasdjkl
for(var i=0;i<list.length;i++){
    list[i].addEventListener("click",key);  
    function key(){
        var k=this.innerHTML;
        playSound(k);
        animate(k);
    }
}

document.addEventListener("keypress",event=>{
    playSound(event.key);
    animate(event.key);
});

function playSound(key){
    switch(key){
        case 'a':
            var sound=new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case 's':
            var sound=new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case 'd':
            var sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case 'f':
            var sound=new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case 'j':
            var sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 'k':
            var sound=new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case 'l':
            var sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
    }
}

function animate(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    // console.log(select)
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },300) 
};



