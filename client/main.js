const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const nameBtn = document.getElementById("nameButton")
const extraBtn = document.getElementById("extraButton")
const getitBtn = document.getElementById("getitButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getExtra = () => {
    axios.get("http://localhost:4000/api/getExtra/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getIt = () => {
    axios.get("http://localhost:4000/api/getIt/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};




const nameSubmit = () =>{
    axios.get("http://localhost:4000/api/name/")
    .then(res =>{
        const data = res.data;
        alert(data);
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
nameBtn.addEventListener('click', nameSubmit)
extraBtn.addEventListener(`click`, getExtra)
getitBtn.addEventListener('click', getIt)



const form = document.querySelector('form');
const log = document.querySelector('#log');

form.addEventListener('submit', (event) =>{
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
        output = `${output}${entry[0]}=${entry[1]}\r`;
    };
    log.innerText = output;
    event.preventDefault();
}, false);