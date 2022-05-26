import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfiguratorContext, AuthenticationMethod} from '@elfsquad/configurator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { FeatureComponent } from './feature/feature.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component' ;



const options = {
  authenticationMethod: AuthenticationMethod.ANONYMOUS,
  tenantId: 'f87ebe5c-2860-4376-9b80-16597bf0df69',
};

const configuratorContext = new ConfiguratorContext(options);

@NgModule({
  declarations: [
    AppComponent,
    ProductOverviewComponent,
    ConfiguratorComponent,
    FeatureComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: ConfiguratorContext, useValue: configuratorContext }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

