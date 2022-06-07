import {Component} from '@angular/core';
import {freeapiService} from "./services/freeapi.service";
import {Infos} from "./classes/infos";
import {Entry} from "./classes/authors";
import {MyOrderByPipe} from "./sort/sort.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebTechnologies';

  lstInfos: Infos[];
  authorEntries: Entry[];

  constructor(private _freeApiService: freeapiService, private orderPipe: MyOrderByPipe) {
    console.log("order by publications");
    console.log(this.orderPipe.transform(this.authorEntries, 'count'))
  }

  ngOnInit() {

    //TODO Daten von Test-Server

    // this._freeApiService.getjson()
    //   .subscribe(
    //     data => {
    //       this.lstInfos = data;
    //       this.authorEntries = data._embedded.entries
    //     }
    //   );

    //TODO Daten von DSpace-Server

    this._freeApiService.getAuthorData()
        .subscribe(
            authorData => {
                this.authorEntries = authorData._embedded.entries
            }
        )
  }

}
