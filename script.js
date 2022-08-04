callApi();
let gender;

const spanGenderIcon = document.getElementById("span-gender-icon");
const imgProfile = document.getElementById("img-profile");
const pName = document.getElementById("p-name");
const pAddress = document.getElementById("p-address");
const pEmail = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");
const divLoadingCard = document.getElementById("div-loading-card");

btnRandom.onclick = () => {
    callApi();
};

async function callApi() {
    const resp = await axios.get("https://randomuser.me/api/");
    if (resp.data.results[0].gender == "female") {
        spanGenderIcon.innerText = "👩";
    } else {
        spanGenderIcon.innerText = "👨";
    }
    imgProfile.src = resp.data.results[0].picture.large;
    pName.innerText =
        resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
    pAddress.innerText =
        resp.data.results[0].location.city +
        " " +
        resp.data.results[0].location.state +
        " " +
        resp.data.results[0].location.country +
        " " +
        resp.data.results[0].location.postcode;
    pEmail.innerText = resp.data.results[0].email;
    console.log(resp.data.results[0]);
}
