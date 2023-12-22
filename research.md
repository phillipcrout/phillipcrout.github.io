---
title: "Research"
permalink: "/research/"
layout: page
---

This page attempts to put Phillip's research into electron microscopy and alcoholic hepatitis into their proper contexts, as well as making the work accessible for data and software professionals. If you are an academic looking for a list of Phillip's published work, your best bet is his [Google Scholar](https://scholar.google.com/citations?user=ptaMzOkAAAAJ&hl=en) page which he keeps up to date.

---

## Using Machine Learning to Predict Mortality (2023 - Present)

---

## Electron Microscopy (2017-2022)

An Electron Microscopy session (often a single afternoon) in the SED modality will generally produce an image stack of ~100,000 images. This are an extremely rich data source that tells us about the arrangement of atoms within a sample. This information can be used to ...

The nature of academic life means that a researcher will generally do the entire data pipeline themselves. Fortunately the first few steps off-microscope are reasonably straightforward as most propertiery formats (that come off an electron microscope) have a corresponding reader in Hyperspy, a popular open source Python package. This data is, however, fairly large, which causes problems as almost all academics do some of their work on local machines (eg. working on a 100GB dataset with 8GB of RAM). This has led to the development community writing lot of functionality with out-of-memory options (using dask).

At this point the data is ready for Pyxem, an electron microscopy <a href="https://github.com/pyxem/pyxem">Python</a> package co-authoured by Phillip. To begin researchers set about inspecting and cleaning their data. Preliminary work can be done using built in imaging functionality with Pyxem, but with the bad data still present this is often of limited use. The data cleaning primarily consists of image processing steps. Because most researchers do not have extensive coding backgrounds (or the mathematical chops to get involved in image processing) the Pyxem developers worked hard to make the code accesible, providing simple to read example <a href="https://pyxem.readthedocs.io/en/latest/">notebooks</a> and detailed docstrings. With the data cleaned it's time for analysis.

There is a belief in the material science community that electron microscopists are slightly odd folks who like numbers too much and don't see quite enough of the sun. This may be (a bit) true but for a technical development (eg. we can locate these spots more accurately) to have impact, it needs to be applied in an applications context, and so the microscopists need to come out of the basement. The image below is an example of what that can look like. Here, the improved spot location routine was used to find the positions of pairs of spots in 100,000's of images. This information can then be converted into a rotation or strain value for each pattern. Assigning these rotations and strains to colours produces the maps you see below - which describes how an ultra-hard material cracks when you poke it with a very very hard object. It's rather pretty don't you think?

<figure>
<center><img src="./../images/strain_maps.png">
<figcaption>
These four maps show the strain and rotation around a crack. Each pixel contains information that was extracted from another image (a diffraction pattern)</figcaption>
</center>
</figure>

---

## References

<!--
This code was adapted from: http://jsfiddle.net/66fCm/1/ , weirldy it seems to requre left/right/center from top to bottom

<div class="wrap" style="text-align:center">
<div class="left" style="float:left">
    Performant Code
</div>
<div class="right" style="float:right">
    Unsupervised learning
</div>
<div class="center" >
    Clustering
</div>

</div>
-->
