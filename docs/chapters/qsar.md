# QSAR: Principles and Methods
!!! Authors
    Hanoch Senderowitz (Predix Pharmaceutical), Elie Cohen (Synergix), Claude Cohen (Synergix)

!!! Info
    Quantitative Structure Activity Relationship (QSAR) is involved in building mathematical models for correlating molecular structures with molecular properties. In this section we introduce the notion of molecular descriptors and present the QSAR model and its validation.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[Quantitative Structure Activity Relationship]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[molecular descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[molecular descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules


    **Number of Pages: 113 (±2 hours read)**

    Last Modified: May 2008

    Prerequisites: None
## Introduction to QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

### Molecular Structure and Molecular Properties

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/molecular-structure-molecular-properties-68ed57fc'><i class='fa fa-play' aria-hidden='true'></i></button>One of the most pervasive postulates in the life sciences is that all molecular properties are coded by and consequently result from molecular structure. Some examples of structure-property relationships are illustrated on the following pages.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/1_2_0_0_0_1.png){: loading=lazy }
#### Structure-Property Relationships: Example 1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/structure-property-relationships-example-1-48fb92da'><i class='fa fa-play' aria-hidden='true'></i></button>Paracetamol selectively inhibits the cyclooxygenase enzyme COX-3 found in the brain and spinal cord and consequently relieves pain and reduces fever.


![](https://media.drugdesign.org/course/qsar/1_2_1_0_0_1.png){: loading=lazy }
#### Structure-Property Relationships: Example 2

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/structure-property-relationships-example-2-86b748f4'><i class='fa fa-play' aria-hidden='true'></i></button>Cyanide exerts its toxicity by inhibiting cytochrome-c oxidase, the terminal enzyme of the respiratory chain, leading to insufficient utilization of oxygen and suffocation. Inhibition occurs through binding to the ferric ion of the cytochrome.


![](https://media.drugdesign.org/course/qsar/1_2_2_0_0_1.png){: loading=lazy }
#### Structure-Property Relationships: Example 3

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/structure-property-relationships-example-3-a25e1959'><i class='fa fa-play' aria-hidden='true'></i></button>Saccharin (usually sold as sodium saccharin) binds to the sweet taste T1R3 receptor located in the plasma membrane of the sweet-taste sensory cells located in the taste buds. Binding of saccharin to T1R3 initiates a cascade of events in the taste-sensory cell that eventually releases a signaling molecule to an adjoining sensory neuron, causing the neuron to send impulses to the brain. In the brain, these signals cause the actual sensation of sweetness.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/1_2_3_0_0_1.png){: loading=lazy }
### What is QSAR?
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/what-is-qsar-d60ab485'><i class='fa fa-play' aria-hidden='true'></i></button>Molecules exert their biological effect by binding to their respective receptors, a phenomenon that in turn is governed by their molecular structures (and the molecular structure of the receptor). QSAR (Quantitative Structure Activity Relationship) attempts to formulate the relationship between structure and activity as a mathematical model.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[Quantitative Structure Activity Relationship]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_3_0_0_0_1.png){: loading=lazy }
### What is QSPR?
*[QSPR]: QSPR is an extension of QSAR and tries to formulate the relationship between structure and any molecular property in terms of a mathematical model.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/what-is-qspr-18b722d0'><i class='fa fa-play' aria-hidden='true'></i></button>The biological effect is just one example of molecular properties. QSPR (Quantitative Structure Property Relationship) is an extension of QSAR and is designed to formulate the relationship between structure and any molecular property as a mathematical model. Other properties include for example: solubility, oral bioavailability, metabolic stability and cell permeability.
*[bioavailability]: The percentage of drug that is detected in the systemic circulation after its administration.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[QSPR]: QSPR is an extension of QSAR and tries to formulate the relationship between structure and any molecular property in terms of a mathematical model.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_4_0_0_0_1.png){: loading=lazy }
### Focus on a Single Property at a Time

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/focus-on-single-property-at-time-c6fd2c78'><i class='fa fa-play' aria-hidden='true'></i></button>No single QSPR model can capture the direct connection between all the properties of a compound and its molecular structure; only a single property is handled at a time.
*[QSPR]: QSPR is an extension of QSAR and tries to formulate the relationship between structure and any molecular property in terms of a mathematical model.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/1_5_0_0_0_1.gif){: loading=lazy }

### Molecular Descriptors
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/molecular-descriptors-75a51f4d'><i class='fa fa-play' aria-hidden='true'></i></button>Thus, the derivation of a direct relation with the molecular structure of one single property is extremely challenging. However, structural factors known as molecular descriptors that influence the molecular property can be identified. For this reason, the QSAR model correlates the property with molecular descriptors.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[molecular descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[molecular descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules


![](https://media.drugdesign.org/course/qsar/1_6_0_0_0_1.png){: loading=lazy }
### Examples of Molecular Descriptors
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/examples-molecular-descriptors-f4f1e3b2'><i class='fa fa-play' aria-hidden='true'></i></button>Examples of molecular properties with their associated descriptors are listed in the following table. Later on in this chapter the nature and the meaning of some QSAR descriptors are presented.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/descriptor_ex9.png){: loading=lazy }
### The QSAR Equations
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/qsar-equations-43db1250'><i class='fa fa-play' aria-hidden='true'></i></button>All QSAR equations have a molecular property expressed as a function of specific descriptors. They differ in terms of the property they are attempting to correlate, the descriptors they use and the mathematical expression of the model.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/qsar/1_7_0_0_0_1.png){: loading=lazy }
### Types of Molecular Descriptors
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/types-molecular-descriptors-e7d56ee8'><i class='fa fa-play' aria-hidden='true'></i></button>Molecular descriptors can be classified according to the dimensionality of the molecular structure from which they are derived. 1D descriptors are derived from the chemical formula, 2D descriptors are derived from a 2D (chemdraw-like) structure and 3D descriptors are derived from the 3-dimensional structure.
*[md]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system
*[Molecular descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules


![](https://media.drugdesign.org/course/qsar/1_8_0_0_0_1.png){: loading=lazy }
#### Molecular Descriptors: 1D
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/molecular-descriptors-1d-40e113cf'><i class='fa fa-play' aria-hidden='true'></i></button>The chemical formula constitutes a 1-Dimensional representation of the molecular structure from which 1D descriptors can be derived. Such descriptors are based exclusively on the type of atoms which make up the molecule.


![](https://media.drugdesign.org/course/qsar/1_8_1_0_0_1.png){: loading=lazy }
#### Molecular Descriptors: 2D
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/molecular-descriptors-2d-96a4f796'><i class='fa fa-play' aria-hidden='true'></i></button>A Chemdraw-like structure constitutes a 2-Dimensional representation of the molecular structure from which 2D descriptors can be calculated. In addition to types of atoms, 2D descriptors also incorporate the bonding pattern of the molecule.
*[md]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system


![](https://media.drugdesign.org/course/qsar/1_8_2_0_0_1.png){: loading=lazy }
#### Molecular Descriptors: 3D
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/molecular-descriptors-3d-4906495a'><i class='fa fa-play' aria-hidden='true'></i></button>3D descriptors derived from a 3D molecular structure take the spatial arrangement of the atoms in the molecule into account.


![](https://media.drugdesign.org/course/qsar/1_8_3_0_0_1.png){: loading=lazy }
### A Multitude of Molecular Descriptors
*[Molecular Descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[Molecular Descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/multitude-molecular-descriptors-04e0aa57'><i class='fa fa-play' aria-hidden='true'></i></button>The number of descriptors that can be derived from a molecular structure is virtually unlimited. Currently available software packages can calculate thousands of descriptors. For example the DRAGON program calculates 1612 descriptors distributed into 20 categories.


![](https://media.drugdesign.org/course/qsar/1_9_0_0_0_1.png){: loading=lazy }

??? Abstract "book"
    **** 
    Todeschini R and Consonni V 
    the Series of Methods and Principles in Medicinal Chemistry - Volume 11 
    WILEY - VCH  2000   
    
### Biologically Relevant Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/biologically-relevant-descriptors-41259215'><i class='fa fa-play' aria-hidden='true'></i></button>When constructing a QSAR model, the key is to use descriptors that are relevant to the specific property of interest. These "biologically relevant descriptors" help generate a model that differentiates between molecules that possess the property of interest and those that do not.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_10_0_0_2_1.png){: loading=lazy }
=== "Non-Relevant Descriptor"
    ![](https://media.drugdesign.org/course/qsar/1_10_0_0_2_1_f1.png){: loading=lazy }
=== "Relevant Descriptor"
    ![](https://media.drugdesign.org/course/qsar/1_10_0_0_2_1_f2.png){: loading=lazy }
### Application of QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/application-qsar-12dafffe'><i class='fa fa-play' aria-hidden='true'></i></button>QSAR models are built for three main reasons: to understand the relationship between structure and activity, design compounds with improved activity, and predict the activities of compounds prior to their synthesis. These reasons in fact adhere to the rational sequence of a QSAR analysis project where the first step is to understand the phenomenon, and then use this understanding to design new compounds.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_13_0_0_0_1.png){: loading=lazy }
#### Understanding Structure-Activity Relationships
*[Structure-Activity Relationships]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/understanding-structure-activity-relationships-b59a571e'><i class='fa fa-play' aria-hidden='true'></i></button>A good model can reveal information about the receptor's binding site. For example a correlation with electronic descriptors may indicate that the biological activities could be due to the chemical reactivity of the compounds, or alternatively, a correlation with hydrophobic descriptors may reveal the existence of a hydrophobic pocket in the receptor.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/1_13_1_0_0_1.png){: loading=lazy }
#### Designing Compounds with Improved Activities

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/designing-compounds-improved-activities-d533df7d'><i class='fa fa-play' aria-hidden='true'></i></button>Once a QSAR model is obtained and reproduces the known data satisfactorily, it can be exploited to predict the biological activity of not yet synthesized analogs. This is of paramount importance in lead optimization and represents one of the most popular uses of the QSAR approach.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_13_2_0_0_1.png){: loading=lazy }
#### Reducing a Virtual Library to a Practical Size
*[Virtual Library]: A library which exists solely in electronic form (or on paper) and used in the design and evaluation of possible real libraries.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/reducing-virtual-library-to-practical-size-19c4a222'><i class='fa fa-play' aria-hidden='true'></i></button>The recent explosion in combinatorial chemistry has added a new dimension to the QSAR approach by reducing a huge virtual library to a manageable size for combinatorial synthesis and high through-put screening.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[virtual library]: A library which exists solely in electronic form (or on paper) and used in the design and evaluation of possible real libraries.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_11_4_4.gif){: loading=lazy }

## The Foundations of QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

### Birth of QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/birth-qsar-66c2e685'><i class='fa fa-play' aria-hidden='true'></i></button>QSAR dates back to the 19th century with the work of Cros (1863) who first observed an inverse correlation between the toxicity of alcohols and their water solubility. Other important milestones include work by Crum-Brown and Frazer who related physiological action to chemical constitution (1868). A few years later Horst, Overton and Richet independently observed that the toxicity of organic compounds depended on their lipophilicity/solubility. This discovery was followed by research by Meyer and Overton, who proved that anesthetic potency correlated well with partition coefficients (1899).
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/2_1_0_0_0_1.png){: loading=lazy }
### The Foundations of QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/foundations-qsar-f7ed7d24'><i class='fa fa-play' aria-hidden='true'></i></button>During the first half of the 20th century, Louis Hammett laid the foundation for modern QSAR by correlating electronic properties of organic acids and bases with their equilibrium constants and reactivity. An important landmark in the development of QSAR took place in 1964 with the introduction of the Free-Wilson method and Hansch analysis. This section covers these three seminal contributions to QSAR in some detail.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/2_2_0_0_0_1.png){: loading=lazy }
### The Hammett Contribution

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/hammett-contribution-35bcf8d5'><i class='fa fa-play' aria-hidden='true'></i></button>The dissociation of HA organic acids is a process by which a proton (H<sup>+</sup>) is removed from the neutral compound, leaving behind a negatively charged species (A<sup>-</sup>). The extent of the reaction is measured by the dissociation constant K. Louis Hammett observed that the dissociation constants of aromatic acids are influenced by the electronic properties of the substituents on the phenyl ring.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/2_3_0_0_0_1.png){: loading=lazy }
#### Dissociation Constants of Substituted Benzoic Acids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/dissociation-constants-substituted-benzoic-acids-883dcf3d'><i class='fa fa-play' aria-hidden='true'></i></button>The dissociation constants of substituted benzoic acids indicate that electron withdrawing groups increase dissociation while electron donating groups decrease it.


![](https://media.drugdesign.org/course/qsar/2_3_1_0_0_1.png){: loading=lazy }
=== "p-Et"
    ![](https://media.drugdesign.org/course/qsar/2_3_1_0_0_1_f3.png){: loading=lazy }
=== "Benzoic Acid"
    ![](https://media.drugdesign.org/course/qsar/2_3_1_0_0_1_f1.png){: loading=lazy }
=== "p-NO2"
    ![](https://media.drugdesign.org/course/qsar/2_3_1_0_0_1_f2.png){: loading=lazy }
#### Dissociation of Substituted Phenylacetic Acids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/dissociation-substituted-phenylacetic-acids-c87d4bee'><i class='fa fa-play' aria-hidden='true'></i></button>A similar effect exists for other equilibria such as substituted phenylacetic acids.


![](https://media.drugdesign.org/course/qsar/2_3_2_0_0_1.png){: loading=lazy }
=== "p-Et"
    ![](https://media.drugdesign.org/course/qsar/2_3_2_0_0_1_f3.png){: loading=lazy }
=== "Phenylacetic Acid"
    ![](https://media.drugdesign.org/course/qsar/2_3_2_0_0_1_f1.png){: loading=lazy }
=== "p-NO2"
    ![](https://media.drugdesign.org/course/qsar/2_3_2_0_0_1_f2.png){: loading=lazy }
#### Linear Free Energy Relationship
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/linear-free-energy-relationship-ff2c6b6d'><i class='fa fa-play' aria-hidden='true'></i></button>When plotting the quantity log(K/Ko) for benzoic acids on the X axis, where K and Ko refer to the substituted and unsubstituted compounds, respectively, and the corresponding values measured for the same set of substituents in phenylacetic acids on the Y axis, Hammett obtained a straight line. Because of the association between dissociation constants and free energies [&Delta;G=-RT Log(K)] this phenomenon is known as the linear free energy relationship.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_3_3_0_0_1.png){: loading=lazy }
#### The Hammett Equation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/hammett-equation-773921ba'><i class='fa fa-play' aria-hidden='true'></i></button>The straight line described on the previous page can be written as a linear equation, the Hammett equation. Note that &#929; is related to a given scaffold (e.g. phenylacetic acids), whereas a &Sigma; is a descriptor of a substituent and describes its influence on the dissociation constant. It is positive for electron withdrawing substituents and negative for electron donating substituents.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/2_3_4_0_0_1.png){: loading=lazy }

??? Abstract "wikipedia"
    [Hammett equation](http://en.wikipedia.org/wiki/Hammett_equation) 
    
#### The Meaning of &#929;

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/meaning-rho-f3bf6c1b'><i class='fa fa-play' aria-hidden='true'></i></button>&#929; describes the magnitude of the effect a substituent can exert on the dissociation reaction of a given scaffold. As the distance between the substituent and the dissociated proton increases, its influence on the dissociation reaction decreases and so does the value of &#929;.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_3_5_0_0_1.png){: loading=lazy }
=== "Benzoic Acid"
    ![](https://media.drugdesign.org/course/qsar/2_3_5_0_0_1_f1.png){: loading=lazy }
=== "Phenylacetic Acid"
    ![](https://media.drugdesign.org/course/qsar/2_3_5_0_0_1_f2.png){: loading=lazy }
=== "Phenylpropionic Acid"
    ![](https://media.drugdesign.org/course/qsar/2_3_5_0_0_1_f3.png){: loading=lazy }
#### The Meaning of &Sigma;

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/meaning-sigma-0e29b41a'><i class='fa fa-play' aria-hidden='true'></i></button>&Sigma; describes the effect of substituents on the dissociation reaction. Substituents on the phenyl ring can increase or decrease the equilibrium constant by stabilizing or destabilizing the anionic form via the formation of a positive or negative partial charge at C1.


![](https://media.drugdesign.org/course/qsar/qsar_2_10_table_2.png){: loading=lazy }
#### Examples of &Sigma; Constants

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/examples-sigma-constants-c5315769'><i class='fa fa-play' aria-hidden='true'></i></button>Electron donating substituents have negative &Sigma; values, whereas positive &Sigma;s correspond to electron withdrawing groups. Note that &Sigma; values differ depending on whether the substituent is meta or para (sigma values are clickable).


![](https://media.drugdesign.org/course/qsar/qsar_2_10_table.gif){: loading=lazy }

#### Predicting the pKa of Benzoic Acid Compounds

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predicting-pka-benzoic-acid-compounds-f579d946'><i class='fa fa-play' aria-hidden='true'></i></button>The Hammett equation is an example of a QSPR equation. It correlates a molecular property, the dissociation constant, with a set of molecular descriptors (&Sigma; and &#929;). It can be used to predict the pKa of benzoic acid analogs. When a molecule has multiple substituents, the &Sigma; values are summed to yield the total value for the compound, as shown in the following example.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[QSPR]: QSPR is an extension of QSAR and tries to formulate the relationship between structure and any molecular property in terms of a mathematical model.
*[molecular descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules
*[molecular descriptors]: Molecular descriptors are numerical values that capture the structure and properties of molecules


![](https://media.drugdesign.org/course/qsar/qsar_2_11_explain.png){: loading=lazy }
### Hansch Contribution

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/hansch-contribution-0d2f065a'><i class='fa fa-play' aria-hidden='true'></i></button>Corwin Hansch recognized the importance of lipophilicity for biological activity. Lipophilicity can be defined as the tendency of a compound to prefer an organic phase rather than an aqueous phase. Molecular lipophilicity is correlated with the presence of hydrophobic groups (e.g. aromatic rings) and with the absence of polar and ionizable groups.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/2_4_0_0_0_1.png){: loading=lazy }
#### The Importance of Lipophilicity
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/importance-lipophilicity-c9d0d516'><i class='fa fa-play' aria-hidden='true'></i></button>To exert its biological effect, a drug must reach its site of action. On its way, the compound encounters biological barriers. For example, the cell membrane is composed of a lipid bilayer, therefore lipophilic compounds are able to penetrate such barriers. The lipophilicity thus determines in part the amount of the compound that reaches the target site.


![](https://media.drugdesign.org/course/qsar/2_4_1_0_0_1.gif){: loading=lazy }

#### LogP is a Measure of Compounds Lipophilicity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/logp-is-measure-compounds-lipophilicity-d289002e'><i class='fa fa-play' aria-hidden='true'></i></button>LogP describes the lipophilicity of a compound, and is the measure of the partitioning of this compound between a lipidic phase (usually 1-octanol) and an aqueous phase. It is represented by a partition coefficient P or by its log value. Compounds with P>1 (logP>0) are lipophilic whereas compounds with P<1 (logP<0) are hydrophilic.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_4_2_0_0_1.png){: loading=lazy }
#### Correlation of LogP with Biological Activities

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/correlation-logp-biological-activities-28f58c97'><i class='fa fa-play' aria-hidden='true'></i></button>Hansch observed that in several compound series, the biological activities (inhibition of frog heart) correlated well with logP. The resulting QSAR expression turned out to be quite simple: a linear equation.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/2_4_3_0_0_1.png){: loading=lazy }
#### Example of Correlation with LogP

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-correlation-logp-5c31e976'><i class='fa fa-play' aria-hidden='true'></i></button>A correlation with logP was found for the isonarcotic activities of diverse esters, alcohols, ketones, and ethers (structures, biological activities and logP are shown by clicking the button "training set"). The training set covers a large range of values for logP and the model generated is quite simple. In the equation log(1/C) represents the biological activity response.


=== "correlation"
    ![](https://media.drugdesign.org/course/qsar/example164_f1.png){: loading=lazy }
=== "training set"
    ![](https://media.drugdesign.org/course/qsar/example164_f2.png){: loading=lazy }

??? Abstract "articles"
    **QSAR studies on drugs acting at the central nervous system** 
    S. P. Gupta 
    Chem. Rev. 
    89 1989  
    
#### Improvements of the Initial Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/improvements-initial-model-7ea729b5'><i class='fa fa-play' aria-hidden='true'></i></button>When attempting to ameliorate his initial idea (only one descriptor), Hansch further refined the QSAR equation and introduced other descriptors such as &Sigma; (electronic), Es (Taft), &pi; (lipophilicity), MR (Molar refraction) that represent properties that may influence drug action. He also considered other mathematical equations likely to represent the behavior of the biological system. The analytical forms of some of the typical QSAR models he developed are indicated below, whereas the most common descriptors used in Hansch's analyses are presented in the following pages.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/qsar/2_4_4_0_0_1.png){: loading=lazy }
##### The &pi; Descriptor

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/pi-descriptor-2f9c2742'><i class='fa fa-play' aria-hidden='true'></i></button>The &pi; descriptor characterizes the lipophilicity of a substituent. It is defined as the difference between the logP of the substituted and unsubstituted compounds. Substituents that are more hydrophobic than H have &pi; positive values, whereas substituents less hydrophobic than H have negative values. The &pi; values for several common substituents are listed below, and an example is provided.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_4_6_0_0_1.png){: loading=lazy }
##### The MR Descriptor

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/mr-descriptor-a017ebec'><i class='fa fa-play' aria-hidden='true'></i></button>Molar refractivity (MR) is a molecular descriptor that contains information on the compound's volume corrected by the refractive index (the ratio of the velocity of light in a vacuum to the velocity of light in the substance of interest). In the definition below, d is the density and n is the refractive index. Several MR values are listed below.
*[nce]: New Chemical Entity: a compound not previously described.
*[molecular descriptor]: Molecular descriptors are numerical values that capture the structure and properties of molecules


![](https://media.drugdesign.org/course/qsar/2_4_7_0_0_1.png){: loading=lazy }
##### The Taft Descriptor (ES)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/taft-descriptor-es-d58718e1'><i class='fa fa-play' aria-hidden='true'></i></button>The Taft steric constant Es is an experimental value based on rate constants for a given model reaction. It is a measure of the steric effect exerted by a substituent on the equilibrium. In the definition below K<sub>x</sub> and K<sub>H</sub> are the rate constants for substituted and unsubstituted compounds. The bulkier the substituent, the more negative the Es. The table lists Es values for several common substituents.


![](https://media.drugdesign.org/course/qsar/2_4_8_0_0_1.png){: loading=lazy }
#### Meaning of Parabolic Dependence on LogP
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/meaning-parabolic-dependence-on-logp-1789407e'><i class='fa fa-play' aria-hidden='true'></i></button>Hansch's introduction of a parabolic term for logP was a breakthrough that helped make QSAR a more powerful tool. This additional term denotes the existence of an optimum in logP: molecules with higher values start to be trapped in hydrophobic membranes and cannot reach their site of action.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


=== "Graph"
    ![](https://media.drugdesign.org/course/qsar/2_4_5_0_0_1_f1.png){: loading=lazy }
=== "Equation"
    ![](https://media.drugdesign.org/course/qsar/2_4_5_0_0_1_f2.png){: loading=lazy }
### The Free-Wilson Analysis
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/free-wilson-analysis-f69cc637'><i class='fa fa-play' aria-hidden='true'></i></button>In 1964, Free and Wilson derived a mathematical model based on the hypothesis that overall biological activity is the sum of all elementary contributions of the substituents. This approach assumes that substituent effects are additive.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_5_1_0_0_1.png){: loading=lazy }

??? Abstract "articles"
    **A Mathematical Contribution to Structure-Activity Studies** 
    Free, S. M., Jr.; Wilson, J. W. 
    J. Med. Chem. 
    7 1964  
    
#### Indicator Variables and Substituent Weights

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/indicator-variables-substituent-weights-5e75d64d'><i class='fa fa-play' aria-hidden='true'></i></button>In the Free-Wilson model biological activity is represented by the following equation. Indicator Variables x<sub>i</sub> (with values of 1 or 0) describe the presence or the absence of certain substituents at each scaffold position. The weight of each substituent is represented by the a<sub>i</sub> coefficients. &micro; is the overall average activity.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_5_2_0_0_1.png){: loading=lazy }
#### Free-Wilson Structural Matrix
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/free-wilson-structural-matrix-8e4c78d7'><i class='fa fa-play' aria-hidden='true'></i></button>The construction of the Free-Wilson QSAR model is based on a structural matrix composed of the x<sub>i</sub> indicator variables.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/2_5_3_9_0_1.png){: loading=lazy }
#### Example of Structural Matrix

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-structural-matrix-6b53ae0d'><i class='fa fa-play' aria-hidden='true'></i></button>An example of a matrix for a set of 22 disubstituted N,N-dimethyl-&alpha;-bromophenethylamines with antiadrenergic activities is given below.


![](https://media.drugdesign.org/course/qsar/2_5_3_0_0_1.png){: loading=lazy }
=== "molecule 1-11"
    ![](https://media.drugdesign.org/course/qsar/2_5_3_0_0_1_f1.png){: loading=lazy }
=== "molecule 12-22"
    ![](https://media.drugdesign.org/course/qsar/2_5_3_0_0_1_f2.png){: loading=lazy }
#### Example of Free-Wilson Equation
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-free-wilson-equation-45837eb6'><i class='fa fa-play' aria-hidden='true'></i></button>A mathematical procedure known as multiple linear regression is used to derive the QSAR equation from the structural matrix, ultimately leading to the values of a<sub>i</sub> and &micro; for the 22 antiadrenergic agents.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/2_5_4_9_0_1.png){: loading=lazy }
#### Predictability of the Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predictability-model-ea038009'><i class='fa fa-play' aria-hidden='true'></i></button>The experimental and calculated values of the antiadrenergic molecules of the training set are indicated below and show that the Free-Wilson model reproduces the biological activities well. Moreover the equation can be used to predict the biological activities of new not yet synthesized analogs.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/2_5_3_1_2.png){: loading=lazy }
#### Understanding the Molecular Determinants

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/understanding-molecular-determinants-768d1ce8'><i class='fa fa-play' aria-hidden='true'></i></button>By examining the QSAR equation, we can draw several conclusions regarding the influence of the various substituents on activity. For example meta substituents contribute less than the para; the biological activity increases with electron donor ability etc...
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/2_5_4_0_0_1.png){: loading=lazy }
## Design of a QSAR Model
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

### Embarking on the Design of a QSAR Model
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/embarking-on-design-qsar-model-f213e145'><i class='fa fa-play' aria-hidden='true'></i></button>The planning of a QSAR model must be carefully managed. In this section we will explore the methodology for designing a QSAR model in some detail, present the ideas and statistical concepts behind the QSAR model, the rules that need to be followed and the errors that should be avoided.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/117_2_1.png){: loading=lazy }
### The Four Steps

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/four-steps-f23f7a8c'><i class='fa fa-play' aria-hidden='true'></i></button>To construct a QSAR model the following steps should be followed: (1) assemble a sufficiently large and diverse set of compounds along with their biological activities; (2) select a set of descriptors which is likely to be related to the biological activity of interest; (3) formulate a mathematical equation that reflects the relationship between the biological activity and the chosen descriptors, and finally (4) validate the QSAR model.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/3_1_0_0_0_1.png){: loading=lazy }
### An Iterative Process

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/an-iterative-process-0c0165ac'><i class='fa fa-play' aria-hidden='true'></i></button>Constructing a QSAR model is an iterative process. First, the QSAR equation is derived from an initial set of descriptors. Attempts are then made to improve this model by adding or removing descriptors and refining the mathematical equation, in an iterative fashion.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/3_1_0_6_0_1.png){: loading=lazy }
## Compounds Selection: Step 1

### Compounds Selection

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/compounds-selection-dae34bce'><i class='fa fa-play' aria-hidden='true'></i></button>The selection of the compounds is the first step in building a QSAR model and consists of assembling a sufficiently large and diverse set of compounds with known biological activities. The molecules should be selected with great care in order to define a set of compounds that is homogenous and represents the system well.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/stam3425.png){: loading=lazy }
### Predictions by Interpolation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predictions-by-interpolation-65989ca5'><i class='fa fa-play' aria-hidden='true'></i></button>The compounds selected for a QSAR analysis should cover a large range of values for those descriptors believed to be relevant to biological activity. This increases the probability that future compounds will have descriptors within this range and allow predictions to be interpolative rather than extrapolative. As a rule, interpolative predictions are more accurate than extrapolative predictions.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[apo]: 3D structure of a macromolecule without a ligand


![](https://media.drugdesign.org/course/qsar/3_2_0_0_0_1.png){: loading=lazy }
### Example of Extrapolative Model
*[apo]: 3D structure of a macromolecule without a ligand

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-extrapolative-model-8edc7f7f'><i class='fa fa-play' aria-hidden='true'></i></button>Extrapolating a model for values that are outside the range of the training set may lead to incorrect predictions. In the following example the experimental points lie in a straight line, however at higher values the model is more complex and no longer linear.
*[apo]: 3D structure of a macromolecule without a ligand


![](https://media.drugdesign.org/course/qsar/movie123.gif){: loading=lazy }

### Identification of Outliers

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/identification-outliers-422c987f'><i class='fa fa-play' aria-hidden='true'></i></button>QSAR modeling is based on the assumption of homogeneity and an absence of influential outliers in the training set. An outlier can be a molecule acting according to a different mechanism of action, an improper biological activity as reported by another laboratory, or simply an incorrect value (experimental or typographic error). Repeat measurements of biological activities and using the greatest number of molecules helps reduce the distortions introduced by outliers.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/out12345.png){: loading=lazy }
=== "with outlier"
    ![](https://media.drugdesign.org/course/qsar/out12345_f1.png){: loading=lazy }
=== "without outlier"
    ![](https://media.drugdesign.org/course/qsar/out12345_f2.png){: loading=lazy }

??? Abstract "articles"
    **Outliers in SAR and QSAR: Is unusual binding mode a possible source of outliers?** 
    Ki Hwan Kim 
    J Comput Aided Mol Des.  
    21(1-3) 2007 10.1007/s10822-007-9106-2 
    
### Biological Activities in Terms of Log 1/C
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/biological-activities-terms-log-1c-4d0a4036'><i class='fa fa-play' aria-hidden='true'></i></button>To reflect the free energy variations that occur in the biological action, biological activities are expressed as the logarithm of the concentration of the compound (log[C] or log 1/[C]), where C is the concentration of the compound required to produce a given standard response. In the following set of equations E and S represent respectively, the enzyme and the substrate. Biological activities should be accurate and span at least 2-3 orders of magnitude.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/3_2_1_0_0_1.png){: loading=lazy }
## Descriptors Selection: Step 2

### Descriptors Selection

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/descriptors-selection-95de659c'><i class='fa fa-play' aria-hidden='true'></i></button>As mentioned earlier in this chapter, the number of available descriptors for QSAR analyses is very large. A good model is based on a small number of well-chosen descriptors. When many descriptors are screened, a fortuitous correlation may occur. In the following pages important rules for the selection of relevant descriptors are presented.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/stam3426.png){: loading=lazy }
### Methods for Selecting Relevant Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/methods-for-selecting-relevant-descriptors-6e468b2c'><i class='fa fa-play' aria-hidden='true'></i></button>Relevant descriptors can be selected either manually or by using automated approaches. For each method, computer programs are available that help in the selection of relevant descriptors.


![](https://media.drugdesign.org/course/qsar/3_3_0_0_0_1.png){: loading=lazy }
#### Manual Selection of Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/manual-selection-descriptors-3ee9ab5f'><i class='fa fa-play' aria-hidden='true'></i></button>The manual method is based on a thorough understanding of the SAR and exploiting intuitions generated by the analyses. For example if preliminary analyses indicate that steric or hydrophobic substituents may increase activity, descriptors such as the molar refractivity (MR) and the hydrophobic substituent constant, &pi; should be selected in the first place.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/descriptor_ex10.png){: loading=lazy }
#### Automated Selection of Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/automated-selection-descriptors-0e3735b5'><i class='fa fa-play' aria-hidden='true'></i></button>The second method looks at the selection of descriptors in an automated manner, using programs that score and rank them. Automated and manual methods can also be combined to select relevant descriptors and select those that are easy to interpret. Modern methods use genetic algorithms based on natural evolution principles (Darwin).
*[genetic algorithm]: A computerized search technique inspired by evolutionary biology and used in computer science to find approximate solutions to optimization and search problems.
*[genetic algorithms]: A computerized search technique inspired by evolutionary biology and used in computer science to find approximate solutions to optimization and search problems.


![](https://media.drugdesign.org/course/qsar/8_3_0_0_2.png){: loading=lazy }
##### Systematic Combination of Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/systematic-combination-descriptors-17accb55'><i class='fa fa-play' aria-hidden='true'></i></button>In principle the identification of the best descriptors can be accomplished by a systematic evaluation of all their combinations. For each combination, a QSAR equation can be derived and then ranked. The highest-ranked equation will reveal the best subset of descriptors. However this systematic approach is not always feasible: for n descriptors (current software can process 2000), there are 2<sup>n</sup>-1 different combinations (subsets). In the following pages we present automated methods that circumvent this difficulty.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


=== "Calculator"
    ![](https://media.drugdesign.org/course/qsar/7_1_0_0_0_1_f1.gif){: loading=lazy }

=== "Example"
    ![](https://media.drugdesign.org/course/qsar/7_1_0_0_0_1_f2.png){: loading=lazy }
##### Methods for Selecting a Subset of Descriptor

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/methods-for-selecting-subset-descriptor-582b6313'><i class='fa fa-play' aria-hidden='true'></i></button>"Forward regression", "backward elimination" and "stepwise regression" are methods for selecting a subset of descriptors from a large descriptor pool. The process starts with an initial subset of descriptors, then successive small alterations of this subset are made and assessed. If this modification improves the model, the change is accepted, otherwise it is rejected. The treatment is terminated when it is not possible to improve the model further.


![](https://media.drugdesign.org/course/qsar/4_4_0_1.jpg){: loading=lazy }

###### Forward Selection

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/forward-selection-075da42a'><i class='fa fa-play' aria-hidden='true'></i></button>The "forward selection" method starts with the single descriptor which best correlates with the dependent parameter. At each subsequent step the method adds the next most contributing descriptor. The process stops when the addition of a descriptor does not improve the model's performance as assessed by appropriate statistical indices.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/qsar_3_13.gif){: loading=lazy }

###### Backward Elimination

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/backward-elimination-a1898165'><i class='fa fa-play' aria-hidden='true'></i></button>The "backward elimination" method starts with a model that includes all the descriptors. At each step the method removes those descriptors that do not degrade the model's performance. The process is stopped when performance starts to decline as assessed by relevant statistical indices.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/qsar_3_14.gif){: loading=lazy }

###### Stepwise Regression

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/stepwise-regression-5f3bc3d3'><i class='fa fa-play' aria-hidden='true'></i></button>The "stepwise regression" method  starts (like in forward selection) with the single descriptor that best correlates with the dependent parameter. At each subsequent step the method adds the next most contributing descriptor and can potentially remove non-contributing descriptors. The process is stopped when additional descriptors do not improve the model or when removing descriptors causes the model's performance to decline, as assessed by appropriate statistical indices.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/qsar_3_15.gif){: loading=lazy }

### Scaling Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/scaling-descriptors-7460f8c8'><i class='fa fa-play' aria-hidden='true'></i></button>Descriptors represent a broad range of physico-chemical properties. They need to be calibrated in order to provide a good balance of their respective influence when they are combined. Scaling treatment consists of a mathematical operation called "normalization" which sets boundaries for the variation of each descriptor.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/scalling.gif){: loading=lazy }

### Correlation Between Descriptors
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/correlation-between-descriptors-5334e4ef'><i class='fa fa-play' aria-hidden='true'></i></button>When two descriptors essentially convey the same information about a series of molecules they are said to be correlated. The use of correlated descriptors in the same equation must be avoided, because the information they characterize is over-represented when both are present. A "correlation matrix" provides useful information on the degree of correlation of different pairs of descriptors.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/5_5_0_0_0_1.png){: loading=lazy }
#### Example of Correlated Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-correlated-descriptors-d5cbcb85'><i class='fa fa-play' aria-hidden='true'></i></button>Consider for example the molecular weight and the number of carbon atoms as two descriptors characterizing a series of alkanes. These two descriptors are highly correlated, which can be shown graphically.


![](https://media.drugdesign.org/course/qsar/5_5_1_0_0_1.png){: loading=lazy }
#### Solution to the Problem of Correlated Descriptors

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/solution-to-problem-correlated-descriptors-12e389a4'><i class='fa fa-play' aria-hidden='true'></i></button>When two descriptors are highly correlated, the solution is to remove one of them. The descriptor that carries strong structural information is preferred and the less intuitive one is removed. An alternative solution consists of removing the descriptor that has the highest correlation with the other descriptors.


![](https://media.drugdesign.org/course/qsar/5_5_3_0_0_1.png){: loading=lazy }
### The Holy Grail in QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/holy-grail-qsar-05b2d841'><i class='fa fa-play' aria-hidden='true'></i></button>There is a general consensus that in a meaningful QSAR equation, the number of molecules in the training set should exceed the number of descriptors by a factor of 3 to 5.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/holy.png){: loading=lazy }

??? Abstract "articles"
    **Chance Factors in Studies of Quantitative Structure-Activity Relationships** 
    Topliss, J. G.; Edwards, R. P. 
    J. Med. Chem. 
    22 1979  
    
## Deriving the Equation: Step 3

### Deriving The QSAR Equation
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/deriving-qsar-equation-098d0b0d'><i class='fa fa-play' aria-hidden='true'></i></button>Step 3 consists of deriving the QSAR equation corresponding to the set of descriptors that were selected in the previous step.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/stam3427.png){: loading=lazy }
### The Starting Point: The Study Table

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/starting-point-study-table-1acbf2a7'><i class='fa fa-play' aria-hidden='true'></i></button>The starting point for deriving a QSAR equation is the study table. It consists of a spreadsheet with molecules across the rows and molecular characteristics (biological activity, descriptors) down the columns. Typically, the first column indicates the molecular identification (e.g. compound number or name, 2D structure), the second column its activity, and subsequent columns the values of the corresponding descriptors.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/4_2_0_0_0_1.png){: loading=lazy }
### Graphical Analysis of the Data

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/graphical-analysis-data-685893d5'><i class='fa fa-play' aria-hidden='true'></i></button>The study table should lead to graphical analyses. This step is of paramount importance and leaves room for "hunches" and preliminary interpretations. This is where the key questions are asked: is there an order? Are the points distributed according to known patterns? Can the recognized trends be translated into physico-chemical expressions? etc...
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/4_5_0_0_0_1.png){: loading=lazy }
### Choice of the Mathematical Equation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/choice-mathematical-equation-e56a25ba'><i class='fa fa-play' aria-hidden='true'></i></button>After having identified trends in the system, the correlation process can begin. The initial analyses help guide the choice of the right mathematical equation. This equation should not be treated as a black-box; rather it should contain information that reflects the behavior and allows for interpretation of the system in a structural manner. Sound structural informational content in a QSAR equation is of utmost importance for formulating step 3.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/magic.gif){: loading=lazy }

### Complexity Levels and Data Overfitting

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/complexity-levels-data-overfitting-1f127a48'><i class='fa fa-play' aria-hidden='true'></i></button>The next hurdle is the mathematical equation. At this stage the complexity of the model depends on both the form of the mathematical equation and the number of descriptors considered.


![](https://media.drugdesign.org/course/qsar/1_11_0_0_0_1.png){: loading=lazy }
#### Mathematics are Very (too) Powerful

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/mathematics-are-very-too-powerful-7f53b6da'><i class='fa fa-play' aria-hidden='true'></i></button>QSAR models can be skewed unintentionally by overly powerful mathematical choices. An equation that fits the data of a training set precisely can yield an equation that is perfect mathematically but meaningless for molecules other than those in the training set. For example if the training set consists of 20 molecules, it is always possible to select a set of 20 randomly chosen descriptors and solve the mathematical system for 20 equations and 20 unknowns. This error is known as data-overfitting.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/mathematique14.gif){: loading=lazy }

#### Illustration with an Example

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/illustration-an-example-242fef70'><i class='fa fa-play' aria-hidden='true'></i></button>To illustrate the data-overfitting problem, let's take a series of compounds for which the permeability through the blood brain barrier (BBB) has been found to be correlated with their logP and polar surface area. In the following graph we have plotted a hypothetical series of compounds in this space and color-coded them according to their BBB permeability. Compounds colored green are permeable whereas compounds colored red are not.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/6_4_0_0_0_1.png){: loading=lazy }
#### A Simple Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/simple-model-cd1076da'><i class='fa fa-play' aria-hidden='true'></i></button>A linear model for differentiating between BBB permeable and BBB impermeable compounds can be formulated by drawing a straight line through the logP / Polar surface area space. Most of the compounds on the left side of the line are BBB permeable whereas most of the compounds on its right are BBB impermeable. As the model correctly classifies 45 out of the 50 compounds it has a success rate of 90%.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/6_4_1_0_0_1.png){: loading=lazy }
#### A Complex Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/complex-model-8c5c14f1'><i class='fa fa-play' aria-hidden='true'></i></button>A model with an improved success rate can be generated by drawing a curved line across the logP / Polar surface area space. This model completely separates the BBB permeable compounds from the BBB impermeable compounds and thus has a success rate of 100%.


![](https://media.drugdesign.org/course/qsar/6_4_2_0_0_1.png){: loading=lazy }
#### Comparing the Two Models

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/comparing-two-models-4f340b26'><i class='fa fa-play' aria-hidden='true'></i></button>Which of the two models better distinguishes BBB permeable from BBB impermeable compounds? Clearly the complex model has a higher success rate. However, by doing so it distorts its shape to correctly classify the outliers thereby completely reflecting the scatter of the training data - it is therefore an overfitted model. On the other hand, the simple model mislabels the outliers on the assumption that they are indeed outliers.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/6_4_3_0_0_1.png){: loading=lazy }
#### Predictive Power of the Simple Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predictive-power-simple-model-735f9623'><i class='fa fa-play' aria-hidden='true'></i></button>The simple model predicts that all test compounds lying to the left of the line are BBB permeable and all those lying to the right of the line are BBB impermeable. Assuming that the test compounds are similar to the training compound, the prediction power of this model is expected to be high.


![](https://media.drugdesign.org/course/qsar/6_4_4_0_0_1.png){: loading=lazy }
#### Predictive Power of the Complex Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predictive-power-complex-model-ff1c55a0'><i class='fa fa-play' aria-hidden='true'></i></button>The complex model also predicts that all test compounds lying to the left of the line are BBB permeable and all those lying to the right of the line are BBB impermeable. However, under the same assumption of similarity between test compound and training compound, many of its predictions are expected to be erroneous.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/6_4_5_0_0_1.png){: loading=lazy }
#### Complexity Dictated by Predictability of the Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/complexity-dictated-by-predictability-model-421b2af1'><i class='fa fa-play' aria-hidden='true'></i></button>In the QSAR approach tailoring an equation to the peculiarities of a training set is not a problem. However, forcing the mathematics to fit too closely to the data may lead to meaningless models in terms of predictability (tools for assessing the predictability of a QSAR model will be presented in Step 4). The real issue is to stop the refinements early enough so that the predictive capabilities of the model are not lost.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/qsar/6_2_0_0_0_1_new.png){: loading=lazy }

### Single Linear Equation: Mathematical Outline

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/single-linear-equation-mathematical-outline-35909fd7'><i class='fa fa-play' aria-hidden='true'></i></button>The simplest form of a QSAR equation is a linear model with one descriptor. This simply yields the equation of a straight line of the form y = b<sub>0</sub> +b<sub>1</sub>X where b<sub>0</sub> indicates the intercept of the line with the y axis and b<sub>1</sub> the slope of the line. b<sub>0</sub> and b<sub>1</sub> are calculated as described on the next page.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/4_7_0_0_0_1.png){: loading=lazy }
#### Calculating b0 and b1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/calculating-b0-b1-6ce67e46'><i class='fa fa-play' aria-hidden='true'></i></button>b<sub>0</sub> and b<sub>1</sub> are calculated using the two equations indicated below. The details of such calculations are presented for the Capsaicin example under the heading "Example of simple linear regression".


![](https://media.drugdesign.org/course/qsar/4_7_2_0_0_1_3.png){: loading=lazy }
### Multiple Linear Regression: Mathematical Outline

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/multiple-linear-regression-mathematical-outline-2c193d0f'><i class='fa fa-play' aria-hidden='true'></i></button>It is not always possible to correlate biological activities with a single descriptor (linear model with one descriptor). Given that biological action results from the combined influence of many factors, one can extend the QSAR model to multiple descriptors. Indeed, the observation that several parameters used simultaneously can lead to good models prompted the development of a method referred to as "multiple linear regression" (MLR). In this model linearity is maintained for each of the individual descriptors.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/5_2_0_0_0_1.png){: loading=lazy }
#### Example: MLR vs. Single Linear Models

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-mlr-vs-single-linear-models-0fd4de6e'><i class='fa fa-play' aria-hidden='true'></i></button>The example of anticonvulsant compounds shown below demonstrates that each descriptor Es, &Sigma; and logP alone was not able to give a good correlation (r less than 0.40) with the biological activities. However, by using simultaneously logP and &Sigma;, a significant improvement was made (r=0.80). The addition of Es improves the model even more (r=0.95). This indicates that the biological properties result from the combined action of lipophilicity, steric and electronic effects.


![](https://media.drugdesign.org/course/qsar/convul1.png){: loading=lazy }

??? Abstract "articles"
    **PhD. Thesis** 
    C. Euvrard 
    
           
    Paris 1982  
    
#### The Mathematics of MLR: a Single Sample

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/mathematics-mlr-single-sample-7e0610c8'><i class='fa fa-play' aria-hidden='true'></i></button>In MLR we try to express activity as a linear combination of descriptors. We recognize the fact that in most cases, our fit to the experimental data will not be perfect and error is usually unavoidable. In the equations listed below, y (the activity) is a scalar; x<sub>j</sub> is the value of the descriptor j and b<sub>j</sub> its associated coefficient; e is the error. In the matrix notation, x<sup>T</sup> is a row vector of the descriptors and b, a column vector of their associated coefficients.


![](https://media.drugdesign.org/course/qsar/5_4_1_0_0_1.png){: loading=lazy }
#### The Mathematics of MLR: Many Molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/mathematics-mlr-many-molecules-598f519d'><i class='fa fa-play' aria-hidden='true'></i></button>For the case of multiple compounds, the activity values are assembled into a vector y of length n, where n is the number of compounds. The descriptors are collected into an n by m matrix where n again is the number of compounds and m is the number of descriptors. The coefficients are collected into a vector of length m and the errors are collected into another vector of length n.


![](https://media.drugdesign.org/course/qsar/5_4_2_0_0_1.png){: loading=lazy }
#### The Solution of MLR

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/solution-mlr-13ada8e6'><i class='fa fa-play' aria-hidden='true'></i></button>In the MLR formalism we search for the (unknown) set of coefficients b, which, when multiplied by the (known) descriptors, best approximates the (known) activity data (equation 1). A solution to this problem can be obtained through a matrix inversion procedure (equation 2).


=== "coefficients"
    ![](https://media.drugdesign.org/course/qsar/5_4_3_0_0_1_f1.png){: loading=lazy }
=== "example"
    ![](https://media.drugdesign.org/course/qsar/5_4_3_0_0_1_f2.png){: loading=lazy }
#### Analysis of the MLR Equation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/analysis-mlr-equation-d16baf35'><i class='fa fa-play' aria-hidden='true'></i></button>One of the purposes of QSAR analyses is to understand the forces governing the activity of a particular class of compounds and to assist drug design. In the example shown below QSAR analyses reveal that the relative importance of the descriptors vary in the following order: logP > &Sigma; > Es > MR; therefore the biological activities are governed in the first place by hydrophobicity (logP) and polarity (&Sigma;) and to a lesser extent by steric effects (Es and MR).
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/contribution.png){: loading=lazy }
### Non-Linear Equations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/non-linear-equations-ca993427'><i class='fa fa-play' aria-hidden='true'></i></button>A non-linear equation is an extension of a multiple linear regression. In some systems the linearity may not be sufficient to achieve a good correlation. Hansch was the first to introduce a parabolic term, and a complex biological process can be satisfactorily modeled by non-linear equations.


![](https://media.drugdesign.org/course/qsar/reality_complex.png){: loading=lazy }
#### Example of Non-Linear Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/example-non-linear-model-98f2cdc1'><i class='fa fa-play' aria-hidden='true'></i></button>In the example below, the anticonvulsant activities of a set of molecules was initially found to be linearly correlated with logP. However, it is implausible to assume that the biological activity can increase indefinitely by increasing the lipophilicity of the molecules. It is known that highly lipophilic compounds cannot reach their site of action, because they are trapped in lipophilic environments. It is therefore more realistic to improve the initial model using a non-linear equation. The modified equation proved to be correct and revealed the existence of an optimum logP value, information that could not be derived from molecules with a small range of logP values.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/anticon.png){: loading=lazy }
=== "linear model"
    ![](https://media.drugdesign.org/course/qsar/anticon_f1.png){: loading=lazy }
=== "non-linear model"
    ![](https://media.drugdesign.org/course/qsar/anticon_f2.png){: loading=lazy }
#### Typical Non-Linear Equations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/typical-non-linear-equations-9bb90e4b'><i class='fa fa-play' aria-hidden='true'></i></button>There are many reasons why the use of non-linear models is justified, including the kinetics of the drug transport, the equilibrium control of its distribution, allosteric effects, different pharmacokinetics, metabolism, solubility etc... The following are examples of non-linear models that have proved to be valid at least for special and complex biological systems.
*[pharmacokinetics]: The study of absorption, distribution, metabolism and excretion (ADME) of bioactive compounds.
*[pharmacokinetic]: The study of absorption, distribution, metabolism and excretion (ADME) of bioactive compounds.


![](https://media.drugdesign.org/course/qsar/non_linear1.png){: loading=lazy }
## Validating the Model: Step 4

### Tools for Assessing the Quality of a Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/tools-for-assessing-quality-model-c10725fb'><i class='fa fa-play' aria-hidden='true'></i></button>Efficient tools are necessary for assessing the validity of a QSAR model. Numerical analyses or statistical methods provide a variety of indexes that serve to evaluate the quality of the model and its limitations. In the following pages we present some of these tools and explain how to use them.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[sar]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/stam3428.png){: loading=lazy }
### Predictive and non-Predictive Models

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predictive-non-predictive-models-d8fabc48'><i class='fa fa-play' aria-hidden='true'></i></button>Broadly speaking there are two groups of indices: (1) those that indicate how well the QSAR equation can "reproduce" the experimental data and (2) those that can tell how far the model can be extrapolated to new molecules.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[apo]: 3D structure of a macromolecule without a ligand


![](https://media.drugdesign.org/course/qsar/repor.png){: loading=lazy }
### The Standard Deviation

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/standard-deviation-66a0c6b0'><i class='fa fa-play' aria-hidden='true'></i></button>The easiest way to "validate" a QSAR model is to calculate the standard error or standard deviation (SD or s), which is calculated as the average squared deviation of each number (the "residuals") from the mean. This index reflects how much the deviation between the data and the model is. The smaller the SD, the more the model is considered of good quality.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


=== "s calculation"
    ![](https://media.drugdesign.org/course/qsar/s_calculation.png){: loading=lazy }

=== "example"
    ![](https://media.drugdesign.org/course/qsar/sd_example.png){: loading=lazy }

### Correlation Index r<sup>2</sup>

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/correlation-index-rsup2-15dd37b8'><i class='fa fa-play' aria-hidden='true'></i></button>The most frequently used index for evaluating the performance of a QSAR model is r<sup>2</sup> (squared correlation coefficient). r<sup>2</sup> measures the degree of correlation between the activity values calculated by the model and those measured experimentally. The value of r<sup>2</sup> can range between 0 (no correlation) to 1 (perfect correlation).
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_12_0_0_0_1.png){: loading=lazy }
=== "r2=1"
    ![](https://media.drugdesign.org/course/qsar/1_12_0_0_0_1_f1.png){: loading=lazy }
=== "r2=0.5"
    ![](https://media.drugdesign.org/course/qsar/1_12_0_0_0_1_f2.png){: loading=lazy }
=== "r2=0"
    ![](https://media.drugdesign.org/course/qsar/1_12_0_0_0_1_f3.png){: loading=lazy }
#### The Mathematics of r<sup>2</sup>

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/mathematics-rsup2-0486a5cb'><i class='fa fa-play' aria-hidden='true'></i></button>Mathematically, r<sup>2</sup> is calculated by dividing the fraction of variance explained by the model (the "explained sum of squares", ESS) by the original variance (the "total sum of squares", TSS). ESS, the fraction of variance explained by the model is equal to the total variance (TSS) minus that portion of the variance which was not explained by the model (residual, RSS).
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/math_of_r.png){: loading=lazy }

#### TSS, the Total Variance
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/tss-total-variance-2e25adf2'><i class='fa fa-play' aria-hidden='true'></i></button>TSS, the total variation in the dependent variable (y) is simply the spread of the data around the average.


![](https://media.drugdesign.org/course/qsar/tss_total_variance.png){: loading=lazy }

#### RSS, the Explained Variance
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/rss-explained-variance-f8758411'><i class='fa fa-play' aria-hidden='true'></i></button>In order to obtain RSS, the variance explained by the QSAR model, we start from the fact that the total variance is the sum of the explained and unexplained variances. Thus, the explained variance is the difference between the total variance and the unexplained variance. That portion of the variance which is left unexplained by the QSAR model (unexplained variance) can be obtained by finding the difference between the measured activity and the predicted activity (as given by the regression line).
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/tss_explained_variance.png){: loading=lazy }

### t-test for Single Descriptors and Significance of r<sup>2</sup>
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/t-test-for-single-descriptors-significance-rsup2-be82a126'><i class='fa fa-play' aria-hidden='true'></i></button>r<sup>2</sup> alone is not sufficient to determine whether the relationship has occurred by chance; its significance can be calculated using the t-statistic for single descriptors as follows. We repeat the process of deriving of a QSAR equation and calculate the resulting r<sup>2</sup> values many times, each one using a different descriptor. If the number of molecules is large (> 30), the sampling distribution of the resulting r<sup>2</sup> values will have a normal (i.e., Gaussian) shape. If the number of molecules is small, it will have a shape known as a t-distribution.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/4_13_0_0_0_1.png){: loading=lazy }
#### Shape of t-distribution and Number of Molecules

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/shape-t-distribution-number-molecules-7098c320'><i class='fa fa-play' aria-hidden='true'></i></button>A value r<sup>2</sup> = 1 will always be obtained for a set of two molecules irrespective of the descriptor used for the QSAR analysis however, as the number of molecules increases, the probability of obtaining large r<sup>2</sup> values with irrelevant descriptors decreases. This probability corresponds to the area under the t-distribution curve (see below), away from the center (where r<sup>2</sup> = 0). The shape of the t-distribution therefore depends on the number of molecules used in the analysis.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/4_13_1_0_0_1.png){: loading=lazy }
#### Student's t-test Procedure

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/students-t-test-procedure-3bf994dd'><i class='fa fa-play' aria-hidden='true'></i></button>The Student t-test employs the t-distribution to test whether the correlation coefficient obtained from the QSAR analysis is significantly different from 0. The larger the t-value, the larger the probability that r<sup>2</sup> significantly differs from 0; that is, the larger the probability that the descriptor used for the analysis is relevant to the activity. Technically, the steps involved in the Student t-test are as follows.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


=== "Overview"
    ![](https://media.drugdesign.org/course/qsar/4_13_2_0_0_1_f1.png){: loading=lazy }
=== "Step 1"
    ![](https://media.drugdesign.org/course/qsar/4_13_2_0_0_1_f2.png){: loading=lazy }
=== "Step 2"
    ![](https://media.drugdesign.org/course/qsar/4_13_2_0_0_1_f3.png){: loading=lazy }
=== "Step 3"
    ![](https://media.drugdesign.org/course/qsar/4_13_2_0_0_1_f4.png){: loading=lazy }
=== "Step 4"
    ![](https://media.drugdesign.org/course/qsar/4_13_2_0_0_1_f5.png){: loading=lazy }
### F-test for Assessing the Significance of r<sup>2</sup>
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/f-test-for-assessing-significance-rsup2-7e4de4d2'><i class='fa fa-play' aria-hidden='true'></i></button>The F-test is an extension of the t-test for the case of many descriptors. Like the t-test it tests (and hopefully rejects) the assumption that the model did not explain any of the original variance in the data set (i.e., ESS = 0). Like the t-test, the F-test uses an F-distribution which, similar to the t-distribution depends on the number of compounds and descriptors.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/qsar/5_7_1_0_0_1.png){: loading=lazy }
#### Performing the F-test

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/performing-f-test-797c3396'><i class='fa fa-play' aria-hidden='true'></i></button>The F-test employs the F-distribution to test whether the correlation coefficient obtained from the MLR analysis significantly differs from 0. The larger the F-value, the larger the probability that r<sup>2</sup> significantly differs from 0; i.e. the greater the probability that the descriptor used for the analysis is relevant to the activity. Technically, the steps involved in the F-test are as follows.


![](https://media.drugdesign.org/course/qsar/5_7_2_0_0_1.png){: loading=lazy }
#### F-test Procedure

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/f-test-procedure-597a5199'><i class='fa fa-play' aria-hidden='true'></i></button>The application of the steps involved in evaluating the significance of r<sup>2</sup> for the Capsaicin analogs using the F-test proceeds as follows:
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Procedure"
    ![](https://media.drugdesign.org/course/qsar/5_7_3_0_0_1_2_f1.png){: loading=lazy }
=== "F-table"
    ![](https://media.drugdesign.org/course/qsar/5_7_3_0_0_1_2_f2.png){: loading=lazy }
### Assessing the Predictive Power of a Model

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/assessing-predictive-power-model-dda36af7'><i class='fa fa-play' aria-hidden='true'></i></button>r<sup>2</sup>, t and F are indices that can be generated to evaluate QSAR results. However, these parameters basically only tell us about the ability of the QSAR model to reproduce the data from which it was derived and not its aptitude to predict the activities of new compounds. Two methods are presented in the following pages to estimate the predictive power of a QSAR model.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/1_2_3_0_1.png){: loading=lazy }
#### The Test Set Method

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/test-set-method-d095aa84'><i class='fa fa-play' aria-hidden='true'></i></button>The first method is known as the "test set method" and consists of partitioning the initial data into two sets, a preferred strategy when a large set of compounds is available. The initial data set is randomly divided into two parts; the first one is used to build a QSAR model and the second one to validate this model.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/qsar_validation.gif){: loading=lazy }

#### The Cross Validation Method

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/cross-validation-method-e4178131'><i class='fa fa-play' aria-hidden='true'></i></button>The second method is known as "the cross validation method" - it is preferred when the size of the data set is too small. In this method the data are randomly divided into N equal parts; N-1 parts are used to build the model which is then used for the remaining N<sup>th</sup> part to predict the activities of the corresponding molecules. The procedure is repeated until the activities of all compounds have been predicted independently.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/8_0_2_0_0_1.png){: loading=lazy }
#### Limits of the Cross Validation Method

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/limits-cross-validation-method-ed06c3c6'><i class='fa fa-play' aria-hidden='true'></i></button>With the cross validation method, the QSAR model that is ultimately used to predict the activities of new compounds is derived from all N data points and is therefore different from the N partial QSAR models (i.e. those derived from the N-1 data points). Therefore cross validation does not provide us with the predictive power of a specific QSAR equation but rather with an estimate of our ability to make predictions for compounds similar to those used in our QSAR analysis.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/8_0_3_0_0_1.png){: loading=lazy }
#### The Predictive Index Q<sup>2</sup>

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/predictive-index-qsup2-1cb39143'><i class='fa fa-play' aria-hidden='true'></i></button>The predictive power of the model, termed Q<sup>2</sup>, is computed by analogy with r<sup>2</sup>, the difference being the use of the PRESS (predicted sum of squares) rather than the RSS (residual sum of squares) in the numerator. PRESS is calculated as the difference between the measured activity and the predicted activity for the test set compounds.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar/8_0_1_0_0_1.png){: loading=lazy }
### Summary

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar/summary-a4766e8a'><i class='fa fa-play' aria-hidden='true'></i></button>When discussing mathematical tools available for assessing the quality of a QSAR model we saw that (1) the standard deviation is an isolated "absolute" index of local meaning; (2) with r<sup>2</sup> it is possible to compare different models, but this index is only mathematical - not statistical; (3) t and F have a statistical content that can be used for single and multiple linear regression respectively; however they only measure the ability of the QSAR model to reproduce the data from which it was constructed.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar/summary.png){: loading=lazy }


Copyright © 2024 drugdesign.org
