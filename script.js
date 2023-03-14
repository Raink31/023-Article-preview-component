const shareBtn = document.querySelector("#share")
const profileEl = document.querySelector(".profile")

shareBtn.addEventListener("click", () => {
    profileEl.classList.toggle("active")
})