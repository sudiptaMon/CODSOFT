const insert=(ele)=>{
    document.getElementById("output").value+=ele;
}


document.getElementById("ans").addEventListener('click',()=>{
    let eq=document.getElementById('output').value;
    try{

        if(eq){
            let an=eval(eq);
            document.getElementById('output').value=an;
            
        }else{
            alert("Enter an equation to solve");
        }
    }catch(err){
        alert(err);
    }
})