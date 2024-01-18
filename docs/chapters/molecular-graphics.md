# Molecular Graphics
!!! Authors
    **Claude Cohen** (Synergix), **Elie Cohen** (Synergix)

!!! Info
    The visualization of molecular structures and their interactions is of central importance in molecular modeling. The technologies for providing the 3D perception, the different ways to visualize small-molecules and proteins; also the representation of molecular surfaces and volumes will be presented.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[nce]: New Chemical Entity: a compound not previously described.


    **Number of Pages: 76 (±1 hours read)**

    Last Modified: January 2004

    Prerequisites: None
## Introduction

### Importance of Molecular Graphics
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/importance-molecular-graphics-c5169cb6'><i class='fa fa-play' aria-hidden='true'></i></button>One of the most important things for the molecular modeler is to visualize molecular structures and interactions in order to calibrate his intuition and to develop a feeling of the structures concerned.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/1_1_0_1.png){: loading=lazy }

### Almost Science Fiction
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/almost-science-fiction-f2d9dedb'><i class='fa fa-play' aria-hidden='true'></i></button>Computer graphics enables us to visualize complex machinery underlying highly coordinated biological processes. Geometrical measurements, shape analyses, design and evaluation of candidate prototypes are all operations that are used daily by the usual locksmith but these operations are more complicated in drug discovery. Today, research teams using very unusual visual apparatus work hours and hours with 3D graphical displays and can virtually "enter" into the precise 3D structure of a protein and construct atom by atom an inhibitor that can lead to a drug that will stop the development of a disease. One would think that the following scene is taken from a science fiction movie but today it is possible with computer graphics!
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/1_2_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Computer Graphic Tool for Colour Structure Display on Personal Computers** 
    Cozzini P, Pavesi P and Andreetti GD 
    J. Mol. Graph. 
    3(3) 1985  
    
### History of Molecular Visualizations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/history-molecular-visualizations-b60b3626'><i class='fa fa-play' aria-hidden='true'></i></button>1970-1975: In the beginning, no graphical software programs existed for 3D drug design. Computers existed but they were mainframe computers. Physical models (plastic or metallic) were very popular and allowed "hand" manipulation of the three-dimensional structures.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/1_3_1_1.png){: loading=lazy }


??? Abstract "articles"
    **New Skeletal-Space-Filling Models** 
    Clarke FH 
    J. Chem. Educations 
    54 1977  
    
    **Plastic Dreiding Models** 
    Fieser LF 
    J. Chem. Educations 
    40 1963  
    
    **Computer Representation of Molecular Surfaces** 
    Max NL 
    J. Mol. Graph. 
    2(1) 1984  
    
    **Generation of Molecular Surfaces for Graphic Display** 
    Pearl LH and Honegger A 
    J. Mol. Graph. 
    1(1) 1983  
    
#### 1975-1978

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/1975-1978-62afdbea'><i class='fa fa-play' aria-hidden='true'></i></button>1975-1978: The second period witnessed the development of molecular modeling software in drug design. The output of these programs were generated numerically or with graphical representations produced by graphical plotters.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.


