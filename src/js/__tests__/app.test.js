import Daemon from '../Daemon';
import Magician from '../Magician';

test('Атака мага без дурмана', () => {
  const bella = new Magician('Bella');
  bella.attack = 100;
  const result = bella.attack;
  expect(result(2)).toEqual(90);
});

test('Атака демона под дурманом', () => {
  const diablo = new Daemon('Diablo');
  diablo.attack = 100;
  diablo.stoned = true;
  const result = diablo.attack;
  expect(result(2)).toEqual(85);
});