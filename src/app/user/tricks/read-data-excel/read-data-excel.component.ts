import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-data-excel',
  templateUrl: './read-data-excel.component.html',
  styleUrls: ['./read-data-excel.component.scss']
})
export class ReadDataExcelComponent implements OnInit {
  arrayBuffer: any;
  dataSource:TKB[] = [];
  file: File;
  displayedColumns: string[] = ['Order','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];

  worksheet: any;
  constructor() {

  }

  ngOnInit(): void { }
  
  onFileUpload(event):void{
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[first_sheet_name];
      let excelJson = XLSX.utils.sheet_to_json(this.worksheet, { raw: true });
      this.dataSource = [...excelJson];
      
      this.dataSource.forEach(item => {
        if (!item) {
          item = null;
        }
      });
    };
    fileReader.readAsArrayBuffer(this.file);
  }

  exportToExcel(): void{
    console.log("damn")
  }
}

export interface TKB{
  Monday?: string,
  Tuesday?: string,
  Wednesday?: string,
  Thursday?: string,
  Friday?: string,
  Saturday?: string,
  Sunday?: string
}
