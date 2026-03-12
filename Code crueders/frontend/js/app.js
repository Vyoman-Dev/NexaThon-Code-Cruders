const API="http://localhost:5000"

function triggerSOS(){

alert("SOS Alert Sent to Nearby Hospitals")

}


async function findDonor(){

const type=document.getElementById("bloodType").value

const res=await fetch(`${API}/donors/${type}`)

const data=await res.json()

document.getElementById("donorResult").innerHTML=

data.map(d=>`<p>${d.name} - ${d.phone}</p>`).join("")

}


async function checkBeds(){

const res=await fetch(`${API}/hospitals`)

const data=await res.json()

document.getElementById("hospitalResult").innerHTML=

data.map(h=>`<p>${h.name} ICU:${h.icu}</p>`).join("")

}


async function loadDoctors(){

const res=await fetch(`${API}/doctors`)

const data=await res.json()

document.getElementById("doctorList").innerHTML=

data.map(d=>`<p>${d.name} - ${d.specialization}</p>`).join("")

}

loadDoctors()