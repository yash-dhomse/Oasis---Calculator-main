let input = document.getElementById("input")
let Result = document.getElementById("result")
const getinput = (value) => {
    let str;
    if (value != "=") {
        str = input.value
        str += value;
        input.value = str;
    }
    else {
        if (input.value !="") {
            try {
                let result = eval(input.value);
                Result.value = result;
                console.log(result)
            }
            catch {

                Result.value = "Invalid";
                setTimeout(() => {
                    Result.value="";
                    input.value="";
                }, 2000);
            }
        }
        else {
            alert("Please Enter Expression")
        }
    }
}

const clearinput = () => {
    input.value = "";
    Result.value = "";
    console.log("Y")
}
const deleteinput = () => {
    let str = "";
    str = input.value;
    let len = str.length;
    let finalstr = str.substring(0, len - 1);
    input.value = finalstr;
}