![](https://media.drugdesign.org/course/molecular-graphics/1_3_2_1.png){: loading=lazy }

#### 1978-1980

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/1978-1980-e4319834'><i class='fa fa-play' aria-hidden='true'></i></button>1978-1980: One of the first commercially available graphical systems was "Tektronix" displays. They had poor resolution and no colors. They were so slow that it was not possible to envision that they could allow real-time rotations.


![](https://media.drugdesign.org/course/molecular-graphics/1_3_3_1.png){: loading=lazy }

#### 1980-1995

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/1980-1995-67f43404'><i class='fa fa-play' aria-hidden='true'></i></button>1980-1995: "Evans &#38; Sutherland" graphics system revolutionized molecular modeling. They provided colored pictures of excellent quality and included real time rotation and stereo. However the cost of a single display was $150,000! Towards the end of that period, "Silicon Graphics" introduced less expensive yet high performance workstations that were within the budget of most academic and industrial laboratories (approximately $ 30,000).
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/1_3_4_1.png){: loading=lazy }

#### 1995-now

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/1995-now-71da054f'><i class='fa fa-play' aria-hidden='true'></i></button>"1995-now": A large range of graphic workstations became available to meet the need of modeling applications ranging from simple, small molecules to complex macromolecules. Basic inexpensive systems like PC or Macintosh combined with efficient graphic software were available for less than $1.000 and provided visualization means that were accessible to all.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/alt1_1_3_5_1.png){: loading=lazy }

### Commercially Available Molecular Kits

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/commercially-available-molecular-kits-7c9c21d1'><i class='fa fa-play' aria-hidden='true'></i></button>Hand-held commercial models have the advantage of being concrete objects that can be manipulated and provide a physical "feeling" of their actual geometrical features. It is not possible to construct on a routine basis proteins, neither is it easy to introduce a molecule in its active site or to superimpose together two or three proteins or two or three small molecules. Molecular graphic software programs offer great flexibility and include the visualization of color-coded properties that are associated to the different structural fragments.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/1_4_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Colour Molecular Graphics on a Microcomputer** 
    Hubbard RE 
    J. Mol. Graph. 
    1(1) 1983  
    
### Progress in Graphical Hardware and Algorithms

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/progress-graphical-hardware-algorithms-3b8c9ebe'><i class='fa fa-play' aria-hidden='true'></i></button>The simultaneous development of advanced graphic hardware and graphic algorithms for efficient visualization revolutionized the 3D displays.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/1_5_1_1.png){: loading=lazy }


??? Abstract "articles"
    **Colour Molecular Graphics on a Microcomputer** 
    Hubbard RE 
    J. Mol. Graph. 
    1(1) 1983  
    
#### Algorithm 1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/algorithm-1-3ccf8bb5'><i class='fa fa-play' aria-hidden='true'></i></button>First steps in computer graphics were very disappointing. The following represents an attempt made in 1967 to represent the surface of a molecule with relatively advanced graphic displays based on successive sections of its volume.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/1_5_2_1.png){: loading=lazy }

#### Algorithm 2

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/algorithm-2-ead3c281'><i class='fa fa-play' aria-hidden='true'></i></button>The following shows the quality of the pictures that can be generated with efficient graphical algorithms (open GL). The algorithms were developed to achieve optimal efficiency in terms of both quality and speed.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/molecular-graphics/alt1_1_5_3_1.png){: loading=lazy }

### Molecular Graphics Functions

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/molecular-graphics-functions-e9e7669e'><i class='fa fa-play' aria-hidden='true'></i></button>A molecular graphics system should provide the following three basic functions. Editing: Some type of "construction kit" must be available so that molecules can be built and modified. Visualization: Each molecule should be visualized in three-dimensions, color-coded and labeled. Manipulation: It must be possible to move and rotate molecules independently in any direction and about any axis and to manipulate their torsion angles.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/1_6_0_1.png){: loading=lazy }


??? Abstract "articles"
    **A molecular Editor Program** 
    Hilmer RM 
    J. Mol. Graph. 
    7 1989  
    
## 3D Perception

### The Perception of the Third Dimension

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/perception-third-dimension-a2dbfb62'><i class='fa fa-play' aria-hidden='true'></i></button>Although defined in 3D, the molecular representations are visualized on a 2D computer screen. In drug design, good perception of the three-dimensional nature of the molecule is essential and many techniques of graphic software provide a three-dimensional illusion.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/2_1_0_1.png){: loading=lazy }

### From 3D Coordinates to Screen Coordinates
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/from-3d-coordinates-to-screen-coordinates-9dab8403'><i class='fa fa-play' aria-hidden='true'></i></button>The representation of a molecule (3D object) on a graphic display actually consists of calculating a series of projections of the 3D object onto the 2D plane of the screen.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/2_2_1_1.png){: loading=lazy }
#### 2D Projection is Not Sufficient

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/2d-projection-is-not-sufficient-db3455c6'><i class='fa fa-play' aria-hidden='true'></i></button>The 2D projection is not sufficient. You have to rotate the object to perceive its 3D features. The following represents the crystal unit of Zirconium. Notice the difference when you rotate it!
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/alt1_2_2_2_1.gif){: loading=lazy }

### Real Time Manipulation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/real-time-manipulation-531f26bd'><i class='fa fa-play' aria-hidden='true'></i></button>A real-time manipulation of the molecular structure representation, can provide a convincing three-dimensional illusion of the molecules.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_2_3.gif){: loading=lazy }

### Depth Cueing

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/depth-cueing-4fcbbc90'><i class='fa fa-play' aria-hidden='true'></i></button>Depth cueing is a technique in which distant objects are drawn progressively darker. This creates the perception of depth in the representation.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_2_4.png){: loading=lazy }


??? Abstract "articles"
    **Depth-Buffer Algorithms for Molecular Modelling** 
    Connolly ML 
    J. Mol. Graph. 
    3(1) 1985  
    
### Perspective

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/perspective-1e13df2b'><i class='fa fa-play' aria-hidden='true'></i></button>Perspective is a technique in which distant objects are drawn progressively smaller.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_2_5.gif){: loading=lazy }

### Stereo

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/stereo-09fd6e27'><i class='fa fa-play' aria-hidden='true'></i></button>Whereas real-time manipulations provide a 3D feeling, stereo is critical to maintain that three-dimensional perception. Stereo perception involves presenting a left and right eye view of the molecule to the appropriate eye of the user. In this case, dividing the screen into two halves provides stereo and the left and right views are represented and are ready to be mentally superimposed by the user.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_2_6.png){: loading=lazy }


??? Abstract "articles"
    **Stereo Viewing on the PC/AT with EGA Graphics** 
    Chelvanayagam G and McKeaig L 
    J. Mol. Graph. 
    9 1991  
    
    **Display of Red/Green Stereo Images Using a Raster Colour Image Display** 
    Jackson PH 
    J. Mol. Graph. 
    1(1) 1983  
    
