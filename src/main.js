import elrUtlities from 'elr-utility-lib';
const $ = require('jquery');
let elr = elrUtlities();

const elrTimeUtilities = function() {
    const self = {
        now: new Date(),
        today() {
            return {
                'month': this.now.getMonth(),
                'day': this.now.getDay(),
                'date': this.now.getDate(),
                'year': this.now.getFullYear(),
                'hour': this.now.getHours(),
                'minute': this.now.getMinutes(),
                'second': this.now.getSeconds()
            };
        },
        daysPerWeek: 7,
        unitTokens: {
            ms: 'millisecond',
            s: 'second',
            m: 'minute',
            h: 'hour',
            d: 'day',
            D: 'date',
            w: 'week',
            M: 'month',
            Q: 'quarter',
            y: 'year',
            DDD: 'dayOfYear',
            a: 'ampm'
        },
        datePatterns: {
            'numericMonth': /^([0]?[1-9]|[1][012]|[1-9])/,
            'monthName': /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)/,
            'year': /([0-9]{4})/,
            'ampm': /(am|pm)$/i,
            'hour': /^(?:([12][012]):|([0]?[0-9]):)/,
            'minutes': /\:([012345][0-9])/,
            'seconds': /\:(?:[012345][0-9])\:([012345][0-9])/,
            'dateKeyword': /^(yesterday|today|tomorrow)/i,
            'numericDate': /((?:[0]?[1-9]|[1][012]|[1-9])[-\/.](?:[0]?[1-9]|[12][0-9]|[3][01])[-\/.][0-9]{4})/,
            'longDate': /^(?:[a-z]*[\.,]?\s)?[a-z]*\.?\s(?:[3][01],?\s|[012][1-9],?\s|[1-9],?\s)[0-9]{4}/i,
            'time': /((?:[12][012]:|[0]?[0-9]:)[012345][0-9](?:\:[012345][0-9])?(?:am|pm)?)/i,
            'timeKeyword': /^(noon|midnight)/i
        },
        months: [
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
            'December'
        ],
        shortMonths: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        days: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        shortDays: [
            'Sun',
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat'
        ],
        minDays: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],
        hours: [
            {
                name: 'All Day Event',
                time: null
            },
            {
                name: '12am',
                time: 0
            },
            {
                name: '1am',
                time: 1
            },
            {
                name: '2am',
                time: 2
            },
            {
                name: '3am',
                time: 3
            },
            {
                name: '4am',
                time: 4
            },
            {
                name: '5am',
                time: 5
            },
            {
                name: '6am',
                time: 6
            },
            {
                name: '7am',
                time: 7
            },
            {
                name: '8am',
                time: 8
            },
            {
                name: '9am',
                time: 9
            },
            {
                name: '10am',
                time: 10
            },
            {
                name: '11am',
                time: 11
            },
            {
                name: '12pm',
                time: 12
            },
            {
                name: '1pm',
                time: 13
            },
            {
                name: '2pm',
                time: 14
            },
            {
                name: '3pm',
                time: 15
            },
            {
                name: '4pm',
                time: 16
            },
            {
                name: '5pm',
                time: 17
            },
            {
                name: '6pm',
                time: 18
            },
            {
                name: '7pm',
                time: 19
            },
            {
                name: '8pm',
                time: 20
            },
            {
                name: '9pm',
                time: 21
            },
            {
                name: '10pm',
                time: 22
            },
            {
                name: '11pm',
                time: 23
            }
        ],
        holidays: [
            {
                name: 'New Year\'s Day',
                month: 'January',
                eventDate: 1,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Martin Luther King\'s Birthday',
                month: 'January',
                day: ['Monday'],
                dayNum: 3,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Groundhog Day',
                month: 'February',
                eventDate: 2,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Valentine\'s Day',
                month: 'February',
                eventDate: 14,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'President\'s Day',
                month: 'February',
                day: ['Monday'],
                dayNum: 3,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'St. Patrick\'s Day',
                month: 'March',
                eventDate: 17,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'April Fool\'s Day',
                month: 'April',
                eventDate: 1,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Earth Day',
                month: 'April',
                eventDate: 22,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Arbor Day',
                month: 'April',
                day: ['Friday'],
                dayNum: 'last',
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'May Day',
                month: 'May',
                eventDate: 1,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Cinco De Mayo',
                month: 'May',
                eventDate: 5,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Mother\'s Day',
                month: 'May',
                day: ['Sunday'],
                dayNum: 2,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Memorial Day',
                month: 'May',
                day: ['Monday'],
                dayNum: 'last',
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Flag Day',
                month: 'June',
                eventDate: 14,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Father\'s Day',
                month: 'June',
                day: ['Sunday'],
                type: 'holiday',
                recurrance: 'yearly',
                dayNum: 3
            },
            {
                name: 'Independence Day',
                month: 'July',
                eventDate: 4,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Labor Day',
                month: 'September',
                day: ['Monday'],
                dayNum: 1,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Patroit Day',
                month: 'September',
                eventDate: 11,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Columbus Day',
                month: 'October',
                day: ['Monday'],
                dayNum: 2,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Halloween',
                month: 'October',
                eventDate: 31,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Veteran\'s Day',
                month: 'November',
                eventDate: 11,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Thanksgiving',
                month: 'November',
                day: ['Thursday'],
                dayNum: 4,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Pearl Harbor Day',
                month: 'December',
                eventDate: 7,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Festivus',
                month: 'December',
                eventDate: 23,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Christmas Eve',
                month: 'December',
                eventDate: 24,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Christmas',
                month: 'December',
                eventDate: 25,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'Boxing Day',
                month: 'December',
                eventDate: 26,
                type: 'holiday',
                recurrance: 'yearly'
            },
            {
                name: 'New Year\'s Eve',
                month: 'December',
                eventDate: 31,
                type: 'holiday',
                recurrance: 'yearly'
            }
        ],
        isLeapYear(year) {
            if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ) {
                return true;
            }

            return false;
        },
        getDaysInYear(year) {
            if (this.isLeapYear(year)) {
                return 366;
            }

            return 365;
        },
        getDaysInMonth(dateObj) {
            return new Date(dateObj.year, dateObj.month + 1, 0).getDate();
        },
        getDayOfWeek(dateObj) {
            return new Date(dateObj.year, dateObj.month, dateObj.date).getDay();
        },
        getFirstDayOfMonth(dateObj) {
            return this.getDayOfWeek({
                'month': dateObj.month,
                'date': 1,
                'year': dateObj.year
            });
        },
        getWeeksInMonth(dateObj) {
            const firstDay = this.getFirstDayOfMonth(dateObj);
            const numberDays = this.getDaysInMonth(dateObj);
            const dayShift = (firstDay === this.daysPerWeek) ? 0 : firstDay;

            return Math.ceil((numberDays + dayShift) / this.daysPerWeek);
        },
        // dateObj is a date object
        getPrevYear(dateObj) {
            return dateObj.year - 1;
        },
        // dateObj is a date object
        getNextYear(dateObj) {
            return dateObj.year + 1;
        },
        // dateObj is a date object
        getPrevMonth(dateObj) {
            if (dateObj.month === 0) {
                return 11;
            }

            return dateObj.month - 1;
        },
        // dateObj is a date object
        getNextMonth(dateObj) {
            if (dateObj.month === 11) {
                return 0;
            }

            return dateObj.month + 1;
        },
        getPrevDate(dateObj) {
            let lastMonth = this.getPrevMonth(dateObj);
            let lastDateInLastMonth = this.getDaysInMonth({
                'month': lastMonth,
                'date': dateObj.date,
                'year': dateObj.year
            });

            // if its the first day of the month
            if (dateObj.date === 1) {
                return lastDateInLastMonth;
            }

            return dateObj.date - 1;
        },
        getNextDate(dateObj) {
            const lastDateInMonth = this.getDaysInMonth(dateObj);

            if (dateObj.date === lastDateInMonth) {
                return 1;
            }

            return dateObj.date + 1;
        },
        // today is a date object
        getYesterday(today) {
            const yesterday = {};
            // assign month
            if (today.date === 1) {
                yesterday.month = this.getPrevMonth(today);
            } else {
                yesterday.month = today.month;
            }

            // assign date
            yesterday.date = this.getPrevDate(today);

            // assign year
            if (today.month === 0 && today.date === 1) {
                yesterday.year = this.getPrevYear(today);
            } else {
                yesterday.year = today.year;
            }

            return yesterday;
        },
        // today is a date object
        getTomorrow(today) {
            const lastDateInMonth = this.getDaysInMonth(today);
            const tomorrow = {};

            if (today.date === lastDateInMonth) {
                tomorrow.month = this.getNextMonth(today);
            } else {
                tomorrow.month = today.month;
            }

            tomorrow.date = this.getNextDate(today);

            if (today.month === 11 && today.date === lastDateInMonth) {
                tomorrow.year = today.year + 1;
            } else {
                tomorrow.year = today.year;
            }

            return tomorrow;
        },
        getMonthNum(date) {
            const month = date.match(this.datePatterns.numericMonth);

            if (month) {
                return parseInt(month[0], 10) - 1;
            }

            return false;
        },
        getMonthByName(date) {
            const months = [];
            const shortMonths = [];

            // month or day of the week
            const dayMonth = date.match(this.datePatterns.monthName);
            const month = elr.trim(dayMonth[0]).toLowerCase();

            // create months array
            this.months.map(function(str) {
                months.push(str.toLowerCase());
            });

            // create short months array
            this.shortMonths.map(function(str) {
                shortMonths.push(str.toLowerCase());
            });

            if (elr.inArray(months, month) !== -1) {
                return elr.inArray(months, month);
            } else if (elr.inArray(shortMonths, month) !== -1) {
                return elr.inArray(shortMonths, month);
            } else {
                return false;
            }
        },
        getMonthName(date, style = 'MMMM') {
            const monthNum = this.getMonthNum(date);
            let num;

            if (monthNum) {
                num = monthNum;
            } else {
                let monthByName = this.getMonthByName(date);
                num = monthByName;
            }

            if (style === 'MMM') {
                return this.shortMonths[num];
            } else {
                return this.months[num];
            }
        },
        getDateNum(date) {
            const d = date.match(elr.patterns.dateNumber);

            if (d[1]) {
                return parseInt(d[1], 10);
            } else if (d[2]) {
                return parseInt(d[2], 10);
            } else if (d[3]) {
                return parseInt(d[3], 10);
            } else {
                return false;
            }
        },
        getYearNum(date) {
            const year = date.match(this.datePatterns.year);

            return parseInt(year[1], 10);
        },
        getTimeHours(time) {
            const ampm = time.match(this.datePatterns.ampm)[1];
            let hour = time.match(this.datePatterns.hour);

            if (hour[1]) {
                hour = parseInt(hour[1], 10);
            } else {
                hour = parseInt(hour[2], 10);
            }

            if (ampm === 'am' && hour === 12) {
                return 0;
            } else if (ampm === 'pm' && hour < 12) {
                return hour + 12;
            } else {
                return hour;
            }
        },
        getTimeMinutes(time) {
            const minute = time.match(this.datePatterns.minutes);

            return parseInt(minute[1], 10);
        },
        getTimeSeconds(time) {
            const second = time.match(this.datePatterns.seconds);

            if (second) {
                return parseInt(second[1], 10);
            }

            return 0;
        },
        getDateByKeyword(date = 'today') {
            const keyword = date.match(this.datePatterns.dateKeyword)[0];
            const today = this.today();

            if (keyword === 'yesterday') {
                return this.getYesterday(today);
            } else if (keyword === 'today') {
                return {
                    'month': today.month,
                    'date': today.date,
                    'year': today.year
                };
            } else if (keyword === 'tomorrow') {
                return this.getTomorrow(today);
            }
        },
        parseLongDate(date) {
            return {
                month: this.getMonthName(date),
                date: this.getDateNum(date),
                year: this.getYearNum(date)
            };
        },
        parseNumericDate(date) {
            const fullDate = date.match(this.datePatterns.numericDate)[0];

            return {
                month: this.getMonthName(fullDate),
                date: this.getDateNum(fullDate),
                year: this.getYearNum(fullDate)
            };
        },
        parseDate(date) {
            // look for date keywords yesterday, today, tomorrow
            if (date.search(this.datePatterns.dateKeyword) !== -1) {
                return this.getDateByKeyword(date);
            } else if (date.search(this.datePatterns.longDate) !== -1) {
                return this.parseLongDate(date);
            } else if (date.search(this.datePatterns.numericDate) !== -1) {
                return this.parseNumericDate(date);
            }

            return null;
        },
        parseTimeKeyword(time) {
            const keyword = time.match(this.datePatterns.timeKeyword)[0];

            if (keyword === 'noon') {
                return {
                    hour: 12,
                    minute: 0,
                    second: 0
                };
            } else if (keyword === 'midnight') {
                return {
                    hour: 0,
                    minute: 0,
                    second: 0
                };
            }
        },
        parseNumericTime(time) {
            const fullTime = time.match(this.datePatterns.time)[0];

            return {
                hour: this.getTimeHours(fullTime),
                minute: this.getTimeMinutes(fullTime),
                second: this.getTimeSeconds(fullTime)
            };
        },
        parseTime(time) {
            if (time.search(this.datePatterns.timeKeyword) !== -1) {
                return this.parseTimeKeyword(time);
            } else if (time.search(this.datePatterns.time) !== -1) {
                return this.parseNumericTime(time);
            }

            return null;
        },
        parseDateTime(dateTime) {
            const date = this.parseDate(dateTime);
            const time = this.parseTime(dateTime);
            const today = this.today();

            const month = (date) ? this.getMonthByName(date.month) : 2;

            if (date && time) {
                return new Date(date.year, month, date.date, time.hour, time.minute, time.second);
            } else if (date && !time) {
                return new Date(date.year, month, date.date);
            } else if (!date && time) {
                return new Date(today.year, today.month, today.date, time.hour, time.minute, time.second);
            } else {
                return null;
            }
        },
        // converts military style time
        get12Hours(dateTime) {
            const parsedDate = this.parseDateTime(dateTime);
            const hours = parsedDate.getHours();

            if (hours === 0) {
                return 12;
            } else if (hours > 12) {
                return hours - 12;
            } else {
                return hours;
            }
        },
        getDatesFromLastMonth(dateObj, dates = []) {
            let firstDay = this.getFirstDayOfMonth(dateObj);
            let prevMonth = this.getPrevMonth(dateObj);

            // if the first day of the month is not a Sunday
            if (firstDay !== 0) {
                let remainingDays = firstDay;
                let prevMonthNumberDays = this.getDaysInMonth({
                    'month': this.getPrevMonth(dateObj),
                    'date': 0,
                    'year': dateObj.year
                });
                let leftOverDays = prevMonthNumberDays;

                for (var i = remainingDays; i > 0; i--) {
                    let year = (dateObj.month === 0) ? dateObj.year - 1 : dateObj.year;
                    dates.push({
                        'month': prevMonth,
                        'date': leftOverDays,
                        'year': year
                    });

                    leftOverDays = leftOverDays - 1;
                }

                dates = dates.reverse();
                return dates;
            }

            return dates;
        },
        getDatesFromLastYear(dateObj) {
            let firstDay = this.getFirstDayOfMonth(dateObj);
            let dates = [];

            if (firstDay !== 0) {
                // since december always has 31 days we can hard code this
                let startDate = 31 - (firstDay - 1);

                for (var day = 0; day < firstDay; day++) {
                    dates.push({
                        'month': 11,
                        'date': startDate,
                        'year': dateObj.year - 1
                    });

                    startDate = startDate + 1;
                }
            }

            return dates;
        },
        getFirstWeekOfYear(dateObj) {
            let firstDay = this.getFirstDayOfMonth(dateObj);
            let dates = [];

            if (dateObj.month === 0 && firstDay !== 0) {
                let lastYear = this.getDatesFromLastYear(dateObj);

                dates = [].concat(lastYear);

                // get the dates from the new year
                let remainingDays = this.daysPerWeek - dates.length;

                for (let day = 1; day <= remainingDays; day++) {
                    dates.push({
                        'month': 0,
                        'date': day,
                        'year': dateObj.year
                    });
                }
            } else if (dateObj.month === 0) {
                // dates 1 - 7
                for (let day = 1; day <= 7; day++) {
                    dates.push({
                        'month': 0,
                        'date': day,
                        'year': dateObj.year
                    });
                }
            }

            return dates;
        },
        getDatesInFirstWeek(dateObj) {
            let firstDay = this.getFirstDayOfMonth(dateObj);
            let dates = [];

            // if its the first week of the year
            if (dateObj.month === 0) {
                return this.getFirstWeekOfYear(dateObj);
            }

            // not the first week of the year
            let dayShift = (firstDay === this.daysPerWeek) ? 0 : firstDay;
            let daysInFirstWeek = this.daysPerWeek - dayShift;

            dates = [].concat(this.getDatesFromLastMonth(dateObj));

            for (var day = 1; day <= daysInFirstWeek; day++) {
                dates.push({
                    month: dateObj.month,
                    date: day,
                    year: dateObj.year
                });
            }

            return dates;
        },
        getLastDatesInMonth(dateObj) {
            // get the days left in month
            let numberDays = this.getDaysInMonth(dateObj);
            let lastDay = this.getDayOfWeek({
                'month': dateObj.month,
                'date': numberDays,
                'year': dateObj.year
            });
            let firstDateLastWeek = numberDays - lastDay;
            let dates = [];
            let remainingDays = lastDay + 1;
            let date = firstDateLastWeek;

            for (let i = remainingDays; i > 0; i--) {
                dates.push({
                    'month': dateObj.month,
                    'date': date,
                    'year': dateObj.year
                });

                date = date + 1;
            }

            return dates;
        },
        getFirstDatesInMonth(dateObj) {
            // get the first dates in the first week of the month
            const dates = [];

            // date in the the previous month
            if (dateObj.date >= this.daysPerWeek) {
                let year = (dateObj.month === 11) ? dateObj.year + 1 : dateObj.year;
                let lastDay = this.getDayOfWeek({
                    'month': dateObj.month,
                    'date': this.getDaysInMonth(dateObj),
                    'year': dateObj.year
                });
                let nextMonthDays = this.daysPerWeek - (lastDay + 1);
                let date = 1;

                for (let i = nextMonthDays; i > 0; i--) {
                    dates.push({
                        'month': this.getNextMonth(dateObj),
                        'date': date,
                        'year': year
                    });

                    date = date + 1;
                }
            // if date is in the current month
            } else {
                const firstDay = this.getDayOfWeek({
                    'month': dateObj.month,
                    'date': 1,
                    'year': dateObj.year
                });
                const remainingDays = this.daysPerWeek - firstDay;
                let date = 1;

                for (let i = remainingDays; i > 0; i--) {
                    dates.push({
                        'month': dateObj.month,
                        'date': date,
                        'year': dateObj.year
                    });

                    date = date + 1;
                }
            }

            return dates;
        },
        getDatesInLastWeek(dateObj) {
            // gets the dates in the last week of the month

            return [].concat(this.getLastDatesInMonth(dateObj))
                .concat(this.getFirstDatesInMonth(dateObj));
        },
        getDatesInMiddleWeek(dateObj) {
            const dates = [];
            const dayOfWeek = this.getDayOfWeek(dateObj);
            const firstDateOfWeek = dateObj.date - dayOfWeek;
            const lastDateOfWeek = firstDateOfWeek + this.daysPerWeek;

            for (let date = firstDateOfWeek; date < lastDateOfWeek; date++) {
                dates.push({
                    'month': dateObj.month,
                    'date': date,
                    'year': dateObj.year
                });
            }

            return dates;
        },
        isFirstWeekOfMonth(dateObj) {
            let dates = this.getFirstDatesInMonth(dateObj);

            if (dates.length && dateObj.date <= dates[dates.length - 1].date) {
                return true;
            }

            return false;
        },
        getFirstDateOfWeek(dateObj) {
            let dayOfWeek = this.getDayOfWeek(dateObj);
            let firstDay = this.getFirstDayOfMonth(dateObj);

            // if the first day of the week is a Sunday then the dateObj is
            // the first date of the week
            if (dayOfWeek === 0) {
                return dateObj;
            // if its the first week of the month
            } else if (this.isFirstWeekOfMonth(dateObj)) {
                return this.getDatesInFirstWeek(dateObj)[0];
            } else {
                return {
                    'month': dateObj.month,
                    'date': dateObj.date - dayOfWeek,
                    'year': dateObj.year
                };
            }
        },
        getFirstDatesOfWeeks(dateObj) {
            const firstDates = [];
            const weeksInMonth = this.getWeeksInMonth(dateObj);
            let date = 1;

            for (let i = 0; i < weeksInMonth; i++) {
                firstDates.push(this.getFirstDateOfWeek({
                    'month': dateObj.month,
                    'date': date,
                    'year': dateObj.year
                }).date);

                date = date + 7;
            }

            return firstDates;
        },
        getMonthWeekNum(dateObj) {
            let firstDates = this.getFirstDatesOfWeeks(dateObj);
            let firstDayOfMonth = this.getFirstDayOfMonth(dateObj);
            let date = dateObj.date;
            let num;

            elr.each(firstDates, function(key, val) {
                if (date <= (7 - firstDayOfMonth) && key === 0) {
                    num = key + 1;
                } else if ((date >= val) && (date < val + 7)) {
                    num = key + 1;
                }

                return num;
            });

            return num;
        },
        getDatesInWeek(dateObj) {
            let numberDays = this.getDaysInMonth(dateObj);
            let currentDay = this.getDayOfWeek(dateObj);
            let lastMonthDays = 1;
            let weekNum = this.getMonthWeekNum(dateObj);

            let weekInfo = {
                datesInWeek: [],
                weekNum: weekNum
            };

            if (weekNum === 1) {
                weekInfo.datesInWeek = this.getDatesInFirstWeek(dateObj);
            } else if (weekNum === this.getWeeksInMonth(dateObj)) {
                weekInfo.datesInWeek = this.getDatesInLastWeek(dateObj);
            } else {
                weekInfo.datesInWeek = this.getDatesInMiddleWeek(dateObj);
            }

            return weekInfo;
        },
        // gets the length of the last week of the month
        getLastWeekLength(dateObj) {
            const lastDay = {
                'month': dateObj.month,
                'date': this.getDaysInMonth(dateObj),
                'year': dateObj.year
            };

            return this.getDayOfWeek(lastDay) + 1;
        },
        getDayShift(dayOfWeek) {
            if (dayOfWeek === this.daysPerWeek) {
                return 0;
            }

            return dayOfWeek;
        },
        //gets the week of the month when an event occurs
        getEventWeekNum(evt, year = this.today().year) {
            // gets the week of the month which an event occurs
            // TODO: add 'second', 'third', 'fourth' keywords
            let dateObj = {
                'month': elr.inArray(this.months, evt.month),
                'date': 1,
                'year': year
            };

            let firstDay = this.getFirstDayOfMonth(dateObj);
            let numberWeeks = this.getWeeksInMonth(dateObj);
            let lastWeekLength = this.getLastWeekLength(dateObj);
            let dayNum = evt.dayNum;
            let day = elr.inArray(this.days, evt.day[0]);

            if (dayNum === 'last') {
                // check if last week in month contains day
                if (lastWeekLength >= day) {
                    return numberWeeks;
                }

                return numberWeeks - 1;
            }

            if (dayNum === 'first') {
                // check if first week in month contains day
                if (firstDay <= day) {
                    return 1;
                }

                return 2;
            }

            // check if you should count from 1st or 2nd week of month
            if (this.getFirstDayOfMonth(dateObj) > day) {
                return dayNum + 1;
            }

            return dayNum;
        },
        // hasWeek53(dateObj) {
        //     return false;
        // },
        getWeekNums(dateObj) {
            let weekNum = 1;
            const weekNums = [];

            elr.each(this.months, (month) => {
                const firstDate = {
                    'month': month,
                    'date': 1,
                    'year': dateObj.year
                };

                const firstDayOfMonth = this.getDayOfWeek(firstDate);
                const numberWeeks = this.getWeeksInMonth(firstDate);

                for (let week = 1; week <= numberWeeks; week++) {
                    if (month === 0) {
                        if (week === 1 && (firstDayOfMonth > 4)) {
                            weekNum = 53;
                        } else if (week === 1) {
                            weekNum = 1;
                        } else if (weekNum === 53) {
                            weekNum = 1;
                        } else {
                            weekNum = weekNum + 1;
                        }
                    } else {
                        if (week === 1 && firstDayOfMonth !== 0) {
                            weekNum = weekNum;
                        } else {
                            weekNum = weekNum + 1;
                        }
                    }

                    // when the loop get the the current month add the week
                    // numbers to the array
                    if (dateObj.month === month) {
                        weekNums.push(weekNum);
                    }
                }

                if (month === dateObj.month) {
                    return weekNums;
                }
            });

            return weekNums;
        },
        getWeekNumber(dateObj) {
            const monthWeekNum = this.getDatesInWeek(dateObj).weekNum;
            const weekNums = this.getWeekNums(dateObj);
            return weekNums[monthWeekNum - 1];
        }
    };

    return self;
};

export default elrTimeUtilities;