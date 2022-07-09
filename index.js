let array = []
async function fetchMovies() {
  await fetch("https://api.spaceflightnewsapi.net/v3/articles")
  .then(res=>res.json())
  .then(data=>{  
    array =data
    sortFunc(array)
    
  })
}

fetchMovies()
sortFunc = (data) => {
    var sortData = data.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    
    return mapFunc(sortData)
};

mapFunc=(data)=>{

  let data1 =''
  data.map((item)=>{
    return (data1+=`<div class="card">
         <h3 class="Title">${item.title}</h3>
         <img src="${item.imageUrl}" alt="" class="card-img">
         <h4 class="new-site">${item.newsSite}</h4>
         <h4 class="Published">Published: ${item.publishedAt}</h4>
         <p class="summary" >Summary ${item.summary}</p>
         <button>Read Article</button>
         <button onclick="myFunction(${item.id})" class="add">Add to Library</button>
       </div>`)
})

document.querySelector(".Body").innerHTML=data1
document.querySelector(".Article").innerHTML=data.length


const input = document.querySelector(".Search") 
input.addEventListener("input",searchItem)
function searchItem(){
  const searchInput=document.querySelector(".Search")
  const filter = searchInput.value.toLowerCase()
  const cards =array.filter((item)=>{
    let itemTitle =item.title.toLowerCase()
    return itemTitle.includes(filter)
  })
  let searchMap =''
  cards.map((item)=>{
    return (searchMap+=`<div class="card">
         <h3 class="Title">${item.title}</h3>
         <img src="${item.imageUrl}" alt="" class="card-img">
         <h4 class="new-site">${item.newsSite}</h4>
         <h4 class="Published">Published: ${item.publishedAt}</h4>
         <p class="summary" >Summary ${item.summary}</p>
         <button>Read Article</button>
         <button onclick="myFunction(${item.id})" class="add">Add to Library</button>
       </div>`)
  })
  document.querySelector(".Body").innerHTML=searchMap
  console.log(cards);
}

console.log(array);

var a =[]
myFunction=(id)=>{
  data.map((item)=>{
    if(item.id===id){
      a.push(item)
    }
  })
  localStorage.setItem("array",JSON.stringify(a))
  }
}