### Hardware Stereo

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/hardware-stereo-2f0a86b8'><i class='fa fa-play' aria-hidden='true'></i></button>Hardware stereo is a trick incorporated in graphics systems. The monitor runs at double the frequency so that the screen presents alternate eye views one after another. The user wears a pair of goggles containing liquid crystal shutters and an infrared emitter on the workstation synchronizes the visibility of the screen to each eye. These capabilities are sometimes incorporated in the hardware and software equipment of a workstation and are available to support effective hardware stereo.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/2_7_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Stereo Viewing on the PC/AT with EGA Graphics** 
    Chelvanayagam G and McKeaig L 
    J. Mol. Graph. 
    9 1991  
    
## Visualization

### 3D Representation of Small Molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/3d-representation-small-molecules-4b0f87e4'><i class='fa fa-play' aria-hidden='true'></i></button>Molecules can be displayed with different rendering techniques including Line, Stick, Ball and Stick, CPK etc...


![](https://media.drugdesign.org/course/molecular-graphics/menu1.png){: loading=lazy }
#### Line

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/line-7be48866'><i class='fa fa-play' aria-hidden='true'></i></button>This is the simplest and most common way to visualize molecules where the bonding arrangement is represented in 3D. This type of representation is also called "wireframe".


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_1_1.png){: loading=lazy }

#### Stick

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/stick-b5b64e01'><i class='fa fa-play' aria-hidden='true'></i></button>In this type of representation the bonds are represented as tubes. It is also called "polytube".


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_1_2.png){: loading=lazy }

#### Ball &#38; Stick

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/ball-amp-stick-3de6e710'><i class='fa fa-play' aria-hidden='true'></i></button>Here the molecule is displayed as the assembly of atoms and bonds. Atoms are represented as small spheres and bonds as tubes.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_1_3.png){: loading=lazy }

#### CPK

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/cpk-cb47d4aa'><i class='fa fa-play' aria-hidden='true'></i></button>In this type of representation the molecule is defined as a set of spheres of van der Walls radii of the individual atoms.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_1_4.png){: loading=lazy }

### Quality of Rendering

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/quality-rendering-54f360f9'><i class='fa fa-play' aria-hidden='true'></i></button>Although considered as a sphere, in molecular graphics visualizations, an atom is treated as a polyhedron. A view calculated with a small number of faces is of poor quality; however by increasing the number of faces the quality increases.


=== "Intro"
    ![](https://media.drugdesign.org/course/molecular-graphics/3_2_1_1.png){: loading=lazy }
=== "Poor"
    ![](https://media.drugdesign.org/course/molecular-graphics/3_2_1_1_b.png){: loading=lazy }

=== "High "
    ![](https://media.drugdesign.org/course/molecular-graphics/3_2_1_1_c.png){: loading=lazy }


??? Abstract "articles"
    **Rendering Volumetric Data in Molecular Systems** 
    Goodsell DS, Mian IS and Olson AJ 
    J. Mol. Graph. 
    7 1989  
    
### Atomic Color-Code Convention

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/atomic-color-code-convention-0b49a884'><i class='fa fa-play' aria-hidden='true'></i></button>A color is associated with each type of atom. The following color-code convention is generally accepted and implemented in most popular molecular graphic systems.


![](https://media.drugdesign.org/course/molecular-graphics/3_7_internet.gif){: loading=lazy }

### Coloring Molecules or Sets of Atoms

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/coloring-molecules-or-sets-atoms-d78aabdf'><i class='fa fa-play' aria-hidden='true'></i></button>Molecules can be colored in different ways: by atom-type, by molecule, by color, by properties etc...


![](https://media.drugdesign.org/course/molecular-graphics/menu2.png){: loading=lazy }
#### By Atom-type

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/by-atom-type-67469767'><i class='fa fa-play' aria-hidden='true'></i></button>In this representation the atoms are colored according to the atomic color-code defined and a color is also given to half of the bonds of this atom.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_4_1.png){: loading=lazy }

#### By Molecule

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/by-molecule-895104b0'><i class='fa fa-play' aria-hidden='true'></i></button>A different color is given to each of the molecules visualized in the screen. It is useful when several molecules are superimposed to distinguish and recognize the individual molecules in the view.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_4_2.png){: loading=lazy }

#### By Color

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/by-color-6fc2ea32'><i class='fa fa-play' aria-hidden='true'></i></button>All or part of a given molecule is visualized in one color. Interactive "picking" of the molecule or a set of atoms allows one to associate a color with a specified set.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_4_3.png){: loading=lazy }

#### By Properties

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/by-properties-8876a886'><i class='fa fa-play' aria-hidden='true'></i></button>Various molecular properties can be visualized. The quantitative or qualitative variations can be color-coded defined and visualized for every element considered: atom, bond or the molecular surface.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_4_4.png){: loading=lazy }

### Labeling Functionalities

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/labeling-functionalities-dbf496ff'><i class='fa fa-play' aria-hidden='true'></i></button>Various labels can be added: those which are associated with the molecules and those associated with the screen. The first ones move with the molecules (green) and the other ones are fixed (white).
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_5.png){: loading=lazy }

#### Atom Labels

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/atom-labels-9d0838bc'><i class='fa fa-play' aria-hidden='true'></i></button>If an entire molecule is represented in one color, it is not possible to recognize the different types of atoms. It is useful to label specific atoms in order to facilitate further analyses (e.g. hydrogen bonding capabilities or atomic mimicry).


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_5_2.png){: loading=lazy }

#### Atom Numbering

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/atom-numbering-94636b04'><i class='fa fa-play' aria-hidden='true'></i></button>This type of representation is useful when associated with computerized numerical treatments or to follow the 3D view associated with a publication in which some details are given and atoms are described by their number (Nitrogen 24, or hydroxyl of Ser-76).


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_5_3.png){: loading=lazy }

### Proteins Representation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/proteins-representation-1b3126ca'><i class='fa fa-play' aria-hidden='true'></i></button>Macromolecules are complex entities. They can be displayed as small molecules using various techniques (ball and stick, space-filling, etc.). Other representations are specific to macromolecules and give an overview of the overall molecular architecture of the protein.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_3_6.png){: loading=lazy }


??? Abstract "articles"
    **Interactive Program for Visualization and Modelling of Proteins, Nucleic Acids and Small Molecules** 
    Dayringer HE, Tramontano A, Sprang SR and Fletterick RJ 
    J. Mol. Graph. 
    4(2) 1986  
    
#### Carbon Alpha

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/carbon-alpha-c6e9b88c'><i class='fa fa-play' aria-hidden='true'></i></button>This representation is also called "carbon-&alpha; trace". It is useful for editing and aligning different proteins.


![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_6_2_1.png){: loading=lazy }

#### Ribbon Representation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/ribbon-representation-f6caca82'><i class='fa fa-play' aria-hidden='true'></i></button>Ribbon representations are specific to proteins and provide an overview of the overall molecular architecture (secondary structure) of the protein. &alpha;-helices, &beta;-sheets and &beta;-turns are easily recognized.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_7_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Interactive Program for Visualization and Modelling of Proteins, Nucleic Acids and Small Molecules** 
    Dayringer HE, Tramontano A, Sprang SR and Fletterick RJ 
    J. Mol. Graph. 
    4(2) 1986  
    
#### Ribbon Types

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/ribbon-types-5667144c'><i class='fa fa-play' aria-hidden='true'></i></button>Here are different types of ribbon displays.


=== "Line"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_8_1_1.png){: loading=lazy }

=== "Flat"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_8_2_1.png){: loading=lazy }

