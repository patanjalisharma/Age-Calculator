let userInp = document.querySelector("#input");
userInp.max = new Date().toISOString().split("T")[0]; // imp step for limiting to current date

userInp.addEventListener("focus", function () {
    userInp.showPicker();
});


let button = document.querySelector("button");

button.addEventListener("click", calculateAge);

function calculateAge() {
    let birthDate = new Date(userInp.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; //+1 is returned as getMonths give index from 0.
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 > m1) {
        m3 = m2 - m1;

    } else if (m2 < m1) {
        y3--;
        m3 = 12 + m2 - m1;

    } else {
        m3 = 0;
    }

    if (d2 >= d1) {

        d3 = d2 - d1;
    }
    else {
        m3--;
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        d3 = getDaysinMonth(y2, m2 - 1) + d2 - d1;
    }

    let result = document.querySelector("p");
    result.innerHTML = `You are ${y3} years ${m3} months and ${d3} days old. `


}

function getDaysinMonth(year, month) {
    return new Date(year, month, 0).getDate();
}