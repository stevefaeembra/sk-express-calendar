Node/Express calendar
=====================

This Node/Express API returns calendar views


Installation
============

```
npm install
npm build
```

then use one of the following endpoints in the browser, by default at

```
localhost:3000
```

Endpoints
=========

*Calendar for given year*

```
localhost:3000/:year
```

*Calendar starting today*

```
localhost:3000/
```

*Calendar starting on given date*

```
localhost:3000/date?year=[year]&month=[month]&day=[day]
```
