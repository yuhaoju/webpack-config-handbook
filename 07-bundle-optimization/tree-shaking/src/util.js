// util.js
export function foo() {
    console.log('foo');
}
export function bar() { // 没有被引用过，死代码
    console.log('bar');
}