=== "Solid"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_8_3_1.png){: loading=lazy }

=== "Tube"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_8_4_1.png){: loading=lazy }

=== "Schematic"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_8_5_1.png){: loading=lazy }

#### Visualization of Protein Properties

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-protein-properties-8e8e8083'><i class='fa fa-play' aria-hidden='true'></i></button>The macromolecular structure can be color-coded according to various physico-chemical properties such as residue types, electrostatic or hydrophobicity. The representation of color-coded surfaces of molecular systems has revolutionized molecular design analyses.


=== "Line"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_9_1_1.png){: loading=lazy }

=== "Flat"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_9_2_1.png){: loading=lazy }

=== "Solid"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_9_3_1.png){: loading=lazy }

=== "Tube"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_9_4_1.png){: loading=lazy }

=== "Schematic"
    ![](https://media.drugdesign.org/course/molecular-graphics/alt1_3_9_5_1.png){: loading=lazy }


??? Abstract "articles"
    **Hydrophilicity of Proteins and DNA** 
    Walkinshaw MD and Floersheim P 
    J. Mol. Struct. 
    237 1990  
    

??? Abstract "book"
    **** 
    Gillilan RE and Ripoll DR 
    Data Visualization in Molecular Science: Tools for Insight and Innovation 
    Addison-Wesley Publishing Company Inc., Reading, Mass  1995   
    
## Editing &#38; Manipulation

### Structure Manipulation &#38; Editing

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/structure-manipulation-amp-editing-d4b13002'><i class='fa fa-play' aria-hidden='true'></i></button>In molecular modeling, the computer software provides tools that interact with the molecules visualized onto the screen. The most basic structure manipulations are: translation of all molecules, translation of one molecule relative to another, rotation of all molecules, rotation of one molecule relative to another, rotation of flexible bonds in a molecule, and molecular editing. These operations also are useful for the superimposition of molecules or for the insertion of a small molecule into the cavity of a macromolecule.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/4_1_0_1.png){: loading=lazy }

#### Add Atoms Function

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/add-atoms-function-1f40ca9e'><i class='fa fa-play' aria-hidden='true'></i></button>3D Molecular Editing Functions - Add atoms


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_2_1.gif){: loading=lazy }

#### Delete Atoms Function

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/delete-atoms-function-24c3489a'><i class='fa fa-play' aria-hidden='true'></i></button>3D Molecular Editing Functions - Delete atoms


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_2_2.gif){: loading=lazy }

#### Fuse Atoms Function

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/fuse-atoms-function-930a4bc5'><i class='fa fa-play' aria-hidden='true'></i></button>3D Molecular Editing Functions - Fuse atoms


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_2_3.gif){: loading=lazy }

#### Connect atoms Function

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/connect-atoms-function-791a7930'><i class='fa fa-play' aria-hidden='true'></i></button>3D Molecular Editing Functions - Connect atoms


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_2_4.gif){: loading=lazy }

