import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../assets/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RuleSetsComponent } from './rules/rule-sets/rule-sets.component';
import { RuleSetAddComponent } from './Rules/rule-set-add/rule-set-add.component';
import { RuleCreateComponent } from './Rules/rule-create/rule-create.component';
import { QuoteInfoSelectComponent } from './quote-info-select/quote-info-select.component';
import { QuoteFieldDisplayComponent } from './quote-field-display/quote-field-display.component';
import { RuleHeaderComponent } from './Rules/rule-header/rule-header.component';
import { ReportsTabWrapperComponent } from './reports-tab/reports-tab.component';
import { RulesTabWrapperComponent } from './Rules/rules-tab-wrapper/rules-tab-wrapper.component';
import { HeaderActionsComponent } from './header-actions/header-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RuleSetsComponent,
    RuleSetAddComponent,
    RuleCreateComponent,
    QuoteInfoSelectComponent,
    QuoteFieldDisplayComponent,
    RuleHeaderComponent,
    ReportsTabWrapperComponent,
    RulesTabWrapperComponent,
    HeaderActionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
