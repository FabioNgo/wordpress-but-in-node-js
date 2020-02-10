import {NotImplementedError} from "./standard/_types";

export default class PhpArray implements ProxyConstructor, ProxyHandler, Array {
    _internal: Object;
    _keys: Array;
    _internalPointer: Number;
    _numericKeys: Array;

    constructor() {
        this._delegate = new Proxy(this._internal, this);
        this._keys = [];
        this._internal = {};
        this._internalPointer = 0;
    }

    revocable(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void } {
        this._delegate.revocable(target, handler);
    }

    get(target: T, p: string | number | symbol, receiver: any): any {
        return this._internal[p];
    }

    set(target: T, p: string | number | symbol, value: any, receiver: any): boolean {
        this._internal[p] = value;
        if (this._keys.indexOf(p) === -1) {
            this._keys.push(p);
            if (p instanceof Number) {
                this._numericKeys = p;
            }

        }
    }

    push(...items): number {
        [...items].forEach(value => {
            this._internal[this._numericKeys + 1] = value;
            this._numericKeys++;
        });
    }

    forEach(callbackfn: (value: T, index: number|string, array: T[]) => void, thisArg: any): void {
        this._keys.forEach(key => callbackfn(this._internal[key], key, this), thisArg);
    }

    keys(): IterableIterator<number> {
        return this._keys;
    }

    [Symbol.iterator](): IterableIterator<T> {
        const keyIterator = this._keys[Symbol.iterator]();
        const self = this;
        return {
            next: function () {
                const key = keyIterator.next();
                return {key: key, value: self[key]};
            }
        };
    }

    defineProperty(target: T, p: string | number | symbol, attributes: PropertyDescriptor): boolean {
        Object.defineProperty(this._internal, p, attributes);
        if (this._keys.indexOf(p) === -1) {
            this._keys.push(p);
        }
    }

    deleteProperty(target: T, p: string | number | symbol): boolean {
        delete this._internal[p];
        const keyIndex = this._keys.indexOf(p);
        if (keyIndex !== -1) {
            this._keys.splice(keyIndex, 1);
        }
    }

    getPrototypeOf(target: T): object | null {
        return Object.getPrototypeOf(this._internal);
    }

    setPrototypeOf(target: T, v: any): boolean {
        throw new NotImplementedError();
    }

    isExtensible(target: T): boolean {
        return false;
    }

    preventExtensions(target: T): boolean {
        return true;
    }

    getOwnPropertyDescriptor(target: T, p: string | number | symbol): PropertyDescriptor | undefined {
        Object.getOwnPropertyDescriptor(this._internal);
    }

    has(target: T, p: string | number | symbol): boolean {
        return this._keys.find(key => key === p) !== undefined;
    }

    ownKeys(target: T): PropertyKey[] {
        return this._keys;
    }

    apply(target: T, thisArg: any, argArray: any): any {
        return target(argArray);
    }

    construct(target: T, argArray: any, newTarget: any): object {
        throw new NotImplementedError();
    }

    find(predicate: (value: T, index: number | string, obj: T[]) => unknown, thisArg: any): T | undefined {
        return this._keys.find(key => predicate(this._internal[key], key, this), thisArg);

    }

    filter(callbackfn: (value: T, index: number | string, array: T[]) => unknown, thisArg: any): T[] {
        this._keys.filter(key => callbackfn(this._internal[key], key, this), thisArg);
        return this;
    }

    splice(start: number, deleteCount: number): T[] {
        this._keys.filter((value, index) => index >= start && index < start + deleteCount).forEach(key => {
            delete this._internal[key];
        });
        this._keys.splice(start, deleteCount);
        return this;
    }

    indexOf(searchElement: T, fromIndex: number): number {
        return this._keys.findIndex((value, index) => this._internal[value] === searchElement && index >= fromIndex);
    }

    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg: any): number {
        return this._keys.findIndex((key) => predicate(this._internal[key], key.this));
    }

    pop(): T | undefined {
        const key = this._keys.pop();
        const result = this._internal[key];
        delete this._internal[key];
        return result;
    }

    length = () => this._keys.length;

    map(callbackfn: (value: T, index: number, array: T[]) => U, thisArg: any): U[] {
        return this._keys.map(key => callbackfn(this._internal[key], key, this), thisArg);
    }

    entries(): IterableIterator<[number | string, T]> {
        return this._keys.map(key => [key, this._internal[key]]);
    }

    values(): IterableIterator<T> {
        return this._values();
    }

    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
        return this._keys.reduce((previousValue, currentValue, currentIndex, array) => callbackfn(previousValue, this._internal[currentValue], currentValue, array))
    }

    slice(start: number, end: number): T[] {
        const slicedKeys = this._keys.slice(start, end);
        const result = new PhpArray()
        result._keys = slicedKeys;
        slicedKeys.forEach(value => result._internal[value] = this._internal[value]);
        return result;
    }

    concat(...items): T[] {
        throw new NotImplementedError();
    }

    reverse(): T[] {
        this._keys.reverse();
        return this;
    }

    join(separator: string): string {
        throw new NotImplementedError();
    }

    unshift(...items): number {
        this._numericKeys = 0;
        this._internal = {};
        items.map(value => {
            return new {
                key: undefined,
                value: value,
            };
        }).concat(this._keys.map(key => {
            return {
                key: key instanceof Number ? undefined : key,
                value: this._internal[key],
            }
        })).forEach(element => {
            let key = element.key;
            const value = element.value;
            key = key === undefined ? this._numericKeys : key;
            this._internal[key] = value;
        });
    }

    shift(): T | undefined {
        const result = this.pop();
        this._numericKeys = 0;
        this._internal = {};
        this._keys.map(key => {
            return {
                key: key instanceof Number ? undefined : key,
                value: this._internal[key],
            }
        }).forEach(element => {
            let key = element.key;
            const value = element.value;
            key = key === undefined ? this._numericKeys : key;
            this._internal[key] = value;
        });
        return result;
    }

    _values() {
        return this._keys.map(key => this._internal[key]);
    }

    sort(compareFn: (a: T, b: T) => number): this {
        this._internal = {};
        this._values().sort((a, b) => compareFn(a, b)).forEach(value => {
            this._keys.push(this._numericKeys);
            this._internal[this._numericKeys] = value;
            this._numericKeys++;
        });
        return this;
    }

    [Symbol.unscopables](): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean } {
        return {
            copyWithin: false,
            entries: false,
            fill: false,
            find: false,
            findIndex: false,
            keys: false,
            values: false
        }
    }

    copyWithin(target: number, start: number, end: number): this {
        throw new NotImplementedError();
    }

    enumerate(target: T): PropertyKey[] {
        throw new NotImplementedError();
    }

    every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg: any): boolean {
        throw new NotImplementedError();
    }

    fill(value: T, start: number, end: number): this {
        this._keys = [];
        this._internal = {};
        this._numericKeys = end;
        for (let i = start; i < end; i++) {
            this._internal[i] = value;
            this._keys.push(i);
        }
    }

    includes(searchElement: T, fromIndex: number): boolean {
        throw new NotImplementedError();
    }
}
