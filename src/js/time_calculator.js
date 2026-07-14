const form = document.querySelector(".calc_time_form_js");
const input = document.querySelector(".calc_time_input_js");
const result = document.querySelector(".calc_time_text_js");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = Number(input.value);

    if (isNaN(number) || number < 0) {
        result.textContent = "Введіть правильне число!";
        return;
    }

    const days = Math.floor(number / 86400);
    const hours = Math.floor((number % 86400) / 3600);
    const minutes = Math.floor((number % 3600) / 60);
    const seconds = number % 60;

    const modHours = String(hours).padStart(2, "0");
    const modMinutes = String(minutes).padStart(2, "0");
    const modSeconds = String(seconds).padStart(2, "0");

    result.textContent = `${days} дн. ${modHours}:${modMinutes}:${modSeconds}`;
});