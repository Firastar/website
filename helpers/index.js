// convert Persian or Arabic numbers to English
let persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
let arabicNumbers = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];
export const numbersToEnglish = str => {
  if (typeof str === "string") {
    let i;
    for (i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

// convert numbers to persian format with commas
export const toPersianNum = (num, comma = true) => {
  num = num?.toString().trim();
  if (comma) num = addCommas(num);
  let i,
    len = num?.length,
    res = "",
    pos,
    persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  for (i = 0; i < len; i++) {
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);
  }
  return res;
};

// adds commas for prices
export const addCommas = nStr => {
  if (nStr === 0) return "0";
  if (!nStr) return "";
  nStr = nStr.toString();
  nStr += "";
  nStr = nStr.replace(/,/g, "");
  let x = nStr.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, `$1,$2`);
  }
  return x1 + x2;
};

// returns first n characters of the text
export const beautifyText = (str, n = 22) => {
  if (!str) return;
  if (!typeof str === "string") str = str.toString();
  return str.length > n ? str.substring(0, n - 3) + "..." : str;
};

// convert timestamp to "YYYY-MM-DD" date string
export const timestampToDateString = time => {
  if (!time) return;
  if (typeof time !== "number") time = parseInt(time);
  let t = new Date(time);
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  return `${year}-${month}-${date}`;
};

// set items in local storage with expire date in miliseconds
export const setWithExpiry = (key, value, ttl) => {
  const now = new Date();
  const item = {
    data: value,
    _expires: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// get items from local storage by checking expire date
export const getWithExpiry = key => {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item._expires) {
    localStorage.removeItem(key);
    return null;
  }

  return item.data;
};

// compare two arrays of objects equality
export const compareArrays = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// simulate fake request
export const fakeRequest = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

// replace 0 to +98 in phone number
export const edit98 = phone => {
  if (!phone) return null;
  return phone.replace("0", "+98");
};

// replace +98 to 0 in phone number
export const edit0 = phone => {
  if (!phone) return null;
  return phone.replace("+98", "0");
};

// check if object is empty
export function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

// calculate body's scrollbar width in px
export function getScrollBarWidth() {
  var inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement("div");
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  var w2 = inner.offsetWidth;
  if (w1 === w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
}

// sort array of objects by a single key
export const sortArrByKey = (arr, key) => {
  if (!arr || !key || arr?.length === 0) return [];

  arr.sort(function (a, b) {
    let keyA = parseInt(a[key]),
      keyB = parseInt(b[key]);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  return arr;
};

// move and element inside an array by index
export function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}
