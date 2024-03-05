import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {PasswordModule} from "primeng/password";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutes} from "../app.routes";




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutes,
    InputTextModule,
    FormsModule,
    TooltipModule,
    PasswordModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutes,
    InputTextModule,
    FormsModule,
    TooltipModule,
    PasswordModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ]
})
export class SharedModule { }
