// Этот файл будет использоваться на Этапе 2 для запроса данных с бэкенда
// и обновления интерфейса в реальном времени.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Pulse Frontend: DOM готов.');
    
    // Пример функции, которая будет вызываться для получения данных
    // async function fetchSystemData() {
    //     try {
    //         const response = await fetch('/api/system_data');
    //         const data = await response.json();
    //         console.log(data);
    //         // Здесь будет код для обновления HTML-элементов на основе полученных данных
    //     } catch (error) {
    //         console.error('Ошибка при получении данных:', error);
    //     }
    // }

    // Запуск периодического опроса (будет раскомментировано на Этапе 2)
    // setInterval(fetchSystemData, 2000); // Опрашиваем каждые 2 секунды
});
