import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,    // 工具栏
    Material.MatGridListModule,    // 网格布局
    Material.MatInputModule,        // input输入栏
    Material.MatFormFieldModule,    // 表单字段
    Material.MatRadioModule,        // 单选按钮
    Material.MatSelectModule,       // 下拉选择框
    Material.MatDatepickerModule,    // 日期选择器
    Material.MatNativeDateModule, // 日期模块
    Material.MatCheckboxModule,      // 勾选按钮
    Material.MatButtonModule,
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
