---
layout: post
title: "Using the Airtable API"
img: "/assets/airtable-api.png"
date: 2025-10-02
categories:
  - Tools
---

As an agency owner, I spend a lot of time tracking projects, finances, job applications, and content. For almost all of these use cases, spreadsheets could work, but for the past several years, I've moved the majority of my workflows like this to [Airtable](https://airtable.com/invite/r/4EaSmQNr).

The big advantage to using Airtable (and by extension, the Airtable API) is that it has an excellent visual user interface and integrations with many other tools built in. Plus, you can use Zapier to trigger custom actions when new items show up in Airtable.

If you haven't tried the Airtable API yet, you're in for a treat. Airtable having such a simple and intuitive API means all the data you store there instantly has the ability to programmatically interact with all your other tools and services. This opens you up to limitless possibilities for triggering automations or even building an entire website with Airtable as your back end.

In this post, I'll walk you through some of the pros and cons and share a quick tutorial for getting started with the Airtable API.

## Airtable API Pros
Some of the advantages to using Airtable's [no-code API](/posts/api-development) include:

- Super simple to get started, a zero-code solution
- Permissions using sharing settings in UI
- [Input forms](/posts/google-forms-alternatives) to allow users to add content
- Can use with [Zapier](https://zapier.com/) to trigger events in other services, send emails, etc.
- Database-style linking between records
- Query by complex functions for advanced filtering and searching of records
- User roles allow limited role-based permissions
- Excellent automatic documentation generated for each table
- API is automatic; every Airtable you make already has API access

## Airtable API Cons
Airtable isn't perfect though. In fact, you'll run into its limitations if you have a lot of traffic and don't cache the data. Some issues with the Airtable API include:

- Officially only allows up to 5 API requests per second, which might be fine for light use, but could be limiting as you scale up
- Free accounts are limited to 1,000 API calls per month
- Authenticating users requires them to have an Airtable account and generate their own API key
- Single API key is not as secure as OAuth or similar server-client flow
- Not as customizable as some options

## Getting Started with the Airtable API

Using Airtable as an API is straightforward, but a few important details matter, so here are the basics:

### 1) Set up your base and get IDs

1. Create a base and at least one table with a few fields/records.
2. Grab your **Base ID** (looks like `appXXXXXXXXXXXXXX`) and **Table ID** or name (e.g., `tblYYYYYYYYYYYYYY` or `Tasks`). You can find these in the API docs for your base or via the URL in the Airtable UI.

> Base URL pattern:  
> `https://api.airtable.com/v0/{baseId}/{tableNameOrId}`

### 2) Create a Personal Access Token (PAT)

Legacy “API keys” are deprecated, so now you have to use **Personal Access Tokens**. Create one and scope it minimally (for simple read/write to a table, common scopes are `data.records:read`, `data.records:write`, and often `schema.bases:read`). Store it as an environment variable; don't hard‑code or ship it to the browser!

> Auth header format:
> `Authorization: Bearer YOUR_PAT`

Then you can start making requests. Let's take a look at a few examples in the next section.

## Airtable API Examples

In all the following examples, be sure to replace:

- `YOUR_PAT` with your token  
- `appBASEID` with your base ID  
- `Tasks` (or `tblTableId`) with your table

### A) List records (with pagination, fields, filters, sort)

**cURL**
```bash
curl "https://api.airtable.com/v0/appBASEID/Tasks?pageSize=100" \
  -H "Authorization: Bearer $YOUR_PAT"
````

**JavaScript (fetch)**

```js
const BASE = "appBASEID";
const TABLE = "Tasks";
const url = `https://api.airtable.com/v0/${BASE}/${TABLE}?pageSize=100`;

const res = await fetch(url, {
  headers: { Authorization: `Bearer ${process.env.AIRTABLE_PAT}` }
});
const data = await res.json();
console.log(data.records); // [{ id, fields, ...}, ...]
```

**Python (requests)**

```python
import os, requests

BASE = "appBASEID"
TABLE = "Tasks"
url = f"https://api.airtable.com/v0/{BASE}/{TABLE}?pageSize=100"

r = requests.get(url, headers={
    "Authorization": f"Bearer {os.environ['AIRTABLE_PAT']}"
})
r.raise_for_status()
print(r.json()["records"])
```

**Filters and sorting**

* **Filter by formula:**

```bash
curl "https://api.airtable.com/v0/appBASEID/Tasks?filterByFormula={Status}='Open'" \
  -H "Authorization: Bearer $YOUR_PAT"
```

* **Sort by a field:**

```bash
curl "https://api.airtable.com/v0/appBASEID/Tasks?sort[0][field]=Priority&sort[0][direction]=desc" \
  -H "Authorization: Bearer $YOUR_PAT"
```

> Airtable supports `view`, `filterByFormula`, and `sort` for the list endpoint. Use URL encoding for complex formulas.

**Pagination:** If the response includes an `offset`, pass `offset=<value>` on the next call to fetch subsequent pages.

### B) Retrieve a single record by ID

```bash
curl "https://api.airtable.com/v0/appBASEID/Tasks/recXXXXXXXXXXXXXX" \
  -H "Authorization: Bearer $YOUR_PAT"
```

### C) Create records

**Single record (cURL)**

```bash
curl -X POST "https://api.airtable.com/v0/appBASEID/Tasks" \
  -H "Authorization: Bearer $YOUR_PAT" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": {
      "Title": "Write Airtable post",
      "Status": "Open",
      "Due Date": "2025-10-15"
    }
  }'
