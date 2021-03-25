document.querySelector('button').addEventListener('click', getName)

async function getName(){
    try{
    const res = await fetch('https://simple-recipe-api-100devs.herokuapp.com/api/recipes')
    const data = await res.json()
    
    console.log(data)
    }catch(err){
        console.log(err)
    }
}