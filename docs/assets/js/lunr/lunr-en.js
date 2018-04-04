---
layout: null
---

var idx = lunr(function () {
  //this.field('title')
  this.field('excerpt')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      id: item
    })
  }
});

console.log( jQuery.type(idx) );

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem =
        '<div class="list__item">'+
          '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
            '<h2 class="archive__item-title" itemprop="headline">'+
              '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].url+'</a>'+
            '</h2>'+
            '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
          '</article>'+
        '</div>';
      resultdiv.append(searchitem);
    }
  });
});
