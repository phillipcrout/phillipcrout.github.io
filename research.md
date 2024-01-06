---
title: "Research"
permalink: "/research/"
layout: page
---

If you're looking for a list of Phillip's published work, your best bet is his [Google Scholar](https://scholar.google.com/citations?user=ptaMzOkAAAAJ&hl=en) page which he keeps up to date.

## Electron Microscopy (2017-2022)

An Electron Microscopy session (often a single afternoon) in the SED modality can an image stack in excess of 100,000 images. This are an extremely rich data source that tells us about the arrangement of atoms within a sample. This information can be used to understand deformation behavior, predict failure modes and a variety of other things. However, to do this researchers need data-intensive, open-source processing tools. To solve this problem, Phillip and colleagues wrote <a href="https://github.com/pyxem/pyxem">Pyxem</a> and electron microscopy Python package. Because most researchers do not have extensive coding backgrounds (or the mathematical chops to get involved in image processing) the Pyxem developers have tried hard to make the code accessible, with simple to read <a href="https://pyxem.readthedocs.io/en/latest/">documentation</a> and detailed docstrings.

Below is an image demonstrating Pyxem at work. We've used a spot location routine to find the positions of pairs of spots in 100,000's of images. This information is then converted into a rotation and strain value for each pattern. Assigning these rotations and strains to colours produces the maps you see below - which describes how an ultra-hard material cracks when you poke it with a very very hard object. It's rather pretty don't you think?

<figure>
<center><img src="./../images/strain_maps.png">
<figcaption>
These four maps show the strain and rotation around a crack. Each pixel contains information that was extracted from another image (a diffraction pattern).</figcaption>
</center>
</figure>

<!-- ## References -->
