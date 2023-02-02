function ageInDay(){

    var birthdate= parseInt(document.getElementById('age').value);
    // var birthdate=prompt('enter age')
    var ageInDays=(2023-birthdate)*365;
    console.log(ageInDays)
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are'+" "+ageInDays +"  "+ "days old");
    h1.setAttribute('id','ageInDay')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}
var remove=()=>{

    document.getElementById('ageInDay').remove();
}