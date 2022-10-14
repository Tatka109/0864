const tableSettings = document.querySelector(".table-settings");
const tableName = document.getElementById("tableName");
const numberRows = document.getElementById("numberRows");
const numberColumns = document.getElementById("numberColumns");
const moreSettings = document.getElementById("moreSettings");
const moreSettingsHidden = document.querySelectorAll(".more-settings__hidden");

const tableBorderWidth = document.getElementById("tableBorderWidth");
const tableBorderType = document.querySelector(".table-border-type");
const tableBorderColor = document.getElementById("tableBorderColor");

const tableDataPadding = document.getElementById("tableDataPadding");

const tableDataColor = document.getElementById("tableDataColor");
const tableFontSize = document.querySelector(".table-font-size");
const tableFontColor = document.getElementById("tableFontColor");

const tableDataWidth = document.getElementById("tableDataWidth");
const dataBorderType = document.querySelector(".data-border-type");
const dataBorderColor = document.getElementById("dataBorderColor");

const modal = document.querySelector(".modal");
const btnYes = modal.querySelector(".btn-yes");
const btnNo = modal.querySelector(".btn-no");

const btnCreate = document.querySelector(".btn-create");
const btnRemove = document.querySelector(".btn-remove");

let table, row, data;

const tableData = document.getElementsByClassName("table-data");

let createTable = function () {
  if (getTable()) {
    manageError("p", "error", "Таблица может быть только одна!");
  } else {
    modal.classList.add("modal-hidden");
    table = createElem("table", "table");
    tableSettings.after(table);

    let caption = createElem("caption", "table-name", tableName.value);
    table.append(caption);

    if (!moreSettings.checked) {
      let thead = createElem("thead", "table-header");
      table.append(thead);
      createTheadTfoot(thead, 1, numberColumns);

      let tfoot = createElem("tfoot", "table-footer");
      table.append(tfoot);
      createTheadTfoot(tfoot, 1, numberColumns);
    } else {
      table.style.border = `${tableBorderWidth.value}px ${tableBorderType.value} ${tableBorderColor.value}`;
    }

    let tbody = createElem("tbody", "table-body");
    table.append(tbody);

    createTableContent(tbody, numberRows, numberColumns);
  }
  return table;
};

let manageError = function (tag, className, text) {
  modal.classList.add("modal-hidden");

  if (!document.querySelector(".error")) {
    let error = createElem(tag, className, text);
    tableSettings.after(error);

    setTimeout(() => {
      error.classList.add("error__display");
    }, 500);

    setTimeout(() => {
      error.remove();
    }, 2000);
  }
};

let createElem = function (tag, className, text) {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.textContent = text;

  return elem;
};

let createTheadTfoot = function (tableSection, rows, cols) {
  for (let i = 0; i < rows; i++) {
    row = createElem("tr", "table-row");
    tableSection.append(row);

    for (let j = 0; j < cols.value; j++) {
      data = createElem("td", "table-data", "Lorem ipsum dolor sit amet.");
      row.append(data);
    }
  }
  return tableSection;
};

let createTableContent = function (tbody, rows, cols) {
  for (let i = 0; i < rows.value; i++) {
    row = createElem("tr", "table-row");
    tbody.append(row);

    for (let j = 0; j < cols.value; j++) {
      data = createElem("td", "table-data", "Lorem ipsum dolor sit amet.");
      if (moreSettings.checked) {
        data.style.padding = tableDataPadding.value + "px";
        data.style.backgroundColor = tableDataColor.value;
        data.className += ` ${tableFontSize.value}`;
        data.style.color = tableFontColor.value;
        data.style.border = `${tableDataWidth.value}px ${dataBorderType.value} ${dataBorderColor.value}`;
      }
      row.append(data);
    }
  }
};

let getTable = () => document.querySelector(".table");
let removeTable = () =>
  getTable() ? table.remove() : manageError("p", "error", "Удалять нечего!");

btnCreate.addEventListener("click", function () {
  modal.classList.remove("modal-hidden");
  btnYes.focus();

  btnYes.addEventListener("click", function () {
    table = createTable();
  });

  btnNo.addEventListener("click", function () {
    modal.classList.add("modal-hidden");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      modal.classList.add("modal-hidden");
    }
  });
});

btnRemove.addEventListener("click", () => removeTable());

moreSettings.addEventListener("change", function () {
  for (let i = 0; i < moreSettingsHidden.length; i++) {
    moreSettingsHidden[i].classList.toggle("more-settings__hidden");
  }
});

// Функция задающая настройки границы таблицы
function setBorderSettings() {
  switch (this.id) {
    case "tableBorderWidth":
      table.style.borderWidth = this.value + "px";
      break;
    case "tableBorderType":
      table.style.borderStyle = this.value;
      break;
    case "tableBorderColor":
      table.style.borderColor = this.value;
      break;
  }
}

const tblBdW = setBorderSettings.bind(tableBorderWidth);
const tblBdType = setBorderSettings.bind(tableBorderType);
const tblBdColor = setBorderSettings.bind(tableBorderColor);

tableBorderWidth.addEventListener("input", tblBdW);
tableBorderType.addEventListener("input", tblBdType);
tableBorderColor.addEventListener("input", tblBdColor);

tableDataPadding.addEventListener("input", function () {
  for (let td of tableData) {
    td.style.padding = tableDataPadding.value + "px";
  }
});

tableDataColor.addEventListener("input", function () {
  setTimeout(() => {
    for (let td of tableData) {
      td.style.backgroundColor = tableDataColor.value;
    }
  }, 3000);
});

tableFontSize.addEventListener("change", function () {
  for (let td of tableData) {
    td.className = "table-data " + tableFontSize.value;
  }
});

tableFontColor.addEventListener("input", function () {
  for (let td of tableData) {
    td.style.color = tableFontColor.value;
  }
});

tableDataWidth.addEventListener("input", function () {
  for (let td of tableData) {
    td.style.borderWidth = tableDataWidth.value + "px";
  }
});

dataBorderType.addEventListener("change", function () {
  for (let td of tableData) {
    td.style.borderStyle = dataBorderType.value;
  }
});

dataBorderColor.addEventListener("input", function () {
  for (let td of tableData) {
    td.style.borderColor = dataBorderColor.value;
  }
});
