# Text as Data: Analysis and Modeling

> Thursday, May 16th, 9:00am - 4:00pm, CDIL.

## Objectives

- Critical understanding of text as data.
- Explore text analysis, machine learning, and visualization.

# Outline: 

## Morning

### Text as Data Overview

text analysis: 

- structured data vs. unstructured data. techniques to take unstructured -> statistical models.
- Printed text -> data = OCR. 
    - process: digitization, image preprocessing, segmentation + layout detection, OCR, text post-processing.
    - noise, normalization. comparisons? 
    - [dhSegment](https://dhlab-epfl.github.io/dhSegment/).
- bag-of-words, n-grams  
- measuring statistics vs. modeling 
- Machine learning tasks: regression, classification, clustering.
    - entity recognition, POS tagging, topic modeling, sentiment analysis, summarization
    - Supervised vs. Unsupervised classification
    - [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35) (work on curating training data sets, rather than developing software, machine learning does the rest!)

### Text Analysis Hands-on

- Quick discussion of tools that y'all are using or tools that can be used to visualize or analyze data.
    - [Voyant Tools](https://voyant-tools.org/)
    - [AntConc](http://www.laurenceanthony.net/)
    - A larger list at Western Michigan University [Libraries](http://libguides.wmich.edu/digitalhumanities/tools)
- Introductory hands-on with [Voyant Tools](https://voyant-tools.org/)
    - We will be following, loosely, this  [outline](https://www.dwrl.utexas.edu/2016/11/29/voyant-for-text-analysis/) from UT Austin. It is a great introductory session targeted for use and completion within one class period. 
- Before we get started go grab some data!
    - [Natural Language Toolkit Corpora](http://www.nltk.org/nltk_data/)
    - If you would rather there are a few corpora included within Voyant Tools (just click through the links below to auto load the text):    
        - [Voyant Tools with Shakespeare corpora loaded](http://voyant-tools.org/?corpus=shakespeare)
        - [Voyant Tools with Jane Austen corpora loaded](http://voyant-tools.org/?corpus=austen)
        - Explore Adam Soward's writing: [forest](http://voyant-tools.org/?corpus=ad9d4fbe072d540cfc40e0ce9206c9c7&panels=cirrus,reader,trends,summary,contexts), [public](http://voyant-tools.org/?corpus=9201a8d973ae5b0fb618eda9e762d4ae&panels=cirrus,reader,trends,summary,contexts)

## Afternoon

### Discussion Session

- Ted Underwood, ["Seven Ways Humanists are Using Computers to Understand Text"](https://tedunderwood.com/2015/06/04/seven-ways-humanists-are-using-computers-to-understand-text/) (2015). (intro overview of types of computational analysis)
- Ted Underwood and Jordan Sellers, ["How Quickly Do Literary Standards Change?"](https://figshare.com/articles/How_Quickly_Do_Literary_Standards_Change_/1418394). 
    - article explicitly explains the research process, from collecting/selecting data to analysis. Published as a draft with more content, questions, and illustrations than are allowed in a traditional article. Also published traditionally as, Jordan Sellers and Ted Underwood, "The Longue Durée of Literary Prestige", MLQ 77:3 (2016). Additionally, a GitHub repository shares the code necissary to reproduce the analysis, [paceofchange](https://github.com/tedunderwood/paceofchange) (2015).
    - Key points:
        - Outputs: data, code, and articles!
        - "modeling-to-explain and modeling-to-predict"
        - "Computational methods are transforming the social and natural sciences as much as the humanities"
        - "new methods make it easier to represent unstructured text in a statistical model"
        - "the goal of computational analysis is not, after all, to reproduce the modes of understanding readers have already achieved."

## Resources 

- Ted Underwood: 
    - ["Seven Ways Humanists are Using Computers to Understand Text"](https://tedunderwood.com/2015/06/04/seven-ways-humanists-are-using-computers-to-understand-text/) (2015). (intro overview of types of computational analysis)
    - [DataMunging](https://github.com/tedunderwood/DataMunging) (Python scripts used to clean and normalize OCR)
    - [New methods need a new kind of conversation](https://tedunderwood.com/2018/02/28/raising-the-standards-for-computation-in-the-humanities/) (2018). (a call for open data and code in Humanities)
- Ted Underwood, David Bamman, and Sabrina Lee, "The Transformation of Gender in English-Language Fiction," Cultural Analytics Feb. 13, 2018. DOI: [10.7910/DVN/TEGMGI ](http://doi.org/10.22148/16.019). (notice the data set shared for replication)
- Jeffrey M. Binder, ["Alien Reading: Text Mining, Language Standardization, and the Humanities"](http://dhdebates.gc.cuny.edu/debates/text/69) in *Debates in the Digital Humanities* (2016).
- Franzini, Kestemont, et al. "Attributing Authorship in the Noisy Digitized Correspondence of Jacob and Wilhelm Grimm", Front. Digit. Humanit., 05 April 2018, https://doi.org/10.3389/fdigh.2018.00004 (horrible OCR accuracy might not matter for some research questions!)
- Stanford Literary Lab [Pamphlets](http://litlab.stanford.edu/pamphlets/). (ongoing series of publications relating to "computational criticism")
- Gideon Lewis-Kraus, [The Great A.I. Awakening](https://www.nytimes.com/2016/12/14/magazine/the-great-ai-awakening.html) (2016)
- SAM KEAN, [Artificial Intelligence Is Cracking Open the Vatican's Secret Archives](https://www.theatlantic.com/technology/archive/2018/04/vatican-secret-archives-artificial-intelligence/559205/) (2018)
- Donatella Firmani, Marco Maiorino, Paolo Merialdo, Elena Nieddu, [Towards Knowledge Discovery from the Vatican Secret Archives.](https://arxiv.org/pdf/1803.03200.pdf) (2018)
- Andrej Karpathy, [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35) (2017). (work on curating training data sets, rather than developing software, machine learning does the rest!)

Learning resources:

- [Algorithm Tips](http://algorithmtips.org/)
- [Programming Historian](http://programminghistorian.org/) tutorials.
- Brandon Walsh and Sarah Horowitz, [Introduction to Text Analysis: A Coursebook](http://walshbr.com/textanalysiscoursebook/) (2016). (Open textbook, Jekyll project hosted on gh-pages, [repo](https://github.com/walshbr/textanalysiscoursebook))
- Steven Bird, Ewan Klein, and Edward Loper, [Natural Language Processing with Python: Analyzing Text with the Natural Language Toolkit](http://www.nltk.org/book/). (known as the NLTK Book, good intro to using Python and textual analysis concepts, with large sample corpora)
- Julia Silge and David Robinson, [Tidy Text Mining in R](http://tidytextmining.com/) (2017). ([Bookdown](https://bookdown.org/) project written in RMarkdown)
- Lincoln Mullen, [Text Analysis for Historians](http://lincolnmullen.com/courses/text-analysis.2016/) (2016).
- Lincoln Mullen, [Computational Historical Thinking](http://dh-r.lincolnmullen.com/index.html) (2018+).

## Text Analysis Tools

- [TAPoR 3](http://tapor.ca/home) directory

Visualize text(s):

- [Juxta](http://juxtacommons.org/) (visual collation, example classroom [assignments](http://www.juxtasoftware.org/using-juxta-in-the-classroom-scholars-lab-presentation/), [Frankenstein editions assignment](https://mla.hcommons.org/?get_group_doc=387/1420320643-Bninski.notesforMLACommons.pdf))
- Jason Davies [WordTree](https://www.jasondavies.com/wordtree/) (visual concordance, D3 web app, [academic explanation](http://hint.fm/projects/wordtree/))
- [Voyant](http://voyant-tools.org/) (suite of viz tools, [Help](http://voyant-tools.org/docs/#!/guide/start), [Voyant Docs](http://docs.voyant-tools.org/), and [VoyantServer](https://github.com/sgsinclair/VoyantServer) for offline use.)
- [AntConc](http://www.laurenceanthony.net/software/antconc/) (lots of software and publications from Laurence Anthony)

Text Big Data (The 3 V’s, volume, variety and velocity): 

- Hathi Trust [Research Center Portal](https://sharc.hathitrust.org/) (big text data)
- N-Grams: [Bookworm](https://bookworm.htrc.illinois.edu/develop/) or [Google Books Ngram Viewer](https://books.google.com/ngrams)

Natural Language Processing / Machine Learning:

- Python [NLTK](http://www.nltk.org/) (plus simpler [TextBlob](https://textblob.readthedocs.io/en/dev/), and more powerful [scikit-learn](http://scikit-learn.org/stable/index.html))
- [MALLET](http://mallet.cs.umass.edu/index.php) topic modeling
- [Stanford NLP Group](http://nlp.stanford.edu/software/) (a library of Java apps, e.g. [named entity tagging demo](http://nlp.stanford.edu:8080/ner/), with academic papers explaining their use)
- Web NLP APIs: [Open Calais](http://www.opencalais.com/), [Natural Language Understanding](https://www.ibm.com/watson/developercloud/natural-language-understanding.html)
- [Weka](https://www.cs.waikato.ac.nz/ml/index.html) is an effort to bring machine learning to more people by packaging up many of the algorithms up into a GUI. Weka has been developed at the University of Waikato in New Zealand

Machine Learning for hand written text analysis:

- Projects
    - Transcribing [Bentham](https://blogs.ucl.ac.uk/transcribe-bentham/)
    - [MarineLives](http://www.marinelives.org/wiki/Tools:_Collaboration_with_Transkribus)
- Software
    - Transkribus [download](https://transkribus.eu/Transkribus/) and [GitHub](https://github.com/Transkribus/)

## DH Discussion Session

-----------------------

> Outlines: [0](day-0.md) | [1](day-1.md) | [2](day-2.md) | [3](day-3.md) | [4](day-4.md) | [5](day-5.md)
