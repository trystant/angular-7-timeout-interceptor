import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DiscogsService {
  constructor(private srv: HttpClient) {}
  ROOT_URL = `https://api.discogs.com/releases/249504`;

  getRelease(): Observable<Release> {
    return this.srv.get<Release>(`${this.ROOT_URL}`);
  }
}

class Release {
  id: string;
  status: string;
  year: string;
  uri: string;
  notes: string;
}
