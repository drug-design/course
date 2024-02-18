# 3D Database Searching
!!! Authors
    **Yvonne C. Martin** (Abbott Laboratories, USA)

!!! Info
    3D searching is a technique that is based on searching in a database of molecules for compounds that contain structural elements as defined by a 3D query. This approach can be used for a wide variety of purposes ranging from testing a pharmacophore hypothesis to the design of a library for high throughput screening. This chapter is an introduction to this field and includes the following topics: the typical uses of 3D searching, the different types of searching, the construction of 3D databases and  programs for 3D database searching.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


    **Number of Pages: 63 (±1 hours read)**

    Last Modified: October 2004

    Prerequisites: None
## What is 3D Searching?

### Importance of the 3D
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/importance-3d-6d667452'><i class='fa fa-play' aria-hidden='true'></i></button>The 3D molecular geometries are of major importance in drug design because they represent the very molecular determinants that control molecular interactions. They are essential to understanding and influencing biological processes and their possible aberrations.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/3d-database-searching/Page1_importance3D.png){: loading=lazy }
### What is 3D Searching?

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/what-is-3d-searching-36e3bf1c'><i class='fa fa-play' aria-hidden='true'></i></button>3D searching is a technique that is based on searching in a database of molecules for compounds that contain structural elements as defined by a 3D query. Potential bioactive molecules can be recognized, based on 3D properties. For example, the view shows a superposition of the dopamine query (grey) with a rigid analogue hit (blue) that is a potent D1 dopamine agonist.
*[agonist]: A chemical substance capable of activating a given receptor.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold


