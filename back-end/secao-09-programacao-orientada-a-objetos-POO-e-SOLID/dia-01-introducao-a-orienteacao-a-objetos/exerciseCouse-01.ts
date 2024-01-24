class TV {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _conectedTo?: string;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

    turnOn(): void {
        console.log(`TV ${this._brand}, ${this._size}, resolution ${this._resolution} \n\ 
        available connections: ${this._connections}`);
    }

    get connectedTo(): string | undefined {
        return this._conectedTo;
    }

    set connectedTo(value: string | undefined) {
        if (!value || this._connections.includes(value)) {
            this._conectedTo = value;
            console.log(`TV connected to ${value}`);
        } else {
            console.log(`Sorry, TV does not have ${value} connection`);
        }
    }
}

const tv1 = new TV('Samsung', 55, '4K', ['HDMI', 'USB', 'Bluetooth']);

tv1.turnOn();

tv1.connectedTo = 'Wi-Fi';
console.log('Conected to:', tv1.connectedTo);