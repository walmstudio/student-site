function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    
    // Форматирование времени (HH:MM:SS)
    const timeString = now.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    timeElement.textContent = `Время - ${timeString}`;
  }
  
  // Обновляем время сразу и каждую секунду
  updateTime();
  setInterval(updateTime, 1000);