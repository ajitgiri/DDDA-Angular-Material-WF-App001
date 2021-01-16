import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { SlidetoggleexmpComponent } from './formcontrols/slidetoggleexmp/slidetoggleexmp.component';
import { SliderexmpComponent } from './formcontrols/sliderexmp/sliderexmp.component';
import { SelectexmpComponent } from './formcontrols/selectexmp/selectexmp.component';
import { RadiobtnexmpComponent } from './formcontrols/radiobtnexmp/radiobtnexmp.component';
import { FormfieldsexmpComponent } from './formcontrols/formfieldsexmp/formfieldsexmp.component';
import { CheckboxexmpComponent } from './formcontrols/checkboxexmp/checkboxexmp.component';
import { AutocompleteexmpComponent } from './formcontrols/autocompleteexmp/autocompleteexmp.component';
import { DatepickerexmpComponent } from './formcontrols/datepickerexmp/datepickerexmp.component';
import { InputexmpComponent } from './formcontrols/inputexmp/inputexmp.component';
import { DialogcontentexampleComponent } from './popup/dialogcontentexample/dialogcontentexample.component';


const routes: Routes = [
  {   path: 'sideBar',  component: SidebarComponent  },
  {   path: 'autoComplete',  component: AutoCompleteComponent  },
  {   path: 'txtdecoration',  component: TextdecorationComponent },
  {   path: 'matButtons',  component: MatbuttonsComponent  },
  {   path: 'matSpinners',  component: SpinnerexampComponent  },
  {   path: 'matButtonsToggleExmp',  component: MatButtontogleComponent  },
  {   path: 'matIcons',  component: MaticonsComponent  },
  {   path: 'matbadges',  component: BagesexampleComponent  },
  {   path: 'matProgressbar',  component: ProgressbarexmpComponent  },
  {   path: 'chipsBtn',  component: ChipexmpComponent  },
  {   path: 'toolbarExp',  component: ToolbarpexmpComponent  },
  {   path: 'menubarExp',  component: MenubarpexmpComponent  },
  {   path: 'listExp',  component: ListexampComponent  },
  {   path: 'gridlistExp',  component: GridlistexampComponent  },
  {   path: 'expansionpanlExp',  component: ExpansionpanelexampComponent  },
  {   path: 'cardExp',  component: CardexampComponent  },
  {   path: 'tabsExp',  component: TablayoutexampComponent  },
  {   path: 'stepperExp',  component: StepperlayoutexampComponent  },
  {   path: 'slipdetoggleExp',  component: SlidetoggleexmpComponent  },
  {   path: 'sliderExp',  component: SliderexmpComponent  },
  {   path: 'selectExp',  component: SelectexmpComponent  },
  {   path: 'radiobuttonExp',  component: RadiobtnexmpComponent  },
  {   path: 'formfieldExp',  component: FormfieldsexmpComponent  },
  {   path: 'checkboxExp',  component: CheckboxexmpComponent  },
  {   path: 'autocompleteExp',  component: AutocompleteexmpComponent  },
  {   path: 'datepickerExp',  component: DatepickerexmpComponent  },
  {   path: 'inputExp',  component: InputexmpComponent  },
  {   path: 'dialogcontentexample', component: DialogcontentexampleComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
