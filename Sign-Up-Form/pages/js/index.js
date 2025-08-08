const createAccount = document.querySelector(".create-account")
const inputs = document.querySelectorAll("input")

createAccount.addEventListener("click", function () {
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            alert(`Input is missing for ${input.id}`);
        }
    });
})
