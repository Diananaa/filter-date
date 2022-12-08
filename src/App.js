import React, { useState } from 'react';
import './style.css';
import moment from 'moment';

export default function App() {
  const data = [
    {
      address1: 'JL. WASPADA RAYA',
      address2: 'PADEMANGAN BARAT',
      address3: 'PADEMANGAN',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'TEGUH SUSANTO',
      clientNumber: '67782808',
      clientStatus: 'Despatch Address; Life Assured; Owner; Payer',
      dateOfBirth: '5 December 1989',
      old: 33,
    },
    {
      address1: 'JL. WASPADA RAYA',
      address2: 'PADEMANGAN BARAT',
      address3: 'PADEMANGAN',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'TEGUH SUSANTO',
      clientNumber: '6778108',
      clientStatus: 'Despatch Address; Life Assured; Owner; Payer',
      dateOfBirth: '9 December 1989',
      old: 33,
    },
    {
      address1: 'JL. WASPADA RAYA',
      address2: 'PADEMANGAN BARAT',
      address3: 'PADEMANGAN',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'TEGUH SNTO',
      clientNumber: '67782508',
      clientStatus: 'Despatch Address; Life Assured; Owner; Payer',
      dateOfBirth: '9 December 1989',
      old: 33,
    },
    {
      address1: 'JL. WASPADA RAYA',
      address2: 'PADEMANGAN BARAT',
      address3: 'PADEMANGAN',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'TH SUSANTO',
      clientNumber: '67782208',
      clientStatus: 'Despatch Address; Life Assured; Owner; Payer',
      dateOfBirth: '9 December 1989',
      old: 33,
    },
    {
      address1: 'JL. PLAMBOYAN',
      address2: 'RT. 005/003',
      address3: 'GIRI KENCANA, KETAHUN',
      address4: '',
      address5: 'BENGKULU',
      clientName: 'URWANTI',
      clientNumber: '66871436',
      clientStatus: 'Beneficiary; Despatch Address; Owner; Payer',
      dateOfBirth: '7 December 1965',
      old: 56,
    },
    {
      address1: 'JL. PLAMBOYAN',
      address2: 'RT. 005/003',
      address3: 'GIRI KENCANA, KETAHUN',
      address4: '',
      address5: 'BENGKULU',
      clientName: 'PURWNTI',
      clientNumber: '66871436',
      clientStatus: 'Beneficiary; Despatch Address; Owner; Payer',
      dateOfBirth: '7 December 1965',
      old: 56,
    },
    {
      address1: 'JL. PLAMBOYAN',
      address2: 'RT. 005/003',
      address3: 'GIRI KENCANA, KETAHUN',
      address4: '',
      address5: 'BENGKULU',
      clientName: 'PURWANI',
      clientNumber: '66871436',
      clientStatus: 'Beneficiary; Despatch Address; Owner; Payer',
      dateOfBirth: '7 December 1965',
      old: 56,
    },
    {
      address1: 'JL. TANAH ABANG I NO. 12 O-P',
      address2: 'RT. 008/008, PETOJO SELATAN',
      address3: 'GAMBIR',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'YUDHIWIRA',
      clientNumber: '50508031',
      clientStatus: 'Despatch Address; Life Assured; Owner',
      dateOfBirth: '8 December 1973',
      old: 48,
    },
    {
      address1: 'JL. TANAH ABANG I NO. 12 O-P',
      address2: 'RT. 008/008, PETOJO SELATAN',
      address3: 'GAMBIR',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'YUDWIRA',
      clientNumber: '50508031',
      clientStatus: 'Despatch Address; Life Assured; Owner',
      dateOfBirth: '8 December 1973',
      old: 48,
    },
    {
      address1: 'JL. TANAH ABANG I NO. 12 O-P',
      address2: 'RT. 008/008, PETOJO SELATAN',
      address3: 'GAMBIR',
      address4: 'JAKARTA',
      address5: 'DKI JAKARTA',
      clientName: 'UDHIWIRA',
      clientNumber: '50508031',
      clientStatus: 'Despatch Address; Life Assured; Owner',
      dateOfBirth: '8 December 1973',
      old: 48,
    },
  ];

  const months = [
    '',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const monthsEng = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [today, setToday] = useState({});
  console.log('isi data brithday', data);
  const getFormatedDate = (add = 0, type = 'string') => {
    const newDate = moment().add(add, 'day').toDate();

    const toNewFormat = (date) => {
      const pad = (num) => `${num < 10 ? '0' : ''}${num}`;
      const day = pad(date.getDate());
      const month = pad(date.getMonth() + 1);
      const year = date.getFullYear();
      return {
        string: `${day} ${months[parseInt(month, 10)]} ${year}`,
        full: `${day}-${month}-${year}`,
        month,
        day: parseInt(day, 10),
      };
    };
    const newFormat = toNewFormat(newDate);
    return newFormat[type];
  };
  const day = getFormatedDate(0, 'day');
  const nextDay = getFormatedDate(1, 'day');
  const currentDayMonth = getFormatedDate(0, 'month');
  const nextDayMonth = getFormatedDate(1, 'month');

  const yesterdayMonth = (values) => {
    const value = Math.abs(values) * -1;
    const formula = moment().add(value, 'days');
    const formatDate = formula.format('MM-DD');
    const Date = `${formatDate.slice(3, 5)}`;

    var range = [];

    for (let i = 1; values < day; i++) {
      console.log('sdfs', day);
      const day = day - 1;
      range.push(i);
      return range;
    }
    console.log('dhfhds', range);

    // const Month =  `${months[parseInt(formatDate.slice(0,2))]}`
    // return console.log(`${Date}  ${Month}`)
  };

  // yesterdayMonth(3);

  const listDate = [];
  if (data) {
    const objToday = {
      id: '00000000',
      date: `${day} ${months[parseInt(currentDayMonth, 10)]} `,
      type: 'birthdays',
      birthDays: [],
    };

    const objTomorrow = {
      id: '00000000',
      date: `${nextDay} ${months[parseInt(nextDayMonth, 10)]} `,
      type: 'birthdays',
      birthDays: [],
    };
    // const objYesterday = {
    //   id: '00000000',
    //   date: yesterdayMonth(2),
    //   type: 'birthdays',
    //   birthDays: [],
    // };

    data.forEach((x) => {
      const dateFilter = parseInt(
        x.dateOfBirth.slice(0, 2).replace(' ', ''),
        10
      );

      const slicedDate = x.dateOfBirth.slice(0, -4);
      const monthData = slicedDate.split(' ')[1];
      const idxMonthData = parseInt(monthsEng.indexOf(monthData), 10);
      if (
        (parseInt(day, 10) === dateFilter &&
          parseInt(currentDayMonth, 10) === idxMonthData) || // Today
        (parseInt(nextDay, 10) === dateFilter &&
          parseInt(nextDayMonth, 10) === idxMonthData) // Tomorrow
      ) {
        if (
          parseInt(day, 10) === dateFilter &&
          parseInt(currentDayMonth, 10) === idxMonthData
        ) {
          objToday.birthDays.push({
            name: x.clientName,
            clientNumber: x.clientNumber,
          });
        } else if (
          parseInt(nextDay, 10) === dateFilter &&
          parseInt(nextDayMonth, 10) === idxMonthData
        ) {
          objTomorrow.birthDays.push({
            name: x.clientName,
            clientNumber: x.clientNumber,
          });
        }
      }

      return true;
    });
    if (objToday.birthDays.length > 0 || objTomorrow.birthDays.length > 0) {
      listDate.push(objToday);
      listDate.push(objTomorrow);
    }
    console.log('todayyy data', objToday);
    console.log('todayyy data', objTomorrow);
    console.log('listData', listDate);
    console.log('listData today', listDate[0].birthDays);
    setToday (listDate[0].birthDays)
    console.log('hari ini', today)
    console.log('hari ini', today)
  }
  return (
    <div>
      {/* {listDate[0].birthDays.slice(0,2).map((item)=>{
        return (
          <p>{item.name}</p>

        )
      })} */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
