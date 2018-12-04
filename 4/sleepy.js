const { readFileSync } = require('fs');
const { compareAsc, parse } = require('date-fns');

module.exports = (file = 'input.txt') => {
  const lines = readFileSync(file, 'utf-8').split('\n');
  let sleepy;
  const events = [];

  const regex = {
    guard: /\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] Guard #(\d+) begins shift/,
    asleep: /\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] falls asleep/,
    awake: /\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] wakes up/
  };

  lines.forEach(line => {
    if (regex.guard.test(line)) {
      // New guard shift
      const parsed = regex.guard.exec(line);

      const guard = {
        date: parse(parsed[1], 'yyyy-MM-dd HH:mm'),
        type: 'guard',
        id: parsed[2]
      };

      events.push(guard);
    } else if (regex.asleep.test(line)) {
      // Guard fell asleep
      const parsed = regex.asleep.exec(line);

      const time = {
        date: parse(parsed[1], 'yyyy-MM-dd HH:mm'),
        type: 'asleep'
      };

      events.push(time);
    } else if (regex.awake.test(line)) {
      // Guard just woke up

      const parsed = regex.awake.exec(line);

      const time = {
        date: parse(parsed[1], 'yyyy-MM-dd HH:mm'),
        type: 'awake'
      };

      events.push(time);
    }
  });

  const timeline = events.sort((a, b) => compareAsc(a.date, b.date));
  console.log(timeline);

  timeline.forEach(event => {
    if (event.type === 'guard') {
      sleepy = {
        id: event.id,
        minute: event.date.getMinutes()
      };
    }
  });

  return sleepy;
};
