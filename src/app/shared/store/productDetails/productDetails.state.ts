// app.state.ts
import { State, Action, StateContext, Store } from '@ngxs/store';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './productDetails.actions';
import { ApiService } from '../../services/api/api.service';
import { take } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const defaults: any = {
    message: '',
    data: [] as any
};
@State<any>({
    name: 'ProductDetails',
    defaults: {
        response: defaults,
        loader: false,
        success: false,
        updateLoader: false
    }
})

@Injectable()
export class ProductDetailsState {
    constructor(
        private _api: ApiService,
        private _store: Store,
        private _router : Router
    ) { }

    @Action(getAllProducts) getAllProducts(
        { patchState, setState }: StateContext<any>,
        { }: getAllProducts
    ) {
        patchState({
            loader: true
        });
        let url: string = `products/`;
        this._api.get(url).pipe(take(1)).subscribe({
            next: (res: any) => {
                setState({
                    response: {
                        message: 'Products fetched successfully',
                        data: res
                    },
                    loader: false,
                    success: true,
                    updateLoader: false

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

    @Action(getProductById) getProductById(
        { patchState, setState }: StateContext<any>,
        { id }: getProductById
    ) {
        patchState({
            loader: true,
            response: undefined
        });
        let url: string = `products/${id}`;
        this._api.get(url).pipe(take(1)).subscribe({
            next: (res: any) => {
                setState({
                    response: {
                        message: 'Product detail successfully',
                        data: res
                    },
                    loader: false,
                    success: true,
                    updateLoader: false

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

    @Action(createProduct) createProduct(
        { patchState, setState }: StateContext<any>,
        { body }: createProduct
    ) {
        patchState({
            loader: true,
        });
        let url: string = `products`;
        this._api.post(url, body).pipe(take(1)).subscribe({
            next: (res: any) => {
                setState({
                    response: {
                        message: 'Product created successfully',
                    },
                    loader: false,
                    success: true,
                    updateLoader: false

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

    @Action(updateProduct) updateProduct(
        { patchState, setState }: StateContext<any>,
        { body , id}: updateProduct
    ) {
        patchState({
            loader: true,
        });
        let url: string = `products/${id}`;
        this._api.put(url, body).pipe(take(1)).subscribe({
            next: (res: any) => {
                setState({
                    response: {
                        message: 'Product Updated successfully',
                    },
                    loader: false,
                    success: true,
                    updateLoader: false

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

    @Action(deleteProduct) deleteProduct(
        { patchState, setState }: StateContext<any>,
        { id }: deleteProduct
    ) {
        patchState({
            loader: true,
            response: undefined
        });
        let url: string = `products/${id}`;
        this._api.delete(url).pipe(take(1)).subscribe({
            next: (res: any) => {
                setState({
                    response: {
                        message: 'Product Deleted successfully',
                    },
                    loader: false,
                    success: true,
                    updateLoader: false
                });
                this._store.dispatch(new getAllProducts());
                this._router.navigate(['/home'])
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