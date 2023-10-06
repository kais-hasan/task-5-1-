function calculate(value) {
    var result = document.getElementById("result");
    if (value === "=") {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = "Error";
        }
    } else {
        result.value += value;
    }
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}