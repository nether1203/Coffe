const runBTN = document.querySelector('.run');
const stopBtN = document.querySelector('.stop');
const addWaterbtn = document.querySelector('.addWaterbtn');
const addWaterInput = document.querySelector('#addWaterInput');

function CoffeMashine(power) {
    this.waterAmount = 0;

    const water_Heat_Capacity = 4200;

    let getBoillTime = function () {
        console.log(this.waterAmount * water_Heat_Capacity * (100 - 20) / power);
        return this.waterAmount * water_Heat_Capacity * (100 - 20) / power;
    }.bind(this);

    function cofeeReady() {
        alert('Кава готова');
    }

    let coffeeTimer;

    this.run = () => {
        coffeeTimer = setTimeout(cofeeReady, getBoillTime());
        this.waterAmount -= 100; // Зменшуємо рівень води після розрахунку часу
        console.log(this.waterAmount);
    };

    this.clearTimeout = function () {
        clearTimeout(coffeeTimer);
        alert('Приготування кави зупинено');
    };

    this.addWater = (addWaterAmount) => {
        // Перетворюємо вхідну величину в число
        addWaterAmount = Number(addWaterAmount);
        
        // Перевірка на максимальний рівень води
        if (this.waterAmount + addWaterAmount > 1000) {
            alert('FULL WATER');
        } else {
            this.waterAmount += addWaterAmount;
        }

        console.log(this.waterAmount);
    };
}

let coffeMashine = new CoffeMashine(10000);

// Обробка події для введення води
addWaterInput.addEventListener("input", (event) => {
    addWaterAmount = event.target.value; // Оновлюємо значення кожного разу
});

// Додавання води
addWaterbtn.addEventListener('click', function () {
    coffeMashine.addWater(addWaterAmount);
});

// Запуск кавоварки
runBTN.addEventListener('click', function () {
    coffeMashine.run();
});

// Зупинка приготування кави
stopBtN.addEventListener('click', function () {
    coffeMashine.clearTimeout();
});
