document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const addApartmentForm = document.getElementById('addApartmentForm');
  const apartmentPhotosInput = document.getElementById('apartmentPhotos');

  // Обработка формы поиска
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Здесь вы можете добавить логику для обработки данных формы поиска
    alert('Форма поиска отправлена!');
  });

  // Обработка формы добавления квартиры
  addApartmentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(addApartmentForm);

    // Добавление всех файлов к данным формы
    const files = apartmentPhotosInput.files;
    for (let i = 0; i < files.length; i++) {
      formData.append('apartmentPhotos[]', files[i]);
    }

    // Далее вы можете использовать объект formData для отправки данных на сервер
    // Например, с использованием Fetch API или XMLHttpRequest
    // Пример с использованием Fetch API:
    fetch('/upload-endpoint', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      // Обработка ответа от сервера
      console.log(data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  });
});


