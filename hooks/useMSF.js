// custom hook for handling multi step forms
// and keep data in localstorage without react state

// default expiry to store in localstorage: 24 hours
// 24 * 60 * 60 * 1000 = 86400000 miliseconds

const useMSF = (key, expiry = 86400000) => {
  function setData(newData) {
    setWithExpiry(key, newData, expiry);
  }

  function removeData() {
    localStorage.removeItem(key);
  }

  return {
    data: getWithExpiry(key) || {},
    setData,
    removeData
  };
};

export default useMSF;

// helpers methods used in this hook:
// set items in local storage with expire date in miliseconds
const setWithExpiry = (key, value, ttl) => {
  const now = new Date();
  const item = {
    data: value,
    _expires: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// get items from local storage by checking expire date
const getWithExpiry = key => {
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
