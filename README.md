# MAJLIS-Editions

A [TEI Publisher 9](https://teipublisher.com/) application for digital scholarly editions of Judeo-Arabic texts.

## Overview

MAJLIS-Editions builds on TEI Publisher to provide a reading environment tailored to the specific needs of Judeo-Arabic manuscript editions. The central design choice is **synchronized page-by-page navigation**: the original text, translation(s), and facsimile are displayed together for a single page at a time, and selecting any entry in the table of contents instantly jumps all views to the corresponding page.

## Features

- **Page-synchronized views** — original text, translation, and facsimile move together; no view falls out of sync
- **TOC-driven navigation** — clicking a section in the table of contents brings all panels to the relevant page
- **Facsimile integration** — manuscript images are displayed alongside text and translation
- **Built on TEI Publisher 9** — inherits full TEI XML processing, ODD customization, and the eXist-db backend

## Differences from Standard TEI Publisher

Most TEI Publisher applications navigate by structural division (chapters, sections, etc.) and display content as a continuous flow. MAJLIS-Editions instead:

- Navigates by **physical page** (`<pb/>` elements) rather than by logical division
- Keeps multiple views **locked to the same page** at all times
- Treats the TOC as a page locator rather than a section loader

This makes it better suited to text–translation–image work where the manuscript page is the primary unit of reference.

## Building from Source Code

### Requirements

* Apache Ant 1.10.5
* Java JDK 8
* Node.js 24

All of the above need to be installed and available on the system PATH.

### Build Instructions

1. Clone the repository if you have not previously done so and enter its directory:
```shell
$ git clone https://github.com/evolvedbinary/majlis-editions.git
$ cd majlis-editions
```

2. or, if you have previously cloned the repository, make sure it is up to date
```shell
$ cd majlis-editions
$ git pull
```

3. Build the source code with Ant:
```
$ ant xar-complete
```


## Installing

### Requirements

- [eXist-db](https://www.exist-db.org) 6.2.0
- [TEI Publisher](https://github.com/eeditiones/tei-publisher-app) 9.1.1

### Installation Instructions
1. Make sure that TEI Publisher 9 is already installed into eXist-db.
2. Either build from source (see above) or download the XAR file from https://github.com/majlis-erc/majlis-editions/releases
3. Upload the XAR file and install it via the eXist-db Package Manager.

## License

[MIT](LICENSE) — TEI Publisher itself is licensed under LGPL.
