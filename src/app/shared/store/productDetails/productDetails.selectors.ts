import { Selector } from "@ngxs/store";
import { ProductDetailsState } from "./productDetails.state";

export class ProductDetailsSelector {

    @Selector([ProductDetailsState]) static productDetails (state: any): any {
        return state.response!;
    }
    @Selector([ProductDetailsState]) static productDetailsLoader (state: any): any {
        return state.loader!;
    }
}