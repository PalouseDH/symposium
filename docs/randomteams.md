---
layout: archive
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/dawid-zawila-251904-unsplash.jpg
---
{% assign fellows = site.data.fellows | where: "year","2019" | sort: "name" %}
# Random Teams

<button class="btn btn-primary" id="genTeams">Generate New Teams</button>
<div id="teams"></div>

<script>
  var teamNames = ["Pea","Lentil","Garbanzo"];
  var fellows = [{% for f in fellows %}["{{ f.name }}","{{ f.image }}"]{% unless forloop.last %}, {% endunless %}{% endfor %}];
  var teams = document.getElementById("teams");
  /* Fisher-Yates shuffle https://bost.ocks.org/mike/shuffle/ */
  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    }
    return array;
  }
  function createTeams() {
    var newTeams = "";
    var newFellows = [].concat(fellows);
    var teams = document.getElementById("teams");
    shuffle(newFellows);
    var i;
    for (i = 0; i < 3; i++) {
      var newF;
      newTeams += "<h2>Team " + teamNames[i] + "</h2><div>";
      newF = newFellows.pop();
      newTeams += '<figure style="max-width:200px;float:left;"><img src="{{ site.baseurl }}/assets/images/' + newF[1] + '" alt="' + newF[0] + '"><figcaption>' + newF[0] + '</figcaption></figure>';
      newF = newFellows.pop();
      newTeams += '<figure style="max-width:200px;float:left;"><img src="{{ site.baseurl }}/assets/images/' + newF[1] + '" alt="' + newF[0] + '"><figcaption>' + newF[0] + '</figcaption></figure></div><div style="clear:both;"></div><hr>';
    }
    teams.innerHTML = newTeams;
  }
  document.getElementById("genTeams").onclick = function () { createTeams(); };
</script>
