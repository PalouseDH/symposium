# Web Publishing and Literacy

> Wednesday, May 16th, CDSC
> 
> Outlines: [0](day-0.md) | [1](day-1.md) | [2](day-2.md) | [3](day-3.md) | [4](day-4.md) | [5](day-5.md)

## Objectives

- explore scholarly publishing platforms
- learn about embedding on the web
- web literacy: be ready to "view source" and explore "how did they make that"

## Outline: 

**Morning** 

- Web publishing discussion
- Platform introductions and considerations
- Scalar hands-on
    - [https://cdsc.libraries.wsu.edu/scalar/](https://cdsc.libraries.wsu.edu/scalar/)
    - username == email address
    - password == changeme
    
- [Scalar User Guide](http://scalar.usc.edu/works/guide2/index)
- Examples from presentation:
    - http://scalar.usc.edu/works/coal-waste-in-appalachia/index
    - http://scalar.usc.edu/works/hanford-project/index
    - http://photohistory.oregonstate.edu/works/photo-history/index 
    - http://publications.newberry.org/dig/creating-shakespeare
    - http://publications.newberry.org/dig/rc-transcribe/italian-religious-broadsides

**Afternoon**

- Mid-week check in.
- embedding on the web.
- Group work time 
- Field trip: Photogrammetry field trip and background slide deck [link](https://docs.google.com/presentation/d/1bHFCzyu0HzNXUer02Gh63J6mYxWyRA2pe5MNEEi9tNk/edit?usp=sharing) (time permitting)

### Embedding on the web: hands-on with [Knightlab tools](https://knightlab.northwestern.edu/projects/)

- [Data from our collections](https://dcnb.github.io/pulsesoup/data/)

 TimelineJS Steps

 1. Download data by pushing the download button on the top right of the page, then clicking the "Timelinejs csv" button
 2. Upload the csv into Google Drive
 3. Find the csv file in your drive (can hit the magnifying glass after upload), right click on it, open the csv with Google Sheets
 4. Make some edits to the content
    - At the very least delete the two rows that have no date in them. 
    - Suggested: eliminate all but a few related items and add to the 
 5. Follow [instructions via knightlab](https://timeline.knightlab.com/#make)
    - Click the File menu button at the top of the page, then click "Publish to the Web"
    - On the following pop-up, click "Publish", then click OK on the next "sure you want to do this" dialog, then close the dialog
    - Copy the url for your google sheet from your browser (do not copy the url provided by the dialog)
    - paste it into the [knightlab site](https://timeline.knightlab.com/#make)
    - SEE WHAT YOU HAVE WROUGHT!
 6. Go to the knightlab site's step 4 and copy the embed link
 7. Go to your digital collection website on github (mine is pulsesoup)
 8. Paste that code right below the second "---" in the "_layouts/timeline.html" file.
 9. Check out your site to see how if it's working. 

### DH Projects 

- [Photogrammar](http://photogrammar.yale.edu/)
    - [Explorer](http://photogrammar.yale.edu/labs/crossfilter/california/)
- [Kindred Britain](http://kindred.stanford.edu/#)
    - [Paltrow to Shakespeare](http://kindred.stanford.edu/#/path/full/none/none/I13754/I27325/)
- [American Panorama](http://dsl.richmond.edu/panorama/)
    - [Canals](http://dsl.richmond.edu/panorama/canals/)
- [Republic of Letters](http://republicofletters.stanford.edu/)

### DH Communities

- [Humanities Commons](https://hcommons.org/), groups, news sharing, websites, and file sharing. Get started ["summer camp"](https://hcommons.org/groups/humanities-commons-summer-camp/). [Digital Humanists group](https://hcommons.org/groups/digital-humanists/).
- [HASTAC](https://www.hastac.org/), interdisciplinary DH heavy community with many initiatives focused on innovation in collaboration and pedagogy. Good source for events and CFP. [Get involved](https://www.hastac.org/getting-started-hastacorg).
- [DH Commons](http://dhcommons.org/), projects listings, conferences, etc.
- [THAT camp](http://thatcamp.org/), unconference type events.
- [DHSI](http://www.dhsi.org/), summer camp in Victoria, BC--year round news email list.

### Basic Web-based tools

- [TimelineJS](https://timeline.knightlab.com/) (simple timeline connected to Google Sheets)
- [StoryMapJS](https://storymap.knightlab.com/) (basic slideshow connected to a map, set up using a web based editor) [advanced setup](https://storymap.knightlab.com/advanced/)
- [Timemapper](http://timemapper.okfnlabs.org/) (TimelineJS with a map)
- [Map Warper](http://mapwarper.net/) (geo-rectify and find historic maps)
- [Palladio](http://hdlab.stanford.edu/palladio/) (web based historical data viz tool)
- Sarah Simpkin, [Introduction to mapping and spatial methods for the humanities](https://ssimpkin.github.io/dhsite2017/) (2017).
- [Hypothes.is](https://hypothes.is/). (simple annotation layer added to site via URL, [educators guide](https://hypothes.is/education/))

## Platform Introductions

- [Omeka](https://omeka.org/) (popular CMS for exhibits and teaching. Classroom example [The History Harvest](http://historyharvest.unl.edu/). See [Educators guide](http://info.omeka.net/omeka-net-help/use-case-educators/), [free hosted version](http://www.omeka.net/))
- [WordPress](https://wordpress.org/) (most common CMS in the world, runs 30%+ of the web. Powerful web-based admin interface, user authentication, media management, comments. [Free hosted version](https://wordpress.com/). Profile example [Adam Sowards](http://adamsowards.net/))
- [Drupal](https://www.drupal.org/) (powerful CMS, powers other platforms such as Mukurtu and [Islandora](https://islandora.ca/). See Quinn Dombrowski, [*Drupal for Humanists*](http://drupal.forhumanists.org/))
- GH-Pages (simple, free static hosting. Higher learning curve. See [go-go gh-pages](https://evanwill.github.io/go-go-ghpages/). Profile example [Shawn Graham](http://shawngraham.github.io/).)
- [Mukurtu](https://mukurtu.org/) (Collection example [Plateau Peoples'
Web Portal](https://plateauportal.libraries.wsu.edu/). See also [TK Labels](http://www.localcontexts.org/))
- [Scalar](http://scalar.usc.edu/scalar/) ("authoring and publishing platform that’s designed to make it easy for authors to write long-form, born-digital scholarship online". David Squires' class project [Social Construction of Media](http://scalar.usc.edu/works/cultures-of-social-media/index))
- [AtoM](https://www.accesstomemory.org/en/) (archival description based CMS)
- [CONTENTdm](https://www.oclc.org/en/contentdm.html) (very commonly used digital collections platform)
