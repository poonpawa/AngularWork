import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-basics',
  templateUrl: './observable-basics.component.html',
  styleUrls: ['./observable-basics.component.css']
})
export class ObservableBasicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Creating a custom Observable
    const customObservable = Observable.create((observer) => {

      //stream of data (Producer)
      observer.next('First newsletter');
      observer.next('Second newsletter');

      setInterval(() => {
        observer.next('Random Async special newsletter 1')
      }, 2000)

      observer.next('third newsletter');
      // observer.error('Opps! newsletter site is down');

      setInterval(() => {
        observer.next('Random Async special newsletter 2')
      }, 2500)

      setInterval(() => {
        observer.complete(' No more newsletter')
      }, 3000)


    })

    //Subscribing to the custom Observable (Consumer)
    const customSubscription = customObservable.subscribe((data) => {
      console.log(data)
    });

    //unsubscribing the subscription after certain interval
    setInterval(() => {
      customSubscription.unsubscribe();
    }, 2100)

  }

}
