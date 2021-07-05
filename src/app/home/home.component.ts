import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of(1, 2, 3, 4, 5).subscribe(console.log);

    from([5, 10, 15, 20]).subscribe(console.log);

    of('apple1', 'apple2', 'apple3').subscribe(
      apple => console.log(`resultion item ..${apple}`),
      err => console.error(`error occured.. ${err}`),
      () => console.log('complete')
    );

    of(2, 4, 6, 8).pipe(
      map(item => item * 2),
      tap(i => console.log(i)),
      map( i=> i *i),
      take(2)
    ).subscribe(console.log)

  }

}
