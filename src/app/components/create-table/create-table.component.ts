import { Component, OnInit } from '@angular/core';
import { TestData } from '../../utils/test-data';
import { CreateToJson } from '../../utils/create-to-json';

@Component({
  selector: 'db-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
  db = [];
  constructor() { }

  ngOnInit() {
    this.db = CreateToJson.convert(TestData.createTablesSmallDB);
    console.log('Convert output:', this.db);
    console.log(this.getTableColumns(this.db['tables'][1]));
  }

  getTableColumns(table: any): any {
    return Object.keys(table).filter(k => k && k !== 'tableName');
  }
}
