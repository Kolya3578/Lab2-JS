document.addEventListener('DOMContentLoaded', function () {
   let modalContainer = document.getElementById('modal-container');
   let closeButton = document.getElementById('close');
   let subscribeButton = document.getElementById('subscribe');
   let cancelButton = document.getElementById('cancel');
   let modalpopup = document.getElementById('modalpopup');
   let countdown = document.getElementById('countdown');
   let timerDisplay = document.getElementById('timer');
   let closeAdvBtn = document.getElementById('closeAdvBtn');
   let isSubscribed = false;

   // Функція для показу модального вікна підписки
   function showModal() {
      if(!isSubscribed){
      modalContainer.style.display = 'block';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      }
   }

   // Функція для закриття модального вікна підписки
   function closeModal() {
      modalContainer.style.display = 'none';
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
   }

   // Показати модальне вікно підписки після 3 секунд
   setTimeout(showModal, 3000);

   // Функція для показу модального вікна реклами
   function showAdvertisement() {
      modalpopup.style.display = 'block';
      startTimer();
   }

   closeButton.addEventListener('click', function () {
      closeButton.style.display = 'none';
      closeModal();
      showAdvertisement(); // Показати рекламу після закриття модального вікна підписки
   });

   subscribeButton.addEventListener('click', function () {
      isSubscribed = true;
      subscribeButton.style.display = 'none';
      closeModal();
      showAdvertisement(); // Показати рекламу після прийняття підписки
   });

   cancelButton.addEventListener('click', function () {
      cancelButton.style.display = 'none';
      closeModal();
      // showAdvertisement(); // Показати рекламу після відхилення підписки
   });

   setTimeout(function () {
      modalpopup.style.display = "block";
      startTimer();
   }, 5000);

   cancelButton.onclick = function () {
      modalpopup.style.display = 'none';
   }

   // Функція для закриття модального вікна реклами
   closeAdvBtn.onclick = function () {
      modalpopup.style.display = 'none';
   }

   // Почати відлік часового інтервалу
   function startTimer() {
      let seconds = 10;
      timerDisplay.textContent = seconds;
      let timer = setInterval(function () {
         countdown.innerHTML = "Advertisement closes in " + seconds + " seconds.";
         timerDisplay.textContent = seconds;
         if (seconds <= 0) {
            clearInterval(timer);
            countdown.innerHTML = "Advertisement closed.";
            closeAdvBtn.style.display = "block";
            closeButton.classList.add('active'); // Активувати кнопку закриття реклами
            closeButton.addEventListener('click', closeAdvBtn); // Закрити рекламу при кліку на кнопку закриття 
         }
         seconds--;
      }, 1000);
   }
});