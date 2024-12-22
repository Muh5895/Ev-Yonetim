document.addEventListener('DOMContentLoaded', () => {
    // Saat Fonksiyonu
    const clock = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 1000);

    // Hava Durumu
    const weatherElement = document.getElementById('weather');
    async function fetchWeather() {
        try {
            const response = await fetch(
                'https://api.openweathermap.org/data/2.5/weather?q=Diyarbakir&units=metric&lang=tr&appid=YOUR_API_KEY'
            );
            const data = await response.json();
            weatherElement.innerHTML = `
                <h3>Diyarbakır Hava Durumu</h3>
                <p>${data.weather[0].description}</p>
                <p>${data.main.temp}°C</p>
            `;
        } catch (error) {
            weatherElement.innerHTML = `<p>Hava durumu alınamadı.</p>`;
        }
    }
    fetchWeather();

    // Özellik Butonları
    const featureContent = document.getElementById('feature-content');
    document.getElementById('toDoButton').onclick = () => {
        featureContent.innerHTML = `
            <h2>Yapılacaklar Listesi</h2>
            <ul id="todo-list"></ul>
            <input type="text" id="todo-input" placeholder="Yeni görev ekle">
            <button id="add-todo">Ekle</button>
        `;
        const todoList = document.getElementById('todo-list');
        const todoInput = document.getElementById('todo-input');
        document.getElementById('add-todo').onclick = () => {
            if (todoInput.value) {
                const li = document.createElement('li');
                li.textContent = todoInput.value;
                li.onclick = () => li.remove();
                todoList.appendChild(li);
                todoInput.value = '';
            }
        };
    };

    document.getElementById('shoppingButton').onclick = () => {
        featureContent.innerHTML = `
            <h2>Alışveriş Listesi</h2>
            <ul id="shopping-list"></ul>
            <input type="text" id="shopping-input" placeholder="Ürün ekle">
            <button id="add-shopping">Ekle</button>
        `;
        const shoppingList = document.getElementById('shopping-list');
        const shoppingInput = document.getElementById('shopping-input');
        document.getElementById('add-shopping').onclick = () => {
            if (shoppingInput.value) {
                const li = document.createElement('li');
                li.textContent = shoppingInput.value;
                li.onclick = () => li.remove();
                shoppingList.appendChild(li);
                shoppingInput.value = '';
            }
        };
    };

    document.getElementById('voiceButton').onclick = () => {
        featureContent.innerHTML = `<h2>Sesli Komut</h2><p>Bu özellik geliştiriliyor.</p>`;
    };

    document.getElementById('securityButton').onclick = () => {
        featureContent.innerHTML = `<h2>Güvenlik Paneli</h2><p>Bu özellik geliştiriliyor.</p>`;
    };

    document.getElementById('timerButton').onclick = () => {
        featureContent.innerHTML = `
            <h2>Zamanlayıcı</h2>
            <input type="number" id="timer-input" placeholder="Süre (saniye)">
            <button id="start-timer">Başlat</button>
            <div id="timer-display"></div>
        `;
        const timerDisplay = document.getElementById('timer-display');
        document.getElementById('start-timer').onclick = () => {
            let time = parseInt(document.getElementById('timer-input').value);
            if (isNaN(time) || time <= 0) {
                timerDisplay.textContent = 'Geçersiz süre.';
                return;
            }
            const interval = setInterval(() => {
                timerDisplay.textContent = `${time} saniye kaldı.`;
                time--;
                if (time < 0) {
                    clearInterval(interval);
                    timerDisplay.textContent = 'Zaman doldu!';
                }
            }, 1000);
        };
    };

    document.getElementById('notesButton').onclick = () => {
        featureContent.innerHTML = `
            <h2>Notlar</h2>
            <textarea id="notes-area" placeholder="Notlarınızı buraya yazın..."></textarea>
        `;
        const notesArea = document.getElementById('notes-area');
        notesArea.value = localStorage.getItem('notes') || '';
        notesArea.oninput = () => {
            localStorage.setItem('notes', notesArea.value);
        };
    };

    // Yatay Mod Kontrolü
    const warning = document.getElementById('orientation-warning');
    function checkOrientation() {
        if (window.innerWidth < window.innerHeight) {
            warning.style.display = 'flex';
        } else {
            warning.style.display = 'none';
        }
    }
    window.addEventListener('resize', checkOrientation);
    checkOrientation();
});
