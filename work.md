---
layout: page
title: Work History
permalink: /work/
---

### Founder, [Draft.dev](https://draft.dev/)
<p class="post-meta">2020 - Present</p>

<p class="hug">
Writing for a technical audience is notoriously hard and incredibly valuable. I founded
Draft.dev to help brands create high-quality content that reaches software developers.  
</p>

Draft.dev offers [done-for-you technical blogging services](https://draft.dev/) for a fixed monthly rate.
As the founder, I work primarily on business development, content strategy, and quality control.

### CTO, [The Graide Network](https://www.thegraidenetwork.com)
<p class="post-meta">2016 - 2020</p>

<p class="hug">
I joined The Graide Network's leadership team to help refine a messy MVP and kickstart the
engineering team. We went through all the initial infrastructure must-haves - automated testing,
continuous integration, version control, uptime monitoring, backups, etc. - and began building a grading and feedback
platform for our hundreds of student "Graiders" to use.
</p>

During my time with The Graide Network, I implemented processes and hired two more engineers to work with me on the product.
We were able to raise $1mm in 2018 and expand to dozens of schools across the country. We delivered over 1,000,000 
pieces of feedback to students in my four years with the company.

### Head of Engineering, [Packback](https://www.packback.co/)
<p class="post-meta">2013 - 2016</p>

<p class="hug">
In 2013, I became the first engineer at Packback where I hired and managed my first engineering team. 
We went on to raise money from Mark Cuban on Shark Tank, 
and grow the team to about 30 people by the time I left.
</p>

Along the way, I started figuring out how to hire engineers, build distributed scalable software, and work with
founders to learn what customers need and how we can deliver best. I was part of the leadership team 
during a major pivot, and helped establish the company's core values.

### Director of News, [Uloop](https://www.uloop.com/)
<p class="post-meta">2011 - 2013</p>

<p class="hug">
While I was studying Mechanical Engineering at The University of Tennessee, I started a student blog. 
In addition to managing the editorial process and content calendar, I wrote all the code that powered the CMS.
</p>

Failing to make a sustainable business out of that venture, I joined Uloop, 
a college classified ads website to integrate my knowledge of content with their expertise in
online marketing. I ended up recruiting and managing over 500 college student writers across the country, 
and building a gamified newsroom in Wordpress to help motivate and focus our efforts.

It was an interesting experience as my job was a blend of technical, editorial, and recruiting, but I 
learned a ton about being part of a scrappy startup. 

## Side Projects

### [CFP Land](https://www.cfpland.com)
<p class="post-meta">2018 - Present</p>

<p class="hug">In 2018, I started speaking at conferences and ended up creating CFP Land to help other
 technology professionals find public speaking opportunities.</p>

After building an email list of over 2000 technology conference speakers, I've been working on
making the project consistently profitable by selling Pro Memberships and Sponsorships. I keep a log of my 
progress on <a href="https://www.indiehackers.com/product/cfp-land">Indie Hackers</a>.

### [Chicago PHP User Group](https://www.meetup.com/Chicago-PHP-User-Group/)
<p class="post-meta">2018 - Present</p>

<p class="hug">
In 2018, I was invited to help co-organize the monthly PHP User Group here in Chicago. My primary role is to 
find and maintain sponsors to cover the location and cost of food at the events, but I've also spoken at
the event and helped coordinate our annual Hacktoberfest event.
</p>

### [Shiphp](https://www.shiphp.com)
<p class="post-meta">2017</p>

<p class="hug">In 2017, I got really into learning Docker, and ended up writing a short ebook for PHP developers who 
want to get started learning it. It's <a href="https://leanpub.com/first-php-docker-application">available on LeanPub today</a>.</p>

### [The Side Project Checklist](https://www.sideprojectchecklist.com/)
<p class="post-meta">2017</p>

<p class="hug">Around the same time, I compiled the Side Project Marketing Checklist, and it went viral. 
Check it out for ideas to promote your startup or side project.</p>


  <!-- modify this form HTML and place wherever you want your form -->

  <form id="my-form" action="https://www.karllhughes.com/subscribe" method="POST">
    <label>Email:</label>
    <input type="email" name="email" />
    <button id="my-form-button">Submit</button>
    <p id="my-form-status"></p>
  </form>

  <!-- Place this script at the end of the body tag -->

  <script>
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
  </script>

