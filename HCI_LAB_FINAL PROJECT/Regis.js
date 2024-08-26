// submit form function
function SubmitForm(){
    // alert("Submitting form") // warning
    // promt("Input your name") // minta input

    // ambil value - value dari textfield / input di html
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let rog = document.getElementsById("rog").checked
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value

    console.log(name)
    console.log(password)
    console.log(email)
    console.log(rog)
    console.log(day)
    console.log(month)
    console.log(year)

    var err = document.getElementById("err")

    if(name.length == 0){
        err.style.display = "block"

        err.innerHTML = "Name must be filled!"
    }

    else if(password.length <= 6){
        err.style.display = "block"

        err.innerHTML = "Password must be more than 6 characters"
    }

    else if(!email.includes("@") && !email.includes(".com")){
        err.style.display = "block"

        err.innerHTML = "Email must be valid (contains @ and .com)!"
    }

    else if(day == "day"){
        err.style.display = "block"

        err.innerHTML = "Day must be selected!"
    }

    else if(month == "month"){
        err.style.display = "block"

        err.innerHTML = "Month must be selected!"
    }

    else if(year == "year"){
        err.style.display = "block"

        err.innerHTML = "Year must be selected!"
    }

    if(rog == false){
        err.style.display = "block"

        err.innerHTML = "Rule of Agreement must be checked!"
    }


}