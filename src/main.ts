/* eslint-disable complexity */
/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
export { init };
import * as https from 'https';

// FEATURE:     Get a report of the next 5 rocket launches
// As a:        space
// I want to:   see the status of the next launches
// In order to: set an alarma for the next one

function init(): boolean {
  console.log('App ready');
  https.get('https://launchlibrary.net/1.4/launch/next/' + 5, res => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', data => {
      body += data;
    });
    res.on('end', () => {
      const bodyData = JSON.parse(body);
      const rockets = bodyData.launches;
      let alarm = null;
      for (let i = 0; i < 5; i++) {
        const date = new Date(rockets[i].net);
        if (rockets[i].status === 1) {
          if (alarm === null) {
            const falta = date.getTime() - new Date('2020-06-13 05:00:00').getTime();
            switch (true) {
              case falta < 1000 * 60 * 60:
                alarm =
                  'Alerta, próximo despegue en ' +
                  Math.floor(falta / 1000 / 60) +
                  (Math.floor(falta / 1000 / 60) === 1 ? ' minuto' : ' minutos');
                ' minutos';
                break;
              case falta < 1000 * 60 * 60 * 24:
                alarm =
                  'Atención, próximo despegue en ' +
                  Math.floor(falta / 1000 / 60 / 60) +
                  (Math.floor(falta / 1000 / 60 / 60) === 1 ? ' hora' : ' horas');
                break;
              case falta < 1000 * 60 * 60 * 24 * 7:
                alarm =
                  'Relax, próximo despegue en ' +
                  Math.floor(falta / 1000 / 60 / 60 / 24) +
                  (Math.floor(falta / 1000 / 60 / 60 / 24) === 1 ? ' día' : ' días');
                break;
              default:
                alarm =
                  'Aburrimiento, próximo despegue en ' +
                  Math.floor(falta / 1000 / 60 / 60 / 24 / 7) +
                  (Math.floor(falta / 1000 / 60 / 60 / 24 / 7) === 1 ? ' semana' : ' semanas');
                break;
            }
          }
          console.log('✅ ' + date.toLocaleString() + ' - ' + rockets[i].name);
        } else {
          console.log('❌ ' + date.toLocaleString() + ' - ' + rockets[i].name);
        }
      }
      console.log('⏰ ' + alarm);
    });
  });
  return true;
}

init();
