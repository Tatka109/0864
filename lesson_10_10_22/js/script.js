// ***********
// //Функция, задающая тему оформления в зависимости от времени
// const setTheme = () => {
//   let time = new Date().getHours();

//   if (time >= 20 && time <= 6) {
//     dayTheme.remove();
//   } else {
//     nightTheme.remove();
//   }
// };
// // setTheme();
// ***********

let theme = document.getElementById("dayTheme");
const btnSwitchTheme = document.getElementById("btnSwitchTheme");
const btnReset = document.getElementById("btnReset");

let localTheme = localStorage.getItem("theme") || "nightTheme";

const themeLink = {
  id: localTheme,
  rel: "stylesheet",
  href: `css/${localTheme}.css`,
};

const createLink = () => {
  theme = document.createElement("link");
  for (let key in themeLink) {
    theme[key] = themeLink[key];
  }
  document.head.append(theme);
};

btnReset.addEventListener("click", () => {
  localStorage.clear();
});

if (localTheme == "dayTheme") {
  theme.remove();
  createLink();
  btnSwitchTheme.textContent = "Включить тёмную тему";
} else if (localTheme == "nightTheme") {
  theme.remove();
  createLink();
  btnSwitchTheme.textContent = "Включить светлую тему";
}

const switchTheme = (themeStyle, btnText) => {
  theme.remove();
  themeLink.id = localTheme = themeStyle;
  btnSwitchTheme.textContent = btnText;

  themeLink.href = `css/${localTheme}.css`;
  localStorage.setItem("theme", themeLink.id);

  createLink();
};

btnSwitchTheme.addEventListener("click", (event) => {
  event.preventDefault();
  theme.id == "dayTheme"
    ? switchTheme("nightTheme", "Включить светлую тему")
    : switchTheme("dayTheme", "Включить тёмную тему");
});

//форма с переключателями
const form = document.getElementById("generateCard");
//коллекция переключателей
const radioButtons = document.querySelectorAll("[type='radio']");

let card; //объект - создаваемая карточка
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus maxime doloremque minima? Odio quaerat, et at necessitatibus error animi, impedit libero sit, expedita nulla debitis. Quasi qui ipsa commodi.";
let imgUrl = ""; //адрес изображения

class Card {
  //конструктор с параметрами, создающий объект карточку (не DOM-объект)

  #id;
  #className;
  #text;
  #imageSource;
  #width = 100;
  #height = 50;

  get Width() {
    return this.#width;
  }

  set Width(value) {
    if (document.getElementById("card")) {
      this.#width = value;
    } else {
      this.#width = 0;
    }
  }

  get Height() {
    return this.#height;
  }

  set Height(value) {
    if (document.getElementById("card")) {
      this.#height = value;
    } else {
      this.#height = 0;
    }
  }

  constructor(id, className, text, imgUrl) {
    this.Id = id;
    this.ClassName = className;
    this.Text = text;
    this.ImageSource = imgUrl;
  }

  get Id() {
    return this.#id;
  }

  set Id(value) {
    this.#id = value;
  }

  get ClassName() {
    return this.#className;
  }

  set ClassName(value) {
    this.#className = value;
  }

  get Text() {
    return this.#text;
  }

  set Text(value) {
    this.#text = value;
  }

  get ImageSource() {
    return this.#imageSource;
  }

  set ImageSource(value) {
    this.#imageSource = value;
  }

  //метод - создание карточки
  createCard() {
    let card; //объект - блок (div)
    let p; //объект - абзац (p)

    card = document.createElement("div");
    card.id = this.Id;
    card.className = "card";
    card.classList.add(this.ClassName);

    form.insertAdjacentElement("afterend", card); //добавляем карточку после формы

    p = document.createElement("p");
    p.textContent = this.Text; //добавляем текст абзацу

    card.append(p); //добавляем абзац в конец карточки

    //если путь к картинке задан, то создаём её
    if (typeof this.ImageSource != "undefined") {
      this.createImage(card);
    }
  }

  //метод - создание изображения в карточке
  createImage(card) {
    let img; //объект - изображение в карточке

    img = document.createElement("img");
    img.src = this.ImageSource;
    img.alt = "Фото";

    card.prepend(img); //добавляем изображение в начало карточки
  }

  //метод - модификация объекта (карточки)
  modifiedCard(typeCard, imgUrl) {
    this.ClassName = typeCard;
    this.ImageSource = imgUrl;

    //удаление изображения в случае выбора "Без фото"
    if (typeCard == "card-no-photo") {
      document.querySelector("[id='card'] img").remove();
    } else {
      if (!document.querySelector("[id='card'] img")) {
        this.createImage(document.getElementById("card"));
      }
    }
    document.getElementById("card").className = `card ${this.ClassName}`;
  }

  static getSizeCard(id) {
    return [
      document.getElementById(id).offsetWidth,
      document.getElementById(id).offsetHeight,
    ];
  }
}

class ChildCard extends Card {
  #cardName;

  constructor(id, className, text, imgUrl) {
    super(id, className, text, imgUrl);
    this.CardName = "Дочерняя";
  }

  get CardName() {
    return this.#cardName;
  }

  set CardName(value) {
    this.#cardName = value;
  }

  modifiedCard(typeCard) {
    if (document.getElementById("child")) {
      this.ClassName = typeCard;
      document.getElementById("child").classList.add(this.ClassName);
      document.querySelector(".card img").style.width = "50%";
      document.querySelector(".card p").style.width = "50%";
      document.querySelector(".card p").style.margin = "10px auto";
    }
  }
}

for (let radio of radioButtons) {
  radio.addEventListener("change", () => {
    if (radio.value == "card-no-photo") {
      imgUrl = undefined;
    } else {
      imgUrl = "https://api.lorem.space/image/movie?w=350";
    }

    if (document.getElementById("card")) {
      card.modifiedCard(radio.value, imgUrl);
    } else {
      card = new Card("card", radio.value, text, imgUrl);
      card.createCard();
    }

    if (card) {
      const p = document.getElementById("cardSize");
      const span = document.querySelector(".card-size span");
      p.classList.remove("hide");

      for (let key in Card.getSizeCard("card")) {
        if (key == 0) {
          span.textContent = `ширина: ${Card.getSizeCard("card")[key]}`;
        } else {
          span.textContent += `, высота: ${Card.getSizeCard("card")[key]}`;
        }
      }
    }
  });
}

let child = new ChildCard(
  "child",
  "card-decorative",
  text,
  "https://api.lorem.space/image/game?w=350"
);
// child.createCard();
// child.modifiedCard("card-circle");
