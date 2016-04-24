import cut from './cut.js';

Object.defineProperty(String.prototype, 'cut', {
    value: cut,
    writable: true,
    configurable: true,
    enumerable: false
});

export default true;
