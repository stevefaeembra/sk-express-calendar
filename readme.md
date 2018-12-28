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

**Calendar for 2019**

```
localhost:3000/2019
```

**Calendar starting today**

```
localhost:3000/
```

**Calendar starting on given date**

```
localhost:3000/date?year=2012&month=1&day=17
```

note that months are 1-indexed for this endpoint, so January is 1, February is 2 etc.

Design notes
============
- Thick black borders show the boundary between months.
- Thick magenta borders show the boundary between years.
- Weekends are shown in a buff colour
- Today's date is shown with a red border
