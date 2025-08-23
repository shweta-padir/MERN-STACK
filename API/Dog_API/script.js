let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
  let src= await getimg();
  let img=document.querySelector("img");
  img.setAttribute("src",src);
})


let url="https://dog.ceo/api/breeds/image/random";

async function getimg()
{ try{
  let dogpic=await axios.get(url);
  return dogpic.data.message

   }
   catch(e)
   {
    console.log("error",e);
   }
  
}