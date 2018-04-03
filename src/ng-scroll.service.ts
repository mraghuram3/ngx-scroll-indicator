import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NgScrollService {

  private eventSource: Subject<number> = new Subject<number>();
  public events: Observable<number> = this.eventSource.asObservable();
  constructor() {
  }
      show(progress: number) {

              this.emitEvent(progress);
      }

      private emitEvent(event: number) {
          if (this.eventSource) {
              this.eventSource.next(event);
          }
      }

}
