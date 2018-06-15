const ndjson = require('ndjson');
const dayjs = require('dayjs');
const fs = require('fs');

fs.createReadStream('db.txt')
.pipe(ndjson.parse())
.on('data', function (post) {
  const rawDate = post.createdAt.$$date ? post.createdAt.$$date : post.createdAt;
  const createdAt = dayjs(rawDate).format('YYYY-MM-DD');
  const filename = createdAt + '-' + post._id + '.markdown';

  let tags = '';
  if (post.tags && post.tags.length > 0) {
    tags = post.tags.map(tag => tag._id).join(', ');
  }
  const content = `---
layout: post
title: "${post.title}"
date: ${createdAt}
img: ${post.imageUrl}
link: ${post.postUrl}
tags: [${tags}]
---
${post.content}
`;
  fs.writeFile("../_posts/" + filename, content, (err) => null);
  console.log(filename);
  console.log('---------');
});
