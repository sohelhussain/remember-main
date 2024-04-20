const close = document.querySelector("#closebtn");
const overlay = document.querySelector("#overlay");
const makebtn = document.querySelector("#makebtn");
const maketask = document.querySelector("#maketask");
const title = document.querySelector("#title");
const data = document.querySelector("#data");
const vacant = document.querySelector(".vacant");


if(localStorage.getItem('task') === null){
    localStorage.setItem("task", JSON.stringify([]));
}

close.addEventListener("click", function(){
    overlay.style.display = "none";
});

makebtn.addEventListener("click", function(){
    overlay.style.display = "initial";
});

maketask.addEventListener('click', () => {
    const valueoftitle = title.value
    const valueofdata = data.value

    const dataofinputs = {
        title: valueoftitle,
        data: valueofdata,
    }


    // first we out the task
    const allPriviousTasks = localStorage.getItem('task');
    // then we parse it
    const allPriviousTasksParsed = JSON.parse(allPriviousTasks)
    // then we add it one or task
    allPriviousTasksParsed.push(dataofinputs)
    //then we need to stringify
    const stringifyTasks = JSON.stringify(allPriviousTasksParsed)
    // and add the data into localStoreg
    localStorage.setItem("task", stringifyTasks)



    // blank the task from input

    title.value = '';
    data.value = '';

    //remove the overlay screen from the screen

    overlay.style.display = 'none';
    printTask();
})
const printTask = e => {
    let clutter = ``
    // pick the array 
    const allTask = localStorage.getItem('task') //<--- they give me a string
    // and parsd it
    const parsedTasks = JSON.parse(allTask)  // <--- they convert string into array
    parsedTasks.forEach( e => {
        clutter += `<div class="card bg-zinc-100 rounded-md w-52 px-3 py-5">
        <h1 class="text-2xl capitalize font-semibold">${e.title}</h1>
        <p class="traking-tight mt-2 leading-none opacity-70">${e.data}</p>
    </div>`;

    document.querySelector('.cards').innerHTML = clutter
    })

    if(parsedTasks.length > 0) {
    vacant.style.display = 'none';
    }
}





