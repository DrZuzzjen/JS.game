function Coin (initialPosition){
    this.basePosition = this.pos = initialPosition.Plus(new Vector(0.2, 0.1));
    this.size = new Vector(0.6, 0.6);
    this.wibble = Math.PI * 2 *Math.random();
}

Coin.prototype.type = 'coin'