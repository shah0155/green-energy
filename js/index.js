//create resources
const resources = [{
        heading: "Solar Energy",
        path: "./images/solutions/solar.jpg",
        body: "Research in Nano technology is proving as a boon to almost all disciplines in science and technology. A group of scientists at the University of Toronto presented a light-sensitive nanoparticle called colloidal quantum dots, which will reduce expenses while offering a more flexible material for solar cells."
    },
    {
        heading: "Hydro",
        path: "./images/solutions/hydro.jpg",
        body: "To improve an electric turbine's performance, a helicoid penstock  is used. The Helicoid penstock, is like a rifle barrel, and has spiral grooves etched inside. This stucture focusses the flow of the water and improves performance."
    },
    {
        heading: "Wind Turbines",
        path: "./images/solutions/windmill.jpg",
        body: "There is a continuous quest to find novel materials which aid us in building bigger and more efficient wind turbines, which leads to increased power output at lower prices. The advancement in solar technology further acts synergistically to yield more throughput."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    if (eventTarget === "Solar Energy") {
        currentContent.innerHTML = `<div class="container-fluid text-center">
                                    <h2 class="animated fadeInDown mt-3">${resources[0].heading}</h2>
                                    <img src="${resources[0].path}" class="animated fadeInDown delay-1s mt-3 img-fluid">
                                    <p class="animated fadeInDown delay-2s mt-3">${resources[0].body}</p>
                                    </div>`;
    } else if (eventTarget === "Hydro") {
        currentContent.innerHTML = `<div class="container-fluid text-center">
                                    <h2 class="animated fadeInDown mt-3">${resources[1].heading}</h2>
                                    <img src="${resources[1].path}" class="animated fadeInDown delay-1s mt-3 img-fluid">
                                    <p class="animated fadeInDown delay-2s mt-3">${resources[1].body}</p>
                                    </div>`;
    } else {
        currentContent.innerHTML = `<div class="container-fluid text-center">
                                    <h2 class="animated fadeInDown mt-3">${resources[2].heading}</h2>
                                    <img src="${resources[2].path}" class="animated fadeInDown delay-1s mt-3 img-fluid">
                                    <p class="animated fadeInDown delay-2s mt-3">${resources[2].body}</p>
                                    </div>`;
    }

}

/* REGISTERING EVENT CONTENT */
btns[5].addEventListener("click", contentLoader);
btns[6].addEventListener("click", contentLoader);
btns[7].addEventListener("click", contentLoader);