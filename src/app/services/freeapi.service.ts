import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Authors} from "../classes/authors";

@Injectable()
export class freeapiService {

  constructor(private httpclient: HttpClient) {
  }

  //TODO Daten von Servern mit mehrseitiger JSON

  // getjson(): Observable<any> {
  //   let payload = new HttpParams();
  //   [1, 2, 3, 4, 5].forEach((id: number) => {
  //     payload = payload.append(`page`, id.toString());
  //   })
  //   return this.httpclient.get("https://jsonplaceholder.typicode.com/posts", {params: payload})
  //
  // }

  //TODO Daten von Uni-Servern
  getAuthorData(): Observable<Authors> {
    // return this.httpclient.get<Authors>("assets/authors.json") //TODO lokale DSpace-Daten zum testen
    return this.httpclient.get<Authors>("https://webtech.informatik.unibw-muenchen.de/server/api/discover/browses/author/entries?size=1000")
  }
}
