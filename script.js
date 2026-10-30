const services = [
    {
        title: "KRA PIN",
        category: "Tax",
        officialUrl: "https://itax.kra.go.ke",
        documents: ["National ID", "Email address", "Phone Number"],
        steps: [
            "Open the official KRA website.",
            "Choose the option to register as a new taxpayer.",
            "Fill in your details exactly as on your ID.",
            "Submit and keep your confirmation message."
        ]
    },
    {
        title: "SHA registration",
        category: "Health",
        officialUrl: "https://sha.go.ke",
        documents: ["National ID", "Phone number linked to your ID records"],
        steps: [
            "Go to sha.go.ke or dial *147#.",
            "Enter your National ID details.",
            "Add any dependents.",
            "Submit and keep your confirmation."
        ]
    },
    {
        title: "Passport registration",
        category: "Immigration",
        officialUrl: "https://immigration.ecitizen.go.ke"
    }
];

// for (const service of services){
//     console.log("Service: " + service.title);
// }


const list = document.getElementById("service-list");

// for (const service of services){
//     list.innerHTML += 
//         "<section class = 'service'>" +
//         "<h2>" + service.title + "</h2>" +
//         "<p>Category: " + service.category + "</p>" +
//         "<p><a href ='" + service.officialUrl + "'>Official website</a></p>"
//         "</section>"
// }


// const items = services[0].documents.map(function (doc){
//     return "<li>" + doc + "</li>";
// })

// console.log(items.join(""))

// const name = "SHA"
// console.log(`Welcome to the ${name} guide`)

function showServices(items){
   
    list.innerHTML = "";

    if (items.length === 0){
        list.innerHTML = "<p>No services found. Try a different word.</p>"
        return
    }

    for (const service of items) {
        list.innerHTML += `
            <section class = "service">
                <h2>${service.title}</h2>
                <p>Category: ${service.category}</p>

                <h3>Documents you need</h3>
                <ul>
                ${(service.documents || []).map(doc => `<li>${doc}</li>`).join("")}
                </ul>
                
                <h3>Steps</h3>
                <ol>
                ${(service.steps || []).map(step => `<li>${step}</li>`).join("")};
                </ol>

                <p><a href ="${service.officialUrl}">Official website</a></p>
            </section>
         `;
    }
}

showServices(services)

const searchBox = document.getElementById("search")

searchBox.addEventListener("input", function () {
    const text = searchBox.value.toLowerCase()

    const matches = services.filter(function (service) {
        return (
            service.title.toLowerCase().includes(text) ||
            service.category.toLowerCase().includes(text)
        )
    })

    showServices(matches)
})





