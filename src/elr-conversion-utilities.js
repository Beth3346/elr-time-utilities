        // factors: {
        //     ms: 1,
        //     seconds: 1e3,
        //     minutes: 6e4,
        //     hours: 36e5,
        //     days: 864e5,
        //     weeks: 6048e5,
        //     months: 2592e6,
        //     years: 31556952e3
        // },
        // dateUtilities: {
        //     getYearsToDays: (years) => (years * 146097) / 400,
        //     getDaysToYears: (days) => (days * 400) / 146097
        // },
        // formatTokens: {
        //     dddd: (date) => {
        //         return this.days[date.getDay()]; // long day name
        //     },
        //     ddd: (date) => {
        //         return this.shortDays[date.getDay()]; // short day name
        //     },
        //     dd: (date) => {
        //         return this.minDays[date.getDay()]; // three letter day abbr
        //     },
        //     MMMM: (date) => {
        //         return this.months[date.getMonth()]; // long month name
        //     },
        //     MMM: (date) => {
        //         return this.shortMonths[date.getMonth()]; // short month name
        //     },
        //     MM: (date) => {
        //         // two digit month
        //         if (date.getMonth().toString().length === 1) {
        //             return '0' + date.getMonth().toString();
        //         }

        //         return date.getMonth();
        //     },
        //     M: (date) => {
        //         return date.getMonth(); // one digit month
        //     },
        //     DD: (date) => {
        //         if (date.getDate().toString().length === 1) {
        //             return '0' + date.getDate().toString();
        //         }

        //         date.getDate(); // two digit date
        //     },
        //     D: (date) => {
        //         return date.getDate(); // one digit date
        //     },
        //     yyyy: (date) => {
        //         return date.getFullYear(); // four digit year
        //     },
        //     yy: (date) => {
        //         return date.getFullYear().toString().slice(-2); // two digit year
        //     },
        //     hh: (date) => {
        //         if (this.get12Hours(date).toString().length === 1) {
        //             return '0' + this.get12Hours(date).toString();
        //         }

        //         this.get12Hours(date); // two digit hours
        //     },
        //     h: (date) => {
        //         return this.get12Hours(date); // one digit hours
        //     },
        //     HH: (date) => {
        //         if (date.getHours().toString().length === 1) {
        //             return '0' + date.getHours().toString();
        //         }

        //         date.getHours(); // two digit 24hr format
        //     },
        //     H: (date) => {
        //         return date.getHours(); // one digit 24hr format
        //     },
        //     mm: (date) => {
        //         if (date.getMinutes().toString().length === 1) {
        //             return '0' + date.getMinutes().toString();
        //         }

        //         date.getMinutes(); // two digit minutes
        //     },
        //     m: (date) => {
        //         return date.getMinutes(); // one digit minutes
        //     },
        //     ss: (date) => {
        //         if (date.getSeconds().toString().length === 1) {
        //             return '0' + date.getSeconds().toString();
        //         }

        //         date.getSeconds().toString(); // two digit seconds
        //     },
        //     s: (date) => {
        //         return date.getSeconds(); // one digit seconds
        //     },
        //     a: (date) => {
        //         if (date.getHours() >= 12) {
        //             return 'pm';
        //         }

        //         return 'am'; // ampm
        //     },
        //     A: (date) => {
        //         if (date.getHours() >= 12) {
        //             return 'PM';
        //         }

        //         return 'AM'; // AMPM
        //     }
        // },
        // conversionUtilities: {
        //     convertMsToSeconds: (ms) => {
        //         return ms/this.factors.seconds;
        //     },
        //     convertMsToMinutes: (ms) => {
        //         return ms/this.factors.minutes;
        //     },
        //     convertMsToHours: (ms) => {
        //         return ms/this.factors.hours;
        //     },
        //     convertMsToDays: (ms) => {
        //         return ms/this.factors.days;
        //     },
        //     convertMsToWeeks: (ms) => {
        //         return ms/this.factors.weeks;
        //     },
        //     convertMsToMonths: (ms) => {
        //         return ms/this.factors.months;
        //     },
        //     convertMsToYears: (ms) => {
        //         let days = this.convertMsToDays(ms);

        //         if ((ms/this.factors.days) >= 0) {
        //             days = Math.floor(ms/this.factors.days);
        //         } else {
        //             days = Math.ceil(ms/this.factors.days);
        //         }

        //         return this.dateUtilities.getDaysToYears(days);
        //     },
        //     convertSecondsToMs: (seconds) => {
        //         return seconds * this.factors.seconds;
        //     },
        //     convertMinutesToMs: (minutes) => {
        //         return minutes * this.factors.minutes;
        //     },
        //     convertHoursToMs: (hours) => {
        //         return hours * this.factors.hours;
        //     },
        //     convertDaysToMs: (days) => {
        //         return days * this.factors.days;
        //     }
        // },
        // durationUtilities: {
        //     getMsDuration(now, date) {
        //         return (now.getTime() - date.getTime()) / factors.ms;
        //     },
        //     getSecondsDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const seconds = self.conversionUtilities.convertMsToSeconds(ms);

        //         if (seconds >= 0) {
        //             return Math.floor(seconds);
        //         }

        //         return Math.ceil(seconds);
        //     },
        //     getMinutesDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const minutes = self.conversionUtilities.convertMsToMinutes(ms);

        //         if (minutes >= 0) {
        //             return Math.floor(minutes);
        //         }

        //         return Math.ceil(minutes);
        //     },
        //     getHoursDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const hours = self.conversionUtilities.convertMsToHours(ms);

        //         if (hours >= 0) {
        //             return Math.floor(hours);
        //         }

        //         return Math.ceil(hours);
        //     },
        //     getDaysDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const days = self.conversionUtilities.convertMsToDays(ms);

        //         if (days >= 0) {
        //             return Math.floor(days);
        //         }

        //         return Math.ceil(days);
        //     },
        //     getWeeksDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const weeks = self.conversionUtilities.convertMsToWeeks(ms);

        //         if (weeks >= 0) {
        //             return Math.floor(weeks);
        //         }

        //         return Math.ceil(weeks);
        //     },
        //     getMonthsDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const months = self.conversionUtilities.convertMsToMonths(ms);

        //         if (Math.abs(months) >= 1) {
        //             // round months up to account for number of weeks estimated weirdness
        //             if (months >= 0) {
        //                 return Math.ceil(months);
        //             }

        //             return Math.floor(months);
        //         }

        //         return 0;
        //     },
        //     getYearsDuration(now, date) {
        //         const ms = self.getMsDuration(now, date);
        //         const years = self.conversionUtilities.convertMsToYears(ms);

        //         if (years >= 0) {
        //             return Math.floor(years);
        //         }

        //         return Math.ceil(years);
        //     }
        // },
        // remainderUtilities: {
        //     // seconds, minutes, hours need adjustments for countdowns
        //     getLeftOverSeconds(now, date) {
        //         if ((date.getSeconds() !== 0) || (self.durationUtilities.getMsDuration(now, date) > 0)) {
        //             return now.getSeconds() - date.getSeconds();
        //         }

        //         return now.getSeconds() - 59;
        //     },
        //     getLeftOverMinutes(now, date) {
        //         if ((date.getMinutes() !== 0) || (self.durationUtilities.getMsDuration(now, date) > 0)) {
        //             return now.getMinutes() - date.getMinutes();
        //         }

        //         return now.getMinutes() - 59;
        //     },
        //     getLeftOverHours(now, date) {
        //         if ((date.getHours() !== 0) || (self.durationUtilities.getMsDuration(now, date) > 0)) {
        //             return now.getHours() - date.getHours();
        //         }

        //         return now.getHours() - 11;
        //     },
        //     getLeftOverDays(now, date) {
        //         const ms = self.durationUtilities.getMsDuration(now, date);
        //         const days = self.conversionUtilities.convertMsToDays(ms % factors.weeks);

        //         if (days >= 0) {
        //             return Math.floor(days);
        //         }

        //         return Math.ceil(days);
        //     },
        //     getLeftOverDaysInYear(now, date) {
        //         let days = self.durationUtilities.getDaysDuration(now, date);
        //         let years = self.durationUtilities.getYearsDuration(now, date);

        //         if (self.isLeapYear(date.getFullYear())) {
        //             days = days + 1;
        //         }

        //         days = days - self.dateUtilities.getYearsToDays(years);

        //         if (days >= 0) {
        //             return Math.floor(days);
        //         }

        //         return Math.ceil(days);
        //     }
        // },