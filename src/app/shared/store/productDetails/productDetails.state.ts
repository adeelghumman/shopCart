// app.state.ts
import { State, Action, StateContext } from '@ngxs/store';
import { getAllProducts } from './productDetails.actions';
import { ApiService } from '../../services/api/api.service';
import { take } from 'rxjs';
import { Injectable } from '@angular/core';


const defaults: any = {
    message: '',
    data: {} as any
 };
@State<any>({
    name: 'ProductDetails',
    defaults: {
        response: defaults,
        loader : false,
        success: false,
        updateLoader: false
    }
})

@Injectable()
export class ProductDetailsState {
    constructor(
        private _api: ApiService,
    ){ }
  
    @Action(getAllProducts) getAllProducts(
        { patchState, setState }: StateContext<any>,
        {  }: getAllProducts
    ){
        patchState({
            loader: true
        });
        let url: string = `products/`;
        this._api.get(url ).pipe(take(1)).subscribe({
            next: (res: any) => {
                setState({
                    response: res,
                    loader: false,
                    success: true,
                    updateLoader:false

                });
            },
            error: (e) => {
                patchState({
                    loader: false,
                    success: false
                })
            }
        });
    }

}