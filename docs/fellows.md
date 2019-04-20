---
layout: archive
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/dawid-zawila-251904-unsplash.jpg
  cta_label: "Random Team Generator"
  cta_url: "../randomteams/"
  #cta2_label: "Random Team Generator"
  #cta2_url: "../randomteams/"
---

# Fellows

Symposium Fellows are selected via a competitive award process at WSU and UI.
Fellows include faculty and graduate students interested in expanding their work with digital scholarship tools, projects, and processes.

## 2019

{% assign fellows = site.data.fellows | where: "year","2019" | sort: "name" %}
{% for fellow in fellows %}
<div style="clear:both"></div>
<img src="{{site.baseurl}}/assets/images/{{fellow.image}}" style="float:right; margin:20px 0px 20px 20px;max-width:180px;"/>
<h2 id="{{ fellow.image | remove: '.jpg' }}">{{ fellow.name }}</h2>
<h4>{{ fellow.title }} <br>{{ fellow.school }}</h4>
<h3>{{ fellow.project }}</h3>
<p>{{ fellow.projectdescription }}</p>
<div style="clear:both"></div>
<hr>
{%endfor%}
