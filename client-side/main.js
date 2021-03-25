document.querySelector('button').addEventListener('click', getName)

async function getName(){
    try{
    const res = await fetch('http://localhost:8000/api/recipes/')
    const data = await res.json()
    
    console.log(data)
    }catch(err){
        console.log(err)
    }
}