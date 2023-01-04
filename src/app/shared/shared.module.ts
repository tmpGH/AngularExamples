import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NamesFormFieldComponent } from './components/names-form-field/names-form-field.component';

@NgModule({
    declarations: [ErrorPageComponent, NamesFormFieldComponent],
    exports: [ErrorPageComponent, NamesFormFieldComponent],
    imports: [ MatButtonModule, MatInputModule ]
    })
export class SharedModule { }
