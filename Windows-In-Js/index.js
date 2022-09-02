// setCookie("email", "Sponge@gmail.com", 365);
// setCookie("lastname", "SquarePants", 365);
// setCookie("firstname", "Comsky", 200);

// console.log(getCookie("firstname"));
// console.log(getCookie("lastname"));

// console.log(document.cookie);

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`; 
} 

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    cDecoded.split("; ");
    let result = null;

    const cArray = cDecoded.split("; ");
    cArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1); 
        } 
    }) 
    return result;
}