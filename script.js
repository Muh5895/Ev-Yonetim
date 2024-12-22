document.addEventListener('DOMContentLoaded', () => {
    // Saat Fonksiyonu
    const clock = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 1000);

    // Özellik Butonları
    const featureContent = document.getElementById('feature-content');
    document.getElementById('toDoButton').onclick = () => {
        featureContent.innerHTML = '<h2>Yapılacaklar Listesi</h2><p>Bu özellik burada çalışacak.</p>';
    };
    document.getElementById('shoppingButton').onclick = () => {
        featureContent.innerHTML = '<h2>Alışveriş Listesi</h2><p>Bu özellik burada çalışacak.</p>';
    };
    document.getElementById('voiceButton').onclick = () => {
        featureContent.innerHTML = '<h2>Sesli Komut</h2><p>Bu özellik burada çalışacak.</p>';
    };
    document.getElementById('securityButton').onclick = () => {
        featureContent.innerHTML = '<h2>Güvenlik Paneli</h2><p>Bu özellik burada çalışacak.</p>';
    };
    document.getElementById('timerButton').onclick = () => {
        featureContent.innerHTML = '<h2>Zamanlayıcı</h2><p>Bu özellik burada çalışacak.</p>';
    };
    document.getElementById('notesButton').onclick = () => {
        featureContent.innerHTML = '<h2>Notlar</h2><p>Bu özellik burada çalışacak.</p>';
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
