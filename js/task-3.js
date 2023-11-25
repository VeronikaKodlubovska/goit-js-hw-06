class StringBuilder {
    _value;

    constructor(initialValue) {
        this._value = initialValue;
    }

    getValue() {
        return this._value;
    }

    padEnd(str) {
        return this._value = this._value.concat(str);
    }

    padStart(str) {
        return this._value = str.concat(this._value);
    }

    padBoth(str) {
        return this._value = str + this._value + str;
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="