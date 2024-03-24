const { Triangle, Square, Circle } = require("./shapes"); 

describe('shape', () => {
    it('should render a triangle', () => {
        const shape = new Triangle();
        shape.setColor(`${this.color}`);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`);
    });

    it('should render a square', () => {
        const shape = new Square();
        shape.setColor(`${this.color}`);
        expect(shape.render()).toEqual(`<rect x="75" y="40" width="150" height="150" fill="${this.color}"/>`);
    });

    it('should render a circle', () => {
        var shape = new Circle();
        shape.setColor(`${this.color}`);
        expect(shape.render()).toEqual(`<circle cx="150" cy="110" r="100" fill="${this.color}"/>`);
    });

});

