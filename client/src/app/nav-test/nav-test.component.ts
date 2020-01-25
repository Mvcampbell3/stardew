import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-test',
  templateUrl: './nav-test.component.html',
  styleUrls: ['./nav-test.component.scss']
})
export class NavTestComponent {

  opened: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        console.log(result);
        return result.matches
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
