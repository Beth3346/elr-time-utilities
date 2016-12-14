import elrTimeUtilities from '../src/elr-time-utilities.js';

const elrTime = elrTimeUtilities();
const expect = require('chai').expect;
const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiSubset = require('chai-subset');

chai.use(assertArrays);
chai.use(require('chai-datetime'));
chai.use(chaiSubset);

const dateObj = {
    'month': 11,
    'date': 9,
    'year': 2016
};
const dateJan = {
    'month': 0,
    'date': 1,
    'year': 2016
};
const dateFeb = {
    'month': 1,
    'date': 1,
    'year': 2015
};
const dateJun = {
    'month': 5,
    'date': 1,
    'year': 2016
};
const dateLeap = {
    'month': 1,
    'date': 29,
    'year': 2016
};
const lastDayOfYear = {
    'month': 11,
    'date': 31,
    'year': 2016
};

describe('elrTime', function() {
    describe('#daysperweek', function() {
        it('should return todays date', function() {
            expect(elrTime.daysPerWeek).to.equal(7);
        });
    });
    describe('#isLeapYear', function() {
        it('should return true', function() {
            expect(elrTime.isLeapYear(2000)).to.be.true;
        });
        it('should return false', function() {
            expect(elrTime.isLeapYear(2001)).to.be.false;
        });
    });
    describe('#getDaysInYear', function() {
        it('there are 365 days in 2013', function() {
            expect(elrTime.getDaysInYear(2013)).to.equal(365);
        });
        it('there are 366 days in 2012', function() {
            expect(elrTime.getDaysInYear(2012)).to.equal(366);
        });
    });
    describe('#getDaysInMonth', function() {
        it('there are 31 days in December', function() {
            expect(elrTime.getDaysInMonth(dateObj)).to.equal(31);
        });
        it('there are 30 days in June', function() {
            expect(elrTime.getDaysInMonth(dateJun)).to.equal(30);
        });
        it('there are 28 days in February', function() {
            expect(elrTime.getDaysInMonth(dateFeb)).to.equal(28);
        });
        it('there are 29 days in a leap year February', function() {
            expect(elrTime.getDaysInMonth(dateLeap)).to.equal(29);
        });
    });
    describe('#getDayOfWeek', function() {
        it('should be Friday', function() {
            expect(elrTime.getDayOfWeek(dateObj)).to.equal(5);
        });
    });
    describe('#getFirstDayOfMonth', function() {
        it('should be Thursday', function() {
            expect(elrTime.getFirstDayOfMonth(dateObj)).to.equal(4);
        });
    });
    describe('#getWeeksInMonth', function() {
        it('there are 5 weeks in December 2016', function() {
            expect(elrTime.getWeeksInMonth(dateObj)).to.equal(5);
        });
        it('there are 6 weeks in December 2017', function() {
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2017
            };
            expect(elrTime.getWeeksInMonth(dateObj)).to.equal(6);
        });
    });
    describe('#getPrevYear', function() {
        it('should be 2015', function() {
            expect(elrTime.getPrevYear(dateObj)).to.equal(2015);
        });
    });
    describe('#getNextYear', function() {
        it('should be 2017', function() {
            expect(elrTime.getNextYear(dateObj)).to.equal(2017);
        });
    });
    describe('#getPrevMonth', function() {
        it('should be November', function() {
            expect(elrTime.getPrevMonth(dateObj)).to.equal(10);
        });
        it('should be December', function() {
            expect(elrTime.getPrevMonth(dateJan)).to.equal(11);
        });
    });
    describe('#getNextMonth', function() {
        it('should be March', function() {
            expect(elrTime.getNextMonth(dateFeb)).to.equal(2);
        });
        it('should be January', function() {
            expect(elrTime.getNextMonth(dateObj)).to.equal(0);
        });
    });
    describe('#getPrevDate', function() {
        it('should be 8', function() {
            expect(elrTime.getPrevDate(dateObj)).to.equal(8);
        });
        it('should be 31', function() {
            expect(elrTime.getPrevDate(dateJun)).to.equal(31);
        });
        it('should be 31', function() {
            expect(elrTime.getPrevDate(dateJan)).to.equal(31);
        });
    });
    describe('#getNextDate', function() {
        it('should be 10', function() {
            expect(elrTime.getNextDate(dateObj)).to.equal(10);
        });
        it('should be 1', function() {
            expect(elrTime.getNextDate(dateLeap)).to.equal(1);
        });
    });
    describe('#getYesterday', function() {
        it('should return December 8 2016', function() {
            expect(elrTime.getYesterday(dateObj).month).to.equal(11);
            expect(elrTime.getYesterday(dateObj).date).to.equal(8);
            expect(elrTime.getYesterday(dateObj).year).to.equal(2016);
        });
        it('should return December 31 2015', function() {
            expect(elrTime.getYesterday(dateJan).month).to.equal(11);
            expect(elrTime.getYesterday(dateJan).date).to.equal(31);
            expect(elrTime.getYesterday(dateJan).year).to.equal(dateJan.year - 1);
        });
    });
    describe('#getTomorrow', function() {
        it('should return December 10 2016', function() {
            expect(elrTime.getTomorrow(dateObj).month).to.equal(11);
            expect(elrTime.getTomorrow(dateObj).date).to.equal(10);
            expect(elrTime.getTomorrow(dateObj).year).to.equal(2016);
        });
        it('should return January 1 2017', function() {
            expect(elrTime.getTomorrow(lastDayOfYear).month).to.equal(0);
            expect(elrTime.getTomorrow(lastDayOfYear).date).to.equal(1);
            expect(elrTime.getTomorrow(lastDayOfYear).year).to.equal(2017);
        });
        it('should return March 1 2016', function() {
            expect(elrTime.getTomorrow(dateLeap).month).to.equal(2);
            expect(elrTime.getTomorrow(dateLeap).date).to.equal(1);
            expect(elrTime.getTomorrow(dateLeap).year).to.equal(2016);
        });
    });
    describe('#getMonthNum', function() {
        it('should be 2', function() {
            expect(elrTime.getMonthNum('03-24-1983')).to.equal(2);
        });
        it('should be 5', function() {
            expect(elrTime.getMonthNum('6-24-1983')).to.equal(5);
        });
    });
    describe('#getMonthByName', function() {
        it('should be 2', function() {
            expect(elrTime.getMonthByName('March 24, 1983')).to.equal(2);
        });
        it('should be 5', function() {
            expect(elrTime.getMonthByName('Jun 24, 1983')).to.equal(5);
        });
        it('should be 11', function() {
            expect(elrTime.getMonthByName('Sunday, December 11, 2016')).to.equal(11);
        });
    });
    describe('#getMonthName', function() {
        it('should be March', function() {
            expect(elrTime.getMonthName('03-24-1983')).to.equal('March');
        });
        it('should be March', function() {
            expect(elrTime.getMonthName('March 24, 1983')).to.equal('March');
        });
        it('should be March', function() {
            expect(elrTime.getMonthName('March 24, 1983 02:10:20am')).to.equal('March');
        });
        it('should be Dec', function() {
            expect(elrTime.getMonthName('Sunday, December 11, 2016', 'MMM')).to.equal('Dec');
        });
    });
    describe('#getDateNum', function() {
        it('should be 24', function() {
            expect(elrTime.getDateNum('03-24-1983')).to.equal(24);
        });
        it('should be 24', function() {
            expect(elrTime.getDateNum('March 24, 1983')).to.equal(24);
        });
        it('should be 24', function() {
            expect(elrTime.getDateNum('March 24, 1983 02:10:20am')).to.equal(24);
        });
        it('should be 11', function() {
            expect(elrTime.getDateNum('Sunday, December 11, 2016')).to.equal(11);
        });
    });
    describe('#getYearNum', function() {
        it('should be 1983', function() {
            expect(elrTime.getYearNum('03-24-1983')).to.equal(1983);
        });
        it('should be 1983', function() {
            expect(elrTime.getYearNum('March 24, 1983')).to.equal(1983);
        });
        it('should be 1983', function() {
            expect(elrTime.getYearNum('March 24, 1983 02:10:20am')).to.equal(1983);
        });
        it('should be 2016', function() {
            expect(elrTime.getYearNum('Sunday, December 11, 2016')).to.equal(2016);
        });
    });
    describe('#getTimeHours', function() {
        it('should be 12', function() {
            expect(elrTime.getTimeHours('12:00pm')).to.equal(12);
        });
        it('should be 0', function() {
            expect(elrTime.getTimeHours('12:00am')).to.equal(0);
        });
        it('should be 13', function() {
            expect(elrTime.getTimeHours('01:00:00pm')).to.equal(13);
        });
        it('should be 1', function() {
            expect(elrTime.getTimeHours('01:00:00am')).to.equal(1);
        });
        it('should be 13', function() {
            expect(elrTime.getTimeHours('1:00pm')).to.equal(13);
        });
    });
    describe('#getTimeMinutes', function() {
        it('should be 1', function() {
            expect(elrTime.getTimeMinutes('12:01pm')).to.equal(1);
        });
        it('should be 20', function() {
            expect(elrTime.getTimeMinutes('12:20am')).to.equal(20);
        });
        it('should be 4', function() {
            expect(elrTime.getTimeMinutes('01:04:00pm')).to.equal(4);
        });
        it('should be 19', function() {
            expect(elrTime.getTimeMinutes('01:19:00am')).to.equal(19);
        });
    });
    describe('#getTimeSeconds', function() {
        it('should be 4', function() {
            expect(elrTime.getTimeSeconds('01:04:04pm')).to.equal(4);
        });
        it('should be 19', function() {
            expect(elrTime.getTimeSeconds('01:19:19am')).to.equal(19);
        });
    });
    describe('#getDateByKeyword', function() {
        it('should return yesterday', function() {
            const today = elrTime.today();
            const yesterday = elrTime.getYesterday(today);

            expect(elrTime.getDateByKeyword('yesterday').month).to.equal(yesterday.month);
            expect(elrTime.getDateByKeyword('yesterday').date).to.equal(yesterday.date);
            expect(elrTime.getDateByKeyword('yesterday').year).to.equal(yesterday.year);
        });
        it('should return today', function() {
            const today = elrTime.today();

            expect(elrTime.getDateByKeyword('today').month).to.equal(today.month);
            expect(elrTime.getDateByKeyword('today').date).to.equal(today.date);
            expect(elrTime.getDateByKeyword('today').year).to.equal(today.year);
        });
        it('should return tomorrow', function() {
            const today = elrTime.today();
            const tomorrow = elrTime.getTomorrow(today);

            expect(elrTime.getDateByKeyword('tomorrow').month).to.equal(tomorrow.month);
            expect(elrTime.getDateByKeyword('tomorrow').date).to.equal(tomorrow.date);
            expect(elrTime.getDateByKeyword('tomorrow').year).to.equal(tomorrow.year);
        });
    });
    describe('#parseLongDate', function() {
        it('it should return date object', function() {
            const date = 'March 24, 1983 02:10:20am';

            expect(elrTime.parseLongDate(date).month).to.equal('March');
            expect(elrTime.parseLongDate(date).date).to.equal(24);
            expect(elrTime.parseLongDate(date).year).to.equal(1983);
        });
    });
    describe('#parseNumericDate', function() {
        it('should return date object', function() {
            const date = '03-24-1983';

            expect(elrTime.parseNumericDate(date).month).to.equal('March');
            expect(elrTime.parseNumericDate(date).date).to.equal(24);
            expect(elrTime.parseNumericDate(date).year).to.equal(1983);
        });
        it('should return date object', function() {
            const date = '03/24/1983';

            expect(elrTime.parseNumericDate(date).month).to.equal('March');
            expect(elrTime.parseNumericDate(date).date).to.equal(24);
            expect(elrTime.parseNumericDate(date).year).to.equal(1983);
        });
        it('should return date object', function() {
            const date = '3/24/1983';

            expect(elrTime.parseNumericDate(date).month).to.equal('March');
            expect(elrTime.parseNumericDate(date).date).to.equal(24);
            expect(elrTime.parseNumericDate(date).year).to.equal(1983);
        });
    });
    describe('#parseDate', function() {
        it('should return date object', function() {
            const date = 'March 24, 1983 02:10:20am';

            expect(elrTime.parseDate(date).month).to.equal('March');
            expect(elrTime.parseDate(date).date).to.equal(24);
            expect(elrTime.parseDate(date).year).to.equal(1983);
        });
        it('should return date object', function() {
            const date = 'March 24, 1983';

            expect(elrTime.parseDate(date).month).to.equal('March');
            expect(elrTime.parseDate(date).date).to.equal(24);
            expect(elrTime.parseDate(date).year).to.equal(1983);
        });
        it('should return yesterday', function() {
            const today = elrTime.today();
            const yesterday = elrTime.getYesterday(today);

            expect(elrTime.parseDate('yesterday').month).to.equal(yesterday.month);
            expect(elrTime.parseDate('yesterday').date).to.equal(yesterday.date);
            expect(elrTime.parseDate('yesterday').year).to.equal(yesterday.year);
        });
        it('should return date object', function() {
            const date = '03-24-1983';

            expect(elrTime.parseDate(date).month).to.equal('March');
            expect(elrTime.parseDate(date).date).to.equal(24);
            expect(elrTime.parseDate(date).year).to.equal(1983);
        });
        it('should return date object', function() {
            const date = '03/24/1983';

            expect(elrTime.parseDate(date).month).to.equal('March');
            expect(elrTime.parseDate(date).date).to.equal(24);
            expect(elrTime.parseDate(date).year).to.equal(1983);
        });
        it('should return date object', function() {
            const date = '3/24/1983';

            expect(elrTime.parseDate(date).month).to.equal('March');
            expect(elrTime.parseDate(date).date).to.equal(24);
            expect(elrTime.parseDate(date).year).to.equal(1983);
        });
    });
    describe('#parseTimeKeyword', function() {
        it('should return 00:00:00', function() {
            expect(elrTime.parseTimeKeyword('midnight').hour).to.equal(0);
            expect(elrTime.parseTimeKeyword('midnight').minute).to.equal(0);
            expect(elrTime.parseTimeKeyword('midnight').second).to.equal(0);
        });
        it('should return 12:00:00', function() {
            expect(elrTime.parseTimeKeyword('noon').hour).to.equal(12);
            expect(elrTime.parseTimeKeyword('noon').minute).to.equal(0);
            expect(elrTime.parseTimeKeyword('noon').second).to.equal(0);
        });
    });
    describe('#parseNumericTime', function() {
        it('should return time object', function() {
            const time = '02:10:20am';

            expect(elrTime.parseNumericTime(time).hour).to.equal(2);
            expect(elrTime.parseNumericTime(time).minute).to.equal(10);
            expect(elrTime.parseNumericTime(time).second).to.equal(20);
        });
        it('should return 14', function() {
            const time = '02:10:20pm';

            expect(elrTime.parseNumericTime(time).hour).to.equal(14);
        });
    });
    describe('#parseTime', function() {
        it('should return time object', function() {
            const time = 'March 24, 1983 02:10:20am';

            expect(elrTime.parseTime(time).hour).to.equal(2);
            expect(elrTime.parseTime(time).minute).to.equal(10);
            expect(elrTime.parseTime(time).second).to.equal(20);
        });
        it('should return 14', function() {
            const time = '02:10:20pm';

            expect(elrTime.parseTime(time).hour).to.equal(14);
        });
        it('should return 00:00:00', function() {
            expect(elrTime.parseTime('midnight').hour).to.equal(0);
            expect(elrTime.parseTime('midnight').minute).to.equal(0);
            expect(elrTime.parseTime('midnight').second).to.equal(0);
        });
        it('should return 12:00:00', function() {
            expect(elrTime.parseTime('noon').hour).to.equal(12);
            expect(elrTime.parseTime('noon').minute).to.equal(0);
            expect(elrTime.parseTime('noon').second).to.equal(0);
        });
    });
    describe('#parseDateTime', function() {
        it('should return date and time', function() {
            const dateTime = 'March 24, 1983 02:10:20am';
            const date = new Date(1983, 2, 24, 2, 10, 20);

            expect(elrTime.parseDateTime(dateTime)).to.equalDate(date);
            expect(elrTime.parseDateTime(dateTime)).to.equalTime(date);
        });
        it('should return date', function() {
            const dateTime = 'March 24 1983';
            const date = new Date(1983, 2, 24);

            expect(elrTime.parseDateTime(dateTime)).to.equalDate(date);
        });
        it('should return time', function() {
            const dateTime = '02:10:20am';
            const today = elrTime.today();
            const date = new Date(today.year, today.month, today.date, 2, 10, 20);

            expect(elrTime.parseDateTime(dateTime)).to.equalTime(date);
        });
        it('should return afternoon time', function() {
            const dateTime = '02:10:20pm';
            const today = elrTime.today();
            const date = new Date(today.year, today.month, today.date, 14, 10, 20);

            expect(elrTime.parseDateTime(dateTime)).to.equalTime(date);
        });
    });
    describe('#get12Hours', function() {
        it('should be 2', function() {
            expect(elrTime.get12Hours('March 24, 1983 02:10:20am')).to.equal(2);
        });
        it('should convert 14 to 2', function() {
            expect(elrTime.get12Hours('March 24, 1983 02:10:20pm')).to.equal(2);
        });
        it('should be 12', function() {
            expect(elrTime.get12Hours('March 24, 1983 12:10:20am')).to.equal(12);
        });
        it('should be 12', function() {
            expect(elrTime.get12Hours('March 24, 1983 12:10:20pm')).to.equal(12);
        });
    });
    describe('#getDatesFromLastMonth', function() {
        it('should be November 27 2016 through November 30 2016', function() {
            const dates = [
            {
                "date": 27,
                "month": 10,
                "year": 2016
            },
            {
                "date": 28,
                "month": 10,
                "year": 2016
            },
            {
                "date": 29,
                "month": 10,
                "year": 2016
            },
            {
                "date": 30,
                "month": 10,
                "year": 2016
            }]
            expect(elrTime.getDatesFromLastMonth(dateObj)).to.be.ofSize(4);
            expect(elrTime.getDatesFromLastMonth(dateObj)).to.containSubset(dates);
        });
        it('should be empty because the first of the month is a Sunday', function() {
            const dates = [];
            const dateObj = {
                'month': 0,
                'date': 1,
                'year': 2017
            };
            expect(elrTime.getDatesFromLastMonth(dateObj)).to.be.ofSize(0);
            expect(elrTime.getDatesFromLastMonth(dateObj)).to.containSubset(dates);
        });
        it('should be December 27 2015 through December 31 2015', function() {
            const dates = [
            {
                "date": 27,
                "month": 11,
                "year": 2015
            },
            {
                "date": 28,
                "month": 11,
                "year": 2015
            },
            {
                "date": 29,
                "month": 11,
                "year": 2015
            },
            {
                "date": 30,
                "month": 11,
                "year": 2015
            },
            {
                "date": 31,
                "month": 11,
                "year": 2015
            }];
            expect(elrTime.getDatesFromLastMonth(dateJan)).to.be.ofSize(5);
            expect(elrTime.getDatesFromLastMonth(dateJan)).to.containSubset(dates);
        });
    });
    describe('#getDatesFromLastYear', function() {
        it('should be December 27 2015 through December 31 2015', function() {
            const dates = [
            {
                "date": 27,
                "month": 11,
                "year": 2015
            },
            {
                "date": 28,
                "month": 11,
                "year": 2015
            },
            {
                "date": 29,
                "month": 11,
                "year": 2015
            },
            {
                "date": 30,
                "month": 11,
                "year": 2015
            },
            {
                "date": 31,
                "month": 11,
                "year": 2015
            }];
            expect(elrTime.getDatesFromLastYear(dateJan)).to.be.ofSize(5);
            expect(elrTime.getDatesFromLastYear(dateJan)).to.containSubset(dates);
        });
        it('should be empty because the first day of the year is Sunday', function() {
            const dates = [];
            const date = {
                'month': 0,
                'date': 1,
                'year': 2017
            };
            expect(elrTime.getDatesFromLastYear(date)).to.be.ofSize(0);
            expect(elrTime.getDatesFromLastYear(date)).to.containSubset(dates);
        });
    });
    describe('#getFirstWeekOfYear', function() {
        it('should be December 27 2015 through January 2 2016', function() {
            const dates = [
            {
                "date": 27,
                "month": 11,
                "year": 2015
            },
            {
                "date": 28,
                "month": 11,
                "year": 2015
            },
            {
                "date": 29,
                "month": 11,
                "year": 2015
            },
            {
                "date": 30,
                "month": 11,
                "year": 2015
            },
            {
                "date": 31,
                "month": 11,
                "year": 2015
            },
            {
                "date": 1,
                "month": 0,
                "year": 2016
            },
            {
                "date": 2,
                "month": 0,
                "year": 2016
            }];

            expect(elrTime.getFirstWeekOfYear(dateJan)).to.be.ofSize(7);
            expect(elrTime.getFirstWeekOfYear(dateJan)).to.containSubset(dates);
        });
        it('should be January 1 2017 through January 7 2017', function() {
            const dates = [
            {
                "date": 1,
                "month": 0,
                "year": 2017
            },
            {
                "date": 2,
                "month": 0,
                "year": 2017
            },
            {
                "date": 3,
                "month": 0,
                "year": 2017
            },
            {
                "date": 4,
                "month": 0,
                "year": 2017
            },
            {
                "date": 5,
                "month": 0,
                "year": 2017
            },
            {
                "date": 6,
                "month": 0,
                "year": 2017
            },
            {
                "date": 7,
                "month": 0,
                "year": 2017
            }];

            const date = {
                'month': 0,
                'date': 1,
                'year': 2017
            };

            expect(elrTime.getFirstWeekOfYear(date)).to.be.ofSize(7);
            expect(elrTime.getFirstWeekOfYear(date)).to.containSubset(dates);
        });
        it('should be an empty array since this is not the first week of the year', function() {
            const date = {
                'month': 2,
                'date': 1,
                'year': 2017
            };

            expect(elrTime.getFirstWeekOfYear(date)).to.be.ofSize(0);
            expect(elrTime.getFirstWeekOfYear(date)).to.containSubset([]);
        });
    });
    describe('#getDatesInFirstWeek', function() {
        it('should be November 27 2016 through December 3 2016', function() {
            const dates = [
            {
                'month': 10,
                'date': 27,
                'year': 2016
            },
            {
                'month': 10,
                'date': 28,
                'year': 2016
            },
            {
                'month': 10,
                'date': 29,
                'year': 2016
            },
            {
                'month': 10,
                'date': 30,
                'year': 2016
            },
            {
                'month': 11,
                'date': 1,
                'year': 2016
            },
            {
                'month': 11,
                'date': 2,
                'year': 2016
            },
            {
                'month': 11,
                'date': 3,
                'year': 2016
            }];

            expect(elrTime.getDatesInFirstWeek(dateObj)).to.be.ofSize(7);
            expect(elrTime.getDatesInFirstWeek(dateObj)).to.containSubset(dates);
        });
        it('should be December 27 2015 through January 2 2016', function() {
            const dates = [
            {
                "date": 27,
                "month": 11,
                "year": 2015
            },
            {
                "date": 28,
                "month": 11,
                "year": 2015
            },
            {
                "date": 29,
                "month": 11,
                "year": 2015
            },
            {
                "date": 30,
                "month": 11,
                "year": 2015
            },
            {
                "date": 31,
                "month": 11,
                "year": 2015
            },
            {
                "date": 1,
                "month": 0,
                "year": 2016
            },
            {
                "date": 2,
                "month": 0,
                "year": 2016
            }];

            expect(elrTime.getDatesInFirstWeek(dateJan)).to.be.ofSize(7);
            expect(elrTime.getDatesInFirstWeek(dateJan)).to.containSubset(dates);
        });
    });
    describe('#getFirstDatesInMonth', function() {
        it('should be December 1 2016 through December 3 2016', function() {
            const dateObj = {
                'month': 10,
                'date': 30,
                'year': 2016
            };
            const dates = [
            {
                "month": 11,
                "date": 1,
                "year": 2016
            },
            {
                "month": 11,
                "date": 2,
                "year": 2016
            },
            {
                "month": 11,
                "date": 3,
                "year": 2016
            }];

            expect(elrTime.getFirstDatesInMonth(dateObj)).to.be.ofSize(3);
            expect(elrTime.getFirstDatesInMonth(dateObj)).to.containSubset(dates);
        });
        it('should be December 1 2016 through December 3 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 2,
                'year': 2016
            };
            const dates = [
            {
                "month": 11,
                "date": 1,
                "year": 2016
            },
            {
                "month": 11,
                "date": 2,
                "year": 2016
            },
            {
                "month": 11,
                "date": 3,
                "year": 2016
            }];

            expect(elrTime.getFirstDatesInMonth(dateObj)).to.be.ofSize(3);
            expect(elrTime.getFirstDatesInMonth(dateObj)).to.containSubset(dates);
        });
    });
    describe('#getDatesInLastWeek', function() {
        it('should be December 25 2016 through December 31 2016', function() {
            const dates = [
            {
                'month': 11,
                'date': 25,
                'year': 2016
            },
            {
                'month': 11,
                'date': 26,
                'year': 2016
            },
            {
                'month': 11,
                'date': 27,
                'year': 2016
            },
            {
                'month': 11,
                'date': 28,
                'year': 2016
            },
            {
                'month': 11,
                'date': 29,
                'year': 2016
            },
            {
                'month': 11,
                'date': 30,
                'year': 2016
            },
            {
                'month': 11,
                'date': 31,
                'year': 2016
            }];
            expect(elrTime.getDatesInLastWeek(dateObj)).to.be.ofSize(7);
            expect(elrTime.getDatesInLastWeek(dateObj)).to.containSubset(dates);
        });
        it('should be November 27 2016 through December 3 2016', function() {
            const dateObj = {
                'month': 10,
                'date': 25,
                'year': 2016
            };
            const dates = [
            {
                'month': 10,
                'date': 27,
                'year': 2016
            },
            {
                'month': 10,
                'date': 28,
                'year': 2016
            },
            {
                'month': 10,
                'date': 29,
                'year': 2016
            },
            {
                'month': 10,
                'date': 30,
                'year': 2016
            },
            {
                'month': 11,
                'date': 1,
                'year': 2016
            },
            {
                'month': 11,
                'date': 2,
                'year': 2016
            },
            {
                'month': 11,
                'date': 3,
                'year': 2016
            }];
            expect(elrTime.getDatesInLastWeek(dateObj)).to.be.ofSize(7);
            expect(elrTime.getDatesInLastWeek(dateObj)).to.containSubset(dates);
        });
        it('should be December 27 2015 through January 2 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 25,
                'year': 2015
            };

            const dates = [
            {
                'month': 11,
                'date': 27,
                'year': 2015
            },
            {
                'month': 11,
                'date': 28,
                'year': 2015
            },
            {
                'month': 11,
                'date': 29,
                'year': 2015
            },
            {
                'month': 11,
                'date': 30,
                'year': 2015
            },
            {
                'month': 11,
                'date': 31,
                'year': 2015
            },
            {
                'month': 0,
                'date': 1,
                'year': 2016
            },
            {
                'month': 0,
                'date': 2,
                'year': 2016
            }];
            expect(elrTime.getDatesInLastWeek(dateObj)).to.be.ofSize(7);
            expect(elrTime.getDatesInLastWeek(dateObj)).to.containSubset(dates);
        });
        it('should be December 27 2015 through January 2 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2017
            };

            const dates = [
            {
                'month': 11,
                'date': 31,
                'year': 2017
            },
            {
                'month': 0,
                'date': 1,
                'year': 2018
            },
            {
                'month': 0,
                'date': 2,
                'year': 2018
            },
            {
                'month': 0,
                'date': 3,
                'year': 2018
            },
            {
                'month': 0,
                'date': 4,
                'year': 2018
            },
            {
                'month': 0,
                'date': 5,
                'year': 2018
            },
            {
                'month': 0,
                'date': 6,
                'year': 2018
            }];
            expect(elrTime.getDatesInLastWeek(dateObj)).to.be.ofSize(7);
            expect(elrTime.getDatesInLastWeek(dateObj)).to.containSubset(dates);
        });
    });
    describe('#getDatesInMiddleWeek', function() {
        it('should be March 13 2016 through March 19 2016', function() {
            const dateObj = {
                'month': 2,
                'date': 15,
                'year': 2016
            };

            const dates = [
            {
                'month': 2,
                'date': 13,
                'year': 2016
            },
            {
                'month': 2,
                'date': 14,
                'year': 2016
            },
            {
                'month': 2,
                'date': 15,
                'year': 2016
            },
            {
                'month': 2,
                'date': 16,
                'year': 2016
            },
            {
                'month': 2,
                'date': 17,
                'year': 2016
            },
            {
                'month': 2,
                'date': 18,
                'year': 2016
            },
            {
                'month': 2,
                'date': 19,
                'year': 2016
            }];

            expect(elrTime.getDatesInMiddleWeek(dateObj)).to.be.ofSize(7);
            expect(elrTime.getDatesInMiddleWeek(dateObj)).to.containSubset(dates);
        });
    });
    describe('#isFirstWeekOfMonth', function() {
        it('should be false', function() {
            const dateObj = {
                'month': 10,
                'date': 31,
                'year': 2016
            };

            expect(elrTime.isFirstWeekOfMonth(dateObj)).to.be.false;
        });
        it('should be true', function() {
            const dateObj = {
                'month': 11,
                'date': 2,
                'year': 2016
            };

            expect(elrTime.isFirstWeekOfMonth(dateObj)).to.be.true;
        });
        it('should be false', function() {
            const dateObj = {
                'month': 11,
                'date': 15,
                'year': 2016
            };

            expect(elrTime.isFirstWeekOfMonth(dateObj)).to.be.false;
        });
    });
    describe('#getFirstDateOfWeek', function() {
        it('should be December 4, 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 9,
                'year': 2016
            };
            const date = {
                'month': 11,
                'date': 4,
                'year': 2016
            };

            expect(elrTime.getFirstDateOfWeek(dateObj)).to.containSubset(date);
        });
        it('should be December 4, 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 4,
                'year': 2016
            };
            const date = {
                'month': 11,
                'date': 4,
                'year': 2016
            };

            expect(elrTime.getFirstDateOfWeek(dateObj)).to.containSubset(date);
        });
        it('should be November 27, 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 1,
                'year': 2016
            };
            const date = {
                'month': 10,
                'date': 27,
                'year': 2016
            };

            expect(elrTime.getFirstDateOfWeek(dateObj)).to.containSubset(date);
        });
        it('should be November 27, 2016', function() {
            const dateObj = {
                'month': 11,
                'date': 2,
                'year': 2016
            };
            const date = {
                'month': 10,
                'date': 27,
                'year': 2016
            };

            expect(elrTime.getFirstDateOfWeek(dateObj)).to.containSubset(date);
        });
        it('should be December 27, 2015', function() {
            const dateObj = {
                'month': 0,
                'date': 1,
                'year': 2016
            };
            const date = {
                'month': 11,
                'date': 27,
                'year': 2015
            };

            expect(elrTime.getFirstDateOfWeek(dateObj)).to.containSubset(date);
        });
    });
    describe('#getFirstDatesOfWeeks', function() {
        it('should be 27, 4, 11, 18, 25', function() {
            const dates = [27, 4, 11, 18, 25];
            const dateObj = {
                'month': 11,
                'date': 9,
                'year': 2016
            };

            expect(elrTime.getFirstDatesOfWeeks(dateObj)).to.be.ofSize(5);
            expect(elrTime.getFirstDatesOfWeeks(dateObj)).to.containSubset(dates);
        });
        it('should be 29, 5, 12, 19, 26', function() {
            const dates = [29, 5, 12, 19, 26];
            const dateObj = {
                'month': 1,
                'date': 9,
                'year': 2017
            };

            expect(elrTime.getFirstDatesOfWeeks(dateObj)).to.be.ofSize(5);
            expect(elrTime.getFirstDatesOfWeeks(dateObj)).to.containSubset(dates);
        });
        it('should be 26, 3, 10, 17, 24, 31', function() {
            const dates = [26, 3, 10, 17, 24, 31];
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2017
            };

            expect(elrTime.getFirstDatesOfWeeks(dateObj)).to.be.ofSize(6);
            expect(elrTime.getFirstDatesOfWeeks(dateObj)).to.containSubset(dates);
        });
    });
    describe('#getMonthWeekNum', function() {
        it('should equal 2', function() {
            const dateObj = {
                'month': 11,
                'date': 9,
                'year': 2016
            };
            expect(elrTime.getMonthWeekNum(dateObj)).to.equal(2);
        });
        it('should equal 1', function() {
            const dateObj = {
                'month': 11,
                'date': 1,
                'year': 2016
            };
            expect(elrTime.getMonthWeekNum(dateObj)).to.equal(1);
        });
        it('should equal 4', function() {
            const dateObj = {
                'month': 11,
                'date': 20,
                'year': 2016
            };
            expect(elrTime.getMonthWeekNum(dateObj)).to.equal(4);
        });
        it('should equal 5', function() {
            const dateObj = {
                'month': 11,
                'date': 30,
                'year': 2016
            };
            expect(elrTime.getMonthWeekNum(dateObj)).to.equal(5);
        });
        it('should equal 6', function() {
            // const dates = [26, 3, 10, 17, 24, 31];
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2017
            };
            expect(elrTime.getMonthWeekNum(dateObj)).to.equal(6);
        });
        it('should equal 2', function() {
            // const dates = [26, 3, 10, 17, 24, 31];
            const dateObj = {
                'month': 1,
                'date': 9,
                'year': 2016
            };
            expect(elrTime.getMonthWeekNum(dateObj)).to.equal(2);
        });
    });
    describe('#getDatesInWeek', function() {
        it('should contain the dates from the second week of December 2016', function() {
            const datesInWeek = {
                'datesInWeek': [
                    {
                        'month': 11,
                        'date': 4,
                        'year': 2016
                    },
                    {
                        'month': 11,
                        'date': 5,
                        'year': 2016
                    },
                    {
                        'month': 11,
                        'date': 6,
                        'year': 2016
                    },
                    {
                        'month': 11,
                        'date': 7,
                        'year': 2016
                    },
                    {
                        'month': 11,
                        'date': 8,
                        'year': 2016
                    },
                    {
                        'month': 11,
                        'date': 9,
                        'year': 2016
                    },
                    {
                        'month': 11,
                        'date': 10,
                        'year': 2016
                    },
                ],
                'weekNum': 2
            };
            expect(elrTime.getDatesInWeek(dateObj).weekNum).to.equal(2);
            expect(elrTime.getDatesInWeek(dateObj).datesInWeek).to.be.ofSize(7);
            expect(elrTime.getDatesInWeek(dateObj)).to.containSubset(datesInWeek);
        });
        it('should contain the dates from the first week of 2017', function() {
            const datesInWeek = {
                'datesInWeek': [
                    {
                        'month': 0,
                        'date': 1,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 2,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 3,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 4,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 5,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 6,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 7,
                        'year': 2017
                    },
                ],
                'weekNum': 1
            };
            const dateObj = {
                'month': 0,
                'date': 1,
                'year': 2017
            };
            expect(elrTime.getDatesInWeek(dateObj).weekNum).to.equal(1);
            expect(elrTime.getDatesInWeek(dateObj).datesInWeek).to.be.ofSize(7);
            expect(elrTime.getDatesInWeek(dateObj)).to.containSubset(datesInWeek);
        });
        it('should contain the dates from the last week of 2017', function() {
            const datesInWeek = {
                'datesInWeek': [
                    {
                        'month': 11,
                        'date': 31,
                        'year': 2017
                    },
                    {
                        'month': 0,
                        'date': 1,
                        'year': 2018
                    },
                    {
                        'month': 0,
                        'date': 2,
                        'year': 2018
                    },
                    {
                        'month': 0,
                        'date': 3,
                        'year': 2018
                    },
                    {
                        'month': 0,
                        'date': 4,
                        'year': 2018
                    },
                    {
                        'month': 0,
                        'date': 5,
                        'year': 2018
                    },
                    {
                        'month': 0,
                        'date': 6,
                        'year': 2018
                    },
                ],
                'weekNum': 6
            };
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2017
            };
            expect(elrTime.getDatesInWeek(dateObj).weekNum).to.equal(6);
            expect(elrTime.getDatesInWeek(dateObj).datesInWeek).to.be.ofSize(7);
            expect(elrTime.getDatesInWeek(dateObj)).to.containSubset(datesInWeek);
        });
    });
    describe('#getLastWeekLength', function() {
        it('should be 7', function() {
            const dateObj = {
                'month': 11,
                'date': 9,
                'year': 2016
            };
            expect(elrTime.getLastWeekLength(dateObj)).to.equal(7);
        });
        it('should be 1', function() {
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2017
            };
            expect(elrTime.getLastWeekLength(dateObj)).to.equal(1);
        });
    });
    describe('#getDayShift', function() {
        it('should equal 4', function() {
            const dateObj = {
                'month': 11,
                'date': 1,
                'year': 2016
            };
            expect(elrTime.getDayShift(elrTime.getDayOfWeek(dateObj))).to.equal(4);
        });
        it('should equal 0', function() {
            const dateObj = {
                'month': 0,
                'date': 1,
                'year': 2017
            };
            expect(elrTime.getDayShift(elrTime.getDayOfWeek(dateObj))).to.equal(0);
        });
    });
    describe('#getEventWeekNum', function() {
        it('should equal 4', function() {
            const thanksgiving = {
                name: 'Thanksgiving',
                month: 'November',
                day: ['Thursday'],
                dayNum: 4,
                type: 'holiday',
                recurrance: 'yearly'
            };

            expect(elrTime.getEventWeekNum(thanksgiving)).to.equal(4);
        });
        it('should equal 1', function() {
            const event = {
                name: 'Some event',
                month: 'December',
                day: ['Thursday'],
                dayNum: 1,
                recurrance: 'yearly'
            };

            expect(elrTime.getEventWeekNum(event)).to.equal(1);
        });
        it('should equal 2', function() {
            const event = {
                name: 'Some event',
                month: 'December',
                day: ['Wednesday'],
                dayNum: 1,
                recurrance: 'yearly'
            };

            expect(elrTime.getEventWeekNum(event)).to.equal(2);
        });
        it('should equal 2', function() {
            const event = {
                name: 'Some event',
                month: 'December',
                day: ['Wednesday'],
                dayNum: 'first',
                recurrance: 'yearly'
            };

            expect(elrTime.getEventWeekNum(event)).to.equal(2);
        });
        it('should equal 5', function() {
            const event = {
                name: 'Some event',
                month: 'December',
                day: ['Wednesday'],
                dayNum: 'last',
                recurrance: 'yearly'
            };

            expect(elrTime.getEventWeekNum(event)).to.equal(5);
        });
        it('should equal 6', function() {
            const event = {
                name: 'Some event',
                month: 'December',
                day: ['Monday'],
                dayNum: 'last',
                recurrance: 'yearly'
            };

            expect(elrTime.getEventWeekNum(event, 2017)).to.equal(6);
        });
    });
    describe('#getWeekNums', function() {
        it('January 2016 should have weeks [53, 1, 2, 3, 4, 5]', function() {
            const dates = [53, 1, 2, 3, 4, 5];
            const dateObj = {
                'month': 0,
                'date': 30,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(6);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('February 2016 should have weeks [5, 6, 7, 8, 9]', function() {
            const dates = [5, 6, 7, 8, 9];
            const dateObj = {
                'month': 1,
                'date': 7,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('March 2016 should have weeks [9, 10, 11, 12, 13]', function() {
            const dates = [9, 10, 11, 12, 13];
            const dateObj = {
                'month': 2,
                'date': 15,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('April 2016 should have weeks [13, 14, 15, 16, 17]', function() {
            const dates = [13, 14, 15, 16, 17];
            const dateObj = {
                'month': 3,
                'date': 23,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('May 2016 should have weeks [18, 19, 20, 21, 22]', function() {
            const dates = [18, 19, 20, 21, 22];
            const dateObj = {
                'month': 4,
                'date': 23,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('June 2016 should have weeks [22, 23, 24, 25, 26]', function() {
            const dates = [22, 23, 24, 25, 26];
            const dateObj = {
                'month': 5,
                'date': 23,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('July 2016 should have weeks [26, 27, 28, 29, 30, 31]', function() {
            const dates = [26, 27, 28, 29, 30, 31];
            const dateObj = {
                'month': 6,
                'date': 12,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(6);
            // expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('August 2016 should have weeks [31, 32, 33, 34, 35]', function() {
            const dates = [31, 32, 33, 34, 35];
            const dateObj = {
                'month': 7,
                'date': 23,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            // expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('January 2015 should have weeks [1, 2, 3, 4, 5]', function() {
            const dates = [1, 2, 3, 4, 5];
            const dateObj = {
                'month': 0,
                'date': 2,
                'year': 2015
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('November 2015 should have weeks [45, 46, 47, 48, 49]', function() {
            const dates = [45, 46, 47, 48, 49];
            const dateObj = {
                'month': 10,
                'date': 31,
                'year': 2015
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('December 2015 should have weeks [49, 50, 51, 52, 53]', function() {
            const dates = [49, 50, 51, 52, 53];
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2015
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('December 2016 should have weeks [48, 49, 50, 51, 52]', function() {
            const dates = [48, 49, 50, 51, 52];
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2016
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('January 2017 should have weeks [1, 2, 3, 4, 5]', function() {
            const dates = [1, 2, 3, 4, 5];
            const dateObj = {
                'month': 0,
                'date': 1,
                'year': 2017
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('February 2017 should have weeks [5, 6, 7, 8, 9]', function() {
            const dates = [5, 6, 7, 8, 9];
            const dateObj = {
                'month': 1,
                'date': 1,
                'year': 2017
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
        it('December 2020 should have weeks [49, 50, 51, 52, 53]', function() {
            const dates = [49, 50, 51, 52, 53];
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2020
            };
            expect(elrTime.getWeekNums(dateObj)).to.be.ofSize(5);
            expect(elrTime.getWeekNums(dateObj)[0]).to.equal(dates[0]);
            expect(elrTime.getWeekNums(dateObj)).to.be.containSubset(dates);
        });
    });
    describe('#getWeekNumber', function() {
        it('should equal 53', function() {
            const dateObj = {
                'month': 11,
                'date': 31,
                'year': 2015
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(53);
        });
        it('should equal 53', function() {
            const dateObj = {
                'month': 0,
                'date': 1,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(53);
        });
        it('should equal 1', function() {
            const dateObj = {
                'month': 0,
                'date': 4,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(1);
        });
        it('should equal 1', function() {
            const dateObj = {
                'month': 0,
                'date': 4,
                'year': 2017
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(1);
        });
        it('should equal 3', function() {
            const dateObj = {
                'month': 0,
                'date': 23,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(3);
        });
        it('should equal 4', function() {
            const dateObj = {
                'month': 0,
                'date': 30,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(4);
        });
        it('should equal 6', function() {
            const dateObj = {
                'month': 1,
                'date': 7,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(6);
        });
        it('should equal 6', function() {
            const dateObj = {
                'month': 1,
                'date': 9,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(6);
        });
        it('should equal 7', function() {
            const dateObj = {
                'month': 1,
                'date': 16,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(7);
        });
        it('should equal 19', function() {
            const dateObj = {
                'month': 4,
                'date': 11,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(19);
        });
        it('should equal 49', function() {
            const dateObj = {
                'month': 11,
                'date': 9,
                'year': 2016
            };
            expect(elrTime.getWeekNumber(dateObj)).to.equal(49);
        });
    });
});