const assert = require("assert");
const ganache = require("ganache-cli");
const { Web3 } = require("web3");

// const web3 = new Web3(ganache.Provider());

class Car {
    park() {
        return 'stopped';
    }
    drive() {
        return 'vroom';
    }
}

let car;

beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
});