### 3D Molecular Constructions

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/3d-molecular-constructions-5ab8d60f'><i class='fa fa-play' aria-hidden='true'></i></button>A simple method for adding new atoms in a molecule is to add hydrogen atoms on a given atom and then exchange the hydrogen with another atom (e.g. C, N, O)


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_3.gif){: loading=lazy }

### Real-Time Rotations, Translations and Zoom

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/real-time-rotations-translations-zoom-7f0ad54e'><i class='fa fa-play' aria-hidden='true'></i></button>Current graphic displays offer real-time rotation and translation capabilities. Dials, joysticks and a mouse allow one to interactively manipulate items on the screen with a great deal of rotational and translational freedom.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/4_7_0_1.png){: loading=lazy }

#### Translations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/translations-da5ce6a8'><i class='fa fa-play' aria-hidden='true'></i></button>Translation Example: click on the molecule and drag the mouse.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_4_4_1.gif){: loading=lazy }

#### Rotations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/rotations-58800d26'><i class='fa fa-play' aria-hidden='true'></i></button>Rotation example: click on the molecule and drag the mouse.


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_4_2.gif){: loading=lazy }

#### Zoom

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/zoom-37f36b1c'><i class='fa fa-play' aria-hidden='true'></i></button>Zoom functionalities are important for the visualization. They allow global and local analyses to be made in a flexible fashion. Zoom example: click on the molecule and drag the mouse.


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_4_3.gif){: loading=lazy }

### Control of Torsion Angles

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/control-torsion-angles-81167b75'><i class='fa fa-play' aria-hidden='true'></i></button>Molecules have rotatable bonds defining many conformations. Dials, joysticks and a mouse allow to interactively rotate bonds with a single hand.


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_4_6.gif){: loading=lazy }

### Slab and Clip

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/slab-clip-52f71466'><i class='fa fa-play' aria-hidden='true'></i></button>Some molecular softwares incorporate "slab" functionalities. The aim of this operation is to visualize sections of the molecular volume. A projection plane can be moved and everything which is either above (top slab) or below (bottom slab) are removed. This allows one to better analyze for example the detailed volume of a macromolecular cavity or a free protein or with a bound ligand.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/k1_4_12_clipmovie.gif){: loading=lazy }

## Surfaces &#38; Volumes

### Concept and Definition of Molecular Surfaces
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/concept-definition-molecular-surfaces-8bdb144e'><i class='fa fa-play' aria-hidden='true'></i></button>The surface of a molecule represents an important structural feature that allows to understand the properties of the compound. Various definitions of the molecular surface have been proposed.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/d1_5_1_1.png){: loading=lazy }


??? Abstract "articles"
    **Analytical Molecular Surface Calculation** 
    Connolly ML 
    Journal of Applied Crystallography 
    16 1983  
    
    **Solvent-Accessible Surfaces of Proteins and Nucleic Acids** 
    Connolly ML 
    Science 
    221 1983  
    
    **Computation of Molecular Volume** 
    Connolly ML 
    J. Am. Chem. Soc. 
    107 1985  
    
    **Molecular Surface Triangulation** 
    Connolly ML 
    J. Appl. Crystallogr. 
    18 1985  
    
    **Measurement of Protein Surface Shape by Solid Angles** 
    Connolly ML 
    J. Mol. Graphics 
    4 1986  
    
    **Computer Molecular Modeling and Graphic Design** 
    Dubois JE, Doucet JP and Yue SY 
    Molecules in Physics, Chemistry, and Biology 
    1 1988  
    
    **Approximation and Characterization of Molecular Surfaces** 
    Duncan B and Olson AJ 
    Biopolymers 
    33 1993  
    
    **Accessible Surface Areas as a Measure of the Thermodynamic Parameters of Hydration of Peptides** 
    Ooi T, Oobatake M, Nemethy G and Scheraga HA 
    Proc. Natl. Acad. Sci. U.S.A. 
    84 1987  
    
    **GEPOL: An Improved Description of Molecular Surfaces. I. Building the Spherical Surface Set** 
    Pascual-Ahuir JL and Silla E 
    J. Comp. Chem. 
    11(9) 1990  
    
    **GEPOL: An Improved Description of Molecular Surface III. A New Algorithm for Computation of the Solvent-Excluding Surface** 
    Pascusl-Ahuir JL, Silla E and Tunon I 
    J. Comput. Chem. 
    15 1994  
    
    **On The Analytical Calculation of Van Der Waals Surfaces and Volumes: Some Numerical Aspects** 
    Petitjean M 
    Journal of Computational Chemistry 
    15 1994  
    
    **Display of Quantum Mechanical Properties on Van der Waals Surfaces** 
    Quarendon P, Naylor CB and Richards WG 
    J. Mol. Graphics 
    2(1) 1984  
    
    **Molecular Volumes and Surfaces of Biomacromolecules Via GEPOL: A Fast and Efficient Algorithm** 
    Silla E, Villar F, Nilsson O, Pascual-Ahuir JL and Tapia O 
    J. Mol. Graph. 
    8 1990  
    
    **Analytical Molecular Surface Calculation** 
    Connolly ML 
    Journal of Applied Crystallography 
    16 1983  
    
    **Approximation and Characterization of Molecular Surfaces** 
    Duncan B and Olson AJ 
    Biopolymers 
    33 1993  
    
    **GEPOL: An Improved Description of Molecular Surfaces. I. Building the Spherical Surface Set** 
    Pascual-Ahuir JL and Silla E 
    J. Comp. Chem. 
    11(9) 1990  
    
    **GEPOL: An Improved Description of Molecular Surface III. A New Algorithm for Computation of the Solvent-Excluding Surface** 
    Pascusl-Ahuir JL, Silla E and Tunon I 
    J. Comput. Chem. 
    15 1994  
    
    **On The Analytical Calculation of Van Der Waals Surfaces and Volumes: Some Numerical Aspects** 
    Petitjean M 
    Journal of Computational Chemistry 
    15 1994  
    
    **Display of Quantum Mechanical Properties on Van der Waals Surfaces** 
    Quarendon P, Naylor CB and Richards WG 
    J. Mol. Graphics 
    2(1) 1984  
    
    **Molecular Volumes and Surfaces of Biomacromolecules Via GEPOL: A Fast and Efficient Algorithm** 
    Silla E, Villar F, Nilsson O, Pascual-Ahuir JL and Tapia O 
    J. Mol. Graph. 
    8 1990  
    
    **GEPOL: An Improved Description of Molecular Surfaces. II. Computing the Molecular Aarea and Volume** 
    Silla E, Tu{ntilde}{oacute}n I and Pascual-Ahuir JL 
    J. Comp. Chem. 
    12(9) 1991  
    
