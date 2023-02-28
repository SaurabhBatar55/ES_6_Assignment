class Motor {
    constructor(name) {
        this.brand = name;
    }
    mycar() {
        return 'I have a ' + this.brand;
    }
};

class Model extends Motor {
    constructor(name, mode)  {
        super(name);
        this.model = mode;
    }
    show() {
        return this.mycar() + ', it is a ' + this.model
    }
}

mycar = new Model("Car", "Mustang");
document.write(mycar.show());