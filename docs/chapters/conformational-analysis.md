# Conformational Analysis
!!! Authors
    **Claude Cohen** (Synergix), **Elie Cohen** (Synergix)

!!! Info
    Conformational analysis is a framework that integrates the information on molecular geometries and energies. Minimization treatments are presented and discussed.
*[Conformational analysis]: The study of the geometries and their associated energies for a given molecule.
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


    **Number of Pages: 54 (±1 hours read)**

    Last Modified: January 2004

    Prerequisites: Molecular Geometry, Molecular Energies
## Introduction

### Geometries, Energies and Conformational Analysis
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

As shown in the previous chapters, a molecule possesses many conformers and an energy is associated to each of these conformations. The aim of this chapter is to present the concept of "conformational analysis" as a framework that integrates the information about geometries and energies discussed in the previous chapters.
*[conformational analysis]: The study of the geometries and their associated energies for a given molecule.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/conformational-analysis/1_1_0_1.png){: loading=lazy }

### Energy Profile: a Global Information

The description of the energy of a molecule in the multidimensional space of its degrees of freedom defines the "conformational potential surface" of the compound. This global representation is extremely useful in understanding, assessing, controlling and eventually influencing the properties of a given molecule.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/1_2_0_1.png){: loading=lazy }

### Definition of Conformational Analysis
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

Molecules can change their geometries by processes involving changes in torsion angles. The study of these geometries and their associated energies is called "conformational analysis".
*[conformational analysis]: The study of the geometries and their associated energies for a given molecule.


