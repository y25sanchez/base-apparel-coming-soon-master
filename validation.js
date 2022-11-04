const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".com")
  ) {
    e.preventDefault();
    form.lastChild.remove()
    email.classList.add("err");
    let text = document.createElement("p");
    text.innerText = "Looks like this in not an email";
    text.classList.add("error");
    form.appendChild(text);
  }
});

form.addEventListener("click", () => {
  email.value === "" ? null : email.classList.remove("err");
});