#### Van der Waals

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/van-der-waals-07961602'><i class='fa fa-play' aria-hidden='true'></i></button>The van der Waals surface: it corresponds to the molecular envelope containing atomic spheres of van der Waals radii.


=== "Concept"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_1_1_1.gif){: loading=lazy }

=== "3D"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_1_1_1_b.gif){: loading=lazy }

#### Solvent

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/solvent-5a669327'><i class='fa fa-play' aria-hidden='true'></i></button>The solvent accessible surface: it corresponds to the molecular envelope of the surface of each atom which is accessible to the center of a probe sphere of a given radius, generally 1.4 &#8491; (sphere including a water molecule).


=== "Concept"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_1_2_1.gif){: loading=lazy }

=== "3D"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_1_2_1_b.gif){: loading=lazy }

#### Connolly

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/connolly-363949cd'><i class='fa fa-play' aria-hidden='true'></i></button>The Connolly surface is somewhat similar to the van der Waals, however it is mathematically defined in order to make it smoother. The Connolly surface is defined as the contact surface and the inward facing part of a probe sphere when it is simultaneously in contact with more than one atom.


=== "Concept"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_1_3_1.gif){: loading=lazy }

=== "3D"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_1_3_1_b.gif){: loading=lazy }


??? Abstract "articles"
    **Solvent-Accessible Surfaces of Proteins and Nucleic Acids** 
    Connolly ML 
    Science 
    221 1983  
    
    **Computation of Molecular Volume** 
    Connolly ML 
    J. Am. Chem. Soc. 
    107 1985  
    
    **Molecular Surface Triangulation** 
    Connolly ML 
    J. Appl. Crystallogr. 
    18 1985  
    
    **Measurement of Protein Surface Shape by Solid Angles** 
    Connolly ML 
    J. Mol. Graphics 
    4 1986  
    
### Surface Types

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/surface-types-f3ff85a3'><i class='fa fa-play' aria-hidden='true'></i></button>The most popular ways to render molecular surfaces are the following:


![](https://media.drugdesign.org/course/molecular-graphics/d1_5_3.png){: loading=lazy }

??? Abstract "articles"
    **SURFNET: A program for Visualizing Molecular Surfaces, Cavities and Intermolecular Interactions** 
    Laskowski RA 
    J. Mol. Graph. 
    13 1995  
    
    **Molecular Surface Representations by Sparse Critical Points** 
    Lin SL, Nussinov R, Fischer D and Wolfson HJ 
    Proteins: Structure, Function, and Genetics 
    18 1994  
    
    **A Fast Algorithm for Generating Smooth Molecular Dot Surface Rrepresentations** 
    Moon JB and Howe WJ 
    J. Mol. Graphics 
    7 1989  
    
    **Shaded Space-Filling Stereoscopic Representations Of Molecules As Dotted Surfaces** 
    Senn P 
    Computers &#38; Chemistry 
    20 1996  
    
#### Normal

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/normal-0a7a4cc9'><i class='fa fa-play' aria-hidden='true'></i></button>The soft surface is displayed here and represents the envelope of the molecules concerned.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_5_3_1.png){: loading=lazy }

#### Transparent

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/transparent-0ba6a968'><i class='fa fa-play' aria-hidden='true'></i></button>This is the same previous surface but with full transparency, which is essential for analyzing the detailed structural elements.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_5_3_2.png){: loading=lazy }

#### Dots

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/dots-cbee0db8'><i class='fa fa-play' aria-hidden='true'></i></button>The surface is displayed as a set of dots regularly distributed on the surface. This kind of display is very convenient. It doesn't interfere with the displayed atoms and bonds of the chemical system and allows one to clearly see all the details of the molecules.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_5_3_3.png){: loading=lazy }

