

fetch('https://script.google.com/macros/s/AKfycbyksyxaz0QORyq_KMeu44XmkCLt2tTwacymtdsjSRmrxWq-rAXqc8niGB610HLSVWX2/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/COMPACT/${data[i].Picture}"
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
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/SUPER/${data[i].Picture}"
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
.then(datas => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        

        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/${data[i].Picture}"
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


fetch('https://script.google.com/macros/s/AKfycbzH2frGu4ij2GzbVt4v0xabQjsAk6B13bezpZpLcOTargVo1f3Zh-rmqpfs6Gt0G7ke7A/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/Moto/${data[i].Picture}"
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
    document.querySelector("#moto").insertAdjacentHTML("afterbegin", html);
})

fetch('https://script.google.com/macros/s/AKfycbzjM-HQogzxyBDTR5UNeHUHlawcO_K6kHi_mvOgYm5NhHadY4ekUBgALuIvk70ckf3H/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/SportsClassic/${data[i].Picture}"
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
    document.querySelector("#sportc").insertAdjacentHTML("afterbegin", html);
})

fetch('https://script.google.com/macros/s/AKfycbyPFZSbxEtd0BQmQ1Ojuk0jXVrEZodBHt4uyvYabTfn-oNT2GzUIIxXDHTosOkycdY02A/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/Suv/${data[i].Picture}"
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
    document.querySelector("#Suv").insertAdjacentHTML("afterbegin", html);
})

fetch('https://script.google.com/macros/s/AKfycbxCnsQ04XGaKrzsZnqrmVxFwLKhCEYy5yDYfg7300FCQjEDMQ2K3Od46fCNNCeWJo2RmA/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/OFFROAD/${data[i].Picture}"
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
    document.querySelector("#offroad").insertAdjacentHTML("afterbegin", html);
})

fetch('https://script.google.com/macros/s/AKfycbzk1ZSPQf7BO27rweBUIQNq2MG6R27Dl7rR3DMyzsOAUY-6iwTA73UOUZYeBAAMKImLkg/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/Muscle/${data[i].Picture}"
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
    document.querySelector("#muscle").insertAdjacentHTML("afterbegin", html);
})

fetch('https://script.google.com/macros/s/AKfycbxvohQJb4ZeUaI8k-6ulId4ClGvFSn1OUBOlZTykIV2ey6-B76W5Y4eETFaO2hLPkfvEw/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/Vans/${data[i].Picture}"
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
    document.querySelector("#vans").insertAdjacentHTML("afterbegin", html);
})

fetch('https://script.google.com/macros/s/AKfycbzRFaTbH03-WBFVEx0P9Mr8NbEyCG2B1Ugvy4qF42yL2m3T-2J_vvQx9zeAqhsO6CMs/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data[0]);
    let length = datas.length;
    let j=0;
    let data = [];
    for(var i=0;i<length;i++){
        if(datas[i].Stock=="X" || datas[i].Stock=="x"){
            
        }
        else{
            data[j] = datas[i]
            j++
        }
    }
    const html = data.map((img, i) =>{
        return `
        <div class="col">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="IMAGES/SEDAN/${data[i].Picture}"
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
    document.querySelector("#sedan").insertAdjacentHTML("afterbegin", html);
})
