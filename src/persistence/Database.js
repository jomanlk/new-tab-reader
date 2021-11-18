class Database {
  _loadItem(key) {
    let item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    return JSON.parse(item);
  }

  _saveItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  save(item) {
    console.log(item);
  }

  get(id) {
    console.log(id);
  }

  getAll(Model) {
    const key = `collection_${Model.name}`;
    let collection = this._loadItem(key);
    if (!collection) {
      return [];
    }

    return Object.values(collection).map(item => new Model(item));
  }

  delete(id) {
    console.log(id);
  }

  saveAll(Model, items) {
    const key = `collection_${Model.name}`;
    let collection = this._loadItem(key);
    if (!collection) {
      collection = {};
    }
    items.forEach(item => {
      collection[item.id] = item;
    });

    this._saveItem(key, collection);
  }
}

export default new Database();
