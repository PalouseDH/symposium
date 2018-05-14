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

### Scanning
    - Hardware
    - Standards        
        - Leave the TIFF alone
        - [Archival Formats](https://orbiscascadeccd.github.io/digprezsteps/formats.html)
### Image Processing
    - Photoshop (free alternative [GIMP](https://www.gimp.org/))
    - [ImageMagick](https://www.imagemagick.org/) to create access JPEG and thumbs.
    - batch processes are your friend

### Metadata
    - standards - [Dublin Core - Original 15](https://en.wikipedia.org/wiki/Dublin_Core#Dublin_Core_Metadata_Element_Set)
        - [Something I worked on a long time ago](http://jennriley.com/metadatamap/seeingstandards.pdf)
    - controlled vocabularies 
    - application profiles (i.e. standards + vocabs)
    - In the end though: Metadata should be about the user, not the standard, schema, ontology, vocabulary, etc. 
        - *singularity note: more and more the user is a computer*

Idiosyncratic --> Standardized: [Idaho in DPLA](https://dp.la/search?q=Idaho)

Resources: Some profiles [Digital Public Library of America](https://pro.dp.la/hubs/metadata-application-profile) | [Orbis Cascade Alliance](https://www.orbiscascade.org/dublin-core-best-practices/). 
Some more on [metadata](https://dpla.wpengine.com/wp-content/uploads/2018/01/PLPP_Using-Metadata_FINAL.pdf) + [dublin core](https://github.com/dcmi/repository/blob/master/mediawiki_wiki/User_Guide.md). 

Pair up! [Random Team Generator](https://palousedh.github.io/symposium/fellows/)

Take a look at [metadata fields](https://docs.google.com/spreadsheets/d/1v-17Tn3KVNXR_bvqYf-_1y2VRIjKVvySeJLPY7X1ebA/edit?usp=sharing) for project. 

*Outcome: folder of jpgs, csv of metadata (i.e. collection as data).*

## Afternoon

Build a digital collection website from your morning data using  [pages-collection](https://github.com/uidaholib/pages-collection), a Jekyll project designed for gh-pages.
This is a prototype for our new project [CollectionBuilder](https://collectionbuilder.github.io/).

1. create [collection project repository](https://github.com/uidaholib/pages-collection/blob/master/docs/01-project.md) (GitHub)
2. prepare your [collection images and/or pdfs](https://github.com/uidaholib/pages-collection/blob/master/docs/02-objects.md) (ImageMagick)
3. prepare your [collection metadata](https://github.com/uidaholib/pages-collection/blob/master/docs/03-metadata.md)
4. [configure site](https://github.com/uidaholib/pages-collection/blob/master/docs/04-configure.md) (Jekyll, YAML, `_config.yml`)
5. [configure navigation and pages](https://github.com/uidaholib/pages-collection/blob/master/docs/05-pages.md)
6. add [descriptive content](https://github.com/uidaholib/pages-collection/blob/master/docs/06-content.md) (Markdown)

### The Web

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
