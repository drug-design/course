# Bioisosterism
!!! Authors
    **Christopher R. McCurdy** (University of Mississippi), **Claude Cohen** (Synergix).

!!! Info
    The concept of bioisosterism is presented and put in perspective from the early ideas of Langmuir to the modern bioinformatics era. Because of its fuzziness the concept can be used in medicinal chemistry for many purposes and this is extensively presented and illustrated in this chapter. Patent issues associated with bioisosterism are discussed; programs and databases that have been developed for bioisoteric replacement are reviewed.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


    **Number of Pages: 133 (±3 hours read)**

    Last Modified: February 2007

    Prerequisites: None
## Introduction

### What is Bioisosterism?
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/what-is-bioisosterism-5b65d7e0'><i class='fa fa-play' aria-hidden='true'></i></button>The principle that similar molecules tend to have similar properties has been around since the early days of medicinal chemistry. Bioisosterism,  a concept based on this principle,   makes it possible to  replace fragments of a compound by groups having similar properties. The modified analog is then tested for interesting properties. The example below  illustrates two bioisosteric anxiolitic drugs: Diazepam and Clobazam. Clobazam was found to be more effective than diazepam in diminishing anxiety. 
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/what_is.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
    **Bioisosterism: A Rational Approach in Drug Design** 
    Patani GA, LaVoie EJ. 
    Chem Rev 
    96(8) 1996  
    
    **The use of bioisosteric groups in lead optimization** 
    Olesen PH 
    Curr Opin Drug Discov Devel 
    4(4) 2001  
    
    **Bioisosterism: a useful strategy for molecular modification and drug design** 
    Lima LM, Barreiro EJ. 
    Curr Med Chem 
    12(1) 2005  
    
    **Chemical similarity and biological activities** 
    Kubinyi H 
    J Braz Chem Soc 
    13(6) 2002  
    
    **Bioisosterism and Molecular Diversity** 
    Robert D. Clark, Allan M. Ferguson, and Richard D. Cramer 
    Perspectives in Drug Discovery and Design 
    9-10-11 1998  
    
    **Bioisosterism as a molecular diversity descriptor: steric fields of single "topomeric" conformers** 
    Cramer RD, Clark RD, Patterson DE, Ferguson AM. 
    J Med Chem 
    39(16) 1996  
    
    **Study of an anxiolytic, clobazam, in otorhinolaryngology in psychosomatic pharyngeal manifestations (in French)** 
    Freche, C. 
    Semaine des Hopitaux; Therapeutique 
    51 (4) 1975  
    

??? Abstract "book"
    **** 
    Burger A. 
    Prog. Drug. Res. Vol. 37 
    Birkhauser Publ.  1991   
    
    **** 
    Janos Fischer and Robin C. Ganellin 
    Analogue-based Drug Discovery 
    Wiley-VCH  2006   
    
### History of the Concept of Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/history-concept-bioisosterism-ac62ec11'><i class='fa fa-play' aria-hidden='true'></i></button>Over the years the concept of bioisosterism has progressively evolved. In 1919 Langmuir  introduced the concept of isosterism that  only took physicochemical properties into account. Later the biological dimension was included that turned the original isosterism into bioisosterism. Recent progress has given a new dimension to bioisosterism and has made it an integral part of cheminformatics today. The key  phases in the development of bioisosterism appear in the following diagram and are presented in the following pages.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/history.png){: loading=lazy }
### Langmuir (1919): Comolecules and Isosteres

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/langmuir-1919-comolecules-isosteres-460c019f'><i class='fa fa-play' aria-hidden='true'></i></button>Langmuir introduced the concept of "isosteres" (or "comolecules") by observing that molecules such as N<sub>2</sub> and CO, CO<sub>2</sub> and N<sub>2</sub>O had similar physical properties. He suggested that molecules or groups of atoms that have the same number of electrons may possess similar physicochemical properties. He was able to identify 21 groups of isosteres some of which are shown below.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/langmuir.png){: loading=lazy }

??? Abstract "articles"
    **Isomorphism, isosterism and covalence** 
    Langmuir, I. 
    J.Am.Chem.Soc 
    41 1919  
    
### Grimm (1925)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/grimm-1925-11215f39'><i class='fa fa-play' aria-hidden='true'></i></button>While  studying non-metallic hydrides, Grimm defined his "hydride displacement law" to describe structural similarities between groups of atoms that combine with hydrogen atoms. Each vertical column of the table below represents a group of isosteres: they have the same number of valence electrons.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/grimm.png){: loading=lazy }

??? Abstract "articles"
    **Structure and Size of the Non-metallic Hydrides** 
    Grimm, H. G. 
    Z. Electrochem 
    31 1925  
    
    **On the Systematic Arrangement of Chemical
Compounds from the Perspective of Research on Atomic Composition;
and on Some Challenges in Experimental Chemistry** 
    Grimm, H. G. 
    Naturwissenschaften 
    17 1929  
    
### Erlenmeyer (1932)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/erlenmeyer-1932-7677145b'><i class='fa fa-play' aria-hidden='true'></i></button>Erlenmeyer extended Grimm's classification and defined isosteres as atoms, ions, and molecules in which the peripheral layers of electrons are identical. In the following table isosteres are grouped according to  the number of peripheral electrons. Each vertical column represents a group of isosteres.


![](https://media.drugdesign.org/course/bioisosterism/erlenmeyer.png){: loading=lazy }

??? Abstract "articles"
    **On Pseudoatoms** 
    Erlenmeyer, H.; Leo, M. 
    Helv. Chim. Acta 
    15 1932  
    
### Friedman (1951): Concept of Bioisosteres
*[Bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/friedman-1951-concept-bioisosteres-186c2776'><i class='fa fa-play' aria-hidden='true'></i></button>Friedman introduced the term "bioisosterism" which defined bioisosteres as a group of atoms or molecules that are structurally similar and show the same type of biological activity. Similar compounds with opposite biological activities (e.g. agonist/antagonist) are also considered bioisosteres. 
*[antagonist]: A molecule that blocks the activation of a receptor.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/friedman.png){: loading=lazy }

??? Abstract "book"
    **** 
    Friedman, H.L. 
    National Research Council Publication No 206. 
    National Academy of Sciences  1951   
    
### Thornber (1979)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/thornber-1979-2b62a133'><i class='fa fa-play' aria-hidden='true'></i></button>Thornber further characterized the field of bioisosteres to include groups or molecules that have similar physicochemical properties or similar biological effects. He suggested guiding bioisosteric replacements by comparing the Hansch's &pi; values, Hammett's &Sigma; constants and Taft's Es steric parameters of  substituents as a measure of their physicochemical properties.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/thornber.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
### Burger (1991)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/burger-1991-c2dbc359'><i class='fa fa-play' aria-hidden='true'></i></button>Burger modified somewhat Friedman's definition of bioisosteres defining them as molecules or groups of atoms that possess similar molecular shapes and volumes, approximately the same distribution of electrons, and exhibit similar physical properties. This definition proved to be of great utility to the medicinal chemist because of - rather than despite - its fuzziness. 
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/burger.png){: loading=lazy }

??? Abstract "book"
    **** 
    Burger A. 
    Prog. Drug. Res. Vol. 37 
    Birkhauser Publ.  1991   
    
### Cheminformatics Era (1993)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/cheminformatics-era-1993-e2fb7527'><i class='fa fa-play' aria-hidden='true'></i></button>Bioisosterism has recently attracted renewed interest because of the large-scale application of computers in drug design, which have opened up the era cheminformatics and enabled molecular similarity to be considered in a high throughput quantitative manner. This is presented in great detail in the chapter on "molecular similarity" in the cheminformatics volume.
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/tanimoto.png){: loading=lazy }
### Remark on Stereochemical Aspects

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/remark-on-stereochemical-aspects-061a689e'><i class='fa fa-play' aria-hidden='true'></i></button>Stereochemistry can be viewed as a special case of bioisosterism but this feature is beyond the scope of the present chapter. Chiral-switch will be however briefly mentioned, in the section on patent issues. 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Chiral-switch]: Development of single enantiomers of commercial racemate drugs.


![](https://media.drugdesign.org/course/bioisosterism/ster_example.png){: loading=lazy }

??? Abstract "articles"
    **Intellectual property and chirality of drugs** 
    Israel Agranat and Hava Caner 
    Drug Discovery Today 
    4 (7) 1999  
    
    **Putting chirality to work: the strategy of chiral switches** 
    Agranat I, Caner H, Caldwell J. 
    Nat Rev Drug Discov 
    1 (10) 2002  
    
## Typical Isosteres

### Classification of Typical Isosteres

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/classification-typical-isosteres-2b6c4e97'><i class='fa fa-play' aria-hidden='true'></i></button>Typical bioisosteres obey Burger's steric and electronic definition and will be presented in the following pages according to the classification indicated below.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/class.png){: loading=lazy }
### Monovalent Atoms or Groups

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/monovalent-atoms-or-groups-c96fa959'><i class='fa fa-play' aria-hidden='true'></i></button>Some examples of monovalent isosteres are illustrated in the following figure.


![](https://media.drugdesign.org/course/bioisosterism/monov.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Divalent Isosteres

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/divalent-isosteres-ff9789d3'><i class='fa fa-play' aria-hidden='true'></i></button>Some examples of divalent bioisosteres are shown in the following view.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/divalents.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Trivalent Atoms or Groups

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/trivalent-atoms-or-groups-e35dc025'><i class='fa fa-play' aria-hidden='true'></i></button>Some examples of trivalent bioisosteres are shown in the following figure.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/trivalent.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Tetrasubstituted Atoms

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/tetrasubstituted-atoms-1c61ebd4'><i class='fa fa-play' aria-hidden='true'></i></button>Some tetrasubstituted bioisosteres are indicated in the following view.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/tetra.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Ring Equivalents

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/ring-equivalents-36011f1f'><i class='fa fa-play' aria-hidden='true'></i></button>The following view displays examples of equivalent ring bioisosteres.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/ring_eq.png){: loading=lazy }
## Medicinal Chemistry Use

### A Simple Concept for Many Applications
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/simple-concept-for-many-applications-8e55bc75'><i class='fa fa-play' aria-hidden='true'></i></button>When the target molecule has to be modified, bioisosterism can help guide the process, and medicinal chemists use it extensively as a tool in their queries for new molecules. As shown in the list below, the needs of chemists can be very different. However, due to its simplicity, bioisosterism provides a simple and creative way to address all these in a constructive manner as is illustrated in the following pages. 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/intention.png){: loading=lazy }

??? Abstract "articles"
    **Design and SAR of novel potassium channel openers targeted for urge urinary incontinence. 1. N-Cyanoguanidine bioisosteres possessing in vivo bladder selectivity** 
    Butera JA, Antane MM, Antane SA, Argentieri TM, Freeden C, Graceffa RF, Hirth BH, Jenkins D, Lennox JR, Matelan E, Norton NW, Quagliato D, Sheldon JH, Spinelli W, Warga D, Wojdan A, Woods M. 
    J Med Chem 
    43 (6) 2000  
    
### Adapt Chemical Structures to Feasible Syntheses

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/adapt-chemical-structures-to-feasible-syntheses-c582a114'><i class='fa fa-play' aria-hidden='true'></i></button>The synthetic scheme of the chemical target is the first issue addressed by the chemist. If the synthesis proves to be complicated, he envisages changing the initial target in order to obtain molecules that are easy to prepare. In the example below, the initial target has been changed, because of the commercial availability of a simple starting material. 
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/simplify.png){: loading=lazy }

??? Abstract "articles"
    **Syntheses of novel heterocycles as anticancer agents** 
    Prem M. S. Chauhan, Cristina J. A. Martins and David C. Horwell 
    Bioorganic and Medicinal Chemistry 
    13 2005  
    
### Change the Type of Biological Activity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/change-type-biological-activity-06778dc1'><i class='fa fa-play' aria-hidden='true'></i></button>In some cases the medicinal chemist does not know exactly what he is looking for. His synthetic program is then based on the modification of the structure of an active compound, with the hope of finding new analogs with unexpected biological profiles. In the following pages we present three examples to illustrate how bioisosterism can guide this type of approach.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/chng_act.png){: loading=lazy }
#### Example 1: Tricyclic Structures

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-1-tricyclic-structures-369515e9'><i class='fa fa-play' aria-hidden='true'></i></button>Simple bioisosteric modifications of the phenothiazine structure proved to be a rich source of useful drugs having completely different modes of action. Starting with antihistaminic drugs such as promethazine, it has been possible to discover bioisostere tranquillizers such as chlorpromazine. Further bioisoteric modifications led to the discovery of antidepressant drugs such as imipramine. Note the different mode of action of these drugs.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/chng_ex1.png){: loading=lazy }


