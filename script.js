// console.log("Hello, Kenya")
// const serviceName = "KRA registration";
// console.log(serviceName)

const services = [
    {
        title: "KRA PIN",
        category: "Tax",
        officialUrl: "https://itax.kra.go.ke"
    },
    {
        title: "SHA registration",
        category: "Health",
        officialUrl: "https://sha.go.ke"
    },
    {
        title: "Passport registration",
        category: "Immigration",
        officialUrl: "https://immigration.ecitizen.go.ke"
    }
];

for (const service of services){
    console.log("Service: " + service.title);
}


const list = document.getElementById("service-list")

for (const service of services){
    list.innerHTML += 
        "<section class = 'service'>" +
        "<h2>" + service.title + "</h2>" +
        "<p>Category: " + service.category + "</p>" +
        "<p><a href ='" + service.officialUrl + "'>Official website</a></p>"
        "</section>"
}
