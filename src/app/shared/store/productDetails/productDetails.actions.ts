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

  export class updateProduct {
    static readonly type = '[updateProduct] Update Product';
    constructor(public body: Product , public id : string) { }
  }

  export class deleteProduct {
    static readonly type = '[DeleteProduct] Delete Product';
    constructor(public id: string ) { }
  }
  