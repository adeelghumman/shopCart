import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { statesList } from './state-lists';
@NgModule({
  imports: [
    NgxsModule.forRoot([...statesList] , { developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
  ]
})
export class StoreModule {}