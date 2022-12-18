const year = document.getElementById('takeYear');
const value = document.getElementById('value');

const getYear = () => {
    if ((parseInt(year.value) % 4 == 0)) {
        value.innerHTML = "This is Leap Year";
    }
    else if ((parseInt(year.value) % 400 == 0)) {
        value.innerHTML = "This is Leap Year";
    }
    else if ((parseInt(year.value) % 100 != 0)) {
        value.innerHTML = "This is Not Leap Year"
    }
    else {
        value.innerHTML = "This is Not Leap Year"
    }
}