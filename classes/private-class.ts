/**
 * Declaring a private class 
 */

module MyModule {
    export class MyPublicClass {
        private myPrivateClass: PrivateClass;
        constructor() {
            this.myPrivateClass = new PrivateClass;
        }
        public test() {
            this.myPrivateClass.test();
        }
    }

    class PrivateClass {
        public test() {
            console.log('it works');
        }
    }
}