const should = require('chai').should;
const expect = require('chai').expect;
const assert = require('chai').assert;
const HashMap = require('../hash-map');


describe('HashMap', function () {
  it('should initialize empty if no items provided', function () {
    let myHashMap = new HashMap();
    assert.equal(myHashMap.table.length, 0);
  });
  it('should add elements to the map using the put() method', function () {
    let myHashMap = new HashMap();
    myHashMap.put('Gandalf', 'gandalf@email.com');
    myHashMap.put('John', 'johnsnow@email.com');
    myHashMap.put('Tyrion', 'tyrion@email.com');

    expect(myHashMap.table.length).to.not.equal(0);
  });
  it('should return the correct item from the map using the get() method', function () {
    let myHashMap = new HashMap();
    myHashMap.put('Gandalf', 'gandalf@email.com');
    myHashMap.put('John', 'johnsnow@email.com');
    myHashMap.put('Tyrion', 'tyrion@email.com');

    expect(myHashMap.get('Gandalf')).to.equal('gandalf@email.com');
    expect(myHashMap.get('John')).to.equal('johnsnow@email.com');
    expect(myHashMap.get('Tirion')).to.equal(undefined);
  });
  it('should remove the correct item using the remove() method', function () {
    let myHashMap = new HashMap();
    myHashMap.put('Gandalf', 'gandalf@email.com');
    myHashMap.put('John', 'johnsnow@email.com');
    myHashMap.put('Tyrion', 'tyrion@email.com');
    myHashMap.put('Aaron', 'aaron@email.com');
    myHashMap.put('Donnie', 'donnie@email.com');
    myHashMap.put('Ana', 'ana@email.com');
    myHashMap.put('Jonathan', 'jonathan@email.com');
    myHashMap.put('Jamie', 'jamie@email.com');
    myHashMap.put('Sue', 'sue@email.com');
    myHashMap.put('Mindy', 'mindy@email.com');
    myHashMap.put('Paul', 'paul@email.com');
    myHashMap.put('Nathan', 'nathan@email.com');

    myHashMap.remove('John');
    myHashMap.remove('Aaron');
    myHashMap.remove('Ana');
    myHashMap.remove('Sue');
    myHashMap.remove('Nobody');


    expect(myHashMap.get('Donnie')).to.equal('donnie@email.com');
    expect(myHashMap.get('Jamie')).to.equal('jamie@email.com');
    expect(myHashMap.get('Tyrion')).to.equal('tyrion@email.com');
    expect(myHashMap.get('John')).to.equal(undefined);
    expect(myHashMap.get('Aaron')).to.equal(undefined);
    expect(myHashMap.get('Ana')).to.equal(undefined);
    expect(myHashMap.get('Sue')).to.equal(undefined);
  });
  it('should handle collisions', function () {
    let myHashMap = new HashMap();
    myHashMap.put('Gandalf', 'gandalf@email.com');
    myHashMap.put('John', 'johnsnow@email.com');
    myHashMap.put('Tyrion', 'tyrion@email.com');
    myHashMap.put('Aaron', 'aaron@email.com');
    myHashMap.put('Donnie', 'donnie@email.com');
    myHashMap.put('Ana', 'ana@email.com');
    myHashMap.put('Jonathan', 'jonathan@email.com');
    myHashMap.put('Jamie', 'jamie@email.com');
    myHashMap.put('Sue', 'sue@email.com');
    myHashMap.put('Mindy', 'mindy@email.com');
    myHashMap.put('Paul', 'paul@email.com');
    myHashMap.put('Nathan', 'nathan@email.com');

    expect(myHashMap.get('Ana')).to.equal('ana@email.com');
    expect(myHashMap.get('Sue')).to.equal('sue@email.com');
    expect(myHashMap.get('Tyrion')).to.equal('tyrion@email.com');
    expect(myHashMap.get('Aaron')).to.equal('aaron@email.com');
    expect(myHashMap.get('Donnie')).to.equal('donnie@email.com');
    expect(myHashMap.get('Mindy')).to.equal('mindy@email.com');
  });
});