### Visualization of Properties on Molecular Surfaces

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-properties-on-molecular-surfaces-5602da23'><i class='fa fa-play' aria-hidden='true'></i></button>Molecules are not inert entities. They have subtle physico-chemical properties (atomic charges, electrostatic potentials, hydrophobicity, polarizability) that strongly influence the way in which molecules interact with one another. The display of molecular surfaces that incorporates the added dimension of molecular properties will allow one to understand and predict how molecules interact with one another and dock with one another as well. It also aids in designing new molecules that will optimally bind to a target receptor. The corresponding surfaces can be displayed using color codes and contour lines.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-graphics/5_9_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Le Potentiel De Lipophilie Moleculaire: Application A Une Serie d'Amines Beta-Adrenolytiques** 
    Audry E, Dubost JP, Dallet P, Langlois MH and Colleter JC 
    Eur. J. Med. Chem. 
    24 1989  
    
    **Molecular Modeling of the Ampiphipatic Helices of the Plasma Apolipoproteins** 
    Brasseur R, Lins L, Vanloo B, Ruysschaert JM and Rosseneu M 
    Proteins: Structure, Function and Genetics 
    13 1992  
    
    **Plotting Protein Surfaces** 
    Connolly ML 
    J. Mol. Graphics 
    4 1986  
    
    **The Molecular Surface Package** 
    Connolly ML 
    J. Mol. Graphics 
    11 1993  
    
    **Estimating and Representing Hydrophobicity Potential** 
    Fauchere JL, Quarendon P and Kaetterer L 
    J. Mol. Graphics 
    6 1988  
    
    **Visualizing Properties Of Atomic And Molecular Systems** 
    Flurchick K and Bartolotti L 
    Journal of Molecular Graphics 
    13 1995  
    
    **3-D Molecular Lipophilicity Potential Profiles, A new Tool in Molecular Modeling** 
    Furet P, Sele A, Cohen NC 
    Journal of Molecular Graphics 
    6 1988  
    
    **Electrostatic Potential Molecular Surfaces** 
    Weiner PK, Langridge R, Blaney JM, Schaefer R and Kollman PA 
    Proc. Natl. Acad. Sci. USA. 
    79 1982  
    
#### Color Coded

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/color-coded-784aafd9'><i class='fa fa-play' aria-hidden='true'></i></button>In color-coding procedures, each point of the molecular surface is color coded by the value of a given property. The following view displays the distribution of the electrostatic potential on the molecular surface.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_5_4_2.png){: loading=lazy }

#### Visualization of Properties on Molecular Surfaces

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-properties-on-molecular-surfaces-c882fdd7'><i class='fa fa-play' aria-hidden='true'></i></button>Contour lines are usually drawn in a plane like in geography. In the case of molecules, the contour lines are drawn on the 3D envelope of the molecule. The line connects points with the same value of the property (e.g. electrostatic potential) and a number is associated to the curve indicating the actual value of this property (e.g. energy). Contours with positive values are drawn in red while contours with negative values are drawn in blue.


![](https://media.drugdesign.org/course/molecular-graphics/5_4_3_1.png){: loading=lazy }


??? Abstract "book"
    **** 
    N.C. Cohen 
    ACS-CSJ Symposium on Computer Assisted Drug Design 
    American Chemical Society, Washington,DC; ACS Symposium Series Vol.112  1979   
    
    **** 
    N.C. Cohen 
    Advances in Drug Research; volume 14 
    Academic Press  1985   
    
### The Visualization of Volumes

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-volumes-1fc850bd'><i class='fa fa-play' aria-hidden='true'></i></button>The volume occupied by a molecule is an important molecular determinant: it can be visualized, manipulated and also calculated.


![](https://media.drugdesign.org/course/molecular-graphics/5_5_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Shape Distributions of Protein Topography** 
    Connolly ML 
    Biopolymers 
    32(9) 1992  
    
### Mathematical Boolean Operations with Volumes

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/mathematical-boolean-operations-volumes-f4fbd7aa'><i class='fa fa-play' aria-hidden='true'></i></button>Mathematical operations (e.g. logical Boolean treatments such as AND, NOT, OR) are useful. These kind of operations are essential for some drug design techniques, such as the Active Analog Approach. Operations such as addition or subtraction of volumes are also useful in measuring for example the quality of a superimposition or the amount of space that is occupied by a ligand in a receptor site. The following example displays the volume common to two molecules.
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


=== "Molecule 1"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_6_1_1.png){: loading=lazy }

=== "Molecule 2"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_6_2_1.png){: loading=lazy }

