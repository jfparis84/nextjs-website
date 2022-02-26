import { from, interval, concat, of } from "rxjs";
import {
  map,
  take,
  repeat,
  delay,
  concatMap,
  ignoreElements,
} from "rxjs/operators";
import { useObservable } from "rxjs-hooks";

const type = ({ word, speed, backward = false }) =>
  interval(speed).pipe(
    map((x) =>
      backward ? word.substr(0, word.length - x - 1) : word.substr(0, x + 1)
    ),
    take(word.length)
  );

const typeEffect = (word) =>
  concat(
    type({ word, speed: 70 }), // type
    of("").pipe(delay(1500), ignoreElements()), // pause
    type({ word, speed: 30, backward: true }), // delete
    of("").pipe(delay(300), ignoreElements()) // pause
  );

const TypingEffect = ({ words }) => {
  const value = useObservable(() =>
    from(words).pipe(concatMap(typeEffect), repeat())
  );

  return <>{value}</>;
};

export default TypingEffect;
