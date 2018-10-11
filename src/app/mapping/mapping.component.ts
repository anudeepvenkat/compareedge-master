import { Component, OnInit, ViewChild } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { UploadFileService } from '../upload/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {GridOptions, Grid} from "ag-grid-community";

//const URL = 'http://10.29.53.188:8000/payroll/fileupload';
const LEGACY_URL = 'http://127.0.0.1:8000/payroll/legacyempcomponentmapping/';
const NEW_URL='http://127.0.0.1:8000/payroll/newempcomponentmapping/';
const EMP_MAPPING_URL='http://127.0.0.1:8000/payroll/empmappingdata/';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {
  legacySelectedFiles: FileList
  empMappingSelectedFiles: FileList
  legacyUploadedSuccess = undefined;
  currentFileUpload: File
  newSelectedFiles: FileList
  newUploadedSuccess = undefined;
  empMappingUploadedSuccess = undefined;
  newFileUpload: File;
  empMappingUpload: File;
  gridOptions: GridOptions;
  @ViewChild('agGrid') grid: Grid;

  constructor(private uploadService: UploadFileService) {
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      refreshCells: true,
      enableCellChangeFlash: true,
      enableFilter: true,
      suppressRowClickSelection: true,
      groupSelectsChildren: true,
      debug: true,
      rowSelection: 'multiple',
      enableColResize: true,
      rowGroupPanelShow: 'always',
      pivotPanelShow: 'always',
      enableRangeSelection: true,
      columnDefs: [],
      pagination: true,
      paginationPageSize: 10,
      paginationNumberFormatter: function(params) {
          return '[' + params.value.toLocaleString() + ']';
      },
      defaultColDef: {
          editable: true,
          // enableRowGroup: true,
          // enablePivot: true,
          enableValue: true
      }
  };
    this.gridOptions.columnDefs = [
        {
            headerName: "Legacy Employee ID",
            field: "legacyempid",
            width: 100
        },
        {
            headerName: "New Employee ID",
            field: "newempid",
            width: 100
        }
        ,
        {
            headerName: "Pay Group",
            field: "paygroup",
            width: 100
        },
        {
            headerName: "Pay Period",
            field: "payperiod",
            width: 100
        },
        {
            headerName: "Pay Date",
            field: "paydate",
            width: 100
        },
        {
            headerName: "Compare Codes",
            field: "comparecodes",
            width: 100
        },
        {
            headerName: "Hours",
            field: "hours",
            width: 100
        },
        {
            headerName: "Amount",
            field: "amount",
            width: 100
        },
        {
            headerName: "Taxable Wages",
            field: "taxablewages",
            width: 100
		},
		{
				headerName:  "Status",
				field:  "status",
				width:  130,
				cellStyle:  function  (params) {
					var  color;
					if  (params.value  ==  'Data Match') {
						color  =  '#6bf012';
					}
					else  { color  =  '#e44119'; }
					return  { backgroundColor: color, color:  '#ffffff'  };
				}
			}

    ];
    this.gridOptions.rowData = [{
			"legacyempid": 1009,
			"newempid": 1009,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "-270.0",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1009,
			"newempid": 1009,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "100.0",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1006,
			"newempid": 1006,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1006,
			"newempid": 1006,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "600.0",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1008,
			"newempid": 1008,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "-170.0",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1008,
			"newempid": 1008,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "In Sync",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1004,
			"newempid": 2004,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1004,
			"newempid": 2004,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "In Sync",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1007,
			"newempid": 1007,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1007,
			"newempid": 1007,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "-500.0",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1005,
			"newempid": 2005,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1005,
			"newempid": 2005,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "In Sync",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1001,
			"newempid": 2001,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1001,
			"newempid": 2001,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "In Sync",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1003,
			"newempid": 2003,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1003,
			"newempid": 2003,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "In Sync",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1002,
			"newempid": 2002,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "In Sync",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1002,
			"newempid": 2002,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "In Sync",
			"taxablewages": "80.0"
		}, {
			"legacyempid": 1010,
			"newempid": 1010,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compbasic",
			"hours": "-24",
			"amount": "-570.0",
			"taxablewages": "-80.0"
		}, {
			"legacyempid": 1010,
			"newempid": 1010,
			"paygroup": "Monthly",
			"payperiod": 20160115,
			"paydate": 20160115,
			"comparecodes": "compvariable",
			"hours": "24",
			"amount": "-100.0",
			"taxablewages": "80.0"
    }];
    this.gridOptions.rowData=[];
   }

  ngOnInit() {
    this.legacyUploadedSuccess = undefined;
    this.newUploadedSuccess = undefined;
  }

  legacySelectFile(event) {
    this.legacySelectedFiles = event.target.files;
  }
  newSelectFile(event) {
    this.newSelectedFiles = event.target.files;
  }
  empMappingSelectFile(event){
	this.empMappingSelectedFiles = event.target.files;
  }

  legacyUpload() {

    this.currentFileUpload = this.legacySelectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload,LEGACY_URL).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(event);
      }
    })

    this.legacySelectedFiles = undefined;
  }
  empMappingUploadMethod() {

    this.empMappingUpload = this.empMappingSelectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.empMappingUpload,EMP_MAPPING_URL).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(event);
      }
    })

    this.empMappingSelectedFiles = undefined;
  }
  newUpload() {

    this.newFileUpload = this.newSelectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.newFileUpload,NEW_URL).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(event);
      }
    })

    this.newSelectedFiles = undefined;
  }

  compare(){
    console.log('onCompare');
    this.uploadService.compare().subscribe(data => {
      console.log(data['ComparisionData']);
     
      let tempData=data['ComparisionData'];
      let tempArray = [];
      console.log(tempData[0]['amount']);
      for(const i in tempData){  
		let rowData = {
			'amount': '',
			'comparecodes': '',
			'hours': '',
			'legacyempid': '',
			'newempid': '',
			'paydate': '',
			'paygroup': '',
			'payperiod': '',
			'taxablewages': '',
			'status':''
		  };
        rowData['amount'] = tempData[i]['amount'];
        rowData['comparecodes'] = tempData[i]['comparecodes'];
        rowData['hours'] = tempData[i]['hours'];
        rowData['legacyempid'] = tempData[i]['legacyempid'];
        rowData['newempid'] = tempData[i]['newempid'];
        rowData['paydate'] = tempData[i]['paydate'];
        rowData['paygroup'] = tempData[i]['paygroup'];
        rowData['payperiod'] = tempData[i]['payperiod'];
		rowData['taxablewages'] = tempData[i]['taxablewages'];
		rowData['status'] = tempData[i]['status'];
        tempArray.push(rowData);
      }
      console.log(tempArray);
      this.gridOptions.rowData = tempArray;
    });
  }
}
