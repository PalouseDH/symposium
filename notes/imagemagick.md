# Batch Create Access and Thumbnail Images

## ImageMagick

ImageMagick is a powerful open source commandline utility for processing image files that is used under the hood by numerous other tools and websites.
Once you get the hang of it, you can use it directly to do a lot of interesting things, from simple batch conversions to complex rendering.

> *Note:* ImageMagick commands made a major change between version 6 and 7+. 
> The [docs](http://www.imagemagick.org/script/command-line-processing.php) on the main website refer to version 7+, where all commands start with `magick`. 
> Previous versions used several different commands, such as `convert`, instead.
> A mirror site contains all documentation about ["legacy" ImageMagick](https://legacy.imagemagick.org/script/command-line-processing.php).

## Install ImageMagick

Install ImageMagick and Ghostscript (which enables it to work with PDFs).
Setup is easy on Linux, however, it will likely be a legacy version (see note above):

- Ubuntu: `sudo apt install imagemagick ghostscript`.
- Fedora: `sudo dnf install ImageMagick ghostscript`.

On Windows:

1. Download the [ImageMagick installer](http://www.imagemagick.org/script/download.php#windows).
2. Run the installer with default options.
3. Download the [Ghostscript installer](https://www.ghostscript.com/download/gsdnld.html) (you probably want the AGPL Windows 64 bit version).
4. Run the installer with default options.

Also on Windows, if you want to follow the commands in this note, be sure to have a bash terminal, such as Git Bash (packaged with [Git installer](https://git-scm.com/)) or [Cmder](https://evanwill.github.io/_drafts/notes/cmdr.html).

## Using ImageMagick

The full [ImageMagick docs](http://www.imagemagick.org/script/command-line-processing.php) do a nice job of introducing commandline processing concepts. 
Check the [commandline options](https://www.imagemagick.org/script/command-line-options.php) page for full details. 

> Basic pattern: `<command> <image options> <input filename(s)> <image operator(s)> <output filename(s)>`

## Create Access JPEGs for pages-collection project 

- Put all your scanned tiff images in one folder. 
- Open Terminal / Git Bash and navigate to the image directory
- create a new directory, `mkdir objects`
- to convert one image: `magick input.tif -resize 1500x1500 objects/output.jpg`
- to convert a whole directory, use Bash loop: `for f in *.tif; do magick "$f" -resize 1500x1500 "objects/${f%.tif}.jpg"; done`

## Create thumbnails for pages-collection project 

- move to objects directory, `cd objects`
- create thumb folder, `mkdir thumbs`
- create thumbnails: ``for f in *.jpg; do magick "$f" -resize 300x300 -flatten "thumbs/${f%.jpg}_sm.jpg"; done`