??? Abstract "book"
    **** 
    
           
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
#### Example 2: Angiotensin-II Receptor Ligands
*[Ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[Ligands]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-2-angiotensin-ii-receptor-ligands-36c4cf76'><i class='fa fa-play' aria-hidden='true'></i></button>Simple bioisosteric replacements in a drug can lead to entirely different modes of action. In the example illustrated below, bioisosterism was employed to slightly modify the structure of an antagonist (L-162,389) and discover a useful agonist (L-162,782).
*[antagonist]: A molecule that blocks the activation of a receptor.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/chng_ex2.png){: loading=lazy }

??? Abstract "articles"
    **Dual agonistic and antagonistic property of nonpeptide angiotensin AT1 ligands: susceptibility to receptor mutations** 
    Perlman S, Costa-Neto CM, Miyakawa AA, Schambye HT, Hjorth SA, Paiva AC, Rivero RA, Greenlee WJ, Schwartz TW. 
    Mol Pharmacol 
    51 (2) 1997  
    
#### Example 3: Steroid Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-3-steroid-analogs-2e6562cf'><i class='fa fa-play' aria-hidden='true'></i></button>The steroid nucleus is full of diverse biological properties. All the analogs shown below can be considered as bioisosteres however, each of them has an entirely different mode of action acting as an androgen, estrogen, anti-inflammatory, anabolic or abortifacient drug.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/chng_ex3.png){: loading=lazy }

??? Abstract "book"
    **** 
    
           
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Achieve Patentability

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/achieve-patentability-33f018b6'><i class='fa fa-play' aria-hidden='true'></i></button>Using bioisosterism can be an effective way to circumvent a patent owned by a competitor. Levitra (vardenafil) is an example of bioisosteric replacement that enabled the Bayer/GSK team to achieve patentability to compete with the Pfizer viagra (sildenafil) drug. The FDA approval dates (for male erectile dysfunctions) are indicated in parentheses. 
*[FDA]: Food and Drug Administration. Agency in the USA responsible for safety regulations.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/patentability.png){: loading=lazy }

??? Abstract "articles"
    **Vardenafil Bayer Yakuhin** 
    Sommer F, Engelmann U. 
    Curr Opin Investig Drugs 
    3(4) 2002  
    
    **Comparison of phosphodiesterase type 5 (PDE5) inhibitors** 
    Wright PJ. 
    Int J Clin Pract 
    
         . 2006  
    
### Mimic an Endogenous Ligand
*[Ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/mimic-an-endogenous-ligand-0eba5f5a'><i class='fa fa-play' aria-hidden='true'></i></button>Bioisosterism has proven a useful concept for molecular mimicry. In the example below, the carboxylic group of glutamic acid was replaced by a 3-hydroxy-5-methyl-4-isoxazole bioisostere, leading to a molecule that is a potent agonist of the central glutamic acid receptor.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/endogenous.png){: loading=lazy }

??? Abstract "articles"
    **Novel 1-hydroxyazole bioisosteres of glutamic acid. Synthesis, protolytic properties, and pharmacology** 
    Stensbol TB, Uhlmann P, Morel S, Eriksen BL, Felding J, Kromann H, Hermit MB, Greenwood JR, Brauner-Osborne H, Madsen U, Junager F, Krogsgaard-Larsen P, Begtrup M, Vedso P. 
    J Med Chem 
    45(1) 2002  
    
### Improve Potency

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/improve-potency-7dce4f9f'><i class='fa fa-play' aria-hidden='true'></i></button>In the example below, simple bioisosteric replacements served to  improve the potency of the initial kynurenic acid lead (IC<sub>50</sub> = 41 &micro;M) by a factor of 1000 (IC<sub>50</sub> = 32 nM for compound L-683,334).
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/potency.png){: loading=lazy }

??? Abstract "articles"
    **7-Chlorokynurenic acid is a selective antagonist at the glycine modulatory site of the N-methyl-D-aspartate receptor complex** 
    Kemp JA, Foster AC, Leeson PD, Priestley T, Tridgett R, Iversen LL and Woodruff GN 
    Proc. Natl. Acad. Sci. U.S.A 
    85 1988  
    

??? Abstract "book"
    **** 
    Lesson PD, Carling RW, Kulagowski JJ, Mawer IM, Moore KW, Moseley AM, Rowley M, Smith JD, Stevenson GI, Williams BJ, Baker R, Foster AC, Kemp JA and Tricklebank MD 
    Prespectives in Medicinal Chemistry 
    Verlag Helvetica Chimica Acra, Basel  1993   
    
### Improve Selectivity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/improve-selectivity-6958cb99'><i class='fa fa-play' aria-hidden='true'></i></button>When the structure of the target protein is not known, selectivity cannot be achieved in a rational structure-based way. Bioisosterism provides a good alternative for the systematic alteration of the structure of an initial lead in order to achieve selectivity. The example illustrated here concerns Factor Xa inhibitors for which the selectivity was improved by a factor of 10.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/selectiv.png){: loading=lazy }

??? Abstract "articles"
    **The Geometry of the Reactive Site and of the Peptide Groups in Trypsin, Trypsinogen and its Complexes with Inhibitors** 
    Marquart M, Walter J, Deisenhofer J, Bode W and Huber R 
    Acta Crystallographica Sect. B 
    39 1983  
    
### Reduce Side Effects

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/reduce-side-effects-9bca1d46'><i class='fa fa-play' aria-hidden='true'></i></button>The Fluoxetine (Prosac) project aimed at the discovery of an antidepressant drug acting by inhibiting the reuptake of serotonin (5-HT). The initial lead had the desired biological action with, however, considerable side effects. It was hypothesized that they were due to action on the reuptake of norepinephrine (NE). The introduction of a trifluoromethyl group in the para position of the phenol moiety led to a compound which had the desired antidepressant action with significantly fewer side effects. 
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/side_eff.png){: loading=lazy }

??? Abstract "articles"
    **Prozac (fluoxetine, Lilly 110140), the first selective serotonin uptake inhibitor and an antidepressant drug: twenty years since its first publication** 
    Wong DT 
    Life Sciences 
    57 (5) 1995  
    
### Reduce Toxicity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/reduce-toxicity-7497be20'><i class='fa fa-play' aria-hidden='true'></i></button>Colchicine is a potent mitotic inhibitor that could not be widely used as a drug because of its high toxicity. The bioisostere analog shown below was found to be less toxic.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/toxicity.png){: loading=lazy }

??? Abstract "articles"
    **Synthesis and biological effects of novel thiocolchicines. 3. Evaluation of N-acyldeacetylthiocolchicines, N-(alkoxycarbonyl) deacetylthiocolchicines, and O-ethyldemethylthiocolchicines. New synthesis of thiodemecolcine and antileukemic effects of 2-demethyl- and 3-demethylthiocolchicine** 
    Peter Kerkes, Padam N. Sharma, Arnold Brossi, Colin F. Chignell, and Frank R. Quinn 
    J Med Chem 
    28(9) . 1985  
    
### Improve Bioavailability
*[Bioavailability]: The percentage of drug that is detected in the systemic circulation after its administration.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/improve-bioavailability-7595ac79'><i class='fa fa-play' aria-hidden='true'></i></button>Poor bioavailability is very often associated with poor water solubility. In the example shown below (thrombin inhibitors) a simple bioisosteric replacement  substantially improved the water solubility of the initial lead and eventually led to  an oral drug. 
*[bioavailability]: The percentage of drug that is detected in the systemic circulation after its administration.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/bioavail.png){: loading=lazy }

??? Abstract "articles"
    **Discovery of LB30057, a benzamidrazone-based selective oral thrombin inhibitor** 
    YS Oh 
    Biorg. Med. Chem. Lett 
    8 (6) 1998  
    
### Exploit Metabolism

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/exploit-metabolism-f6822429'><i class='fa fa-play' aria-hidden='true'></i></button>Quinine is a drug used to treat malaria and it was observed that the compound is readily oxidized (by cytochrome P450) at the 2'-position. The introduction of a substituent in position 2' enabled researchers to obtain simpler drugs with a longer half-life. Mefloquine is one example of such drugs. 


![](https://media.drugdesign.org/course/bioisosterism/metabolism.png){: loading=lazy }

??? Abstract "articles"
    **Studies of the disposition and metabolism of mefloquine HCl (WR 142,490), a quinolinemethanol antimalarial, in the rat. Limited studies with an analog, WR 30,090** 
    Mu JY, Israili ZH, Dayton PG. 
    Drug Metab Dispos 
    3 1975  
    
### Modify pKa

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/modify-pka-5ecab291'><i class='fa fa-play' aria-hidden='true'></i></button>Cocaine is a potent brain stimulant that binds to the dopamine transporter DAT. The molecule has an IC<sub>50</sub> of 173 nM, and it has been hypothesized that the increase of the basicity of the nitrogen atom may lead to more potent structures. Indeed, several bioisosteres of cocaine were designed whose potency was found to be correlated with a high pKa (nitrogen atom more basic). For example a very basic compound was found (pKa = 11.99) with an IC<sub>50</sub> of 0.59 nM.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/basicity.png){: loading=lazy }

??? Abstract "articles"
    **Conformational, Aqueous Solvation, and pKa Contributions to the Binding and Activity of Cocaine, WIN 35 065-2, and the WIN Vinyl Analog** 
    Yang B, Wright J, Eldefrawi ME, Pou S and MacKerell AD 
    HJ. Am. Chem. Soc 
    116 1994  
    
    **Chemistry, Design, and Structure-Activity Relationship of Cocaine Antagonists** 
    Singh S 
    Chem. Rev 
    100 2000  
    
### Increase Chemical Stability

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/increase-chemical-stability-c24426a9'><i class='fa fa-play' aria-hidden='true'></i></button>Following-up on the piperidine-based renin inhibitor discovered by Roche (reference), Pfizer designed the piperazine structure shown below (design-1). The compound had the desired biological activities but was chemically unstable. The ketopiperazine analog (design-2) was suggested to circumvent this problem and indeed proved to be stable. At each step of the project the design was guided by bioisoteric considerations that finally led to simpler inhibitors. 
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/stabil.png){: loading=lazy }

??? Abstract "articles"
    **Equipotent activity in both enantiomers of a series of ketopiperazine-based renin inhibitors** 
    Noel A. Powell, Emma H. Clay, Daniel D. Holsworth, John W. Bryant, Michael J. Ryan, Mehran Jalaie, Erli Zhang and Jeremy J. Edmunds 
    Bioorganic and Medicinal Chemistry Letters 
    15 2005  
    
    **The discovery and preparation of disubstituted novel amino-aryl-piperidine-based renin inhibitors** 
    Wayne L. Cody,Daniel D. Holsworth, Noel A. Powell, Mehran Jalaie, Erli Zhang, Wei Wang, Brian Samas, John Bryant, Robert Ostroski, Michael J. Ryand and Jeremy J. Edmunds 
    Bioorganic and Medicinal Chemistry 
    13 2005  
    
    **Discovery of novel non-peptidic ketopiperazine-based renin inhibitors** 
    Daniel D. Holsworth, Noel A. Powell, Dennis M. Downing, Cuiman Cai,Wayne L. Cody, J. Michael Ryan, Robert Ostroski, Mehran Jalaie, John W. Bryantb and Jeremy J. Edmunds 
    Bioorganic and Medicinal Chemistry 
    13 2005  
    
    **Ketopiperazine-based renin inhibitors: Optimization of the C ring** 
    Daniel D. Holsworth, Cuiman Cai, Xue-Min Cheng, Wayne L. Cody, Dennis M. Downing,a Noe Erasga,a Chitase Lee,a Noel A. Powell,a Jeremy J. Edmunds,a Michael Stier, Mehran Jalaie, Erli Zhang, Pat McConnell, Michael J. Ryan, John Bryant, Tingsheng Li, Aparna Kasani, Eric Hall, Rajendra Subedi, Mohammad Rahim and Samarendra Maiti 
    Bioorganic and Medicinal Chemistry Letters 
    16 2006  
    
