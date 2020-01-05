import React, { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { ButtonBasicObservableProps } from './types';

const ButtonBasicObservable = ({ setShouldRender }: ButtonBasicObservableProps): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [incrementCounter, setIncrementCounter] = useState(false);

  useEffect(() => {
    if (incrementCounter) {
      setCounter(counter + 1);
      setIncrementCounter(false);
    } else {
      counter > 0 && console.log('Counter is', counter);
      counter > 2 && setShouldRender(false);
    }
  }, [incrementCounter, counter, setShouldRender]);

  useEffect(() => {
    const button: HTMLElement = document.getElementById('basicObs');
    // create an observable of button clicks
    const myObservable = fromEvent(button, 'click');

    const subscription = myObservable.subscribe({
      // on successful emissions
      next: () => setIncrementCounter(true),
      // on errors
      error: error => console.log(error),
      // called once on completion
      complete: () => console.log('complete!'),
    });

    return (): void => {
      // clean up with unsubscribe
      console.log('Cleaning up observable.');
      subscription.unsubscribe();
    };
  }, []);

  return <button id="basicObs">Basic Observable</button>;
};

export default ButtonBasicObservable;
