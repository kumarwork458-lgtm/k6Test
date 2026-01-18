import http from 'k6/http';
import { check, sleep, group } from 'k6';

export let options = {
  vus: 5,
  duration: '30s',
};

export default function () {

  group('Home Page Test', () => {
    const res = http.get('https://test.k6.io');

    check(res, {
      'status is 200': r => r.status === 200,
    });

    sleep(1);
  });

}
