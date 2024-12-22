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

    // Pop-up Kontrolleri
    const popup = document.getElementById('popup');
    const popupBody = document.getElementById('popup-body');
    const closePopup = document.getElementById('close-popup');
    closePopup.onclick = () => {
        popup.classList.add('hidden');
    };

    function showPopup(content) {
        popupBody.innerHTML = content;
        popup.classList.remove('hidden');
    }

    // Yapılacaklar Listesi
    document.getElementById('toDoButton').onclick = () => {
        const todoHTML = `
            <h2>Yapılacaklar Listesi</h2>
            <ul id="todo-list"></ul>
            <input type="text" id="todo-input" placeholder="Yeni görev ekle">
            <button id="add-todo">Ekle</button>
        `;
        showPopup(todoHTML);

        const todoList = document.getElementById('todo-list');
        const todoInput = document.getElementById('todo-input');
        document.getElementById('add-todo').onclick = () => {
            if (todoInput.value) {
                const li = document.createElement('li');
                li.classList.add('todo-item');
                li.innerHTML = `
                    <span>${todoInput.value}</span>
                    <button class="delete-btn">🗑️</button>
                `;
                li.querySelector('.delete-btn').onclick = () => {
                    if (confirm('Bu öğe kalıcı olarak silinecek. Devam etmek istiyor musunuz?')) {
                        li.remove();
                    }
                };
                todoList.appendChild(li);
                todoInput.value = '';
            }
        };
    };

    // Alışveriş Listesi
    document.getElementById('shoppingButton').onclick = () => {
        const shoppingHTML = `
            <h2>Alışveriş Listesi</h2>
            <ul id="shopping-list"></ul>
            <input type="text" id="shopping-input" placeholder="Ürün ekle">
            <button id="add-shopping">Ekle</button>
        `;
        showPopup(shoppingHTML);

        const shoppingList = document.getElementById('shopping-list');
        const shoppingInput = document.getElementById('shopping-input');
        document.getElementById('add-shopping').onclick = () => {
            if (shoppingInput.value) {
                const li = document.createElement('li');
                li.classList.add('shopping-item');
                li.innerHTML = `
                    <span>${shoppingInput.value}</span>
                    <button class="delete-btn">🗑️</button>
                `;
                li.querySelector('.delete-btn').onclick = () => {
                    if (confirm('Bu öğe kalıcı olarak silinecek. Devam etmek istiyor musunuz?')) {
                        li.remove();
                    }
                };
                shoppingList.appendChild(li);
                shoppingInput.value = '';
            }
        };
    };

    // Notlar
    document.getElementById('notesButton').onclick = () => {
        const notesHTML = `
            <h2>Notlar</h2>
            <textarea id="notes-area" placeholder="Notlarınızı buraya yazın..."></textarea>
        `;
        showPopup(notesHTML);

        const notesArea = document.getElementById('notes-area');
        notesArea.value = localStorage.getItem('notes') || '';
        notesArea.oninput = () => {
            localStorage.setItem('notes', notesArea.value);
        };
    };
});