```

**Batch create (JS)**

```js
const res = await fetch(`https://api.airtable.com/v0/${BASE}/${TABLE}`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    records: [
      { fields: { Title: "Task A", Status: "Open" } },
      { fields: { Title: "Task B", Status: "Open" } }
    ]
  })
});
const out = await res.json();
console.log(out.records.map(r => r.id));
```

### D) Update records

**Partial update (PATCH)**

```bash
curl -X PATCH "https://api.airtable.com/v0/appBASEID/Tasks/recXXXXXXXXXXXXXX" \
  -H "Authorization: Bearer $YOUR_PAT" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": { "Status": "Done" }
  }'
```

**Batch update (Python)**

```python
import os, requests, json

BASE, TABLE = "appBASEID", "Tasks"
url = f"https://api.airtable.com/v0/{BASE}/{TABLE}"
payload = {
  "records": [
    {"id": "rec1...", "fields": {"Status": "In Progress"}},
    {"id": "rec2...", "fields": {"Status": "In Review"}}
  ]
}
r = requests.patch(url, headers={
    "Authorization": f"Bearer {os.environ['AIRTABLE_PAT']}",
    "Content-Type": "application/json"
}, data=json.dumps(payload))
r.raise_for_status()
print([rec["id"] for rec in r.json()["records"]])
```

> Use `PATCH` for partial updates; `PUT` replaces fields. Ensure your token has write scopes.

### E) Delete records

```bash
curl -X DELETE "https://api.airtable.com/v0/appBASEID/Tasks/recXXXXXXXXXXXXXX" \
  -H "Authorization: Bearer $YOUR_PAT"
```

> You can also send `records[]=rec1&records[]=rec2` to delete multiple.

## Practical Tips for the Airtable API

Finally, some more things to keep in mind when using the API:

* **The API is server‑side only:** Don’t expose your PAT in client‑side JS—proxy through your server or edge function.
* **Schema changes might break things:** If you rename fields, API calls using field names must be updated; consider using **field IDs** for stability.
* **Troubleshooting auth issues:** `401/403` typically means scope, base access, or header issues. Confirm your user is a collaborator on the base and the PAT is scoped to that base.
* **Filtering gotchas:** `filterByFormula` + `view` returns only matching records *within that view*. Always URL‑encode formulas.
* **Performance:** Keep rate limits in mind; you'll need caching, incremental syncs, or denormalized “API views” for heavy workloads.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ncuVAqfNvAM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusion
If you are looking to turn structured data into an API or access your data via API, [give Airtable a try today](https://airtable.com/invite/r/4EaSmQNr). But, if Airtable doesn't work for you, check out [my piece on API Development](https://www.karllhughes.com/posts/api-development) which includes lots of good options for building an API.
