# From Physical to Digital: Data and Digitization

> Monday, May 14th, CDIL
>
> Outlines: [0](day-0.md) | [1](day-1.md) | [2](day-2.md) | [3](day-3.md) | [4](day-4.md) | [5](day-5.md)

### Objectives

- Critical understanding of digitization workflows and standards.
- Digital literacy to work with digital files and data.
- Understand and create metadata.
- Build and publish a digital collection!

# Outline:

## Morning

- Introduction to the materials
- Handling materials

Trevor Bond and Erin Stoddart will be providing us with some material to scan and describe. Each will give a brief overview of the items and on their work generally.

Brief overview of [Digital Intiatives](https://www.lib.uidaho.edu/digital/)

### Scanning

- Hardware
- Standards        
    - Leave the TIFF alone
    - [Archival Formats](https://orbiscascadeccd.github.io/digprezsteps/formats.html)

### Image Processing

- Photoshop (free alternative [GIMP](https://www.gimp.org/))
- Access & other copies - The joys of actions and batch processing
- [ImageMagick](https://www.imagemagick.org/) to create access JPEG and thumbs: see [ImageMagick activity](https://github.com/PalouseDH/symposium/blob/master/notes/imagemagick.md).

### Metadata

- standards - [Dublin Core - Original 15](https://en.wikipedia.org/wiki/Dublin_Core#Dublin_Core_Metadata_Element_Set)
    - [Seeing Standards](http://jennriley.com/metadatamap/seeingstandards.pdf) 
- controlled vocabularies 
- application profiles (i.e. standards + vocabs)
- In the end though: Metadata should be about the user, not the standard, schema, ontology, vocabulary, etc. 
    - *singularity note: more and more the user is a computer*

Idiosyncratic --> Standardized: [Idaho in DPLA](https://dp.la/search?q=Idaho)

Resources: Some profiles [Digital Public Library of America](https://pro.dp.la/hubs/metadata-application-profile) | [Orbis Cascade Alliance](https://www.orbiscascade.org/dublin-core-best-practices/). 
Some more on [metadata](https://dpla.wpengine.com/wp-content/uploads/2018/01/PLPP_Using-Metadata_FINAL.pdf) + [dublin core](https://github.com/dcmi/repository/blob/master/mediawiki_wiki/User_Guide.md). 

#### Digitize project hands-on

Pair up! [Random Team Generator](https://palousedh.github.io/symposium/fellows/)

Take a look at [metadata fields](https://docs.google.com/spreadsheets/d/1v-17Tn3KVNXR_bvqYf-_1y2VRIjKVvySeJLPY7X1ebA/edit?usp=sharing) for project. 

Resources for creating metadata in this project:

- [Subject](http://www.getty.edu/research/tools/vocabularies/aat/)
- [Format](https://mwdl.org/docs/format_values.txt)
- [Type](https://mwdl.org/docs/AAT_subset.txt)
- [Latitude Longitude](https://itouchmap.com/latlong.html)

*Outcome: folder of jpgs, csv of metadata (i.e. collection as data).*

Transforming and cleaning metadata? Use [OpenRefine](http://openrefine.org/)!

## Afternoon

Build a digital collection website from your morning data using  [pages-collection-template](https://github.com/uidaholib/pages-collection-template), a Jekyll project designed for gh-pages.
This is a prototype for our new project [CollectionBuilder](https://collectionbuilder.github.io/).

**Use case:**
`pages-collection` is intended as a simple template for hands-on teaching about digital libraries.
It can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.

> Similar learning experiences use [Omeka](https://omeka.org/) or other DAMS/[CMS](https://en.wikipedia.org/wiki/Content_management_system) platforms that are overkill for one off projects.
> Although CMS feature familiar GUI administration interfaces, they are not simple to learn and customize.
> A project in "minimal computing", it provides a depth of learning opportunities, allowing users to take complete ownership over the project and make their work open to the world.

Static vs. dynamic web.

Build a collection: 

1. create a new repository on GitHub for your collection projec, by "Importing" [pages-collection-template](https://github.com/uidaholib/pages-collection-template).
2. edit the site configuration with your information (Jekyll, YAML, `_config.yml`)
3. activate gh-pages (GitHub repo > Settings > GitHub Pages > Source > Master)
4. edit content pages: 
    - `index.md` (featured-image, featured-subjects, featured-places)
    - `pages/about.md` (content)
    - `pages/map.md` (mapcenter, zoom)
    - add a screenshot of your map area as `objects/map.jpg`, which will appear in the locations section of the index page.

## The Web Orientation

Idealistic Canadian video: [How Does the Internet Work ?](https://youtu.be/i5oe63pOhLI)

A network is two or more computers connected.
The internet is network of networks.

What's in a URL:
- https://example.com/about?key=value#anchor
- protocol + domain name (or IP, optional port :80) + path + query / parameters + fragment/anchor

Demo IP addresses:
- `ping www.google.com`
- `nslookup www.lib.uidaho.edu`
- traceroute / tracert / tracepath `tracepath www.google.com`
