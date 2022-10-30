

fetch('https://script.google.com/macros/s/AKfycbyksyxaz0QORyq_KMeu44XmkCLt2tTwacymtdsjSRmrxWq-rAXqc8niGB610HLSVWX2/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="${data[i].Picture}"
                                width="100%" height="225">
                            <div class="card-body">
                                <p>${data[i].Car_made} <b>${data[i].Model_Name}</b></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="display:flex"><b>Finance
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Finance}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Finance 8w&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].weeks}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Drivetrain &nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Drivetrain}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Capacity
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Capacity}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Engine
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Engine}</p>
                                </li>
                            </ul>
                            <div class="card-footer">
                                <small class="text"><b>${data[i].Price}</b></small>
                            </div>
                        </div>
                    </div>`;
    }).join('');
    document.querySelector("#compact").insertAdjacentHTML("afterbegin", html);
})


fetch('https://script.google.com/macros/s/AKfycbwN3pSFosGYLrZ_6OVNtiXLA6MajzNc9ceCoA2igShaGoIc5ql7KjZtE3FBFkN6sofA/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="${data[i].Picture}"
                                width="100%" height="225">
                            <div class="card-body">
                                <p>${data[i].Car_made} <b>${data[i].Model_Name}</b></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="display:flex"><b>Finance
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Finance}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Finance 8w&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].weeks}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Drivetrain &nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Drivetrain}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Capacity
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Capacity}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Engine
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Engine}</p>
                                </li>
                            </ul>
                            <div class="card-footer">
                                <small class="text"><b>${data[i].Price}</b></small>
                            </div>
                        </div>
                    </div>`;
    }).join('');
    document.querySelector("#super").insertAdjacentHTML("afterbegin", html);
})


fetch('https://script.google.com/macros/s/AKfycbxGVomDcfvA9OEzez2AFnECLcdz2ki9QyUP5zxt_0x6SJIQTm1FECAm--buX1LkV1L8/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="${data[i].Picture}"
                                width="100%" height="225">
                            <div class="card-body">
                                <p>${data[i].Car_made} <b>${data[i].Model_Name}</b></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="display:flex"><b>Finance
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Finance}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Finance 8w&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].weeks}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Drivetrain &nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Drivetrain}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Capacity
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Capacity}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>Engine
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data[i].Engine}</p>
                                </li>
                            </ul>
                            <div class="card-footer">
                                <small class="text"><b>${data[i].Price}</b></small>
                            </div>
                        </div>
                    </div>`;
    }).join('');
    document.querySelector("#sport").insertAdjacentHTML("afterbegin", html);
})