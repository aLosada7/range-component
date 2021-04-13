# Range Angular component

Following the instructions I have created two different routes with two different components, plus another component (<ngc-range>)

We can manipulate the events through different ways. I wanted to introduce both throughout the component source code:
- Using Angular mouse events
- Using RxJs fromEvent operator
- Using HammerJS library (only for mobile gestures). I have also used debounceTime operator to limit the enhance the user experience

I have provided an HTTP interceptor which provides different mock values, depending on the HTTP request, and also tested its operation. It's also possible
to check Bad request responses, and show a different result (for example, using an <ng-template> structural directive and showing an error)

I have also deployed it with other UI components and micro-interactions at [https://wanda-elements.netlify.app/](https://wanda-elements.netlify.app/)

Although I like the result, I want to keep growing, and working with your team I am sure I will get it.

## Execution

```
npm install
ng serve
```