![](https://media.drugdesign.org/course/conformational-analysis/1_3_0_1.png){: loading=lazy }

## Potential Surface

### Conformational Potential Surface: One Rotation

In the case of a molecule with one rotatable bond, the "conformational potential surface" consists of the curve representing the molecular energy as a function of the torsion angle. The minima of the curve correspond to low energy conformations.


![](https://media.drugdesign.org/course/conformational-analysis/2_1_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Reaction Coordinates and Structure-Energy Relationships** 
    Grunwald E 
    Prog. Phys. Org. Chem. 
    17 1990  
    
### Conformational Potential Surface: Two Rotations

In the case of a molecule with two rotatable bonds, the total energy is represented (Energy axis) as a function of the two variable torsion angles (Torsion 1 and Torsion 2 axis).


![](https://media.drugdesign.org/course/conformational-analysis/2_2_1_1.png){: loading=lazy }

#### Energy Profile Viewed from the Top

This picture represents the same energy profile viewed from the top.


![](https://media.drugdesign.org/course/conformational-analysis/2_2_2_1.png){: loading=lazy }

#### Energy Profile Viewed as Contour Lines

The previous representation can also be visualized with contour lines drawn by computers and connecting together all points with the same value of the energy. The energy levels are color-coded.


![](https://media.drugdesign.org/course/conformational-analysis/2_2_3_1.png){: loading=lazy }

### Conformational Potential Surface

Most molecules have more than two variable torsion angles. Therefore their conformational potential surface cannot be visualized because the surface is defined in a space of more than 3 dimensions. This surface can be represented schematically as a curve displaying the energy as a function of a parameter (p) that has no real geometrical meaning.


![](https://media.drugdesign.org/course/conformational-analysis/2_3_0_1.png){: loading=lazy }


??? Abstract "articles"
    **An Internal Coordinate Monte Carlo Method for Searching Conformational Space** 
    Chang G, Guida WC and Still WC 
    J. Am. Chem. Soc. 
    111 1989  
    
    **Automated Conformational Analysis: Directed Conformational Search Using the A* Algorithm** 
    Leach AR, Prout K 
    Journal of Computational Chemistry 
    11 1990  
    
### Special Forms
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.

The conformational potential surface contains "local minima" (low energy conformers), "barriers" (high energy conformers), and a "global minimum" (the conformation of lowest energy). Saddle points correspond to points where not all the derivatives of the energy with respect to the coordinates are equal to zero.
*[global minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities


=== "Curve"
    ![](https://media.drugdesign.org/course/conformational-analysis/2_4_1_1.png){: loading=lazy }

=== "Surface"
    ![](https://media.drugdesign.org/course/conformational-analysis/2_4_2_1.png){: loading=lazy }

### Interconversion Between Conformers
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

Conformational minimas are separated by transition states. The interconversion from one conformer to the other requires the crossing of the energy barrier. A low barrier corresponds to rapid interconversion rates. For example for a barrier of about 40 kJ/mol the conversion occurs one million times per second.


![](https://media.drugdesign.org/course/conformational-analysis/alt5_2_5_0_1.gif){: loading=lazy }


??? Abstract "articles"
    **Just What is a Transition State?** 
    Laidler KJ 
    J. Chem. Education. 
    65(6) 1988  
    
### Energy Barriers

When the barrier is high, the interconversion is either slow or impossible. For example for values greater than 80 kJ/mol the interconversion is not possible at room temperature.


![](https://media.drugdesign.org/course/conformational-analysis/alt5_2_6_0_1.gif){: loading=lazy }


??? Abstract "articles"
    **Ab Initio Calculation of the Rotational Barriers in Fluorinated Dimethyl Ethers; Solvation Effects on the Rotational Barriers** 
    Buono RA, Zauhar RJ and Venanzi CA 
    J. Mol. Struct. (Theochem) 
    370 1996  
    
### Interconversion Pathway

The interconversion always proceeds along the pathway of lowest energy. If there is a pathway requiring the crossing of a barrier of less than 80 kJ/mol, it will occur at room temperature.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/alt5_2_7_0_1.gif){: loading=lazy }

## Conformational Analysis
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

### Conformational Analysis Principles
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

The conformational analysis of a molecule results in the full knowledge of its conformational potential surface.
*[conformational analysis]: The study of the geometries and their associated energies for a given molecule.


![](https://media.drugdesign.org/course/conformational-analysis/3_1_0_1.png){: loading=lazy }

### Systematic Scanning of All Potential Surfaces

A simple method for exploring the conformational potential surface can be accomplished by a systematic scanning of all geometries of the molecule. Each point of the surface is geometrically constructed and its energy is calculated. This provides comprehensive information about the conformational profile of the molecule.


![](https://media.drugdesign.org/course/conformational-analysis/alt5_3_2_0_1.gif){: loading=lazy }

### Systematic Scanning is Time Consuming

However the systematic search becomes rapidly impractical. For example, the following molecule has 7 rotatable bonds and one non-planar ring. If we consider a 10&#176; resolution for each rotatable bond (36 conformers per bond) and 4 conformations for the piperazine ring, the numbers of conformers to generate is: 36x36x36x36x36x36x36x4 which correspond to 300 billion conformers. This is unfeasible and impractical.


![](https://media.drugdesign.org/course/conformational-analysis/3_3_0_1.png){: loading=lazy }


??? Abstract "articles"
    **The Conformational Behavior of n-pentane: A Molecular Mechanics and Molecular Dynamics Experiment** 
    Mencarelli P 
    J. Chem. Ed. 
    72 1995  
    
### How to Reduce Conformational Search?

The comprehensive scanning of the surface becomes rapidly impractical; one has to find ways to reduce the number of points. In fact all the geometries inside a given well correspond to a same family of conformers. Therefore, one conformation will be sufficient for representing the entire family. At this point the conformational analysis is reduced to the identification of all the families of conformers for the molecule concerned.
*[conformational analysis]: The study of the geometries and their associated energies for a given molecule.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/conformational-analysis/alt5_3_4_0_1.gif){: loading=lazy }

### One Conformer Represents a Whole Family

The geometrical differences within a given family are in the amplitude and numerical values of the torsion angles; however from the qualitative point of view they are all the same.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/conformational-analysis/3_5_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Conformations of Peptides and Peptidomimetics by Spectroscopy and Computer Simulation** 
    Goodman M, Palmer DE and Said-Nejad OE 
    Polym. Prepr. (Am. Chem. Soc. Div. Polym. Chem.) 
    31 1990  
    
    **Conformational Analysis of CCK-B Agonists Using 1H-NMR and Restrained Molecular Dynamics: Comparison of Biologically Active Boc-Trp-(N-Me) Nle-Asp-Phe-NH2 and Inactive Boc-Trp-(N-Me) Phe-Asp-Phe-NH2** 
    Goudreau N, Weng JH, and Roques BP 
    Biopolymers 
    34 1994  
    
### Working with a Set of Representative Conformers

With a resolution of 10&#176; the conformers of n-butane will be represented by 36 geometries. However they can be reduced to a much smaller set represented by the local minima. In this case we can select the following three equilibrium geometries: the gauche (+), gauche (-) and the anti, and not 36 positions.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/3_6_1_1.png){: loading=lazy }
#### Sildenafil Example

With such a rule, all the "typically different" conformers of the molecule are represented. In the example presented here, instead of studying hundred billions of forms, we now have only to study 8748 (3x3x3x3x3x3x3x4=8748) conformers.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/conformational-analysis/3_6_2_1.png){: loading=lazy }
### Family Representatives: Small Rings

Select a given ring size and select the bond multiplicity scheme you want for the ring (i.e. single or double bonds). The  conformations associated to the system you have chosen appear both in 2D (with the signs of the torsion angles) and in 3D.


![](https://media.drugdesign.org/course/conformational-analysis/alt2_c7_2.gif){: loading=lazy }

### Family Representatives: Acyclic Bonds

Describe the nature of the central bond atoms and their hybridization. Newman representations appear and are clickable.


![](https://media.drugdesign.org/course/conformational-analysis/alt2_ab5.gif){: loading=lazy }

### Consequence: Minimization Treatments
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[nce]: New Chemical Entity: a compound not previously described.

In drug design applications, the minima and their relative energies are of central importance. The representative forms that are generated correspond to theoretical forms and they are not necessarily at the minimum of their corresponding well. Their energies are meaningless. In order to have meaningful values, one has to relax their geometries to find the point of minimum energy; this treatment is called "minimization".
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[nce]: New Chemical Entity: a compound not previously described.
*[sar]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/conformational-analysis/3_9_0_1.gif){: loading=lazy }

### Example: Analysis of Elementary Fragments

Let us visualize the analysis of methyl-cyclohexene-1-ketone. The carbonyl of the keto group can be either s-trans or s-cis relative to the double bond of the ring. The cyclohexene ring can adopt 4 different conformations (2 chairs and 2 boats).


![](https://media.drugdesign.org/course/conformational-analysis/3_10_0_1.png){: loading=lazy }
### Example: Generation of Representative Conformers

The representative geometries of the molecule can be represented by a set of 2x4 = 8 typically different conformers.


![](https://media.drugdesign.org/course/conformational-analysis/3_11_0_1.gif){: loading=lazy }

### Example: Results of Conformational Analysis
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

The forms were all minimized and the following relative energies were obtained:
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/conformational-analysis/3_12_0_1.gif){: loading=lazy }

### Conformational Analysis Principles: Summary
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

In the great majority of molecules, it is not possible to systematically generate all their conformers. One has to consider a method that produces typically different conformers. They can be generated either by the analysis of their fragments or by random methods (e.g. Monte Carlo). Minimizations procedures then have to be considered for meaningful energy values.
*[Minimizations]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


=== "Conformer generation"
    ![](https://media.drugdesign.org/course/conformational-analysis/alt5_3_13_1_1.gif){: loading=lazy }

=== "Minimization"
    ![](https://media.drugdesign.org/course/conformational-analysis/alt5_3_13_2_1.gif){: loading=lazy }

=== "Results"
    ![](https://media.drugdesign.org/course/conformational-analysis/alt5_3_13_3_1.gif){: loading=lazy }

## Minimizations
*[Minimizations]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

### Definition of the Minimization of a Conformer
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

Minimization treatment consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface. The minimization is terminated when it is not possible to find a conformer of lower energy in the current well considered.
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/4_1_0_1.gif){: loading=lazy }

### Improved Geometries and Good Energies

A non-minimized conformer may be used for rough geometrical analyses but not for energy considerations. A minimized structure is a good model for both the geometry and the energy.


![](https://media.drugdesign.org/course/conformational-analysis/alt5_4_2_0_1.gif){: loading=lazy }

### The Minimization Treatment
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

In energy minimization an initial conformation is submitted to full geometry optimization, where all parameters defining the geometry of the system are modified by small increments, until the total energy of the system reaches a minimum.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/alt4_4_3_0_1.gif){: loading=lazy }

### How Does Minimization Works?
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

Small modifications of the molecular geometry are considered, if the resulting geometry has a lower energy than the original, then another step is made in the same direction. Otherwise a smaller step in a different direction is carried out. The process is continued until the energy cannot decrease.


![](https://media.drugdesign.org/course/conformational-analysis/4_4_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Global Energy Minimization by Rotational Energy Embedding** 
    Crippen GM and Havel TF 
    J. Chem. Inf. Comput. Sci. 
    30 1990  
    

??? Abstract "book"
    **** 
    Polak E 
    Optimization: Algorithms and Consistent Approximations 
    Springer  1997   
    
### Minimization Methods
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

There are different algorithms for conducting a minimization. For example, for the steepest descent, the conjugated gradients or Newton-Raphson procedures require the calculation of the first or second derivatives of the energy all along the iterative process.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/4_5_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Quasi-Newton Methods and their Application to Function Minimization** 
    Broyden CG 
    Math. Comput. 
    21 1967  
    
    **A Rapidly Convergent Descent Method for Minimization** 
    Fletcher R and Powell MJD 
    Comput. J. 
    6 1963  
    
    **Function Minimization by Conjugate Gradients** 
    Fletcher R and Reeves CM 
    Comput. J. 
    7 1964  
    
    **A Broyden-Fletcher-Goldfarb-Shanno Optimization Procedure for Molecular Geometries** 
    Head JD and Zerner MC 
    Chem. Phys. Lett. 
    122 1985  
    
    **Simplex Method for Function Minimization** 
    Nelder JA and Mead R 
    Comput. J. 
    7 1965  
    
    **An Efficient Method for Finding the Minimum of a Function of Several Variables without Calculating Derivatives** 
    Powell MJD 
    Comput. J. 
    7 1964  
    
### Many Variables Are Minimized

Bond lengths, bond angles and torsion angles are the variables of the minimization process. The total energy of the following molecule is a function of 132 variables.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/4_6_0_1.png){: loading=lazy }

### Minimization is a Time-Consuming Treatment
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

The minimization of one conformer may require thousands of iterations, each one requiring the calculation of the new energy. Moreover the minimization treatment has to be applied thousands of times (one minimization for each conformer generated).
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/4_7_0_1.png){: loading=lazy }

## Examples of Minimization
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

### Minimization with Stretching Strain
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

The stretching energy of the starting geometry is extremely high. Press the START button to initiate the minimization process and note the variation of each of the elementary contributions (e.g. stretching, bending, van der Waals) until the lowest energy conformation is reached.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_1.png){: loading=lazy }
### Minimization with Bending Strain
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

Stretching, bending, and van der Waals energies of the starting geometry are high. Press the START button to initiate the minimization process and note their variation until the lowest energy conformation is reached.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_2.gif){: loading=lazy }

### Minimization with Torsional Strain
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

Torsional and van der Waals energies of the starting geometry are high. Press the START button to initiate the minimization process and note their variation until the lowest energy conformation is reached.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_3.gif){: loading=lazy }

### Minimization with Van der Waals Strain
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

In their initial relative orientations the van der Waals interactions between the two molecules are not optimal. Press the START button to view how the minimization of the entire system achieves better interactions with shorter distances and finally finds the minimum energy.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_4.gif){: loading=lazy }

### Minimization with Electrostatic Component
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

The electrostatic component of the starting conformer is small and at the end of the minimization, it turns negative (attractions).
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_5.gif){: loading=lazy }

### Minimization with Hydrogen Bond Component
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

Press the START button to view how the minimization process optimizes a favorable intramolecular hydrogen bond.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_6.gif){: loading=lazy }

### Distribution of Energy Strain

The following example illustrates a case where the strain energy of the starting conformer is high due to severe van der Waals repulsions and can be reduced only with substantial deformations of other components including torsional, stretching and bending energies. In the final minimized conformer, the forces acting on the atoms are all balanced.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_5_8.gif){: loading=lazy }

## Conformational Analysis in Drug Design
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

### Conformational Analysis in Drug Design
*[Conformational Analysis]: The study of the geometries and their associated energies for a given molecule.

Conformational analysis and drug design are two independent disciplines. They have in common the conformation (and energy) of the bioactive form. Conformational analyses are used to predict the biological properties of candidate prototype structures.
*[Conformational analysis]: The study of the geometries and their associated energies for a given molecule.


![](https://media.drugdesign.org/course/conformational-analysis/6_1_0_1.png){: loading=lazy }

### Energy of the Bioactive Form

In order to be able to assess the population of the bioactive form, it is necessary to know the energy of the global minimum of the molecule concerned. This requires conformational analysis studies.
*[conformational analysis]: The study of the geometries and their associated energies for a given molecule.
*[nce]: New Chemical Entity: a compound not previously described.
*[sar]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[global minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities


![](https://media.drugdesign.org/course/conformational-analysis/6_2_0_1.png){: loading=lazy }

### Low Energy of the Bioactive Conformation
*[Bioactive Conformation]: The geometry adopted by a ligand when it binds to its biological target.

The difference of energy between the bioactive conformation and the conformation found in the crystal is generally less than 13 kJ/mol; this can be understood in the framework of the "induced-fit" theory.
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/6_3_0_1.gif){: loading=lazy }


??? Abstract "articles"
    **Conformation of Acetylcholine Bound to the Nicotinic Acetylcholine Receptor** 
    Behling RW, Yamane T, Navon G and Jelinski LW 
    Proc. Natl. Acad. Sci. USA 
    85 1988  
    
### Geometry of the Bioactive Conformation
*[Bioactive Conformation]: The geometry adopted by a ligand when it binds to its biological target.

The geometry of the bioactive conformation of a molecule can be very different from the conformation of the isolated molecule in solution or in the crystal, let alone the isolated (in vacuo) state given by energy minimization. The example shown here illustrates the case of methotrexate where the conformation of the free molecule is shown in white, and in blue when the molecule is bound to its biological target.
*[bioactive conformation]: The geometry adopted by a ligand when it binds to its biological target.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/conformational-analysis/snap_v1_b5_6_4.png){: loading=lazy }


??? Abstract "articles"
    **Conformation of Acetylcholine Bound to the Nicotinic Acetylcholine Receptor** 
    Behling RW, Yamane T, Navon G and Jelinski LW 
    Proc. Natl. Acad. Sci. USA 
    85 1988  
    
    **Search Strategies for Determining Bioactive Conformers of Peptides and Small Molecules** 
    Burt SK and Greer J 
    Annual Reports in Medicinal Chemistry 
    23 1988  
    
### The Experienced Molecular Modeler
*[nce]: New Chemical Entity: a compound not previously described.

A good molecular modeler can intelligently save time-consuming treatments. He can judge, assess, and estimate using the 3D manipulation of a mechanical molecular model until he feels that a calculation is needed. For example, an experienced modeler can easily guess the geometry of the global minimum of a molecule and possibly minimize 5-10 different candidate geometries instead of the thousands that would be needed in a fully computerized study. He will use the computerized treatments for clarifying features that are beyond the things he knows.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[global minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities


![](https://media.drugdesign.org/course/conformational-analysis/6_5_0_1.png){: loading=lazy }


??? Abstract "articles"
    **Conformational Differences Between alfa-Cyclodextrin in Aqueous Solution and in Crystalline Form** 
    Koehler JEH, Sanger W and van Gunsteren WF 
    J. Mol. Biol. 
    203 1988  
    
### Common Errors Made with Minimization
*[Minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.

Among the common errors that are observed in the use of molecular modeling systems is the belief that a minimized conformer has a "quality label" of validity. This is not true. The minimum obtained depends on the initial conformation that has been used. Although 'improved' by the minimization treatment, this is not sufficient. What is important is the location of this conformation with respect to the low energy minima, including the global minimum of the molecule.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[minimization]: Minimization treatments consists of successive alterations of the geometry of the molecule until a minimum is found on the conformational potential surface.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[global minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities


![](https://media.drugdesign.org/course/conformational-analysis/6_6_1_1.png){: loading=lazy }


??? Abstract "articles"
    **Abuses of Molecular Mechanics. Pitfalls to Avoid** 
    Lipkowitz BK 
    J. Chem. Educ. 
    72 1995  
    
#### Example 1

This is an example of a minimized molecule corresponding to an input conformation introduced by the modeler. The problem is that the "cis" conformation of an acyclic ester is almost inexistent; the "trans" form is by far the preferred one. The population of this conformation visualized here is close to 0%. The same can also be said for amide bonds.


![](https://media.drugdesign.org/course/conformational-analysis/snap_v1_b5_6_6_2.gif){: loading=lazy }

#### Example 2

The following is a representation of a minimized conformation of a molecule where two bulky groups are in a 1-3 diaxial orientation. The molecule will not stay in this conformation. The cyclohexane ring will change its conformation and adopt the alternative chair conformer in which the two substituents will be both in an equatorial orientation. The population of the conformation visualized here is close to 0%.


![](https://media.drugdesign.org/course/conformational-analysis/snap_v1_b5_6_6_3.gif){: loading=lazy }

## Molecular Dynamics
*[Molecular Dynamics]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system

### Molecular Dynamics
*[Molecular Dynamics]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system

Molecular dynamics provide an alternative approach to determine the preferred conformers and the global minimum of a molecule. This is achieved by the simulation of the dynamical motions of the molecule as it vibrates and undergoes internal rotation.
*[Molecular dynamics]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system
*[global minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities


![](https://media.drugdesign.org/course/conformational-analysis/7_1_0_1.png){: loading=lazy }

### Theoretical Basis of Molecular Dynamic Calculations

Molecular dynamics is an extension of the molecular mechanics approach and based on the idea that the atoms of the molecule feel forces and want to move. Each atom is treated as a particle responding to Newton's equations of motion. Integration of these equations with successive time steps lead to the trajectory of the atoms over time in the form of a list of positions and velocities.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[Molecular dynamics]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system
*[molecular mechanics]: Molecular mechanics is a is a computer simulation technique for modeling the molecular geometry and energy of a system based on the energy minimization of its potential energy function. The set of potential functions used to calculate the energy is known as the force-field.
*[trajectory]: Trajectory = positions + velocities.


![](https://media.drugdesign.org/course/conformational-analysis/7_2_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Molecular dynamics simulations: A tool for drug design** 
    Rognan D 
    Perspect. Drug Discov. Des. 
    9 1998  
    
### Local Minima and Global Minimum
*[Global Minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities

Molecular dynamic simulations can be used to obtain low energy conformers. The simulations can run with differing temperatures to obtain different families of conformers. At higher temperatures, more conformers are possible and it becomes feasible to cross energy barriers. Current methodology and computer capabilities do not allow the sampling of the conformational space of large molecules.


![](https://media.drugdesign.org/course/conformational-analysis/7_3_0_1.gif){: loading=lazy }


??? Abstract "articles"
    **The Multiple Minima Problem in the Conformational Analysis of Molecules. Deformation of the Potential Energy Hypersurface by the Diffusion Equation Method** 
    Piela L, Kostrowicki J and Scheraga HA 
    J. Phys. Chem. 
    93 1989  
    
    **Some Approaches to the Multiple-Minima Problem in the Calculation of Polypeptide and Protein Structure** 
    Scheraga HA 
    Int. J. Quantum Chem. 
    42 1992  
    
### Simulated Annealing, a Special Type of Dynamics

Simulated annealing is a technique where the molecule is heated and then cooled very slowly so that conformational changes occurring will be at a local minimum. This process is generally repeated many times until several very closely related and low energy conformations are obtained. The conformer of lowest energy is assumed to be global minimum.
*[global minimum]: The global minimum of a function is the smallest value it takes on over its entire range of possibilities


![](https://media.drugdesign.org/course/conformational-analysis/7_4_0_1.gif){: loading=lazy }

### Coherency of Molecular Motions

The motions of the atoms and chemical groups obtained by molecular dynamics simulation reveal subtle underlying molecular machinery. In the beginning of the simulation, the motions are frequently interrupted by collisions with neighboring groups and each group seems to have an erratic trajectory. However, over longer periods of time, coherent and collective motions start to develop, revealing how some groups can fluctuate somewhat more than others.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[molecular dynamics]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system
*[trajectory]: Trajectory = positions + velocities.


=== "150 K"
    ![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_7_5_a.gif){: loading=lazy }

=== "300 K"
    ![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_7_5_b.gif){: loading=lazy }

=== "500 K"
    ![](https://media.drugdesign.org/course/conformational-analysis/internet_v1_b5_7_5_c.gif){: loading=lazy }

### A Typical Molecular Dynamics Run
*[Molecular Dynamics]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system

Typically one can generate about 100 conformations and minimize them with molecular mechanics. The minimized forms are used as starting points for dynamics simulation varying the time and temperature. For each starting point, a number of steps of dynamics at 1 femtosecond intervals are made; the coordinates and energy of each point are recorded. The conformation representing every picosecond steps is saved, and finally, at the end of the study, the atoms' trajectories can be displayed as a movie by quickly displaying the sequence of individual frames. Throughout the treatments, conformers with low energies are saved (coordinates and energies).
*[nce]: New Chemical Entity: a compound not previously described.
*[molecular mechanics]: Molecular mechanics is a is a computer simulation technique for modeling the molecular geometry and energy of a system based on the energy minimization of its potential energy function. The set of potential functions used to calculate the energy is known as the force-field.
*[trajectories]: Trajectory = positions + velocities.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.
*[femtosecond]: One quadrillionth (10-15) of a second of a second - a million times shorter than a nanosecond.
*[picosecond]: One trillionth (10-12) of a second.


![](https://media.drugdesign.org/course/conformational-analysis/7_6_0_1.png){: loading=lazy }
