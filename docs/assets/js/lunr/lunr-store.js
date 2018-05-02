---
layout: null
---

var store = [
  {%- for c in site.html_pages -%}
      {
        //"title": {{ c.title | jsonify }},
        "excerpt": {{ c.content | strip_html | jsonify }},
        "url": {{ c.url | absolute_url | jsonify }}
      }{%- unless forloop.last -%},{%- endunless -%}
  {%- endfor -%}]
