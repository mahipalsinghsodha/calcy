const calcy =()=>{
    let maths = document.getElementById('maths').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let web = document.getElementById('wd').value;
    let total = parseFloat(maths) + parseFloat(physics)+ parseFloat(chemistry) + parseFloat(web);
    let perc = (total/400)*100;
    let grades ="";
    if(perc<=100 && perc>80)
    {
        grades="A";
    }
    else if(perc<=80 && perc>60)
    {
        grades="B";
    }
    else if(perc<=60 && perc>40)
    {
        grades="C";
    }
    else
    {
        grades="F";
    }

    if(perc>40)
    {
        document.getElementsByClassName('showData')[0].innerHTML=`Out of 400 your total is ${total} ans percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass`;
    }
    else
    {
        document.getElementsByClassName('showData')[0].innerHTML=`Out of 400 your total is ${total} ans percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass`;

    }
    
}