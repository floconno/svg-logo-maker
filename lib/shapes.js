class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorInput) {
        this.color = colorInput
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}


module.exports = {Triangle}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}" />`
    }
}

module.exports = {Square}

