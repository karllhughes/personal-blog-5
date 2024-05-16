---
layout: post
title: "Colleges API: A Database and REST API of Accredited Colleges in the United States"
date: 2017-03-29
img: https://i.imgur.com/BtTw8Cy.png
categories:
  - Archive
---
Back in 2013 I needed a list of all the colleges in the US. The best I could find was [this](http://ope.ed.gov/accreditation/GetDownloadFile.aspx). The list seemed complete (there are about 9000 colleges in the most recent version), but the formatting wasn't ideal.

I cleaned up the data a bit and uploaded a SQL and CSV file onto Github. Those files sat in a repository for years, and occasionally I would have a need for a list of colleges, so I'd refer back to those files.

This weekend, I decided to build a little API around them so that anyone can access this college data more easily.

### Open College Data API

This API is pretty simple, but here's an example of what you can do with it:

Get 100 colleges sorted by name:
```
https://colleges.khughes.me/api/colleges?order=name&page=1,100&transform=1
```

Get the second page of records for colleges in Memphis, TN:
```
https://colleges.khughes.me/api/colleges?order=id&page=2,20&filter=location,eq,Memphis, TN&transform=1
```

Get a single college by id
```
https://colleges.khughes.me/api/colleges/8d4052a5-e171-4717-9222-34fb4fc5836f
```

Right now I just include the location, address, name, website, phone number, and a couple IDs used for government purposes. Each result will look something like this:

```
{
      "id": "04d0037b-982b-4221-9e89-5d3028046b76",
      "name": "The University of Tennessee - Knoxville",
      "address": {
        "postalCode": "37996-0184",
        "addressRegion": "TN",
        "streetAddress": "527 Andy Holt Tower",
        "addressCountry": "US",
        "addressLocality": "Knoxville"
      },
      "alternateName": null,
      "brand": null,
      "description": null,
      "email": null,
      "faxNumber": null,
      "foundingDate": null,
      "location": "Knoxville, TN",
      "logo": null,
      "telephone": "865-974-1000",
      "url": "www.tennessee.edu",
      "opeId": "353000",
      "ipedsId": "221759",
      "alternativeId": 144032,
      "deleted_at": null,
      "created_at": "2017-03-26 03:33:04.891792",
      "updated_at": null
    }
```

Access is free, and the code is [open source](https://github.com/karllhughes/colleges) so you can always deploy it on your own server if you need something custom. I may make some slight improvements to this service, but I'll probably keep it pretty lean. Feel free to [submit an issue on Github](https://github.com/karllhughes/colleges/issues) if you have a question.
