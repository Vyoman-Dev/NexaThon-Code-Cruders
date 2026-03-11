function scrollSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}


function sendMessage(e){

e.preventDefault()

alert("Message sent successfully!")

}


async function loadServices(){

const container=document.getElementById("services-container")

const res=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")

const data=await res.json()

data.forEach(service=>{

const card=document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="https://picsum.photos/300/200?random=${service.id}">

<h3>${service.title}</h3>

<p>${service.body}</p>

`

container.appendChild(card)

})

}


async function loadDoctors(){

const container=document.getElementById("doctor-container")

const res=await fetch("https://jsonplaceholder.typicode.com/users")

const data=await res.json()

data.slice(0,4).forEach(doc=>{

const card=document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="https://i.pravatar.cc/300?img=${doc.id}">

<h3>${doc.name}</h3>

<p>${doc.email}</p>

`

container.appendChild(card)

})

}


loadServices()
loadDoctors()