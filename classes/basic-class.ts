/**
 Like other OOP do, TypeScript has classes and
  A class can include the following:
    - Constructor
    - Properties
    - Methods
 */

class Product {

    productCode: number;
    productName: string;

    constructor(prodcode: number, prodname: string) {
        this.productCode = prodcode;
        this.productName = prodname;
    }
}