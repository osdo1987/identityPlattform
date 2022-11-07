import { Component, OnInit } from '@angular/core';


interface Country {
  name: string;
  local: number;
  visit: number;
  code:number
}



const COUNTRIES: Country[] = [

  {
    name: 'SAQUE',
    local: 0,
    visit: 0,
    code:0
  },
  {
    name: 'REC-ATAQUE',
    local: 0,
    visit: 0,
    code:1
  },
  {
    name: 'DEF-ATAQUE',
    local: 0,
    visit: 0,
    code:2
  },
  {
    name: 'BLOQUEO',
    local: 0,
    visit: 0,
    code:3
  },

  {
    name: 'ERRORES SAQUE',
    local: 0,
    visit: 0,
    code:4
  },

  {
    name: 'ERRORES ATAQUE',
    local: 0,
    visit: 0,
    code:5
  },

  {
    name: 'ERROR NO FORZADO',
    local: 0,
    visit: 0,
    code:6
  },

  {
    name: 'TOTAL',
    local: 0,
    visit: 0,
    code:7
  }
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  countries = COUNTRIES;
  totalBuga:number=0;
  totalOtro:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  totalPuntosBuga(){

    let total=0;
    this.countries.forEach(function(a){
      if(a.code <=3){
        total += a.local;
      }else{
        total+=a.visit
      }
    });
    this.totalBuga=total;
    console.log(total);
  }

  totalPuntosVisit(){

    let total=0;
    this.countries.forEach(function(a){
      if(a.code <=3){
        total += a.visit;
      }else{
        total+=a.local
      }
    });
    this.totalOtro=total;
    console.log(total);
  }

  addPoint(tipo:any,team:any){
    if(team=='local'){
      this.countries[tipo].local++;
    }else{
      this.countries[tipo].visit++;
    }
    this.totalPoints();
  }

  lessPoint(tipo:any,team:any){
    if(team=='local'){
      this.countries[tipo].local--;
    }else{
      this.countries[tipo].visit--;
    }
    this.totalPoints();
  }

  totalPoints(){
    this.totalPuntosBuga();
    this.totalPuntosVisit();
  }

}