=== "(Molecule 1) OR (Molecule 2)"
    ![](https://media.drugdesign.org/course/molecular-graphics/5_6_3_1.png){: loading=lazy }


??? Abstract "articles"
    **Molecular Surface Comparison: Application to Drug Design** 
    Blaney F, Finn P, Phippen R and Wyatt M 
    J. Mol. Graph. 
    11 1993  
    
## Visualizing Interactions

### Visualization of Hydrogen Bonds

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-hydrogen-bonds-10cbaaba'><i class='fa fa-play' aria-hidden='true'></i></button>Molecules have rotatable bonds defining many conformations. Dials, joysticks and the mouse allow one to interactively rotate bonds with a single hand in order to maximize inter and intra molecular hydrogen bond interactions.


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_6_1.gif){: loading=lazy }

### Visualization of Molecular Bumps

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-molecular-bumps-73be1832'><i class='fa fa-play' aria-hidden='true'></i></button>Unfavorable steric interactions (bumps) occurring between two molecules or between different structural entities of the same molecule can be displayed with molecular graphics in a simple way.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/internet_v1_d1_6_2.gif){: loading=lazy }

### Surface Representations for Bump Analyses

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/surface-representations-for-bump-analyses-575939bd'><i class='fa fa-play' aria-hidden='true'></i></button>Surface representations are very useful for identifying bumps in the modeling of a ligand interacting with its target protein.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_6_3.png){: loading=lazy }

### Complementary Surface Properties

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/complementary-surface-properties-6f24bdf8'><i class='fa fa-play' aria-hidden='true'></i></button>It is possible to visualize the complementary features of a given property (e.g. lipophilicity, electrostatic potential etc.) of a ligand when it binds to its receptor. This can be done by displaying the property concerned onto the surface of the molecule when it is outside and inside the active site of the receptor.
*[nce]: New Chemical Entity: a compound not previously described.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-graphics/6_4_1_1.png){: loading=lazy }


??? Abstract "articles"
    **Le Potentiel De Lipophilie Moleculaire: Application A Une Serie d'Amines Beta-Adrenolytiques** 
    Audry E, Dubost JP, Dallet P, Langlois MH and Colleter JC 
    Eur. J. Med. Chem. 
    24 1989  
    
#### Electrostatic Potentials

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/electrostatic-potentials-49ae6c7f'><i class='fa fa-play' aria-hidden='true'></i></button>Electrostatic potentials: a surface can be color-coded by electrostatic potentials and for example displayed in two colors (red &#38; blue) when the surface is either positive or negative. A good affinity between the ligand and the receptor occurs when positive regions (red) interact with negative ones (blue).
*[affinity]: The affinity of a ligand is its ability to bind to its biological target.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/6_4_2_1.png){: loading=lazy }

#### Lipophilicity Potentials

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/lipophilicity-potentials-ce9f4aed'><i class='fa fa-play' aria-hidden='true'></i></button>Lipophilicity potentials: favorable complementary features of lipophilicity potentials are achieved in interactions of the same type, namely hydrophobic-hydrophobic and lipophilic-lipophilic interactions.


![](https://media.drugdesign.org/course/molecular-graphics/6_4_3_1.png){: loading=lazy }

### Visualization of Intramolecular Interaction

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-intramolecular-interaction-e4393d6c'><i class='fa fa-play' aria-hidden='true'></i></button>Current workstations with their fast processors can do "bump-checking" (checking for steric contacts closer than van der Waals) to visualize hydrophobic interactions and hydrogen bonds.


![](https://media.drugdesign.org/course/molecular-graphics/snap_v1_d1_6_5.png){: loading=lazy }

### Schematic Complex Interaction

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/schematic-complex-interaction-080f154c'><i class='fa fa-play' aria-hidden='true'></i></button>Schematic illustrations are useful in representing the interactions observed (or calculated) in a molecular complex. The following view represents a drawing generated automatically by the graphical program Ligplot and shows the detailed interactions of a small molecule and a protein.


![](https://media.drugdesign.org/course/molecular-graphics/6_6_0_1.png){: loading=lazy }

### Visualization of a Complex Cavity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/visualization-complex-cavity-ba413fea'><i class='fa fa-play' aria-hidden='true'></i></button>The following two views show the volume occupied by a ligand when it interacts with its target macromolecule. The view below focuses on the situation around the ligand (purple is volume of ligand and green is volume of target cavity).
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-graphics/6_7_1_1.png){: loading=lazy }

### Overview of the Entire Complex

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/overview-entire-complex-757ed21e'><i class='fa fa-play' aria-hidden='true'></i></button>While this view provides an overview of what the entire complex looks like.


![](https://media.drugdesign.org/course/molecular-graphics/6_7_2_1.png){: loading=lazy }

### Results of Quantum Mechanical Calculations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='molecular-graphics/results-quantum-mechanical-calculations-1e95bbee'><i class='fa fa-play' aria-hidden='true'></i></button>Quantum mechanical calculations provide a way to measure many properties of the molecule including electronic densities, localized orbitals, molecular orbitals (in particular the LUMO and HOMO orbitals). They provide detailed insight into the electronic nature of the molecular structures. Instead of treating them numerically, it is recommended to use computer graphics to visualize this information and take advantage of the graphical capabilities to facilitate their analysis.


![](https://media.drugdesign.org/course/molecular-graphics/6_8_0_1.png){: loading=lazy }


Copyright © 2024 drugdesign.org
