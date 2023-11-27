import { Product } from "./productDetails.models";

export class getAllProducts {
    static readonly type = '[getAllProducts] Get ALL Products';
    constructor() { }
  }

  export class getProductById {
    static readonly type = '[getProductById] Get Product by Id';
    constructor(public id: String  ) { }
  }

  export class createProduct {
    static readonly type = '[createProduct] Create Product';
    constructor(public body: Product ) { }
  }
  