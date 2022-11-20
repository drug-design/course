# The Platform

Drugdesign.org is based on a [MkDocs](https://www.mkdocs.org/) a simple static site generator based on markdown format. This makes the contribution to the content very easy for everyone. No need to know HTML,CSS or JavaScript. 
The source of truth is found in the GitHub repo [https://github.com/drug-design/course](https://github.com/drug-design/course). Once a markdown file changes in GitHub (through Pull Request mechanism) it triggers automatically, its transformation to html and its deployment to the amazon cloud (AWS).  

![github-flow](https://media.drugdesign.org/site/teaching/github-1.png)

Change to the master branch changes the main domain drugdesign.org.  
Every individual enrolled in the "sharing program" can request a GitHub dedicated branch in this [repo](https://github.com/drug-design/course) (e.g. john-miller") any change to this branch will trigger the deployment to its associated subdomain (john-miller.drugdesign.org).

## Features of the Platform
- Every title or topic has a didicated URL using the anchor feature 
  ![github-flow](https://media.drugdesign.org/site/teaching/anchor.png)
- Works on all devices: the underlying layout automatically adapts to perfectly fit the available screen estate, no matter the type or size of the viewing device.
- Accessible: Make accessibility a priority – users can navigate drugdesign.org with touch devices, keyboard, and screen readers.

  

