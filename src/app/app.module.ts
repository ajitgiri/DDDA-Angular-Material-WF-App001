import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { TextdecorationComponent } from './component/textdecoration/textdecoration.component';
import { MatbuttonsComponent } from './component/matbuttons/matbuttons.component';
import { MatButtontogleComponent } from './component/mat-buttontogle/mat-buttontogle.component';
import { MaticonsComponent } from './component/maticons/maticons.component';
import { BagesexampleComponent } from './component/bagesexample/bagesexample.component';
import { SpinnerexampComponent } from './component/spinnerexamp/spinnerexamp.component';
import { ProgressbarexmpComponent } from './component/progressbarexmp/progressbarexmp.component';
import { ChipexmpComponent } from './component/chipexmp/chipexmp.component';
import { ToolbarpexmpComponent } from './component/navigation/toolbarpexmp/toolbarpexmp.component';
import { MenubarpexmpComponent } from './component/navigation/menubarpexmp/menubarpexmp.component';
import { ListexampComponent } from './layout/listexamp/listexamp.component';
import { GridlistexampComponent } from './layout/gridlistexamp/gridlistexamp.component';
import { ExpansionpanelexampComponent } from './layout/expansionpanelexamp/expansionpanelexamp.component';
import { CardexampComponent } from './layout/cardexamp/cardexamp.component';
import { TablayoutexampComponent } from './layout/tablayoutexamp/tablayoutexamp.component';
import { StepperlayoutexampComponent } from './layout/stepperlayoutexamp/stepperlayoutexamp.component';
import { InputexmpComponent } from './formcontrols/inputexmp/inputexmp.component';
import { SlidetoggleexmpComponent } from './formcontrols/slidetoggleexmp/slidetoggleexmp.component';
import { SliderexmpComponent } from './formcontrols/sliderexmp/sliderexmp.component';
import { SelectexmpComponent } from './formcontrols/selectexmp/selectexmp.component';
import { RadiobtnexmpComponent } from './formcontrols/radiobtnexmp/radiobtnexmp.component';
import { FormfieldsexmpComponent } from './formcontrols/formfieldsexmp/formfieldsexmp.component';
import { CheckboxexmpComponent } from './formcontrols/checkboxexmp/checkboxexmp.component';
import { AutocompleteexmpComponent } from './formcontrols/autocompleteexmp/autocompleteexmp.component';
import { DatepickerexmpComponent } from './formcontrols/datepickerexmp/datepickerexmp.component';
import { Popupmodel01Component } from './popup/popupmodel01/popupmodel01.component';
import { DialogcontentexampleComponent } from './popup/dialogcontentexample/dialogcontentexample.component';
import { Popupmodel02Component } from './popup/popupmodel02/popupmodel02.component';
import { Popupmodel03Component } from './popup/popupmodel03/popupmodel03.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AutoCompleteComponent,
    TextdecorationComponent,
    MatbuttonsComponent,
    MatButtontogleComponent,
    MaticonsComponent,
    BagesexampleComponent,
    SpinnerexampComponent,
    ProgressbarexmpComponent,
    ChipexmpComponent,
    ToolbarpexmpComponent,
    MenubarpexmpComponent,
    ListexampComponent,
    GridlistexampComponent,
    ExpansionpanelexampComponent,
    CardexampComponent,
    TablayoutexampComponent,
    StepperlayoutexampComponent,
    InputexmpComponent,
    SlidetoggleexmpComponent,
    SliderexmpComponent,
    SelectexmpComponent,
    RadiobtnexmpComponent,
    FormfieldsexmpComponent,
    CheckboxexmpComponent,
    AutocompleteexmpComponent,
    DatepickerexmpComponent,
    Popupmodel01Component,
    DialogcontentexampleComponent,
    Popupmodel02Component,
    Popupmodel03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
