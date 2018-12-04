const { readFileSync } = require('fs');
const { compareAsc } = require('date-fns');

module.exports = (file = 'input.txt') => {
  const lines = readFileSync(file, 'utf-8').split('\n');
  let sleepy;
  const events = [];

  const regex = {
    guard: /\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] Guard #(\d{4}) begins shift/
  };

  lines.forEach(line => {
    if (regex.guard.test(line)) {
      // New guard shift
      const parsed = regex.guard.exec(line);

      const guard = {
        date: new Date(parsed[1]),
        type: 'guard',
        id: parsed[2]
      };

      events.push(guard);
    }
  });

  const timeline = events.sort((a, b) => compareAsc(a, b));

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
