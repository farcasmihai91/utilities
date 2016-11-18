'use strict';

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `['${this.key}' - '${this.value}']`;
  }
}

class HashMap {
  constructor(table = []) {
    this.table = table;
  }

  _djb2HashCode(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash *= 33 + key.charCodeAt(i);
    };
    return hash % 1013;
  }

  put(key, value) {
    var position = this._djb2HashCode(key)

    if (this.table[position] == undefined) {
      this.table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
      while (this.table[index] !== undefined) {
        index++;
      }
      return this.table[index] = new ValuePair(key, value);
    }
  }

  get(key) {
    let position = this._djb2HashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = ++position;
        while ((this.table[index] === undefined || this.table[index].key !== key) && index < this.table.length) {
          index++;
        }
        if (!this.table[index]) { return undefined; }
        return this.table[index].value;
      }
    }
    return undefined;
  }

  remove(key) {
    let position = this._djb2HashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position] = undefined;
      } else {
        let index = ++position;
        while ((this.table[index] === undefined || this.table[index].key !== key) && index < this.table.length) {
          index++;
        }
        if (!this.table[index]) { return undefined; }
        if (this.table[index].key === key) { return this.table[index] = undefined; }
      }
    }
    return undefined;
  }
}

module.exports = HashMap;