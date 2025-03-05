var dayy = document.querySelector('#day');

function updateData(){
    var currentData = new Date();
    var a = currentData.getHours();
    if(a>12 && a<17){
        dayy.innerText = "Good Afternoon";
        console.log(a);
    }else if(a>=0 && a<12){
        dayy.innerText = "Good Morning";
    }else if(a>16 && a<20){
        dayy.innerText = "Good Evening";
    }else if(a>19){
        dayy.innerText = "Good Night";
    }else{
        dayy.innerText = "Good Day";
    }
}
updateData();