### Combinatorial Chemistry

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/combinatorial-chemistry-07715888'><i class='fa fa-play' aria-hidden='true'></i></button>In combinatorial chemistry, the bioisosterism concept can be exploited for building libraries in a systematic manner. In the example below a library was prepared by focusing on the benzonitrile pharmacophore of the androgen receptor antagonist compound GSK-7721. Bioisoterism was considered for the fluoroaryl fragment 1, whereas structural diversity was left variable for the amine moiety 2.
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[antagonist]: A molecule that blocks the activation of a receptor.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/combichem.png){: loading=lazy }

??? Abstract "articles"
    **Design and Synthesis of an Array of Selective Androgen Receptor Modulators** 
    Ryan P. Trump, Jean-Baptiste E. Blanc, Eugene L. Stewart, Peter J. Brown, Matilde Caivano, David W. Gray, William J. Hoekstra, Timothy M. Willson, Bajin Han, and Philip Turnbull 
    Journal of Combinatorial Chemistry 
    ASAP Article 10.1021/cc060096e 2006  
    
## Examples of Natural Bioisosteres
*[Bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

### Bioisosteres in Nature
*[Bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/bioisosteres-nature-1b2a6962'><i class='fa fa-play' aria-hidden='true'></i></button>Natural molecules can be highly diverse and can show very subtle similarities; many bioisosteres exist in nature. In the following pages we illustrate this feature by showing some natural bioisosteres that can be found in amino-acids, nucleotides, sugars, lipids, steroids, carbohydrates, catecholamines and &beta;-lactam antibiotics.



*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/natur_bio.png){: loading=lazy }
### Aminoacids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/aminoacids-b561586e'><i class='fa fa-play' aria-hidden='true'></i></button>Phenylalanine, tyrosine, tryptophan and histidine are examples of amino-acid bioisosteres that are found in proteins. The phenyl ring of phenylalanine becomes phenol in tyrosine, indole in tryptophan and imidazole in histidine.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/amino_acids.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Nucleotides

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/nucleotides-24500d53'><i class='fa fa-play' aria-hidden='true'></i></button>Uracil and thymine, adenine and guanine are two examples of nucleotide bioisosteres that are found in nucleic acids, with very closely related structures.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/nucleotides.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Sugars

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/sugars-c845da23'><i class='fa fa-play' aria-hidden='true'></i></button>&alpha;-D-ribose and 2-deoxy-&alpha;-D-ribose structures illustrate sugar bioisosteres that are found in nature. There is one more hydroxyl group in the structure of &alpha;-D-ribose.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/sugars.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Lipids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/lipids-598cc83d'><i class='fa fa-play' aria-hidden='true'></i></button>Palmitic acid and palmitoleic acid, arachidic acid and arachidonic acid are two examples of natural bioisosteres that are found in lipids. The number of carbon atoms is the same for each pair of molecules but the structures differ by the number of double bonds in the chain.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/lipids.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Steroid Hormones

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/steroid-hormones-a2cf43c5'><i class='fa fa-play' aria-hidden='true'></i></button>Testosterone and estradiol structures illustrate steroid bioisosteres that are found in nature. The A-ring of testosterone is a cyclohexenone fragment, whereas in estradiol it consists of a phenol moiety.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/steroid_1.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Carbohydrates

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/carbohydrates-b34f8f0d'><i class='fa fa-play' aria-hidden='true'></i></button>The structures of D-glucose and D-mannose illustrate bioisosteres that are found in carbohydrates. The two compounds differ by the stereochemistry of one hydroxyl group.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/crb_hydr.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Catecholamines

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/catecholamines-b9e15794'><i class='fa fa-play' aria-hidden='true'></i></button>Dopamine, noradrenaline and serotonine are bioisostere catecholamine structures that are found in the brain. They all have an arylethylamine moiety in common. 
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/catechol_amines.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Penicillins and Cephalosporins

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/penicillins-cephalosporins-e7652da0'><i class='fa fa-play' aria-hidden='true'></i></button>Penicillins and cephalosporins are bioisotere antibiotic molecules that are found in nature. In penicillins the &beta;-lactam ring is fused to a 5-membered ring, whereas in cephalosporins it is fused to a 6-membered ring. &Delta;-3 and &Delta;-2 cephalosporins differ by the position of the double bond in the 6-membered ring.


![](https://media.drugdesign.org/course/bioisosterism/peni_ceph.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
## Dictionary of Bioisosteres
*[Bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

### Dictionary of Bioisosteric Replacements
*[Bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/dictionary-bioisosteric-replacements-73a5a703'><i class='fa fa-play' aria-hidden='true'></i></button>The following section presents bioisosteric replacements for some chemical groups that are listed here in alphabetical order.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/compendm.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Burger A. 
    Prog. Drug. Res. Vol. 37 
    Birkhauser Publ.  1991   
    
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Allyl

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/allyl-23deb706'><i class='fa fa-play' aria-hidden='true'></i></button>The cyclopropylmethylene fragment is a bioisostere of the allyl moiety.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/allyl.png){: loading=lazy }

??? Abstract "articles"
    **4-Amino-2-alkyl-butyramides as small molecule CCR2 antagonists with favorable pharmacokinetic properties** 
    Gabor Butora, Gregori J. Morriello, Shankaran Kothandaraman, Deodialsingh Guiadeen, Alexander Pasternak, William H. Parsons, Malcolm MacCoss, Pasquale P. Vicario, Margaret A. Cascieri and Lihu Yang 
    Bioorganic and Medicinal Chemistry Letters 
    16 2006  
    
    **
        ** 
    
         
    
         
    
         
          
    
### Amide

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/amide-7f2dad74'><i class='fa fa-play' aria-hidden='true'></i></button>There are many bioisosteres of the amide group, which are indicated in the figure below.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/amide.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Amino-Acids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/amino-acids-7058b501'><i class='fa fa-play' aria-hidden='true'></i></button>Many criteria can be used to replace an amino-acid with another one. Similarities of properties such as hydrophobicity, aromaticity, size, electronic features etc... can be considered alone or simultaneously. The following diagram helps guide the choice of possible bioisosteric replacements. 
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/amino_acds.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    Chemistry and Biochemistry of Amino Acids 
    Chapman and Hall  1985   
    
    **** 
    Greenstein JP, and Winitz M 
    Chemistry of the Amino Acids 
    John Wiley &#38; Sons  1961   
    
### Azomethine

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/azomethine-be20e5a3'><i class='fa fa-play' aria-hidden='true'></i></button>In the figure below is shown a possible bioisosteric replacement for the azomethine group.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/azomethine.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Benzene

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/benzene-df57c8a0'><i class='fa fa-play' aria-hidden='true'></i></button>The benzene moiety can be replaced by various 6-membered or 5-membered heterocyclic structures. The bioisoterism between benzene and thiophene has long been recognized; the sulfur atom of thiophene is considered as equivalent (geometrically and electronically) to one double bond of the benzene ring. 
*[moiety]: Fragments, functional groups or portions of chemical compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/benzene.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Carbonyl

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/carbonyl-3ed5dee0'><i class='fa fa-play' aria-hidden='true'></i></button>Possible bioisosteres of the carbonyl group are indicated in the figure below.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/carbonyl.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Carboxylic Acid

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/carboxylic-acid-08114aa1'><i class='fa fa-play' aria-hidden='true'></i></button>There are many possible bioisosteric replacements for the carboxylic acid group, as visualized in the figure below.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/cooh.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Catechol

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/catechol-99c0ba88'><i class='fa fa-play' aria-hidden='true'></i></button>The catechol group can be replaced by several bioisosteric equivalent groups, as shown in the figure below.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/catechol.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Ester

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/ester-59f3ea00'><i class='fa fa-play' aria-hidden='true'></i></button>The ester group can be replaced by a 1,2,4 oxadiazole or by an amide group, as shown in the figure below.


![](https://media.drugdesign.org/course/bioisosterism/coo_r.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Halogen

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/halogen-6e023fa9'><i class='fa fa-play' aria-hidden='true'></i></button>Possible bioisosteres of a halogen atom are indicated in the figure below.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/halogen.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Hydrogen

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/hydrogen-f136b304'><i class='fa fa-play' aria-hidden='true'></i></button>A hydrogen atom can be replaced by a fluorine atom.


![](https://media.drugdesign.org/course/bioisosterism/h.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Hydroxyl

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/hydroxyl-6485d828'><i class='fa fa-play' aria-hidden='true'></i></button>Many isosteric replacements were found to be possible for the hydroxyl group, as shown in the figure below.


![](https://media.drugdesign.org/course/bioisosterism/oh.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Indole

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/indole-f4139ec5'><i class='fa fa-play' aria-hidden='true'></i></button>The indole moiety can be replaced by a benzimidazole, a benzoxazole or an indazole bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/indole.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosterism: a useful strategy for molecular modification and drug design** 
    Lima LM, Barreiro EJ. 
    Curr Med Chem 
    12(1) 2005  
    
### Isopropyl

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/isopropyl-5beef015'><i class='fa fa-play' aria-hidden='true'></i></button>An isopropyl fragment can simply be replaced by the corresponding cyclopropyl bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/isopropyl.png){: loading=lazy }

??? Abstract "articles"
    **3-Amino-1-alkyl-cyclopentane carboxamides as small molecule antagonists of the human and murine CC chemokine receptor** 
    Gabor Butora, Richard X. Jiao, William H. Parsons, Pasquale P. Vicario, Jin Hong, Julia M. Ayala, Margaret A. Cascieri, and Lihu Yang 
    232nd ACS Meeting San Francisco 
    
         September 2006  
    
    **Synthesis and Biological Activity of Some Transition-state Inhibitors of Human Renin** 
    Buhlmayer P, Caselli A, Fuhrer W, Goschke R, Rasetti V, Rueger H, Stanton JL, Criscione L and Wood JM 
    J. Med. Chem 
    31 1988  
    
    **Remikiren (Ro 42-5892)-an orally active renin inhibitor in essential hypertension. Effects on blood pressure and the renin-angiotensin-aldosterone system** 
    Himmelmann A, Bergbrant A, Svensson A, Hansson L, Aurell M. 
    Am. J. Hypertens 
    9(6) 1996  
    
### Naphthalene

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/naphthalene-3b121ea4'><i class='fa fa-play' aria-hidden='true'></i></button>A naphthalene fragment can be replaced by many different structural moieties. Carbon atoms can be replaced by nitrogens and the six-membered rings can be replaced by aromatic five-membered rings.
*[moieties]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/naphtalene.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
    **A comparison of intravenous pindolol and propranolol in normal man** 
    Hicks DC, Arbab AG, Turner P, Hills M. 
    J Clin Pharmacol New Drugs 
    12(5) 1972  
    
    **Piperidine-renin inhibitors compounds with improved physicochemical properties** 
    Guller R, Binggeli A, Breu V, Bur D, Fischli W, Hirth G, Jenny C, Kansy M, Montavon F, Muller M, Oefner C, Stadler H, Vieira E, Wilhelm M, Wostl W, Marki HP. 
    Bioorg Med Chem Lett 
    9(10) 1999  
    
    **Epidermal growth factor receptor tyrosine kinase: Structure-activity relationships and antitumour activity of novel quinazolines** 
    K. H. Gibson, W Grundy, A. A. Godfrey, J. R. Woodburn, S. E. Ashton, B. J. Curry, L Scarlett, A. J. Barker and D. S. Brown 
    Bioorganic and Medicinal Chemistry Letters 
    7 (21) 1997  
    
    **Synthesis and preliminary pharmacological results on new naphthalene derivatives as 5-HT[4] receptor ligands** 
    Diouf O; Depreux P; Chavatte P.and Poupaert J. H. 
    Eur. J. Med. Chem 
    35 (7-8) 2000  
    
    **Piperidine renin inhibitors: from leads to drug candidates** 
    Marki HP, Binggeli A, Bittner B, Bohner-Lang V, Breu V, Bur D, Coassolo PH, Clozel JP et al. 
    Farmaco 
    56(1-2) 2001  
    
    **Naphthalene combretastatin analogues: synthesis, cytotoxicity and antitubulin activity** 
    Medarde M, Maya AB, Perez-Melero C. 
    Journal of Enzyme Inhibition and Medicinal Chemistry 
    19(6) 2004  
    
    **Structure-activity relationships study of two series of leukotriene B[4] antagonists : Novel indolyl and naphthyl compounds substituted with a 2-[methyl(2-phenethyl)amino]-2-oxoethyl side chain** 
    Chan W. K. ; Huang F.-C. ; Morrissette M. M. ; Warus J. D. ; Moriarty K. J. ; Galemmo R. A. ; Dankulich W. D. ; Poli G. ; Sutherland C. A. 
    J. Med. Chem 
    39 (19) 1996  
    
    **
        ** 
    Sarah Chackal-Catoen, Yi Miao, W. David Wilson, Tanja Wenzler, Reto Brun and David W. Boykin 
    Dicationic DNA-targeted antiprotozoal agents: Naphthalene replacement of benzimidazole 
    14 (22) 2006  
    
    **Synthesis, anti-inflammatory, analgesic and kinase (CDK-1, CDK-5 and GSK-3) inhibition activity evaluation of benzimidazole/benzoxazole derivatives and some Schiff's bases** 
    Sham M. Sondhi, Nirupma Singh, Ashok Kumar, Olivier Lozach and Laurent Meijer 
    Bioorganic and Medicinal Chemistry 
    14 (11) 2006  
    
    **Structure-activity relationships for substrates and inhibitors of pineal 5-hydroxytryptamine-N-acetyltransferase: preliminary studies** 
    Shuren Shen, Beatrice Bremont, Isabelle Serraz, Jean Andrieux, Annie Poncet, Monique Mathe-Allainmat, Evelyne Chanut, Jean-Hugues Trouvin and Michel Langlois 
    European Journal of Pharmacology 
    307 (2) 1996  
    
    **Thiophene congeners of morpholine and allylamine type antifungals--syntheses and biological activities** 
    Bracher F, Papke T. 
    Pharmazie 
    50 (8) 1995  
    
    **Synthesis and Structure-Activity Relationships of Novel Naphthalenic and Bioisosteric Related Amidic Derivatives as Melatonin Receptor Ligands** 
    Patrick Depreux, Daniel Lesieur, Hamid At Mansour, Peter Morgan, H. Edward Howel1,l Pierre Renard, Daniel-Henri Caignard, Bruno Pfeiffer, Philippe Delagrange, Beatrice Guardiola, Said YOUS, Anne Demarque, Gerard Adam, and Jean Andrieux 
    J.Med.Chem 
    37 1994  
    
    **Synthesis and cytotoxic activities of analogues of thuriferic acid** 
    Madrigal B.; Puebla P.; Ramos A.C.; Pelaez R.; Gravalos D.G.; Caballero E.; Medarde M. 
    Bioorganic and Medicinal Chemistry 
    10 (2) 2002  
    
### Peptide Surrogates

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/peptide-surrogates-4b6e0b80'><i class='fa fa-play' aria-hidden='true'></i></button>Many bioisosteric replacements of peptide molecules are possible. The replacements can address the N-H, the C=O, the peptide bond or the C&alpha; atom. Click on the different buttons to see the corresponding series of bioisosteres.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "NH"
    ![](https://media.drugdesign.org/course/bioisosterism/pep_surrogate_p1.png){: loading=lazy }
=== "C=O"
    ![](https://media.drugdesign.org/course/bioisosterism/pep_surrogate_p2.png){: loading=lazy }
=== "Peptide-bond"
    ![](https://media.drugdesign.org/course/bioisosterism/pep_surrogate_p3.png){: loading=lazy }
=== "C-alpha"
    ![](https://media.drugdesign.org/course/bioisosterism/pep_surrogate_p4.png){: loading=lazy }

??? Abstract "articles"
    **Azapeptides** 
    Gante J 
    Synthesis 
    1989(6) 1989  
    
    **Renin Inhibitors** 
    Greenlee WJ 
    Med. Res. Rev 
    10 1990  
    
    **Non-Standard Amino Acids in Peptide Design and Protein Engineering** 
    Balaram P 
    Curr. Opin. Struct. Biol 
    2 1992  
    
    **Control of Peptide Conformation by the Thorpe-Ingold Effect (C-alpha Tetrasubstitution)** 
    Toniolo C, Crisma M, Formaggio F and Peggion C 
    Biopolymers 
    60 2001  
    
    **Converting a Peptide into a Drug: Strategies to Improve Stability and Bioavailability** 
    Adessi C and Soto C 
    Curr. Med. Chem 
    9 2002  
    
    **Designing Non-peptide Peptidomimetics in the 21st Century: Inhibitors Targeting Conformational Ensembles** 
    Bursavich MG and Rich DH 
    J. Med. Chem 
    45 2002  
    
    **Peptidomimetics: Tailored Enzyme Inhibitors** 
    Gante J 
    Angew. Chem. Int. Ed 
    33 1994  
    
    **Peptidomimetics for Receptor Ligands Discovery, Development and Medical Prespectives** 
    Giannis A and Kotler T 
    Angew. Chem. Int. Ed 
    32, 1993  
    
    **Designing Peptide Mimetics** 
    Moore GJ 
    Trends Pharmacol. Sci 
    15 1994  
    
    **Molecular Modeling in the Design of Peptidomimetics and Peptide Surrogates** 
    Perez JJ, Corcho F and Llorens O 
    Curr. Med. Chem 
    9 2002  
    
    **Transformation of Peptides into Non-peptides. Synthesis of Computer-Generated Enzyme Inhibitors** 
    Rich DH, Bohacek RS, Xales NA, Glunz P and Ripka AS 
    Chimia 
    51 1997  
    
    **Structure-Based Inhibitors of HIV-1 Protease** 
    Wlodawer A and Erickson JW 
    Annu. Rev. Biochem 
    62 1993  
    
    **Peptidomimetic Design** 
    Ripka AS and Rich DH 
    Curr. Opin. Chem. Biol 
    2 1998  
    
    **Peptidomimetics Derived from Natural Products** 
    Wiley RA and Rich DH 
    Med Res Rev 
    13 1993  
    
    **Novel Renin Inhibitors Containing the Amino Acid Statine** 
    Boger J, Lohr NS, Ulm EH, Poe M, Blaine EH, Fanelli GM, Lin TY, Payne LS, Schorn TW, LaMont BI, Vassil TC, Stabilito II, Veber DF, Rich DH and Bopari AS 
    Nature 
    303 1983  
    
    **Potent New Inhibitors of Human Renin** 
    Szelke M, Leckie B, Hallett A, Jones DM, Sueiras J, Atrash B and Lever AF 
    Nature 
    299 1982  
    
    **Conformationally Restricted Peptides Through Short-Range Cyclizations** 
    Toniolo C 
    Int. J. Pept. Protein Res 
    35 1990  
    
    **Conformationally Constrained Amino Acids. Synthesis and Optical Resolution of 3-Substituted Proline Derivatives** 
    Chung JYL, Wasicak JT, Arnold WA, May CS, Nadzan AM, and Holladay MW 
    J. Org. Chem 
    55 1990  
    
    **Synthesis of Chiral Piperazin-2-ones as Model Peptidomimetics** 
    DiMaio J and Belleau B 
    J. Chem. Soc. Perkin Trans. 1 
    9 1989  
    
    **Bioactive Conformation of Luteinizing Hormone-Releasing Hormone: Evidence from a Conformationally Constrained Analog** 
    Freidinger RM, Veber DF, Perlow DS, Brooks JR and Saperstein R 
    Science 
    210 1980  
    
    **A New Approach to Receptor Ligand Design: Synthesis and Conformation of a New Class of Potent and Highly Selective Opioid Antagonists Utilizing Tetrahydroisoouinoline Carroxylic Acid** 
    Kazmierski W and Hruby VJ 
    Tetrahedron 
    44 1988  
    
    **A Molecular Constraint that Generates a cis Peptide Bond** 
    Sukumaran DK, Prorok M, and Lawrence DS 
    J. Am. Chem. Soc 
    113 1991  
    
    **Conformational Mimicry. 1. 1,5-Disubstituted Tetrazole Ring as a Surrogate for the Cis Amide Bond** 
    Zabrocki J, Smith GD, Dunbar JB Jr., Iijima H, and Marshall GR 
    J. Am. Chem. Soc 
    110 1988  
    
    **Emerging Approaches in the Molecular Design of Receptor-selective Peptide Ligands: Conformational, Topographical and Dynamic Considerations** 
    Hruby VJ, al-Obeidi F, and Kazmierski W 
    Biochem. J 
    268 1990  
    
    **Backbone Cyclization: A New Method for Conferring Conformational Constraint on Peptides** 
    Gilon C, Halle D, Chorev M, Selinger Z, and Byk G. 
    Biopolymers 
    31 1991  
    
    **Cyclization Strategies in Peptide Derived Drug Design** 
    Li P and Roller PP 
    Curr. Top. Med. Chem 
    2 2002  
    
    **Application of Ring-Closing Metathesis to the Synthesis of Rigidified Amino Acids and Peptides** 
    Miller SJ, Blackwell HE, and Grubbs RH 
    J.Am. Chem. Soc 
    118 1996  
    
    **Synthesis of Cyclic Peptides by Ring-Closing Metathesis** 
    Reichwein JF, Versluis C, and Liskamp RMJ 
    J.Org. Chem 
    65 2000  
    
    **Non-Standard Amino Acids in Peptide Design and Protein Engineering** 
    Balaram P 
    Curr. Opin. Struct. Biol 
    2 1992  
    
    **Control of Peptide Conformation by the Thorpe-Ingold Effect (C-alpha Tetrasubstitution)** 
    Toniolo C, Crisma M, Formaggio F and Peggion C 
    Biopolymers 
    60 2001  
    
    **Protease Inhibitors: Current Status and Future Prospects** 
    Leung D, Abbenante G and Fairlie DP 
    J. Med. Chem 
    43 2000  
    

??? Abstract "book"
    **** 
    Spatola AF 
    Chemistry and Biochemistry of Amino Acids, Peptides and Proteins, Vol. III 
    Marcel Dekker  1983   
    
### Phenol

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/phenol-fd7ad6b3'><i class='fa fa-play' aria-hidden='true'></i></button>Below are shown some possible isosteric replacements for the phenol moiety.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/phenol.png){: loading=lazy }

??? Abstract "articles"
    **Estrogen receptor beta-subtype selective tetrahydrofluorenones: Use of a fused pyrazole as a phenol bioisostere** 
    R.R. Wilkening, R.W. Ratcliffe, A.K. Fried, D. Meng, W. Sun, L. Colwell, S. Lambert, M. Greenlee, S. Nilsson, A. Thorsell et al. 
    Bioorganic and Medicinal Chemistry Letters 
    16(15) 2006  
    
### Pyridine

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/pyridine-d8540121'><i class='fa fa-play' aria-hidden='true'></i></button>There are several possible bioisosteric replacements for the pyridine moiety, as shown in the figure below.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/pyridine.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
    **Cyclopropylamino acid amide as a pharmacophoric replacement for 2,3-diaminopyridine. Application to the design of novel bradykinin B1 receptor antagonists** 
    Wood MR, Schirripa KM, Kim JJ, Wan BL, Murphy KL, Ransom RW, Chang RS, Tang C, Prueksaritanont T, Detwiler TJ, Hettrick LA, Landis ER, Leonard YM, Krueger JA, Lewis SD, Pettibone DJ, Freidinger RM, Bock MG. 
    J Med Chem 
    49(4) 2006  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Ring

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/ring-fc1da91c'><i class='fa fa-play' aria-hidden='true'></i></button>Many bioisosteric replacements are possible for a ring. Aromatic, heterocyclic and aliphatic ring systems can be replaced by similar equivalent moieties.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moieties]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/ring.png){: loading=lazy }

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Sulfonyl

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/sulfonyl-dcfa51c5'><i class='fa fa-play' aria-hidden='true'></i></button>A carbonyl is a possible bioisostere for the replacement of a sulfonyl group. Other replacements include the gem-dimethyl group or its silicon equivalent.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/sulfonyl.png){: loading=lazy }

??? Abstract "articles"
    **Chemistry challenges in lead optimization: silicon isosteres in drug discovery** 
    Graham A. Showell and John S. Mills 
    Drug Discovery Today 
    8 (12) 2003  
    
### Spacer

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/spacer-f72e6b3b'><i class='fa fa-play' aria-hidden='true'></i></button>Examples of aliphatic spacer moieties replaced by bioisosteric ring structures are indicated below.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moieties]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/spacer.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Thioether

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/thioether-73c747ae'><i class='fa fa-play' aria-hidden='true'></i></button>Several possibilities exist for the bioisoteric replacement of a thioether group, as indicated in the figure below.


![](https://media.drugdesign.org/course/bioisosterism/thioether.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
### Thiourea

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/thiourea-0ac314ff'><i class='fa fa-play' aria-hidden='true'></i></button>In the figure below are shown various possible bioisosteric replacements for the thiourea group.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/thiourea.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    

??? Abstract "book"
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
## Examples of Bioisosteric Transformations
*[Bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

### Four Types of Bioisosteric Transformations
*[Bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/four-types-bioisosteric-transformations-3b086b9f'><i class='fa fa-play' aria-hidden='true'></i></button>There are four types of bioisosteric transformations, which will be presented with examples in the following pages. In most cases they correspond to successful attempts; however, we do not discuss the biological activities obtained. The examples are shown simply to illustrate some bioisosteric replacements used in various projects. 
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/4_types.png){: loading=lazy }
### Ring-to-Ring Transformations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/ring-to-ring-transformations-1368b8ee'><i class='fa fa-play' aria-hidden='true'></i></button>Three examples of ring-to-ring bioisosteric transformations are shown in the following pages.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/r_to_r.png){: loading=lazy }
#### Example 1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-1-47b43c67'><i class='fa fa-play' aria-hidden='true'></i></button>In the example shown here the quinazoline heterocycle (reference) was first replaced by a quinoline ring (design-1) and then by an isoquinoline bioisostere heterocycle (design-2).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/r_to_r_ex1.png){: loading=lazy }

??? Abstract "articles"
    **The 4-anilinoquinazoline class of inhibitors of the erbB family of receptor tyrosine kinases** 
    Denny WA 
    Il Farmaco 
    56 2001  
    
    **Tyrosine kinase inhibitors. 16. 6,5,6-tricyclic benzothieno[3, 2-d]pyrimidines and pyrimido[5,4-b-] and -[4,5-b]indoles as potent inhibitors of the epidermal growth factor receptor tyrosine kinase** 
    Showalter HD, Bridges AJ, Zhou H, Sercel AD, McMichael A, Fry DW 
    J. Med. Chem 
    42 1999  
    
    **Chemical Inhibitors of Protein Kinases** 
    Bridges AJ 
    Chem. Rev 
    101 2001  
    
    **Protein kinase inhibitors: structural determinants for target specificity** 
    McMahon G, Sun L, Liang C and Tang C 
    Current Opinion in Drug Discovery and Development 
    1 (2) 1998  
    
#### Example 2

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-2-2273dd35'><i class='fa fa-play' aria-hidden='true'></i></button>The quinolin-4(1H) bicycle of the starting compound (reference) was transformed into a naphtyridin-4(1H) heterocycle (design-1), a pyrimido[1,2a] pyrimidin-4 bicycle (design-2) and a pyrido[1,2a] pyrimidin-4(1H) bioisostere moiety (design-3).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/r_to_r_ex2.png){: loading=lazy }

??? Abstract "articles"
    **In vitro preclinical lead optimisation technologies (PLOTs) in pharmaceutical development** 
    Atterwill CK, Wing MG. 
    Toxicol Lett 
    127 (1-3) 2002  
    
#### Example 3

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-3-be29aab4'><i class='fa fa-play' aria-hidden='true'></i></button>In this example the initial 4H-thieno [3,2b] pyrrole (reference) was modified into a 6H-thieno [2,3b] pyrrole bicycle (design-1) and also into a 1H-indole bioisostere system (design-2).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/r_to_r_ex3.png){: loading=lazy }

??? Abstract "articles"
    **Thieno[3,2-b]- and Thieno[2,3-b]pyrrole Bioisosteric Analogues of the Hallucinogen and Serotonin Agonist N,N-Dimethyltryptamine** 
    Joseph B. Blair, Danuta Marona-Lewicka, Arthi Kanthasamy, Virginia L. Lucaites, David L. Nelson, and David E. Nichols 
    J. Med. Chem 
    42 1999  
    
### Chain-to-Ring Transformations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/chain-to-ring-transformations-2198539a'><i class='fa fa-play' aria-hidden='true'></i></button>Three examples of chain-to-ring bioisosteric transformations are shown in the following pages.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/c_to_r.png){: loading=lazy }
#### Example 1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-1-9fc89bc8'><i class='fa fa-play' aria-hidden='true'></i></button>The initial carboximidamide (reference) was modified into an isoquinoline-1-amine bioisostere (designed).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/c_to_r1.png){: loading=lazy }

??? Abstract "articles"
    **Design and SAR of novel potassium channel openers targeted for urge urinary incontinence. 1. N-Cyanoguanidine bioisosteres possessing in vivo bladder selectivity** 
    Butera JA, Antane MM, Antane SA, Argentieri TM, Freeden C, Graceffa RF, Hirth BH, Jenkins D, Lennox JR, Matelan E, Norton NW, Quagliato D, Sheldon JH, Spinelli W, Warga D, Wojdan A, Woods M. 
    J Med Chem 
    43 (6) 2000  
    
#### Example 2

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-2-4e02c44b'><i class='fa fa-play' aria-hidden='true'></i></button>The ester group of the initial structure (reference) was replaced by an oxadiazole bioisostere (designed).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/c_to_r2.png){: loading=lazy }
#### Example 3

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-3-73abb59f'><i class='fa fa-play' aria-hidden='true'></i></button>In this example, the design considered the initial diethylamine molecule (reference) to be cyclicized into a piperidine bioisostere analog (designed).
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/c_to_r3.png){: loading=lazy }

??? Abstract "articles"
    **Structure-based optimization of MurF inhibitors** 
    Stamper GF, Longenecker KL, Fry EH, Jakob CG, Florjancic AS, Gu YG, Anderson DD, Cooper CS, Zhang T, Clark RF, Cia Y, Black-Schaefer CL, Owen McCall J, Lerner CG, Hajduk PJ, Beutel BA, Stoll VS 
    Chem Biol Drug Des 
    67 (1) 2006  
    
    **Predicting mosquito repellent potency of N,N-diethyl-m-toluamide (DEET) analogs from molecular electronic properties** 
    Ma D, Bhattacharjee AK, Gupta RK, Karle JM 
    Am J Trop Med Hyg 
    60(1) 1999  
    
    **Minimum structural requirements for minoxidil inhibition of lysyl hydroxylase in cultured fibroblasts** 
    Murad S, Walker LC, Tajima S, Pinnell SR 
    Arch Biochem Biophys 
    308(1) 1994  
    
    **Pharmacological characterization of novel water-soluble cannabinoids** 
    Martin BR, Wiley JL, Beletskaya I, Sim-Selley LJ, Smith FL, Dewey WL, Cottney J, Adams J, Baker J, Hill D, Saha B, Zerkowski J, Mahadevan A, Razdan RK 
    J Pharmacol Exp Ther 
    318(3) 2006  
    
### Ring-to-Chain Transformations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/ring-to-chain-transformations-eb0f7f12'><i class='fa fa-play' aria-hidden='true'></i></button>Three examples of ring-to-chain bioisosteric transformations are shown in the following pages.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/r_to_c.png){: loading=lazy }
#### Example 1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-1-7cab908d'><i class='fa fa-play' aria-hidden='true'></i></button>The pyrrole moiety of the reference compound was replaced by a propynylhydroxyamino bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/r_to_c1.png){: loading=lazy }

??? Abstract "articles"
    **Coumarin inhibitors of gyrase B with N-propargyloxy-carbamate as an effective pyrrole bioisostere** 
    Periers AM, Laurin P, Ferroud D, Haesslein JL, Klich M, Dupuis-Hamelin C, Mauvais P, Lassaigne P, Bonnefoy A, Musicki B. 
    Bioorg Med Chem Lett 
    10 (2) 2000  
    
#### Example 2

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-2-6f865898'><i class='fa fa-play' aria-hidden='true'></i></button>The reference amino-quinazoline molecule with a bicyclic moiety was replaced by a salicylamide bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/r_to_c2.png){: loading=lazy }

??? Abstract "articles"
    **Salicylanilides as inhibitors of the protein tyrosine kinase epidermal growth factor receptor** 
    Liechti C, Sequin U, Bold G, Furet P, Meyer T, Traxler P 
    Eur. J. Med. Chem 
    39 2004  
    
    **Tyrosine kinase inhibitors. 8. An unusually steep structure-activity relationship for analogues of 4-(3-bromoanilino)-6,7-dimethoxyquinazoline (PD 153035), a potent inhibitor of the epidermal growth factor receptor** 
    Bridges AJ, Zhou H, Cody DR, Rewcastle GW, McMichael A, Showalter HD, Fry DW, Kraker AJ, Denny WA 
    j. Med. Chem 
    39 1996  
    
    **A diazine heterocycle replaces a six-membered hydrogen-bonded array in the active site of scytalone dehydratase** 
    Hodge CN and Pierce J 
    Bioorganic and Medicinal Chemistry Letters 
    3 1993  
    
    **From arylureas to biarylamides to aminoquinazolines: Discovery of a novel, potent TRPV1 antagonist** 
    Xiaozhang Zheng, Kevin J. Hodgetts, Harry Brielmann, Alan Hutchison, Frank Burkamp, A. Brian Jones, Peter Blurton, Robert Clarkson, Jayaraman Chandrasekhar, Rajagopal Bakthavatchalam, Stephane De Lombaert, Marci Crandall, Daniel Cortrighta and Charles A. Bluma 
    Bioorganic and Medicinal Chemistry Letters 
    16 2006  
    
#### Example 3

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-3-cf08d0be'><i class='fa fa-play' aria-hidden='true'></i></button>In this example the initial phenyltriazolo-benzodiazepine molecule having a tricyclic moiety was replaced by a phenoxyphenyl-triazole bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/r_to_c3.png){: loading=lazy }

??? Abstract "articles"
    **Design and Synthesis of 4H-3-(2-Phenoxy)phenyl-1,2,4-triazole Derivatives as Benzodiazepine Receptor Agonists** 
    Akbarzadeh T, Tabatabai SA, Khoshnoud MJ, Shafaghic B and Shafiee A 
    Bioorganic and Medicinal Chemistry 
    11 2003  
    
### Chain-to-Chain Transformations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/chain-to-chain-transformations-30c18cc2'><i class='fa fa-play' aria-hidden='true'></i></button>Three examples of chain-to-chain bioisosteric transformations are shown in the following pages.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/c_to_c.png){: loading=lazy }
#### Example 1

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-1-07876fbc'><i class='fa fa-play' aria-hidden='true'></i></button>The carboxylic acid of the reference molecule was replaced by a phosphonic acid bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/c_to_c1.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosteres of 9-carboxymethyl-4-oxo-imidazo[1,2-a]indeno-[1,2-e]pyrazin-2-carboxylic acid derivatives. Progress towards selective, potent in vivo AMPA antagonists with longer durations of action** 
    Jimonet P, et al. 
    Bioorg Med Chem Lett 
    11(2) 2001 10.1016/S0960-894X(00)00592-8 
    
#### Example 2

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-2-81ab28cb'><i class='fa fa-play' aria-hidden='true'></i></button>Here, the N-propylamine moiety of the reference compound was replaced by an equivalent hydrazine bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/c_to_c2.png){: loading=lazy }

??? Abstract "articles"
    **Amidinohydrazones as guanidine bioisosteres: application to a new class of potent, selective and orally bioavailable, non-amide-based small-molecule thrombin inhibitors** 
    Soll RM, Lu T, Tomczuk B, Illig CR, Fedde C, Eisennagel S, Bone R, Murphy L, Spurlino J, Salemme FR. 
    Bioorg Med Chem Lett 
    10 (1) 2000  
    
#### Example 3

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-3-90965c05'><i class='fa fa-play' aria-hidden='true'></i></button>In this example the amide moiety of the reference compound was replaced by an equivalent urea bioisostere.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/c_to_c3.png){: loading=lazy }

??? Abstract "articles"
    **Structure-Based Generation of a New Class of Potent Cdk4 Inhibitors: New de Novo Design Strategy and Library Design** 
    Honma T, Hayashi K, Aoyama T, Hashimoto N, Machida T, Fukasawa K, Iwama T, Ikeura C, Ikuta M, Suzuki-Takahashi I, Iwasawa Y, Hayama T, Nishimura S and Morishima H 
    J. Med. Chem 
    44 2001  
    
    **A Novel Approach for the Development of Selective Cdk4 Inhibitors: Library Design Based on Locations of Cdk4 Specific Amino Acid Residues** 
    Honma T, Yoshizumi T, Hashimoto N, Hayashi K, Kawanishi N, Fukasawa K, Takaki T,Ikeura C, Ikuta M, Suzuki-Takahashi I, Hayama T, Nishimura S and Morishima H 
    J. Med. Chem 
    44 2001  
    
## Commercial Bioisosteric Drugs: Examples
*[Bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

### Angiotensin Receptor Blockers (ARBs)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/angiotensin-receptor-blockers-arbs-0750fa85'><i class='fa fa-play' aria-hidden='true'></i></button>Valsartan, Irbesartan and Candesartan are all bioisoteres of the Losartan Angiotensin Receptor Blocker and replaced the imidazole moiety of this drug by various bioisosteric groups (patent priorities are indicated in parenthesis).
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.
*[sar]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/bioisosterism/vasodil.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### COX-2 Inhibitors
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/cox-2-inhibitors-3c1a6c5b'><i class='fa fa-play' aria-hidden='true'></i></button>Vioxx, and Bextra are examples of COX-2 inhibitor drugs whose structures were derived from that of Celebrex using the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/cox2.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Anti-Inflammatory NSAIDs

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/anti-inflammatory-nsaids-45d0af16'><i class='fa fa-play' aria-hidden='true'></i></button>Sulindac and Ketoprofen are examples of non-steroid anti-inflammatory drugs (NSAIDs) whose structure was derived from that of Indomethacin by using the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/inflamm.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Antiarrhytmic Beta-Adrenergics

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/antiarrhytmic-beta-adrenergics-0b72b194'><i class='fa fa-play' aria-hidden='true'></i></button>Pindolol and Atenolol are examples of antiarrhytmic beta-adrenergic drugs whose structure was derived from that of Propranolol by using the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/adrenergics.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Neuroleptics

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/neuroleptics-77d2aebc'><i class='fa fa-play' aria-hidden='true'></i></button>Prochloperazine, Fluphenazine and Methotrimeprazine are examples of neuroleptic drugs whose structure was derived from that of Chlorpromazine by using the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/neurolept.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Anti-Ulcers

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/anti-ulcers-4362a937'><i class='fa fa-play' aria-hidden='true'></i></button>Ranitidine (Zantac) is an example of an anti-ulcer drug whose structure was derived from that of Cimetidine (Tagamet) by using the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/anti_ulcers.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Male Erectile Dysfunction Drugs

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/male-erectile-dysfunction-drugs-bfa6b4d4'><i class='fa fa-play' aria-hidden='true'></i></button>Levitra (Vardenafil) is an example of a male erectile dysfunction drug whose structure was derived from that of Viagra (Sildenafil) by using the concept of bioisosterism (the FDA approval dates are indicated in parenthesis).
*[FDA]: Food and Drug Administration. Agency in the USA responsible for safety regulations.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/male_er.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Benzodiazepines

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/benzodiazepines-00127bbe'><i class='fa fa-play' aria-hidden='true'></i></button>Nitrazepam, Prazepam and Clobazam are examples of anxiolytic drugs whose structures were derived from that of Diazepam (Valium) by using the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[f Diaz]: Food and Drug Administration. Agency in the USA responsible for safety regulations.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/benzodiazep.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Antibacterial Sulfonamides

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/antibacterial-sulfonamides-73c38d81'><i class='fa fa-play' aria-hidden='true'></i></button>Sulfacytine, Sulfaperine, Sulfamethazine and Sulfathiazole are examples of antibacterial drugs whose structures were derived from that of a reference sulfonamide compound (Sulfabenz - 1908) by using, at a given stage, the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/sulfonamides.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Beta-Lactam Antibiotics

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/beta-lactam-antibiotics-90f25dc3'><i class='fa fa-play' aria-hidden='true'></i></button>Penicillin G, Amoxicillin, Ampicillin and Penicillin V are examples of beta-lactam antibiotics that are all bioisosteres (patent priorities are indicated in parenthesis).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/antibio.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Local Anesthetics

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/local-anesthetics-4fe6b376'><i class='fa fa-play' aria-hidden='true'></i></button>Butacaine, Butoxycaine, Cyclomethycaine and Piperocaine are examples of local anesthetic drugs whose structures were derived from a reference lead compound by using, at a given stage, the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/anesth.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Glucocorticoid Steroids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/glucocorticoid-steroids-6d486487'><i class='fa fa-play' aria-hidden='true'></i></button>Prednisone, Corticosterone, Dexamethazone and Cortisone are examples of glucocorticoid drugs whose structures were derived from a steroid lead compound by using, at a given stage, the concept of bioisosterism (patent priorities are indicated in parenthesis).
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/steroid_2.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### Statin Drugs

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/statin-drugs-75a18744'><i class='fa fa-play' aria-hidden='true'></i></button>Statins are hypolipidemic agents, used to lower cholesterol levels (by inhibition of the HMG-CoA reductase) to reduce the risk of cardiovascular disease. There are two groups of statins: fermentation derived drugs and synthetic drugs. Examples of bioisostere statin drugs are indicated below for each group (commercialization dates are in parenthesis). 
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


=== "Fermentation"
    ![](https://media.drugdesign.org/course/bioisosterism/statin1.png){: loading=lazy }
=== "Synthetic-1"
    ![](https://media.drugdesign.org/course/bioisosterism/statin2.png){: loading=lazy }
=== "Synthetic-2"
    ![](https://media.drugdesign.org/course/bioisosterism/statin3.png){: loading=lazy }

??? Abstract "articles"
    **Lovastatin and beyond: the history of the HMG-CoA reductase inhibitors** 
    Tobert JA 
    Nat Rev Drug Discov 
    2(7) 2003  
    
    **Rosuvastatin calcium** 
    Quirk J, Thornton M, Kirkpatrick P. 
    Nat Rev Drug Discov 
    2(10) 2003  
    
## Patent Issues with Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

### Limits of Patent Infringements on Structures?

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/limits-patent-infringements-on-structures-17abb8d8'><i class='fa fa-play' aria-hidden='true'></i></button>What are the limits of patent infringements on chemical structures? Look for example at the benzodiazepine anxiolytic drugs developed by the pharmaceutical companies indicated below. The chemical formulas are indeed very similar and close to that of Valium; however Warner-Lambert, Sumitomo, Schering and Delmar had no problem developing or marketing their own analogs. 
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/pat_diazepam.png){: loading=lazy }

??? Abstract "book"
    **** 
    
         
    The Merck Index 
    Published by: Merck and Co. Whitehouse Station, NJ  1996   
    
### The Viagra-Levitra Case

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/viagra-levitra-case-b67a75d8'><i class='fa fa-play' aria-hidden='true'></i></button>Bioisosterism makes it very difficult for a pharmaceutical company to sue a competitor for copying the chemical structure of its proprietary drug. For example Pfizer sued Bayer and GlaxoSmithKline for infringement on the Viagra patent; however the case failed both in Europe and in the USA (the FDA approval dates are indicated in parentheses).
*[FDA]: Food and Drug Administration. Agency in the USA responsible for safety regulations.
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/pat_viagra.png){: loading=lazy }

??? Abstract "articles"
    **Vardenafil Bayer Yakuhin** 
    Sommer F, Engelmann U. 
    Curr Opin Investig Drugs 
    3(4) 2002  
    
    **Comparison of phosphodiesterase type 5 (PDE5) inhibitors** 
    Wright PJ. 
    Int J Clin Pract 
    
         . 2006  
    
### The Diazepam-Clobazam Example

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/diazepam-clobazam-example-8eea17c6'><i class='fa fa-play' aria-hidden='true'></i></button>Clobazam is a drug whose structure was intelligently derived from that of Diazepam (Valium) by replacing the azomethine group of diazepam by an equivalent planar amide. This bioisosteric transformation led to a drug with an original chemical structure that was fully patentable, with no possible dispute with Roche (note that one tautomer of clobazam could have been invoked as infringing the Diazepam patent). 
*[f Diaz]: Food and Drug Administration. Agency in the USA responsible for safety regulations.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Amide"
    ![](https://media.drugdesign.org/course/bioisosterism/pat_clobazam.png){: loading=lazy }
=== "Tautomer"
    ![](https://media.drugdesign.org/course/bioisosterism/pat_clo_enol.png){: loading=lazy }

??? Abstract "articles"
    **Study of an anxiolytic, clobazam, in otorhinolaryngology in psychosomatic pharyngeal manifestations (in French)** 
    Freche, C. 
    Semaine des Hopitaux; Therapeutique 
    51 (4) 1975  
    
### Patent Issues with Chiral Enantiomers
*[Enantiomer]: Enantiomers are pairs of stereoisomers that are mirror images of one other
*[Enantiomers]: Enantiomers are pairs of stereoisomers that are mirror images of one other

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/patent-issues-chiral-enantiomers-87953f22'><i class='fa fa-play' aria-hidden='true'></i></button>It is often assumed that a chiral-switch cannot lead to patentable drugs, but this is not always true. Fluoxetine (Prozac) is an example where the owner of the racemate (Eli-Lilly) signed a license agreement with his rival (Sepracor) to have the right to develop one enantiomer of its own drug! There are no general rules in this field and disputes have to be treated case by case.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[enantiomer]: Enantiomers are pairs of stereoisomers that are mirror images of one other
*[racemate]: A racemate (or a racemic mixture) is a mixture of equal amounts of enantiomers
*[chiral-switch]: Development of single enantiomers of commercial racemate drugs.


![](https://media.drugdesign.org/course/bioisosterism/pat_chiral.png){: loading=lazy }

??? Abstract "articles"
    **Intellectual property and chirality of drugs** 
    Israel Agranat and Hava Caner 
    Drug Discovery Today 
    4 (7) 1999  
    
    **Putting chirality to work: the strategy of chiral switches** 
    Agranat I, Caner H, Caldwell J. 
    Nat Rev Drug Discov 
    1 (10) 2002  
    
    **Sepracor/Eli-Lilly License Agreement** 
    Sepracor Eli-Lilly 
    SCRIP 
    8 1998  
    
### Patentable Drugs by Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/patentable-drugs-by-bioisosterism-3fe04b2d'><i class='fa fa-play' aria-hidden='true'></i></button>Patent issues are not always straightforward; however, when conducted in an intelligent manner bioisosterism provides a method of choice for unequivocally designing patentable drugs whose structures are derived from the structures of the competitor's drugs.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/pat_patentable.jpg){: loading=lazy }

## Programs and Databases on Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

### Computerized Systems

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/computerized-systems-6b3b3aed'><i class='fa fa-play' aria-hidden='true'></i></button>Many computer programs have been developed for similarity searching purposes (see chapters on similarity searching and those on database searching); however only a few have been built strictly using the concept of bioisosterism. Emil and Bioisoster/Bioster were the first programs and Brood is one of the most recent software products developed along this line; they can perform automated bioisosteric transformations of entire molecules.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/comp_systems.png){: loading=lazy }
### EMIL Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/emil-program-986b3a15'><i class='fa fa-play' aria-hidden='true'></i></button>EMIL (Example Mediated Innovation for Lead Evolution) is an expert system developed in Japan by Toshio Fujita (1993). It is based on a "lead evolution" principle which consists of making consecutive structural modifications of an initial molecule to obtain new generation compounds. The program incorporates a database of known examples together with more than 2000 rules for bioisosteric molecular transformations. Below are shown structures generated with Cimetidine as a starting point.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


=== "p.1"
    ![](https://media.drugdesign.org/course/bioisosterism/emil_1.png){: loading=lazy }
=== "p.2"
    ![](https://media.drugdesign.org/course/bioisosterism/emil_2.png){: loading=lazy }
=== "p.3"
    ![](https://media.drugdesign.org/course/bioisosterism/emil_3.png){: loading=lazy }

??? Abstract "articles"
    **Similarities in bioanalogous structural transformation patterns among various bioactive compound series** 
    Fujita T 
    Biosci. Biotech. Biochem 
    60(4) 1996  
    

??? Abstract "book"
    **** 
    Toshio Fujita 
    Trends in QSAR and Molecular Modeling 92. Procedings of the 9th European Symposium on Structure-Activity Relationships: QSAR and Molecular Modelling 
    ESCOM - Leiden  1993   
    
    **** 
    Toshio Fujita et al. Kyoto University and EMIL PROJECT, Fujitsu Kansai Systems Laboratory, Osaka, Japan 
    QSAR and Drug Design: New developments and applications 
    Elsevier, Pharmacochemistry Library Volume 23, H. Timmerman Ed.  1995   
    
    **** 
    Toshio Fujita 
    ACS Symposium series No. 606 Classical and Three-Dimensional QSAR in Agrochemistry 
    The American Chemical Society  1995   
    
### BIOISOSTER Program and BIOSTER Database

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/bioisoster-program-bioster-database-714e649b'><i class='fa fa-play' aria-hidden='true'></i></button>The BIOISOSTER program (Balakin et al, 2004) and its  BIOSTER database (Ujivary, 1997) is an example of computerized tools that were developed independently of the EMIL software, with however many similarities between the two systems.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/balakin.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosteric morphing in primary hit optimization** 
    KV Balakin, SE Tkachenko, I Okun, AV Skorenko, YA Ivanenkov, NP Savchuk, AA Ivashchenko and Y Nikolsky 
    Chimica Oggi - Chemistry Today 
    Jan-Feb 2004  
    
    **Extended Summary: BIOSTER - a database of structurally analogous compounds** 
    Ujvary I 
    Pesticide Science 
    51 (1) 1997  
    
#### The BIOISOSTER Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/bioisoster-program-c92507dc'><i class='fa fa-play' aria-hidden='true'></i></button>The BIOISOSTER program developed by Balakin et al (2004) can be used to find bioisosteric analogs in 2D structural databases. The program can also generate chemical libraries conforming to bioisosteric transformation rules (that are target specific and customizable). In the example below are illustrated the types of hits that were obtained starting with a 4-anilinoquinazoline query.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/chemosoft.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosteric morphing in primary hit optimization** 
    KV Balakin, SE Tkachenko, I Okun, AV Skorenko, YA Ivanenkov, NP Savchuk, AA Ivashchenko and Y Nikolsky 
    Chimica Oggi - Chemistry Today 
    Jan-Feb 2004  
    
#### Bioisosteric Morphing of the Query
*[Bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/bioisosteric-morphing-query-55fc6415'><i class='fa fa-play' aria-hidden='true'></i></button>The BIOISOSTER algorithm for finding bioisosteric analogs in a structural database is a two-step procedure. (1) In the first step the query input is "morphed" using a set of bioisosteric rules, and (2) in the second step the transformed structures are used as queries for searching in the database. Below step (1) is illustrated (morphing treatment), that was developed for the anilinoquinazoline query of the previous page. 
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/morphing.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosteric morphing in primary hit optimization** 
    KV Balakin, SE Tkachenko, I Okun, AV Skorenko, YA Ivanenkov, NP Savchuk, AA Ivashchenko and Y Nikolsky 
    Chimica Oggi - Chemistry Today 
    Jan-Feb 2004  
    
#### The Accelrys BIOSTER Database

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/accelrys-bioster-database-66074f97'><i class='fa fa-play' aria-hidden='true'></i></button>The BIOSTER database consists of a systematic compilation of successful bioisosteric replacements that were described in medicinal chemistry articles in the last 35 years (up to 2002). This database contains about 14,000 pairs of bioisosteres together with the bioisosteric relationships between pairs of compounds.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/accelrys.png){: loading=lazy }

??? Abstract "articles"
    **Extended Summary: BIOSTER - a database of structurally analogous compounds** 
    Ujvary I 
    Pesticide Science 
    51 (1) 1997  
    
#### Example of BIOSTER Database Content

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/example-bioster-database-content-20049757'><i class='fa fa-play' aria-hidden='true'></i></button>Below is illustrated an output of the Accelrys Bioster database showing the bioisosteric transformation of an initial molecule having a carboxylic acid group into a sulfonamide moiety. The program gives the calculated LogP for the two compounds as well as those of the elementary fragments. References from the literature associated with this type of transformation are also given.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/bioisosterism/accelrys_program.png){: loading=lazy }
### BROOD Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/brood-program-fe6c8f30'><i class='fa fa-play' aria-hidden='true'></i></button>Brood is a recent program developed by OpenEye for bioisostere prediction. It identifies bioisosteres by finding fragments with shape, chemistry and electrostatics that are similar to a 3D query molecule. Below is visualized the identification of an oxazole having similar electrostatic isopotential contour surfaces as compared to an ester moiety (red regions are negative and blue regions are positive). For electrostatics the Tanimoto coefficient is 0.54 whereas it is 0.90 for shape similarity.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


=== "Electrostatics"
    ![](https://media.drugdesign.org/course/bioisosterism/openeye_program.png){: loading=lazy }
=== "Shape"
    ![](https://media.drugdesign.org/course/bioisosterism/openeye_prog_shape.png){: loading=lazy }
#### Brood Program for Bradykinin Antagonists
*[Antagonist]: A molecule that blocks the activation of a receptor.
*[Antagonists]: A molecule that blocks the activation of a receptor.
*[agonist]: A chemical substance capable of activating a given receptor.
*[agonists]: A chemical substance capable of activating a given receptor.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/brood-program-for-bradykinin-antagonists-d7ad902a'><i class='fa fa-play' aria-hidden='true'></i></button>Paul Hawkins (OpenEye Scientific Software Inc.) used the Brood program to find bioisoteres of a toxic bradykinin antagonist. He used the toxic 2-3-diaminopyridine moiety as a query. Indeed, the cyclopropyl carbonyl hit corresponds to a potent antagonist recently discovered at Merck. This confirms Brood's ability to generate useful bioisosteres and encourages studying the other structures generated. 
*[antagonist]: A molecule that blocks the activation of a receptor.
*[agonist]: A chemical substance capable of activating a given receptor.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[moiety]: Fragments, functional groups or portions of chemical compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


=== "Problem"
    ![](https://media.drugdesign.org/course/bioisosterism/oe_problem.png){: loading=lazy }
=== "Query"
    ![](https://media.drugdesign.org/course/bioisosterism/oe_query.png){: loading=lazy }
=== "Hits"
    ![](https://media.drugdesign.org/course/bioisosterism/oe_hits.png){: loading=lazy }
=== "Cyclopropyl"
    ![](https://media.drugdesign.org/course/bioisosterism/oe_solution.png){: loading=lazy }

??? Abstract "articles"
    **Cyclopropylamino acid amide as a pharmacophoric replacement for 2,3-diaminopyridine. Application to the design of novel bradykinin B1 receptor antagonists** 
    Wood MR, Schirripa KM, Kim JJ, Wan BL, Murphy KL, Ransom RW, Chang RS, Tang C, Prueksaritanont T, Detwiler TJ, Hettrick LA, Landis ER, Leonard YM, Krueger JA, Lewis SD, Pettibone DJ, Freidinger RM, Bock MG. 
    J Med Chem 
    49(4) 2006  
    
    **OpenEye Scientific Software Inc** 
    P. Hawkins 
    
           
    Personnal communication 
            
    
### Organon IBIS Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/organon-ibis-program-0385c461'><i class='fa fa-play' aria-hidden='true'></i></button>Organon has developed an in-house intranet application program called IBIS to search for bioisosteric replacements. Constraints such as LogP and pKa allow for focusing the search. The performance of the method  has been validated using bioisosteric fragment pairs extracted from the BIOSTER database. In the example below are shown bioisosteres of benzamidine.
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/organon.png){: loading=lazy }

??? Abstract "articles"
    **The quest for bioisosteric replacements** 
    M Wagener and JPM Lommerse 
    J Chem Inf Model 
    46(2) 2006  
    
### Novartis Program for Ring Bioisosteres
*[Bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/novartis-program-for-ring-bioisosteres-7967f4b1'><i class='fa fa-play' aria-hidden='true'></i></button>Novartis developed an in-house program based on neural networks enabling the identification of novel bioisosteric ring analogs. The parameters that are considered for bioisosterism can include energy, molecular weight and atomic charges. In the example illustrated below, bioisosteres identified for a benzothiazole target ring are displayed. 
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.


![](https://media.drugdesign.org/course/bioisosterism/novartis.png){: loading=lazy }

??? Abstract "articles"
    **Quest for the rings. In silico exploration of ring universe to identify novel bioactive heteroaromatic scaffolds** 
    Ertl P, Jelfs S, Muhlbacher J, Schuffenhauer A, Selzer P. 
    J Med Chem 
    49(15) 2006  
    
    **Web-based cheminformatics and molecular property prediction tools supporting drug design and development at Novartis** 
    P. Ertl, J. Muehlbacher. B. Rohde, P. Selzer 
    SAR and QSAR Env. Res 
    14 2003  
    
### GlaxoSmithKline Program for Ring Replacements

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/glaxosmithkline-program-for-ring-replacements-2b16d7d6'><i class='fa fa-play' aria-hidden='true'></i></button>GlaxoSmithKline developed a ring database to be used for bioisosteric replacements. The program displays the frequency of occurrence in the corporate database (as an indicator of synthetic accessibility) together with similarity values. Below is illustrated the output obtained with the indole query.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/bioisosterism/gsk.png){: loading=lazy }

??? Abstract "articles"
    **Drug rings database with web interface. A tool for identifying alternative chemical rings in lead discovery programs** 
    Lewell XQ, Jones AC, Bruce CL, Harper G, Jones MM, McLay IM, Bradshaw J. 
    J Med Chem 
    46(15) 2003  
    
### COSMOsim Program for Bioisosteric Similarity
*[Bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/cosmosim-program-for-bioisosteric-similarity-dffc85b5'><i class='fa fa-play' aria-hidden='true'></i></button>A program called COSMOsim has been developed based on the calculation of polarization charge densities where the molecules are considered as swimming in a perfect conductor. Quantum mechanical calculations are used for generating &Sigma; profiles (histograms) that enable the calculation of "&Sigma;-match similarities". Examples of bioisosteres obtained for the naphthalene query are shown in the figure below (similarity scores are indicated in yellow).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/cosmosim.png){: loading=lazy }

??? Abstract "articles"
    **COSMOsim: bioisosteric similarity based on COSMO-RS sigma profiles** 
    Thormann M, Klamt A, Hornig M, Almstetter M. 
    J Chem Inf Model 
    46(3) 2006  
    
### Cheminformatics Software

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/cheminformatics-software-b6a4e6a6'><i class='fa fa-play' aria-hidden='true'></i></button>Cheminformatics led to the development of tools based on 2D descriptors, connectivity tables, Tanimoto coefficients, structural 2D/3D fingerprints etc., to treat molecular similarity in a quantitative manner. This is beyond the classical concept of bioisosterism and will be discussed in the chapter on "Molecular Similarity". Commercial software includes Daylight, MDL, Tripos, Accelrys and CAS programs. 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[MD]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system


![](https://media.drugdesign.org/course/bioisosterism/cheminfo_software.png){: loading=lazy }
#### Daylight: MERLIN Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/daylight-merlin-program-c986e9ae'><i class='fa fa-play' aria-hidden='true'></i></button>MERLIN is an example of a bioinformatics program developed by Daylight Chemical Information Systems Inc. for searching, sorting and selecting molecules from a database. Below is shown the output obtained by searching similar compounds using barbituric acid as a query (the molecules are sorted in terms of the Tanimoto similarity coefficient). 
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/bioisosterism/merlin_program.png){: loading=lazy }
#### Tripos: SYBYL Platform

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/tripos-sybyl-platform-79faf3c3'><i class='fa fa-play' aria-hidden='true'></i></button>Tripos has several cheminformatics tools that make use of 2D similarity and include different measurements of similarity such as Tanimoto, Asymmetric or Cosine similarity coefficients. The following views illustrate screen snapshots obtained using Unity (with Tanimoto coefficients) and Benchware Dataminer.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Unity"
    ![](https://media.drugdesign.org/course/bioisosterism/tripos_program.png){: loading=lazy }
=== "Benchware"
    ![](https://media.drugdesign.org/course/bioisosterism/benchware_program.png){: loading=lazy }
#### MDL: ISENTRIS Program
*[MD]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/mdl-isentris-program-046fd46d'><i class='fa fa-play' aria-hidden='true'></i></button>MDL has developed a cheminformatics platform named Isentris for managing scientific information. In the example below, Kynurenic acid was used as a query to search in the MDL Drug Data Report (MDDR) database containing over 132,000 substances. Typical hits are shown below with their similarity index (MolSim) and their main biological property (Activity).
*[nce]: New Chemical Entity: a compound not previously described.
*[MD]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system


=== "Query"
    ![](https://media.drugdesign.org/course/bioisosterism/mdl_query.png){: loading=lazy }
=== "Set-1"
    ![](https://media.drugdesign.org/course/bioisosterism/mdl_set1.png){: loading=lazy }
=== "Set-2"
    ![](https://media.drugdesign.org/course/bioisosterism/mdl_set2.png){: loading=lazy }
##### MDL: DiscoveryGate Program
*[MD]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/mdl-discoverygate-program-3ed23515'><i class='fa fa-play' aria-hidden='true'></i></button>In the example below the MDL program DiscoveryGate was used to search for isosteres of naphthalene. The search yielded 670 compounds; the first nine structures are shown below. 
*[MD]: Molecular dynamics (MD) is a computer simulation technique which follows the time evolution of a molecular system in 3D. Successive integration of Newtons equations of motion over time enables to obtain information about time-dependent properties of the system


![](https://media.drugdesign.org/course/bioisosterism/disc_gate_program.png){: loading=lazy }
#### CAS: SciFinder Program

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/cas-scifinder-program-eb40e8d0'><i class='fa fa-play' aria-hidden='true'></i></button>SciFinder is a research platform developed by CAS that can be used to access information in journals and patent literature. The example below illustrates the structure of a drug which was used to probe for bioisosteric candidates in the literature (Set-1). In the second step the query structure was used to search only for compounds with biological studies available in the literature (Set-2). 
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.


=== "Query"
    ![](https://media.drugdesign.org/course/bioisosterism/acs_query.png){: loading=lazy }
=== "Set-1"
    ![](https://media.drugdesign.org/course/bioisosterism/acs_set1.png){: loading=lazy }
=== "Set-2"
    ![](https://media.drugdesign.org/course/bioisosterism/acs_set2.png){: loading=lazy }
## Review Articles and Books

### Review Articles on Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/review-articles-on-bioisosterism-a99c5352'><i class='fa fa-play' aria-hidden='true'></i></button>Despite the importance of bioisosterism, there are relatively few systematic review articles on this field. Below are indicated some articles that have been written on bioisosterism, ranked in reverse chronological order. The full references appear in the "additional information" area at the bottom left side of this page. 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/reviews.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosterism: a useful strategy for molecular modification and drug design** 
    Lima LM, Barreiro EJ. 
    Curr Med Chem 
    12(1) 2005  
    
    **Chemical similarity and biological activities** 
    Kubinyi H 
    J Braz Chem Soc 
    13(6) 2002  
    
    **The use of bioisosteric groups in lead optimization** 
    Olesen PH 
    Curr Opin Drug Discov Devel 
    4(4) 2001  
    
    **Bioisosterism and Molecular Diversity** 
    Robert D. Clark, Allan M. Ferguson, and Richard D. Cramer 
    Perspectives in Drug Discovery and Design 
    9-10-11 1998  
    
    **Bioisosterism as a molecular diversity descriptor: steric fields of single "topomeric" conformers** 
    Cramer RD, Clark RD, Patterson DE, Ferguson AM. 
    J Med Chem 
    39(16) 1996  
    
    **Bioisosterism: A Rational Approach in Drug Design** 
    Patani GA, LaVoie EJ. 
    Chem Rev 
    96(8) 1996  
    
    **Bioisosterism in drug design** 
    Lipinski CA 
    Ann. Rep. Med. Chem 
    21 1986  
    
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
    **Bioisosterism** 
    Hansch C 
    , Intra-Science Chem. Report 
    8 1974  
    

??? Abstract "book"
    **** 
    Burger A. 
    Prog. Drug. Res. Vol. 37 
    Birkhauser Publ.  1991   
    
### Books on Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/books-on-bioisosterism-45f3483a'><i class='fa fa-play' aria-hidden='true'></i></button>Below are indicated books that have been written (entirely or in part) on bioisosterism, ranked in reverse chronological order. The full references appear in the "additional information" area at the bottom left side of this page. 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/books.png){: loading=lazy }

??? Abstract "book"
    **** 
    Janos Fischer and Robin C. Ganellin 
    Analogue-based Drug Discovery 
    Wiley-VCH  2006   
    
    **** 
    Richard Silverman 
    The organic chemistry of drug design and drug action 
    Elsevier, Academic Press  2004   
    
    **** 
    C. G. Wermuth 
    
         
    Academic Press  1996   
    
    **** 
    Ariens EJ 
    Vol. 1 
    Academic Press, New York  1971   
    
    **** 
    Korolkovas A. 
    Essentials of Molecular Pharmacology: Background for Drug Design 
    Wiley  1970   
    
    **** 
    Foye WO 
    
         
    
          1970   
    
    **** 
    Schatz VB 
    Medicinal Chemistry 
    Wiley-Interscience  1960   
    
## Limitations and the Future

### The Receptor is the Ultimate Decider

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/receptor-is-ultimate-decider-6dd500e8'><i class='fa fa-play' aria-hidden='true'></i></button>In bioisosterism a successful replacement is never guaranteed because the receptor is the ultimate "decider" and this is illustrated here. In the area of &beta;-adrenergic agents it has been proven that the replacement of a phenolic hydroxyl with a sulfonamide group retains the biological activities, and this was attributed to the similar pKa values of the two groups. However for opioid ligands, the same replacement led to inactive molecules. 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ligands]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/mc_curdy_ex.png){: loading=lazy }

??? Abstract "articles"
    **Investigation of Phenolic Bioisosterism in Opiates: 3-Sulfonamido Analogues of Naltrexone and Oxymorphone** 
    Christopher R. McCurdy, Robert M. Jones, Philip S. Portoghese 
    Organic Letters 
    2(6) 2000  
    
    **A new bio-isostere: alkylsulfonamidophenethanolamines** 
    A.A. Larsen, P.M. Lish 
    Nature 
    203 1964  
    
### The Multidimensional Nature of Bioisosterism
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/multidimensional-nature-bioisosterism-c726123c'><i class='fa fa-play' aria-hidden='true'></i></button>As Thornber points out, there are many parameters that have to be considered when deciding on a bioisosteric replacement and any replacement is unlikely to leave all these parameters unmodified. These parameters include size, electronic distribution, lipid solubility, water solubility, pKa, chemical reactivity (e.g. likelihood of metabolism) and hydrogen bond capacity. In the following pages we visualize some of these properties for the three molecules shown below.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/multidim.png){: loading=lazy }

??? Abstract "articles"
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
#### Shape

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/shape-4e4f6df0'><i class='fa fa-play' aria-hidden='true'></i></button>The following three bioisostere molecules have virtually the same shape (for clarity non-essential hydrogen atoms were omitted from the views).
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/multi_shape.png){: loading=lazy }
#### Lipophilicity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/lipophilicity-5a96c819'><i class='fa fa-play' aria-hidden='true'></i></button>They also present the same distribution of lipophilic and polar groups (for clarity non-essential hydrogen atoms were omitted from the views).


![](https://media.drugdesign.org/course/bioisosterism/multi_lipo.png){: loading=lazy }

#### Electronic Distribution

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/electronic-distribution-cfa0e7b9'><i class='fa fa-play' aria-hidden='true'></i></button>If we analyze the 3D distribution of the electrostatic potential in the surroundings of the three molecules, they prove to be very similar (for clarity non-essential hydrogen atoms were omitted from the views).
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/multi_es.png){: loading=lazy }
#### Hydrogen-Bond Capacity

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/hydrogen-bond-capacity-9339781e'><i class='fa fa-play' aria-hidden='true'></i></button>Finally, in terms of their hydrogen-bonding capacity the three molecules have the same capabilities. These molecules share similar features from multiple points of view. It is up to the chemist to decide whether these properties are sufficient to consider them as bioisosteres, or whether other physicochemical parameters should also be  considered before starting the development of a synthetic program. 
*[bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/bioisosterism/multi_hb.png){: loading=lazy }
### Can Bioisosterism be Quantified?
*[Bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/can-bioisosterism-be-quantified-da9803c1'><i class='fa fa-play' aria-hidden='true'></i></button>Successes obtained using bioisosteric replacements provided the foundation for the development of Quantitative Structure-Activity Relationships (QSAR) in drug design where candidate bioisosteric groups could be compared in terms of parameters including electronic properties (e.g. &Sigma;), lipophilicity (e.g. &pi;) and steric properties (e.g. MR). Recently, cheminformatics has broadened the field by assigning similarity indexes to molecular structures, as indicated on the following page.
*[bioisosteric]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[Quantitative Structure-Activity Relationships]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[Quantitative Structure-Activity Relationship]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[Structure-Activity Relationships]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[rms]: Root Mean Square: the square root of the arithmetic average of the square's set of values.


![](https://media.drugdesign.org/course/bioisosterism/quatif.png){: loading=lazy }

??? Abstract "articles"
    **Bioisosterism: Quantitation of Structure and Property Effects** 
    Lemont B. Kier and Lowell H. Hall 
    Chemistry and Biodiversity 
    1 (1) 2004  
    
    **Isosterism and molecular modification in drug design** 
    Thornber C.W. 
    Chem.Soc.Rev 
    8 1979  
    
### The Cheminformatics Era

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/cheminformatics-era-ee920a7b'><i class='fa fa-play' aria-hidden='true'></i></button>With the advent of computers in drug design, cheminformatics has emerged as a new discipline which has given an entirely new dimension to bioisosterism. Theoretical considerations now make it possible to treat bioisosterism in a quantitative manner with more modern methods for measuring molecular similarity (see the chapter on this topic in the cheminformatics volume). 
*[bioisosterism]: The transformation of a molecule by the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/cheminfo.gif){: loading=lazy }

### Docking can be used to Generate Bioisosteres
*[Bioisostere]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.
*[Bioisosteres]: A compound resulting from the exchange of a group of atoms with another and having similar biological properties to the parent compound.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/docking-can-be-used-to-generate-bioisosteres-6bf5c77a'><i class='fa fa-play' aria-hidden='true'></i></button>When the 3D structure of the target protein is known, docking can be used to generate isosteres. The docking procedure takes into account the van der Waals, hydrogen bonding and electrostatic forces and can be automated to search in a database of fragments. The scoring function associated with the docking treatment enables  discrimination between good and bad isosteres. 
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/docking.png){: loading=lazy }
### Strategic and Financial Considerations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/strategic-financial-considerations-27b7dbe6'><i class='fa fa-play' aria-hidden='true'></i></button>Research based on the development of analog compounds is attractive because of the limited risk and also because no important investment is needed in fundamental research. On the other hand, the "me-too" drug will be in competition with the other analogs on the market and the effects that will be observed in the long term are unpredictable; they can be outstanding or catastrophic. Sales of analog drugs are estimated to represent two-thirds of all the small molecules market.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/bioisosterism/financials.png){: loading=lazy }

??? Abstract "articles"
    **Similarity in drugs: reflections on analogue design** 
    Wermuth CG 
    Drug Discov Today 
    11(7-8) 2006  
    

??? Abstract "book"
    **** 
    IUPAC 
    Analogue-Based Drug Discovery 
    Wiley-VCH  2006   
    
### Examples of Success and Failures

<button  class='playb' onclick='playAudio(this)' data-mp3-name='bioisosterism/examples-success-failures-1b72f5a2'><i class='fa fa-play' aria-hidden='true'></i></button>Certain drugs that were introduced as a copy of an existing drug eventually became blockbusters and garnered a greater part of the market than the original 'pioneer' drug because of concrete additional advantages. Below are examples of successful drugs and others that failed for the two types of research (place the cursor on the name of each drug to visualize additional information).
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Success"
    ![](https://media.drugdesign.org/course/bioisosterism/successes.gif){: loading=lazy }

=== "Failures"
    ![](https://media.drugdesign.org/course/bioisosterism/failures.gif){: loading=lazy }



Copyright © 2024 drugdesign.org
