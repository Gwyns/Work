// =====================================================================================================================
// это переключатели адаптивного меню

$("#nav-toggle").click(function () {
  // когда нажимаешь на бургер меню открывается
  $("nav ul").slideToggle();
});
$("#nav-toggle").on("click", function () {
  // когда нажимаешь на бургер он превращается в крестик и наоборот
  this.classList.toggle("active");
});
// =====================================================================================================================

// =====================================================================================================================
// это конструктор он принимает в себя значения когда мы вызываем его и
// с его помощью мы создаем новые посты ниже увидешь это на примере
var Post = function (title, subtitle, descrition, image) {
  this.title = title;
  this.subtitle = subtitle;
  this.descrition = descrition;
  this.image = image;
};
// =====================================================================================================================

// создаем пустой массив в который будем добавлять все записи
var posts = [];

// эта функция выводит все  записи
var listContacts = function () {
  // каждый вызов функции чистим все записи которые были до

  document.getElementById("posts").innerHTML = " ";

  // создаем переменную с текущей датой создания
  let date = new Date().toLocaleString();

  // и после этого выводим все с новыми записями
  for (var i = 0; i < posts.length; i++) {
    // загрузка изображения
    imgLoader(posts[i].image, i);

    // вывод всех постов во внутрь тега с id "posts"
    document.getElementById("posts").innerHTML += `<div class="blog-container">
        <div class="blog-header">
          <div class="blog-cover">
            <img id="image${i}"
            />
            <div class="blog-author">
              <h3>Глеб Герасимов</h3>
            </div>
          </div>
        </div>
        <div class="blog-body">
          <div class="blog-title">
            <h1>
              <a href="#">${posts[i].title}</a>
            </h1>
          </div>
          <div class="blog-subtitle">
            <h2>
              <a href="#">${posts[i].subtitle}</a>
            </h2>
          </div>
          <div class="blog-summary">
            <p>
            ${posts[i].descrition}
            </p>
          </div>
        </div>
        <div class="blog-footer">
          <ul>
            <li class="published-date">${date}</li>
            <li>
            <button class="btn btn-warning" onclick=updateContact(${i})>Update</button>
            <button class="btn btn-danger" onclick=deleteContact(${i})>Delete</button>
            </li>
          </ul>
        </div>
      </div>`;
  }
};

// функция добавления записи
var addNewContact = function () {
  // обращаемся к каждому инпуту по Id и записываем его значение в переменную
  const title = document.getElementById("inputTitle").value;
  const subtitle = document.getElementById("inputSubTitle").value;
  const descrition = document.getElementById("inputDescrition").value;
  const img = document.getElementById("inputImg").files[0];

  // создаем новый пост с значениями которые определили выше
  var post = new Post(title, subtitle, descrition, img);

  // проверка на заполнение полей, если хоть одно пустое
  if (title == "" || subtitle == "" || descrition == "" || img == undefined) {
    alert("Заполните все поля");
  } else {
    // и уже здесь мы добавляем этот пост
    // в тот пустой массив который обьявили в начале
    posts.push(post);

    // вызываем функцию вывода всех записей
    listContacts();

    // очищаем все инпуты после добавления
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputSubTitle").value = "";
    document.getElementById("inputDescrition").value = "";
    document.getElementById("inputImg").value = "";
  }
};

// функция удаления записи
var deleteContact = function (i) {
  // удаляем пост по его ключу в массиве
  posts.splice(i, 1);

  // вызываем функцию вывода всех записей
  listContacts();
};

// функция обновление записи
var updateContact = function (i) {
  contactId = i;
  // записываем в инпуты значения поста который выбрали
  document.getElementById("inputTitle").value = posts[i].title;
  document.getElementById("inputSubTitle").value = posts[i].subtitle;
  document.getElementById("inputDescrition").value = posts[i].descrition;

  // меняем кнопку добавления на кнопку подтверждения обновления,
  // которая выполняет функцию submitUpdatedContact
  document.getElementById("submitButtons").innerHTML =
    '<button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(contactId)>Submit</button>';
};

// функция подтверждение обновления записи
var submitUpdatedContact = function (i) {
  // обращаемся к каждому инпуту по Id и записываем его значение в переменную
  const title = document.getElementById("inputTitle").value;
  const subtitle = document.getElementById("inputSubTitle").value;
  const descrition = document.getElementById("inputDescrition").value;
  const img = document.getElementById("inputImg").files[0];

  // проверка на заполнение полей, если хоть одно пустое
  if (title == "" || subtitle == "" || descrition == "" || img == undefined) {
    alert("Заполните все поля");
  } else {
    // Обновляем значения на те которые ввели
    posts[i].title = title;
    posts[i].subtitle = subtitle;
    posts[i].descrition = descrition;
    posts[i].image = img;

    // очищаем все инпуты после обновления
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputSubTitle").value = "";
    document.getElementById("inputDescrition").value = "";
    document.getElementById("inputImg").value = "";

    // после обновления меняем обратно на кнопку добавления
    document.getElementById("submitButtons").innerHTML =
      '<button id="submit" class="btn btn-info"  onclick="addNewContact()">Submit</button>';

    // вызываем функцию вывода всех записей
    listContacts();
  }
};

// функция загружает изображение записи
var imgLoader = function (image, i) {
  var fr = new FileReader();
  fr.onload = function (ev2) {
    $("#image" + i).attr("src", ev2.target.result);
  };
  fr.readAsDataURL(image);
};

// вызываем функцию вывода всех записей
listContacts();