=== "Sup (Gif)"
    ![](https://media.drugdesign.org/course/3d-database-searching/what_is_3d_searching.gif){: loading=lazy }

=== "Sup (3D)"
    <div id='nglviewer-container-3d-db-sup' class='nglviewer-container' data-molecule-id='3d-db-sup' data-initialized='false'></div>

=== "Tile (Pic)"
    ![](https://media.drugdesign.org/course/3d-database-searching/what_is_3d_searching2.png){: loading=lazy }

=== "Tile (3D)"
    <div id='nglviewer-container-3d-db-tile' class='nglviewer-container' data-molecule-id='3d-db-tile' data-initialized='false'></div>

### Components of a 3D Searching Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/components-3d-searching-program-6d3b0d2c'><i class='fa fa-play' aria-hidden='true'></i></button>The components of a 3D searching program are as follows: (1) a database to search; (2) a search hypothesis; (3) a query; (4) mechanisms to enter the query; (5) computational mechanisms to apply the query to the database molecules along with a mechanism to limit the search by other user-supplied criteria; (6) mechanisms to display the hits in the context of the search query and (7) possibly a ranking of the hits.


![](https://media.drugdesign.org/course/3d-database-searching/page3_components.png){: loading=lazy }
#### 3D Database

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/3d-database-74dc1211'><i class='fa fa-play' aria-hidden='true'></i></button>A 3D database is a collection of molecules organized so that it can easily be accessed, managed, and updated. A database can contain millions of compounds. In another section of this chapter we discuss the type of information that is stored in a 3D database and  how a typical 3D database is constructed.


![](https://media.drugdesign.org/course/3d-database-searching/1_5_0_0_0_1.png){: loading=lazy }
#### Search Hypothesis

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/search-hypothesis-297a9e2a'><i class='fa fa-play' aria-hidden='true'></i></button>A search hypothesis consists of 3D structural features that are desired to be found in molecules of the database. Composing this abstraction is often done by inspecting reference molecules in 3D. Sometimes, however, a preceding analysis will prepare the search query. The Catalyst program from Accelrys and the combination of DISCO and Unity from Tripos are examples of automatic preparation of the search query.
*[nce]: New Chemical Entity: a compound not previously described.


=== "2D"
    ![](https://media.drugdesign.org/course/3d-database-searching/page5_hypothesis.png){: loading=lazy }
=== "Pharmacophore (png)"
    ![](https://media.drugdesign.org/course/3d-database-searching/search_hypo_pharma.png){: loading=lazy }

=== "Pharmacophore (3D)"
    <div id='nglviewer-container-search-hypothesis' class='nglviewer-container' data-molecule-id='search-hypothesis' data-initialized='false'></div>

#### Converting a Search Hypothesis into a Query

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/converting-search-hypothesis-into-query-f06094e8'><i class='fa fa-play' aria-hidden='true'></i></button>Converting a search hypothesis into a 3D query to be understood by the program is generally easy to do. Most 3D searching programs include tools for describing the desired 3D features, qualitatively and quantitatively. A query can be an exact molecule or a fragment of a reference compound (direct query), or the result of a more subtle mental analysis (creative query).
*[nce]: New Chemical Entity: a compound not previously described.


=== "Direct"
    ![](https://media.drugdesign.org/course/3d-database-searching/converting.gif){: loading=lazy }

=== "Creative"
    ![](https://media.drugdesign.org/course/3d-database-searching/convert_hypo.png){: loading=lazy }
#### Processing the Query

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/processing-query-f0b900f2'><i class='fa fa-play' aria-hidden='true'></i></button>Processing the query consists of using it as input in the searching program to find out whether there are molecules (hits) that conform to the desired 3D requirements. The query is described with precise geometrical parameters.


![](https://media.drugdesign.org/course/3d-database-searching/processing_query.gif){: loading=lazy }

## Typical Uses of 3D Searching

### Typical Uses of 3D Searching

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/typical-uses-3d-searching-c0c156df'><i class='fa fa-play' aria-hidden='true'></i></button>3D searching can be used for a wide variety of different purposes, as outlined  below. In the following pages we present and briefly discuss current most typical uses of 3D searching.


![](https://media.drugdesign.org/course/3d-database-searching/page7_typical.png){: loading=lazy }
### Test a Pharmacophore Hypothesis
*[Pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/test-pharmacophore-hypothesis-d14156c5'><i class='fa fa-play' aria-hidden='true'></i></button>3D searching is a logical method to validate a pharmacophore hypothesis. Typically a pharmacophore is expressed as distances between key points in a molecule,  and the search query can be  applied to a database to identify other  molecules having the pharmacophore considered and test them biologically, to assess the validity of the hypothesis.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/page8_flowchart.png){: loading=lazy }
### Find Hits that Fit the Volume of Active Molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/find-hits-that-fit-volume-active-molecules-3d53b4ca'><i class='fa fa-play' aria-hidden='true'></i></button>A possible strategy in lead discovery is to search for molecules that fit the common volume of active compounds. For this purpose the set of all known active and inactive compounds are superimposed, and the resulting information is used for subsequent 3D searching. 


=== "Browser (Gif)"
    ![](https://media.drugdesign.org/course/3d-database-searching/browser_surface.gif){: loading=lazy }

=== "Browser (3D)"
    <div id='nglviewer-container-volume-active-mol' class='nglviewer-container' data-molecule-id='volume-active-mol' data-initialized='false'></div>

### Bioactive Conformation of a Flexible Molecule
*[Bioactive Conformation]: The geometry adopted by a ligand when it binds to its biological target.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/bioactive-conformation-flexible-molecule-66f219c9'><i class='fa fa-play' aria-hidden='true'></i></button>The first step in a drug design project might be to synthesize molecules that probe the potential bioactive conformation considered. For dopamine for example, 3D searching can be used to identify rigid analogue hits corresponding to different  hypotheses (e.g. "Extended" or "Folded"). The biological testing of the hits obtained will indicate what is the conformation of dopamine when it binds to the receptor considered.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.


=== "Extended (Gif)"
    ![](https://media.drugdesign.org/course/3d-database-searching/bio_extended.gif){: loading=lazy }

=== "Extented (3D)"
    <div id='nglviewer-container-bio-flexible-extended' class='nglviewer-container' data-molecule-id='bio-flexible-extended' data-initialized='false'></div>

=== "Folded (Gif)"
    ![](https://media.drugdesign.org/course/3d-database-searching/bio_folded.gif){: loading=lazy }

=== "Folded (3D)"
    <div id='nglviewer-container-bio-flexible-folded' class='nglviewer-container' data-molecule-id='bio-flexible-folded' data-initialized='false'></div>

### "Lead-Hop" to a New Core

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/lead-hop-to-new-core-1bca093b'><i class='fa fa-play' aria-hidden='true'></i></button>Once a bioactive conformation is established, one may wish to design one or more novel series that retain the target bioactivity. 3D searching can be used to "lead-hop" and find a new core. Shown in yellow is a novel D1 dopaminergic agonist that was found at Abbott, using the dopamine query in the extended conformation visualized below.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.
*[nce]: New Chemical Entity: a compound not previously described.


=== "Gif"
    ![](https://media.drugdesign.org/course/3d-database-searching/lead_hop.gif){: loading=lazy }

=== "3D"
    <div id='nglviewer-container-lead-hop' class='nglviewer-container' data-molecule-id='lead-hop' data-initialized='false'></div>

### Design a Library for HTS

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/design-library-for-hts-c60b9adc'><i class='fa fa-play' aria-hidden='true'></i></button>One way to test a pharmacophore hypothesis is to run a high throughput screen on additional compounds identified by 3D searching to fit the hypothesis. One could also use the results of multiple 3D searches to prepare a library that examines several competing pharmacophore hypotheses. Alternatively, the library designed from 3D searching might fulfill a pharmacophore common to several related biological targets (for example kinase inhibitors). In this case the library would be used to screen new targets for this biological class.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/library_design.gif){: loading=lazy }

### Structural Analyses on Experimental 3D Databases

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/structural-analyses-on-experimental-3d-databases-f849583b'><i class='fa fa-play' aria-hidden='true'></i></button>When the database contains experimental structures (for example from X-ray crystallography) it can be used to answer questions such as: what is the preferred orientation of two interacting phenyl rings; what are the H-bond angles and distances for C=S and C=O? what are the preferred conformations of a 12-membered macrocycle? what is the geometry of phenyl-sulfonamides? what torsion angles are found in &beta;-turns etc... it can also be exploited to design and calibrate force-field components for specific structural moieties.
*[force-field]: A set of mathematical equations and parameters used for assessing the energy of a given chemical system.
*[nce]: New Chemical Entity: a compound not previously described.
*[moieties]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/3d-database-searching/statistic.png){: loading=lazy }

??? Abstract "articles"
    **The Hydrogen Bond in the Solid State** 
    Thomas Steiner 
    Angew. Chem. Int. Ed. 
    41 2002  
    
    **Non-hydrogen Bond Interactions Involving the Methionine Sulfur Atom** 
    Debnath Pal et al. 
    Journal of Biomolecular Structure and Dynamics 
    19 2001  
    
    **Cis Peptide Bonds in Proteins: Residues Involved,their Conformations, Interactions and Locations** 
    Debnath Pal et al. 
    J. Mol. Biol. 
    294 1999  
    
### Generate Ideas

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/generate-ideas-f3e0707a'><i class='fa fa-play' aria-hidden='true'></i></button>3D database searching is a method of choice for generating new ideas. The hits do not need to be available in the stockroom their role is only to provide new ideas. For example, to connect fragments in a pre-determined orientation, to create original scaffolds, to replace a template by a moiety with a simple synthetic route etc... In the example below a hit prompted the idea of considering ring moieties. By itself the hit was improper but helped to conceive a novel lead structure.
*[nce]: New Chemical Entity: a compound not previously described.
*[moieties]: Fragments, functional groups or portions of chemical compounds.
*[moiety]: Fragments, functional groups or portions of chemical compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/1_8_0_0_0_1.png){: loading=lazy }
## Types of 3D Searches

### Types of 3D Searches

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/types-3d-searches-89dc2897'><i class='fa fa-play' aria-hidden='true'></i></button>As the practice of molecular modeling has matured, variations of 3D searching have been implemented. The two main types of searches are geometric, which is based on distances and angles between points in the molecule; and shape, which matches the shape of a database molecule with that of the search query.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/geo_shape.png){: loading=lazy }
### Geometric Searching

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/geometric-searching-4fa1ca4a'><i class='fa fa-play' aria-hidden='true'></i></button>Geometric searching arose directly from the pharmacophore hypothesis and from the need to synthesize molecules to probe the bioactive conformation of flexible molecules. It defines the search by the geometric relationships between points, lines, and planes identified in molecules.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/geometric_searching.png){: loading=lazy }

#### Typical Geometric Objects

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/typical-geometric-objects-ee3f75b9'><i class='fa fa-play' aria-hidden='true'></i></button>To do a 3D search, the search question needs to be composed in a way that the 3D searching program can process. For geometric searching this involves specifying (1) how to use the database molecule to identify 3D objects such as points, lines, angles, and planes and (2) the 3D relationship between these 3D objects.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/1_11_0_0_0_1.png){: loading=lazy }
#### Typical Properties Considered

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/typical-properties-considered-50e2101f'><i class='fa fa-play' aria-hidden='true'></i></button>Every functional group has associated properties. The following are typically considered.


![](https://media.drugdesign.org/course/3d-database-searching/typical_properties.gif){: loading=lazy }

##### Point at an Atom

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/point-at-an-atom-94aea3b2'><i class='fa fa-play' aria-hidden='true'></i></button>The simplest type of point is one centered at an atom. In this example H-bond donor points have been placed on the phenolic oxygen atoms and positive points on the basic nitrogen atom.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/point_at_an_atom.gif){: loading=lazy }

##### Centroid

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/centroid-1fa03024'><i class='fa fa-play' aria-hidden='true'></i></button>Frequently the center of an aromatic ring is used as a point in the description. This makes a phenyl and a pyridine or an isoxazole equivalent.


=== "Isoxazole"
    ![](https://media.drugdesign.org/course/3d-database-searching/isoxazole.gif){: loading=lazy }

=== "Browser (Gif)"
    ![](https://media.drugdesign.org/course/3d-database-searching/centroid_browser.gif){: loading=lazy }

=== "Browser (3D)"
    <div id='nglviewer-container-centroid-browser' class='nglviewer-container' data-molecule-id='centroid-browser' data-initialized='false'></div>

##### Extension Point

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/extension-point-b87586c4'><i class='fa fa-play' aria-hidden='true'></i></button>To consider H-bonding groups, one extends along the line that describes the H-bond to the point at which the complementary atom on the protein would be, the site point. Shown are site points for nicotine (left) and dopamine (right).


![](https://media.drugdesign.org/course/3d-database-searching/h_bonding.gif){: loading=lazy }

##### Line

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/line-7c39f45d'><i class='fa fa-play' aria-hidden='true'></i></button>Sometimes a line is needed to orient the molecule with respect to the rest of the query. A normal (perpendicular) to a plane or another line can also be used to define a line.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/line.gif){: loading=lazy }

##### Plane

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/plane-09a49000'><i class='fa fa-play' aria-hidden='true'></i></button>A plane is typically defined by three atoms. To define the position of an aromatic system one typically defines a plane of the aromatic atoms and the centroid. However, other types of planes are equally useful, for example, the plane of the atoms in an amide.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "3 points"
    ![](https://media.drugdesign.org/course/3d-database-searching/3_point.gif){: loading=lazy }

=== "Aromatic"
    ![](https://media.drugdesign.org/course/3d-database-searching/aromatic.gif){: loading=lazy }

=== "Amide"
    ![](https://media.drugdesign.org/course/3d-database-searching/amide.gif){: loading=lazy }

#### Geometric Constraints

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/geometric-constraints-e087bab2'><i class='fa fa-play' aria-hidden='true'></i></button>Geometric constraints describe the relationships between the geometric objects. They are typically given with a tolerance that describes the uncertainty of the value.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/page21_constrain.png){: loading=lazy }
##### Distance Constraints
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/distance-constraints-8b400bdc'><i class='fa fa-play' aria-hidden='true'></i></button>Most geometric searches include at least one distance constraint. If more than one distance to a particular point is used in a query, one must be certain to include enough distances to ensure that the hits meet expectations.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/hits.png){: loading=lazy }
##### Angle Constraints

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/angle-constraints-7ba5268b'><i class='fa fa-play' aria-hidden='true'></i></button>Frequently geometric searches include angle constraints. For example,  in the query shown below  angle constraints were incorporated, because the strength of the hydrogen bonds is dependent on the angle between the interacting groups. 
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/angle_constraints.png){: loading=lazy }

##### Torsion Angle Constraints

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/torsion-angle-constraints-cfe3252b'><i class='fa fa-play' aria-hidden='true'></i></button>A torsion angle describes the angle between two points at opposite ends of two other points. Typically this is the relationship between groups attached to opposite atoms of a single bond. To constrain the geometry either real or virtual torsion angles can be used (i.e. the four points are not connected by real chemical bonds and may also not correspond to real atoms). 
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Direct"
    ![](https://media.drugdesign.org/course/3d-database-searching/angle_direct.gif){: loading=lazy }

=== "Virtual"
    ![](https://media.drugdesign.org/course/3d-database-searching/angle_virtual.gif){: loading=lazy }

##### Excluded Volumes

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/excluded-volumes-dfc228a7'><i class='fa fa-play' aria-hidden='true'></i></button>It is possible to use "excluded volume" constraints on a hypothesis to specify one or more regions that must not contain any atoms or bonds.  Shown below, the use of an exclusion sphere, based on the observation that para-substituted analogs in this series are always inactive. The database search will therefore identify hits that have no atoms or bonds in this region.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold


![](https://media.drugdesign.org/course/3d-database-searching/excluded_volume.png){: loading=lazy }

#### Sources of Constraints for 3D Searching

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/sources-constraints-for-3d-searching-801f76cd'><i class='fa fa-play' aria-hidden='true'></i></button>Of course, one must have a basis for what the search is to find. Usually these constraints result from previous molecular modeling or experimental investigation of molecules of interest.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.


![](https://media.drugdesign.org/course/3d-database-searching/source_of_constraints.png){: loading=lazy }

##### Constraints from a 3D Pharmacophore
*[Pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/constraints-from-3d-pharmacophore-93a86785'><i class='fa fa-play' aria-hidden='true'></i></button>This diagram illustrates an example of constraints associated to a pharmacophore with a 3D query that has been used to identify new D1 dopamine agonists. Note the use of distances to a site point as well as to a phenolic oxygen.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[agonist]: A chemical substance capable of activating a given receptor.
*[agonists]: A chemical substance capable of activating a given receptor.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/dopamine_query.gif){: loading=lazy }

##### Constraints from a Protein Active Site

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/constraints-from-protein-active-site-02cbacc1'><i class='fa fa-play' aria-hidden='true'></i></button>In this example the constraints were derived from the X-ray of a complex, and the query was designed to search for different cores that produce the same type of interactions. The diagram shows the H-bonding interactions of benzamidine with bovine pancreas beta trypsin. Both nitrogens form two close (<3.0 A) H-bonds to acceptor oxygen atoms in the protein.   


=== "Interaction"
    ![](https://media.drugdesign.org/course/3d-database-searching/constraint_active_site.gif){: loading=lazy }

=== "Active Site"
    ![](https://media.drugdesign.org/course/3d-database-searching/constraint_active_site2.gif){: loading=lazy }

??? PDB
    **PDB entry: 1BRA** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1BRA) 
    
##### Constraints from a Bioactive Conformation
*[Bioactive Conformation]: The geometry adopted by a ligand when it binds to its biological target.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/constraints-from-bioactive-conformation-b687b139'><i class='fa fa-play' aria-hidden='true'></i></button>Given the known  bioactive conformation of a molecule, one may wish to use 3D searching to find a simpler or novel compound. 
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.


![](https://media.drugdesign.org/course/3d-database-searching/ergoline.png){: loading=lazy }
##### Constraints to Probe the Bioactive Conformation
*[Bioactive Conformation]: The geometry adopted by a ligand when it binds to its biological target.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/constraints-to-probe-bioactive-conformation-8cfdd5b0'><i class='fa fa-play' aria-hidden='true'></i></button>Constraints can be used to probe bioactive conformations. For example, the natural product apomorphine is a D1 and D2 dopaminergic agonist that constrains the geometry of the dopamine substructure. Because it is relatively rigid (except for inversion of the nitrogen), its bioactive conformation is known and can be used to set up a 3D search for novel dopaminergics. The constraints shown here are probably more complex than needed. One may find it preferable to try several searches.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.
*[bioactive conformations]: The geometry adopted by a ligand when it binds to its biological target.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[apo]: 3D structure of a macromolecule without a ligand


![](https://media.drugdesign.org/course/3d-database-searching/apomorphine.gif){: loading=lazy }

### Shape Searching

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/shape-searching-7b82d0e9'><i class='fa fa-play' aria-hidden='true'></i></button>Geometric searching can include some implicit shape constraints by specifying distances that are not allowed. On the other hand, specific geometric searching programs can take the whole shape of the binding site into consideration. Docking programs do this explicitly. However, there are also programs that do not use the 3D structure of the target macromolecule as constraints for the search. 
*[nce]: New Chemical Entity: a compound not previously described.


=== "Gif"
    ![](https://media.drugdesign.org/course/3d-database-searching/shape_geometry.gif){: loading=lazy }

=== "3D"
    <div id='nglviewer-container-shape-searching' class='nglviewer-container' data-molecule-id='shape-searching' data-initialized='false'></div>

#### Bioactive Conformation as a Source of Shape
*[Bioactive Conformation]: The geometry adopted by a ligand when it binds to its biological target.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/bioactive-conformation-as-source-shape-a58dd8d7'><i class='fa fa-play' aria-hidden='true'></i></button>One could do a shape query on the molecule that defines the proposed bioactive conformation and/or search for molecules to test alternative proposals of the bioactive conformation.  
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.


=== "Gif"
    ![](https://media.drugdesign.org/course/3d-database-searching/shape_geometry2.gif){: loading=lazy }

=== "3D"
    <div id='nglviewer-container-bioactive-shape' class='nglviewer-container' data-molecule-id='bioactive-shape' data-initialized='false'></div>

#### Ensemble of  Active Molecules as a Source of Shape

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/ensemble-active-molecules-as-source-shape-bd746ccc'><i class='fa fa-play' aria-hidden='true'></i></button> The shape of the space occupied by the ensemble of superimposed active molecules describes a powerful shape query.


=== "Gif"
    ![](https://media.drugdesign.org/course/3d-database-searching/shape_geometry3.gif){: loading=lazy }

=== "3D"
    <div id='nglviewer-container-ensemble-active' class='nglviewer-container' data-molecule-id='ensemble-active' data-initialized='false'></div>

#### Active Site as a Source of Shape

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/active-site-as-source-shape-16a481f9'><i class='fa fa-play' aria-hidden='true'></i></button>One can use the shape of a protein binding site as a shape query. 


![](https://media.drugdesign.org/course/3d-database-searching/active_site.gif){: loading=lazy }

### Full versus Partial Match

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/full-versus-partial-match-6858c37d'><i class='fa fa-play' aria-hidden='true'></i></button>Any search implies that the database molecule must match all aspects of the search query. However, most programs allow you to specify that certain constraints and/or a certain percentage of the constraints need not be met by a hit.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/full_partial.gif){: loading=lazy }

### Complex Query Combination 

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/complex-query-combination-57d21754'><i class='fa fa-play' aria-hidden='true'></i></button>Although strict queries are generally used in 3D database searching, it is however possible to express a given query in terms of Boolean functionalities (such as AND, OR, NOT etc... and their combinations) to satisfy a logical combination of queries. This may be reserved for special situations or be used to reduce multiple searches to a single one. As in 2D searching, the search can be restricted by additional criteria, for example the molecular weight or the number of rotatable bonds etc... should not exceed specified values.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/3d-database-searching/complex.png){: loading=lazy }
## Constructing 3D Databases

### Constructing 3D Databases

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/constructing-3d-databases-3e7b5bd8'><i class='fa fa-play' aria-hidden='true'></i></button>For 3D database searching one must decide the compounds to be searched, how the 3D conformations will be generated, what will be stored (and how) and the program that will be used for the searching. All of these components are discussed in the following pages.


![](https://media.drugdesign.org/course/3d-database-searching/stam.png){: loading=lazy }
### Sources of Compounds for Searching

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/sources-compounds-for-searching-d6a9c1a9'><i class='fa fa-play' aria-hidden='true'></i></button>Because database preparation and screening is done on the computer, there is no need for the database to contain molecules that are in your stockroom, or indeed that are in anyone's stockroom. The source of compounds for the database depends on how you intend to use the results. Some typical uses of 3D database searching are indicated below.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/1_32_0_0_0_1.png){: loading=lazy }
#### Database of the Corporate Collection

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/database-corporate-collection-9a3f6010'><i class='fa fa-play' aria-hidden='true'></i></button>If you work for a company and your objective is to select compounds for screening, then a good source of compounds for a 3D database is your corporate collection. Samples of many of these compounds are readily available and their biological properties will also be available. Note that these compounds might already have been tested for the activity of interest using high throughput screening!
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/database_corporate.gif){: loading=lazy }

#### Databases of Vendor Compounds

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/databases-vendor-compounds-eab7b2e6'><i class='fa fa-play' aria-hidden='true'></i></button>If you are looking for additional or different compounds to screen or to test your pharmacophore or bioactive conformation hypothesis, then a 3D database of vendor compounds is useful. Dozens of vendors of compounds for screening are happy to send CDs of their structures. One disadvantage of this source of compounds is that it takes time for the compounds to arrive and some will not be available. A second disadvantage is that typically anyone can purchase these compounds, hence your competitor might have already purchased samples of those that you identify.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/page35_companies.png){: loading=lazy }
#### Database of Virtual Compounds

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/database-virtual-compounds-2b17c9be'><i class='fa fa-play' aria-hidden='true'></i></button>You might search a 3D database of virtual compounds to see which of those proposed for synthesis match a pharmacophore hypothesis. Alternatively you could generate and search one or more combinatorial libraries to have easily synthesized compounds available should you make a hit in a search. If the libraries are derived from proprietary chemistry, then one would expect a higher likelihood  of patentability of any hits found active compared to hits found from vendor libraries.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[combinatorial libraries]: A combinatorial library is a set of compounds prepared by combinatorial chemical synthesis.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/virutal.png){: loading=lazy }
### Generating 3D Structures

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/generating-3d-structures-44554af5'><i class='fa fa-play' aria-hidden='true'></i></button>Although some of the earliest 3D searching programs depended on carefully modeled 3D structures, these days the structures for searching are either determined crystallographically or generated by a fast 2D->3D structure converter program. Low energy conformers are collected and stored in the database however they cannot exceed a reasonable number because of limitations in storage capacity. 
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/generating_3d.png){: loading=lazy }

#### Experimental 3D Structures

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/experimental-3d-structures-194d1e70'><i class='fa fa-play' aria-hidden='true'></i></button>The Cambridge Structural Database contains the 3D coordinates of more than 260,000 compounds. Most of these were determined by X-ray diffraction, the remainder by neutron diffraction. The ConQuest software provides geometric 3D searching but also searching by name, substructure, and various crystallographic features.
*[Cambridge Structural Database]: The "Cambridge Structural Database". A worldwide repository source of experimental data on the X-ray structures of small molecules.


![](https://media.drugdesign.org/course/3d-database-searching/page38_chambridge.png){: loading=lazy }
#### Computationally Generated 3D Structures

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/computationally-generated-3d-structures-1ef43aa4'><i class='fa fa-play' aria-hidden='true'></i></button>Converting the molecules contained in a database of compounds stored in 2D to 3D has become a routine operation. Many 2D->3D converter programs now exist; a brief outline of the most popular ones is given in the following pages.


![](https://media.drugdesign.org/course/3d-database-searching/1_38_0_0_0_1.png){: loading=lazy }
##### Cleaning up 2D Input

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/cleaning-up-2d-input-739f8cc8'><i class='fa fa-play' aria-hidden='true'></i></button>Before generating a 3D structure it is important to "clean up" the 2D structures being used: remove any counter ions, salts, or water molecules that might be part of the registered structure. Remove any reactive or otherwise undesirable compounds. Possibly generate all stereo isomers, tautomers, and protonation states of the structures.
*[isomers]: Isomers are compounds with the same chemical formula but different 2D-structures
*[isomer]: Isomers are compounds with the same chemical formula but different 2D-structures


![](https://media.drugdesign.org/course/3d-database-searching/clean.png){: loading=lazy }
=== "Salt"
    ![](https://media.drugdesign.org/course/3d-database-searching/clean_f1.png){: loading=lazy }
=== "Chiral"
    ![](https://media.drugdesign.org/course/3d-database-searching/clean_f2.png){: loading=lazy }
=== "Tautomer"
    ![](https://media.drugdesign.org/course/3d-database-searching/clean_f3.png){: loading=lazy }
=== "Double bond"
    ![](https://media.drugdesign.org/course/3d-database-searching/clean_f4.png){: loading=lazy }
##### CONCORD

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/concord-d82e646c'><i class='fa fa-play' aria-hidden='true'></i></button>CONCORD (CONnections to COoRDinates) is a popular program for generating 3D databases from structure diagrams. These programs use a combination of rules and simple energy calculations to produce a 3D structure. The structures produced are typically very close to the one crystallographically observed, and usually are a very low energy, if not the minimum energy conformation. CONCORD generates 3D structures very quickly from all of the popular input formats.


![](https://media.drugdesign.org/course/3d-database-searching/concord.png){: loading=lazy }

##### CORINA

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/corina-adcae831'><i class='fa fa-play' aria-hidden='true'></i></button>CORINA is a popular program that automatically generates three-dimensional atomic coordinates from the constitution of a molecule as expressed by a connection table or linear code. The program has proven to be reliable to convert large databases, for example a database with more than six million compounds has been converted with a conversion rate of 99%. The following view visualizes the comparison of the structure of cyclophane as generated by CORINA and experimentally determined by X-ray crystallography (RMS=0.26).
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[RMS]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


=== "Gif"
    ![](https://media.drugdesign.org/course/3d-database-searching/corina.gif){: loading=lazy }

=== "3D"
    <div id='nglviewer-container-corina' class='nglviewer-container' data-molecule-id='corina' data-initialized='false'></div>

##### ConFirm and Omega

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/confirm-omega-e2e389f9'><i class='fa fa-play' aria-hidden='true'></i></button>ConFirm and Omega generate and store many 3D conformations of a molecule for use in 3D database searching or for pharmacophore generation. The structures are generated by advanced distance geometry algorithms that eliminate duplicate conformations and attempt to cover all the conformational space.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/3d-database-searching/1_40_0_0_0_1.png){: loading=lazy }
### Information Stored for a Molecule in the Database

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/information-stored-for-molecule-database-7ec12ec7'><i class='fa fa-play' aria-hidden='true'></i></button>The following information on a molecule is stored in the database: its 2D structure diagram, the coordinates and atom type of each atom in the conformation, the correspondence between the atoms in the 2D and 3D structures, features of the 2D and 3D structures that allow the program to filter out structures that cannot match the search query. The 3D filter can be as simple as the maximum distance between any pair of atoms or as elaborate as 3D fingerprints that encode the presence or absence of a particular distance/atom pair or triplet in the molecule.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/mol_format.png){: loading=lazy }
#### Coordinates

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/coordinates-c95e1bc6'><i class='fa fa-play' aria-hidden='true'></i></button>The (X,Y,Z) coordinates of each atom in the conformation are stored in the database. They are directly taken from experimental results (X-rays) or generated by 2D-3D converter programs. 


![](https://media.drugdesign.org/course/3d-database-searching/xyz.png){: loading=lazy }
#### Bitmaps or Fingerprints of Typical Search Constraints

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/bitmaps-or-fingerprints-typical-search-constraints-9723175b'><i class='fa fa-play' aria-hidden='true'></i></button>Chemical structures can be represented by "bitmaps" or "fingerprints", which are binary bit string representations of on/off values, each indicating the presence or absence of certain structural features in the molecule. The bipmap also includes 'digested' 3D information enabling rapid filtering of the desired 3D constraints. 
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/3d-database-searching/pharm.png){: loading=lazy }
## Programs for 3D Searching

### Programs for 3D Searching

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/programs-for-3d-searching-def02d2a'><i class='fa fa-play' aria-hidden='true'></i></button>Each program has its particular advantages and disadvantages. However, it is usually possible to use any of the programs described to identify the structures of interest. The programs are listed in the approximate order of their publication date.


![](https://media.drugdesign.org/course/3d-database-searching/soft.png){: loading=lazy }
### ConQuest

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/conquest-01b0c3bc'><i class='fa fa-play' aria-hidden='true'></i></button>ConQuest searches experimental 3D structures. This is an advantage because any retrieved structure will be a low energy conformation. This is a disadvantage if compounds of interest are not in the database. ConQuest can also be used to search for and/or visualize intermolecular contacts. This information can be helpful in generating a pharmacophore model 3D search question from compounds with unusual functional groups.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.


![](https://media.drugdesign.org/course/3d-database-searching/1_45_0_0_0_1.png){: loading=lazy }
### CAVEAT

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/caveat-46fb705d'><i class='fa fa-play' aria-hidden='true'></i></button>CAVEAT is specifically designed to quickly search for templates that can constrain the conformation of important rotatable bonds of a flexible molecule. It works with sources of 3D structures such as the Cambridge Structural Database, to identify molecular skeletons that hold the functional groups in the desired 3D arrangement.  CAVEAT is supplied with TRIAD and ILIAD, databases of hydrocarbon templates that contain 411,000 unique tricyclic structures and 110,000 acyclic frameworks. The particular molecules to be synthesized are derivatives of the templates in which carbons are replaced by heteroatoms for synthetic ease.
*[Cambridge Structural Database]: The "Cambridge Structural Database". A worldwide repository source of experimental data on the X-ray structures of small molecules.


![](https://media.drugdesign.org/course/3d-database-searching/caveat.png){: loading=lazy }

??? Abstract "articles"
    **CAVEAT: A Program to Facilitate the Design of Organic Molecules** 
    Lauri, G.; Bartlett, P.A. 
    J. Comp. Aided Mol. Design 
    8 1994  
    
### UNITY

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/unity-54059217'><i class='fa fa-play' aria-hidden='true'></i></button>UNITY combines traditional 2D substructure with 3D searching in an environment tightly coupled with the Sybyl molecular modeling program, which provides pharmacophore perception and spreadsheet capabilities. A key feature of UNITY is that one need not store all conformations of a molecule in order to search them later. Rather, UNITY generates conformations that match the distance, angle, and shape constraints. It is able to do this quickly because when one loads a molecule into the database, 3D fingerprints are generated to encode its conformational possibilities.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/unity.png){: loading=lazy }

??? Abstract "articles"
    **3D Database Searching in Drug Design** 
    Y.C. Martin 
    J. Med. Chem 
    35 1992  
    
### ISIS

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/isis-957a9d07'><i class='fa fa-play' aria-hidden='true'></i></button>The standard ISIS structure searching tool also has capabilities for 3D searching in combination with 2D searching. One draws the query using ISIS-Draw, and no molecular modeling is required if one starts with a structure in an ISIS 3D database. The 3D structures in the databases provided by MDL are generated with CORINA.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[MD]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system


![](https://media.drugdesign.org/course/3d-database-searching/isis.png){: loading=lazy }
### Catalyst

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/catalyst-bfd03c17'><i class='fa fa-play' aria-hidden='true'></i></button>Catalyst provides an integrated suite of software to process a set of active molecules, define a pharmacophore/3D-QSAR hypothesis, and/or search databases for molecules that match the hypothesis or that fit into a particular shape. Catalyst databases are prepared with many low energy 3D conformations of each molecule.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[3D-QSAR]: A method for the establishment of a correlation between the biological activities and the fields produced in the surrounding of a molecule.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/3d-database-searching/catalyst.png){: loading=lazy }
### FlexS

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/flexs-3435b9e8'><i class='fa fa-play' aria-hidden='true'></i></button>FlexS predicts ligand superpositions. For a given pair of ligands, it predicts the conformation and orientation of one of the ligands relative to the other one. Full torsional flexibility of each molecule is considered. For virtual screening one uses a reference structure as a negative fingerprint of the active site. FlexS estimates a score for the similarity between each database structure and the reference structure as part of the optimization of the alignment. In this way it provides a quantitative ranking of each database molecule.
*[nce]: New Chemical Entity: a compound not previously described.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ligands]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/flexS.png){: loading=lazy }

### ROCS

<button  class='playb' onclick='playAudio(this)' data-mp3-name='3d-database-searching/rocs-f99860ba'><i class='fa fa-play' aria-hidden='true'></i></button>ROCS is a shape comparison program, based on the idea that molecules have similar shape if their volumes overlay well and that any volume mismatch is a measure of dissimilarity. It reports Tanimoto and Tversky measures of similarity between shapes. One can optionally specify a force field and its weighting to combine with shape matching. The query shape may be a molecule, a grid (e.g. electron density, active site, or arbitrary volume) or a composite of the two.
*[force field]: A set of mathematical equations and parameters used for assessing the energy of a given chemical system.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/3d-database-searching/1_53_0_0_0_1.png){: loading=lazy }
=== "Query"
    ![](https://media.drugdesign.org/course/3d-database-searching/1_53_0_0_0_1_f1.png){: loading=lazy }
=== "Example of Hit 1"
    ![](https://media.drugdesign.org/course/3d-database-searching/1_53_0_0_0_1_f2.png){: loading=lazy }
=== "Example of Hit 2"
    ![](https://media.drugdesign.org/course/3d-database-searching/1_53_0_0_0_1_f3.png){: loading=lazy }


Copyright © 2024 drugdesign.org
