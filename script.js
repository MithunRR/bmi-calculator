'use strict';

document.querySelector('.btn-calc').addEventListener('click', function () {
    let heightCm = document.getElementById('input-height').value;
    let weight = document.getElementById('input-weight').value;

    const height = heightCm / 100;
    const result = weight / (height * height);
    const finalResult = Math.round(result * 100) / 100;

    document.querySelector('.result').textContent = finalResult;

    if (finalResult < 16) {
        document.querySelector('.msg').textContent = 'Sev. Underweight';
        document.querySelector('.msg').style.backgroundColor = 'rgb(240, 255, 143)';
    }
    else if (finalResult <= 18.4) {
        document.querySelector('.msg').textContent = 'Underweight';
        document.querySelector('.msg').style.backgroundColor = 'rgb(242, 255, 0)';
    }
    else if (finalResult <= 24.9) {
        document.querySelector('.msg').textContent = 'Normal';
        document.querySelector('.msg').style.backgroundColor = 'rgb(26, 255, 0)';
    }
    else if (finalResult <= 29.9) {
        document.querySelector('.msg').textContent = 'Overweight';
        document.querySelector('.msg').style.backgroundColor = 'rgb(255, 183, 0)';
    }
    else if (finalResult <= 34.9) {
        document.querySelector('.msg').textContent = 'Mod. Overweight';
        document.querySelector('.msg').style.backgroundColor = 'rgb(255, 153, 0)';
    }
    else if (finalResult <= 39.9) {
        document.querySelector('.msg').textContent = 'Sev. Underweight';
        document.querySelector('.msg').style.backgroundColor = 'rgb(255, 94, 0)';
    }
    else if (finalResult >= 40) {
        document.querySelector('.msg').textContent = 'Mor. Overweight';
        document.querySelector('.msg').style.backgroundColor = 'rgb(214, 0, 0)';
    }
    else if (heightCm !== Number) {
        document.querySelector('.msg').textContent = 'ERROR';
        document.querySelector('.result').textContent = 'ERROR';
        document.querySelector('.msg').style.backgroundColor = 'white';
    }
});
