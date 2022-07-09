var array = JSON.parse(localStorage.getItem('array'))
let libData =''
myLibFunc=()=>{
    array.map((item)=>{
        libData+=`<div class="card">
        <h3 class="Title">${item.title}</h3>
        <img src="${item.imageUrl}" alt="" class="card-img">
        <h4 class="new-site">${item.newsSite}</h4>
        <h4 class="Published">Published: ${item.publishedAt}</h4>
        <p class="summary" >Summary ${item.summary}</p>
        <button>Read Article</button>
        <button onclick="myFunction(${item.id})" class="remove">Remove Item</button>
        </div>`
    })

    document.getElementById("libBody").innerHTML=libData
}
myFunction=(id)=>{
  const newArray=array.filter(item=>item.id!=id)
  localStorage.setItem("array",JSON.stringify(newArray))
}
myLibFunc()