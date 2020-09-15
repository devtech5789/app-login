function storageSet(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

function storageRemove(key) {
  localStorage.removeItem(key);
}

function storageGet(key, data) {
  try {
    const item = localStorage.getItem(key, data);
    if (item) {
      return JSON.parse(item);
    }
    return;
  } catch (error) {
    console.log(error);
  }
}

export { storageSet, storageGet, storageRemove };
