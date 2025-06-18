// timeUtils.test.js
import { initializeTimes } from './timeUtils';

test("initializeTimes returns all initial time slots", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
