# Case Studies of Docking in Drug Discovery
!!! Authors
    **Nicolas Foloppe** (Vernalis, UK), **Leslie Kuhn** (Michigan State University), **Maria Zavodsky** (Michigan State University), **Claude Cohen** (Synergix), **Elie Cohen** (Synergix), **Ingmard Merfort** (University of Freiburg, Germany),  **Bettina Siedle ** (University of Freiburg, Germany).

!!! Info
    Practical examples are discussed in some detail in this chapter to illustrate the application of docking in virtual screening, lead hopping, structure-activity relationships and  the elucidation of modes of action.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[structure-activity relationships]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


    **Number of Pages: 52 (±1 hours read)**

    Last Modified: September 2008

    Prerequisites: None
## Case Study 1 : Pyrimidin-4-yl-ureas for Kinase Inhibition

### Inhibitor Active on Several Protein Kinases
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.

In an attempt to find a scaffold for protein kinase inhibition, a Novartis team developed a scaffold morphing strategy. They discovered a pyrimidin-4-yl urea structure that inhibited  some protein kinases as indicated below.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/pyrimid_selectivity.png){: loading=lazy }

??? Abstract "articles"
    **Entry into a new class of protein kinase inhibitors by pseudo ring design** 
    P. Furet, G. Caravatti, V. Guagnano, M. Lang, T. Meyer and J. Schoepfer 
    Bioorganic and Medicinal Chemistry Letters 
    18 2008 
         
    
### Structural Determinants for the Activity

Modeling studies were conducted to get a better grasp of  the selectivity of the pyrimidin-4-yl urea.  The molecule was docked in the ATP pocket of the c-Abl kinase, one of the protein kinases that was inhibited by that molecule. The 3D model revealed very tight interactions with the hydrophobic back pocket of the ATP binding site, in particular with the threonine gate keeper residue.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/snap_pyrimid_03.png){: loading=lazy }


??? Abstract "articles"
    **Entry into a new class of protein kinase inhibitors by pseudo ring design** 
    P. Furet, G. Caravatti, V. Guagnano, M. Lang, T. Meyer and J. Schoepfer 
    Bioorganic and Medicinal Chemistry Letters 
    18 2008 
         
    
### Correlation with the Volume of Gate Keeper Residue
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

The existence of tight binding of the pyrimidin-4-yl urea with the c-Abl threonine gatekeeper prompted the Novartis team to analyze the nature of the gatekeeper residues in the different kinases. They found a good correlation between the biological activities and the volume of the gate keeper. Protein kinases with a gatekeeper whose volume is larger than 125 &#8491;<sup>3</sup> cannot be active.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/pyrimid_threonine.png){: loading=lazy }

??? Abstract "articles"
    **Entry into a new class of protein kinase inhibitors by pseudo ring design** 
    P. Furet, G. Caravatti, V. Guagnano, M. Lang, T. Meyer and J. Schoepfer 
    Bioorganic and Medicinal Chemistry Letters 
    18 2008 
         
    
### Outcome of this Study

This example illustrates how modeling analyses enabled the identification of a simple molecular determinant for interpreting the selectivity of a molecule. The selectivity of the pyrimidin-4-yl urea molecule was found to be directly correlated with  the volume occupied by the gate keeper residue located in the back pocket of the ATP binding site.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/pyrimid_.png){: loading=lazy }

??? Abstract "articles"
    **Entry into a new class of protein kinase inhibitors by pseudo ring design** 
    P. Furet, G. Caravatti, V. Guagnano, M. Lang, T. Meyer and J. Schoepfer 
    Bioorganic and Medicinal Chemistry Letters 
    18 2008 
         
    
## Case Study 2 : Inhibition of CHK1

### The CHK1 Kinase

Chk1 is a kinase which contributes to the "G2 to M" transition in the cell-cycle. If DNA is damaged, an active Chk1 allows healthy cells to arrest in G2 and repair their DNA. Many mainstream anti-cancer agents act by damaging the DNA of cancer cells, leading to cell-death by apoptosis after mitosis. Therefore, the goal is to inhibit Chk1 with drugs in these cells to prevent them from repairing their DNA. The X-ray structure of the kinase domain has been solved, which provided impetus for a structure-based approach to the discovery of Chk1 inhibitors. The binding modes of several inhibitors discovered by virtual screening and analyzed by X-ray crystallography and modelling analyses are presented in the following pages.
*[f DNA ]: Food and Drug Administration. Agency in the USA responsible for safety regulations.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[binding modes]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[apo]: 3D structure of a macromolecule without a ligand


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_checkpoint.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    
### The Indazole Series

To acquire experience with the system, Nicolas Foloppe and a Vernalis team studied the binding modes of publicly disclosed indazole series of Chk1 inhibitors.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[binding modes]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_bm-indazoles-2d.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Targeting Serine/Threonine Protein Kinase B/Akt and Cell-cycle Checkpoint Kinases for Treating Cancer** 
    Qun Li and Gui-Dong Zhu 
    Curr. Topics Med. Chem 
    2 (9) 2002 
         
    
### Binding Mode of the Indazole Core
*[Binding Mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.

The series' indazole core was docked in the site, forming the conventional hydrogen-bonds with the conserved hinge. This provided a firm basis to model other compounds in the series and learn from their SAR, as shown in the next pages.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_pocket1.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of a buried pocket for potent and selective inhibition of Chk1: Prediction and verification** 
    Nicolas Foloppe, Lisa M. Fisher, Geraint Francis, Rob Howes, Peter Kierstan and Andrew Potter 
    Biorg. Med. Chem. 
    14 2006 
         
    
??? PDB
    **PDB entry: 2C3L** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2C3L) 
    
### Binding Modes of the Potent Indazole Analog
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Binding Mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[Binding Modes]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.

Modelling of the most potent compound in the indazole series, with a methoxy-phenol substituent, proved very informative. It showed that the methoxy-phenol fit sterically very well in a buried pocket which is otherwise filled with 3 water molecules. Burial of the methoxy-phenol, its excellent complementarity to the protein, and displacement of the waters explained the associated gain in potency. Therefore, this analysis identified this buried pocket as an important target to enhance potency against Chk1. The modelled binding mode was subsequently confirmed by crystallography by the Vernalis team (see rotatable view).
*[nce]: New Chemical Entity: a compound not previously described.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Predicted binding mode"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_pot_pocket1.png){: loading=lazy }
=== "Experimental (rotatable)"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/snap_chk_004b_b2.png){: loading=lazy }


!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of a buried pocket for potent and selective inhibition of Chk1: Prediction and verification** 
    Nicolas Foloppe, Lisa M. Fisher, Geraint Francis, Rob Howes, Peter Kierstan and Andrew Potter 
    Biorg. Med. Chem. 
    14 2006 
         
    
??? PDB
    **PDB entry: 2C3K** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2C3K) 
    
### Pocket may Help for Selectivity

Selectivity is an important issue when targeting a kinase for medicinal chemistry. A structural overlay of several different kinases around the buried pocket and the methoxy-phenol showed that the side-chains around this pocket varied across kinases. Modelling and experiments confirmed that this pocket is important for selectivity as well as potency.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_pocket2.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of a buried pocket for potent and selective inhibition of Chk1: Prediction and verification** 
    Nicolas Foloppe, Lisa M. Fisher, Geraint Francis, Rob Howes, Peter Kierstan and Andrew Potter 
    Biorg. Med. Chem. 
    14 2006 
         
    
### Overlay with Other Chk1 Inhibitors
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.

The view below shows an overlay of some known Chk1 inhibitors. The indazole series (red) fills the buried pocket in Chk1, at the bottom of which  is Asn59. The other series do not take advantage of this pocket. Therefore, there are opportunities to design novel and more specific Chk1 inhibitors.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.


=== "Overlay with other inhibitors"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_pocket3.png){: loading=lazy }
=== "2D structures"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_pocket3-2d.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of a buried pocket for potent and selective inhibition of Chk1: Prediction and verification** 
    Nicolas Foloppe, Lisa M. Fisher, Geraint Francis, Rob Howes, Peter Kierstan and Andrew Potter 
    Biorg. Med. Chem. 
    14 2006 
         
    
??? PDB
    **PDB entry: 1NVR** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1NVR) 
    
    **PDB entry: 2BRB** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2BRB) 
    
    **PDB entry: 2C3J** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2C3J) 
    
    **PDB entry: 2C3K** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2C3K) 
    
### Structure-Based Screening of Chk1 Inhibitors
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

The modelling analyses on indazole analogs helped better identify the  requirements for binding to the Chk1 kinase. The Vernalis team then searched for new inhibitors. A virtual screening methodology was deployed and started with a large electronic catalog of commercially available compounds. Compounds with undesirable properties (extremes of polarity, reactive functionalities) were filtered before docking. This left about 0.7 million compounds which were docked in high-throughput. Computational and manual filtering of the docking pauses led to assay a relatively small number of compounds. These finally yielded nine new diverse scaffolds of Chk1 inhibitors.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_another.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of chemically diverse Chk1 inhibitors by receptor-based virtual screening** 
    Nicolas Foloppe, Lisa M. Fisher, Rob Howes, Andrew Potter, Alan G. S. Robertson and Allan E. Surgenor 
    Biorg. Med. Chem. 
    14 2006 
         
    
### Hits Identified by Virtual Screening
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

The chemical structures of the nine new scaffolds of Chk1 inhibitors discovered by docking in the ATP-binding site of Chk1 are shown below. 
             A key point is that these scaffolds are diverse, arguably reflecting the strength of receptor-based docking as compared to a more similarity orientated ligand-based approach. All the inhibitors are ATP-competitive Chk1 inhibitors, which inhibit Chk1 at low micromolar concentrations of the compound.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_nine-hits.png){: loading=lazy }


!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of chemically diverse Chk1 inhibitors by receptor-based virtual screening** 
    Nicolas Foloppe, Lisa M. Fisher, Rob Howes, Andrew Potter, Alan G. S. Robertson and Allan E. Surgenor 
    Biorg. Med. Chem. 
    14 2006 
         
    
### X-Ray Structures of Four Virtual Screening Hits
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

X-ray structures of four of the newly discovered Chk1 inhibitors bound to this target were obtained. Each compound hydrogen-bonds the conserved kinase hinge, as expected. These X-ray binding modes confirmed some, but not all, of the docking modes obtained during the high-throughput virtual screening (not an unusual situation).
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[binding modes]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "X-Ray 1"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_xrays-1.png){: loading=lazy }
=== "X-Ray 2"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_xrays-2.png){: loading=lazy }
=== "X-Ray 3"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_xrays-3.png){: loading=lazy }
=== "X-Ray 4"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_xrays-4.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of chemically diverse Chk1 inhibitors by receptor-based virtual screening** 
    Nicolas Foloppe, Lisa M. Fisher, Rob Howes, Andrew Potter, Alan G. S. Robertson and Allan E. Surgenor 
    Biorg. Med. Chem. 
    14 2006 
         
    
??? PDB
    **PDB entry: 2CGU** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2CGU) 
    
    **PDB entry: 2CGV** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2CGV) 
    
    **PDB entry: 2CGW** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2CGW) 
    
    **PDB entry: 2CGX** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2CGX) 
    
### Binding Modes Predicted for Other Five Hits
*[Binding Mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[Binding Modes]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.

Since X-ray crystallography failed for the five remaining scaffolds, their precise binding modes (BM) were predicted by rigorous docking studies. These models emphasize the formation of hydrogen-bonds with the kinase hinge; however, due to the symmetry of this hydrogen-bonding motif, some of these docking modes could be flipped by 180 degrees relative to the hinge. These are only working hypotheses that are very helpful when devising an initial medicinal-chemistry strategy; they can then be adjusted in the light of new data.
*[nce]: New Chemical Entity: a compound not previously described.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[binding modes]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "BM-1"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_bm-1.png){: loading=lazy }
=== "BM-2"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_bm-2.png){: loading=lazy }
=== "BM-3"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_bm-3.png){: loading=lazy }
=== "BM-4"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_bm-4.png){: loading=lazy }
=== "BM-5"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_bm-5.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of chemically diverse Chk1 inhibitors by receptor-based virtual screening** 
    Nicolas Foloppe, Lisa M. Fisher, Rob Howes, Andrew Potter, Alan G. S. Robertson and Allan E. Surgenor 
    Biorg. Med. Chem. 
    14 2006 
         
    
### Outcome of this Study

The structural models generated in this study are helpful in providing concrete starting points to inform further inhibitor design. Since a limited number of alternative sensible docking modes could be found for each of the scaffolds, this suggests that structure-based ligand design is a realistic prospect for several of these ligands.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ligands]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/chk_conclusion.png){: loading=lazy }

!!! Success "Author"
    **Nicolas Foloppe** 
    Vernalis Ltd. Cambridge, United Kingdom 
     
    

??? Abstract "articles"
    **Identification of a buried pocket for potent and selective inhibition of Chk1: Prediction and verification** 
    Nicolas Foloppe, Lisa M. Fisher, Geraint Francis, Rob Howes, Peter Kierstan and Andrew Potter 
    Biorg. Med. Chem. 
    14 2006 
         
    
    **Identification of chemically diverse Chk1 inhibitors by receptor-based virtual screening** 
    Nicolas Foloppe, Lisa M. Fisher, Rob Howes, Andrew Potter, Alan G. S. Robertson and Allan E. Surgenor 
    Biorg. Med. Chem. 
    14 2006 
         
    
## Case Study 3 : Thrombin Inhibitors
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.

### Two Methods of Virtual Screening
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

Two approaches are currently used in virtual screening (VS). The first one, called structure-based virtual screening, exploits knowledge of the 3D structure of the target protein, and the second one, called ligand-based scoring, evaluates whether molecules mimic the 3D and physicochemical properties of a known active reference compound. A hybrid approach combining the two methods and applied on thrombin inhibitors is presented in the following pages.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_two_methods.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    
### Combining Structure-Based and Ligand-Based VS
*[Ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.

Leslie Kuhn and her group at the Michigan State University explored how to take advantage of the benefits of both structure-based docking (evaluating how well a compound complements the structure and chemistry of the active site) and ligand-based scoring (evaluating whether a compound shares features with known inhibitors) by combining them. This was tested in the context of a search for thrombin inhibitors, and the results are presented in the following pages.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_combi.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
        ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
         2008 
         
    
### Screening Protocol
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer

The screening protocol considered for this study is outlined in the figure below. In the first phase, the structure-based screening method is applied, based on the SLIDE method introduced by the Kuhn group (2002). In the second phase, the docked compounds are ranked by comparing each candidate molecule to that of the potent inhibitor PPACK, using a ligand-based 3D electrostatic similarity scoring method (EON).
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_protocol.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
        ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
         2008 
         
    
    **Distilling the essential features of a protein surface for improving protein-ligand docking, scoring, and virtual screening** 
    Zavodszky, M.I., Sanschagrin, P.C., Korde, R.S., Kuhn, L.A. 
    J. Comput. Aided Mol. Des 
    16 2002 
         
    
    **Knowledge-based scoring function to predict protein-ligand interactions** 
    Gohlke, H., Hendlich, M., Klebe, G. 
    J. Mol. Biol 
    295 2000 
         
    
??? PDB
    **PDB entry: THROMBIN 1VR1** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1VR1) 
    
    **PDB entry: PPACK 1PPB** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1PPB) 
    
#### Steps of the Docking Treatment

The steps involved in the docking (SLIDE program) are summarized in the diagram below. This is a flexible docking method where both the protein and ligand side-chains are treated as flexible entities; they mutually adapt to resolve van der Waals overlaps until good fit is achieved.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_steps_slide.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **Screening a peptidyl database for potential ligands to proteins with side-chain flexibility** 
    Schnecke, V., Swanson, C.A., Getzoff, E.D., Tainer, J.A., Kuhn, L.A. 
    Proteins 
    33 1998 
           
    
    **Atlas of Side-Chain and Main-Chain Hydrogen Bonding** 
    McDonald and Thornton 
    
           
    
           
           
           
    
    **Distilling the essential features of a protein surface for improving protein-ligand docking, scoring, and virtual screening** 
    Zavodszky, M.I., Sanschagrin, P.C., Korde, R.S., Kuhn, L.A. 
    J. Comput. Aided Mol. Des 
    16 2002 
           
    
#### Specificity Pockets in Thrombin

The active site of thrombin is visualized in the view below. The small spheres (template points) represent positions of favored interactions for inhibitor candidates to make, based on the protein structure alone; they were generated by the SLIDE method (Zavodszky et al., 2002). The template points are colored according to their type: green for hydrophobic, red for acceptor, blue for donor, and purple for donor and/or acceptor points. Specificity pockets are labeled; the S2 pocket is behind the tryptophan side chain at top.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_pockets.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **Distilling the essential features of a protein surface for improving protein-ligand docking, scoring, and virtual screening** 
    Zavodszky, M.I., Sanschagrin, P.C., Korde, R.S., Kuhn, L.A. 
    J. Comput. Aided Mol. Des 
    16 2002 
           
    
??? PDB
    **PDB entry: THROMBIN 1VR1** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1VR1) 
    
### Development of the Hybrid Approach

The thrombin target (PDB 1vr1) and 66777 unique compounds from the NCI database were screened. Based on good fit in the thrombin active site and matching of at least three of the thrombin template points, 7618 inhibitor candidates were identified for further evaluation. The best docked orientation for each compound was selected based on the structure-based scoring method, DrugScore. The 3D electrostatic similarity of each of the docked inhibitor candidates was then compared with the crystallographic orientation of the potent thrombin inhibitor, PPACK, using EON software. The EON scores were used to rank the compounds for experimental testing.
*[PDB]: The "Protein Data Bank". A worldwide repository source of 3D structures of proteins obtained by X-ray crystallography or NMR studies.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_screening.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
        ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
         2008 
         
    
    **Knowledge-based scoring function to predict protein-ligand interactions** 
    Gohlke, H., Hendlich, M., Klebe, G. 
    J. Mol. Biol 
    295 2000 
         
    
??? PDB
    **PDB entry: THROMBIN 1VR1** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1VR1) 
    
    **PDB entry: PPACK 1PPB** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1PPB) 
    
### Inhibition Assays of Top-Scoring Compounds

27 of the NCI Plated Compounds were obtained for biological testing, and the corresponding results are shown below. The assays were repeated in the presence of detergent, showing no evidence of inhibition by aggregation (promiscuous inhibition) for any of these compounds. Molecule 1 was found to have a sub-micromolar IC<sub>50</sub>.
*[nce]: New Chemical Entity: a compound not previously described.
*[promiscuous]: Some molecules emerge repeatedly as hits in diverse unrelated target systems. These so-called promiscuous hits act non-competitively, show little structure-activity relationships, and have poor selectivity.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_hits.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
        ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
         2008 
         
    
    **A Common Mechanism Underlying Promiscuous Inhibitors from Virtual and High-Throughput Screening** 
    Susan L. McGovern, Emilia Caselli, Nikolaus Grigorieff and Brian K. Shoichet 
    J. Med. Chem 
    45 2002 
         
    
### Analysis of the Binding Mode of Compound 1
*[Binding Mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.

Below is shown the predicted binding mode of compound 1 (in white tubes) as compared to the binding mode of the PPACK inhibitor (green tubes). Note that although PPACK was the reference inhibitor used to rank NCI compounds for ligand-based similarities, compound 1 incorporates new thrombin interactions. Compound 1 and PPACK have strong volumetric and electrostatic overlap in the S1 pocket, resulting in the high EON score between the two.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/snap_leslie_08.png){: loading=lazy }


!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
        ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
         2008 
         
    
#### Binding Mode Compared with Known Inhibitors
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[Binding Mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.

This view represents the binding mode of compound 1 compared to  42 known thrombin inhibitors from crystal structures in the PDB; it shows that this compound makes more extensive contacts in the S1' pocket than other inhibitors.
*[PDB]: The "Protein Data Bank". A worldwide repository source of 3D structures of proteins obtained by X-ray crystallography or NMR studies.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[binding mode]: Orientation and geometry adopted by a chemical substance when it is bound to its receptor.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/snap_leslie_09.png){: loading=lazy }


!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
          ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
           2008 
           
    
### What was Learned in this Test Study ?

This test study led to the discovery of a sub-micromolar inhibitor forming unique interactions with thrombin that can be used as a starting point for further optimization. The results show that ligand-based scoring can be a successful alternative to scoring protein-ligand interactions when prioritizing compounds for experimental testing.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_learn1.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
        ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
         2008 
         
    
#### Analyzing Top Ranked Compounds

The Kuhn group compared the top 100 compounds ranked by the ligand similarity scoring method EON to the top 100 compounds ranked by DrugScore, which measures protein-ligand interactions, and found there were no compounds in common. Considering the top 100 compounds from the protein-ligand interaction scoring function built into SLIDE, AffiScore/N, only 3 compounds were in common with the EON top-100 list. Furthermore, the AffiScore/N and DrugScore top 100 lists had no compounds in common.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_learn2.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
          ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
           2008 
           
    
#### Limitations of Scoring Functions

Thus, even though all three scoring functions have proven effective in selecting good dockings across diverse protein complexes, there are still considerable differences between them when it comes to prioritization of compounds. A practical approach for dealing with this challenge is to test several different scoring functions for their ability to correctly rank the known inhibitors for the target considered.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/leslie_learn3.png){: loading=lazy }

!!! Success "Author"
    **Leslie A. Kuhn and Maria I. Zavodszky** 
    Department of Biochemistry and Molecular Biology, Michigan State University, USA 
     
    

??? Abstract "articles"
    **
          ** 
    Zavodszky, M.I., Rohatgi, A., Van Voorst, J., Yan, H., Kuhn, L.A 
    Journal of Molecular Recognition 
    
           2008 
           
    
## Case Study 4 : Salicylamide Renin Inhibitor
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.

### Search for New Scaffold in Renin Inhibition

CGP-54061A is a potent non-peptide renin inhibitor that was discovered using a structure-based approach (see the aliskiren story). This antihypertensive  agent was designed to mimic a reference peptide-like inhibitor, as indicated in the figure below. Here we present  the achievements of Cohen and Maibaum at Novartis in their effort to discover a new series with a scaffold that differed from that of CGP54061A. 


*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_design_phenoxy.png){: loading=lazy }

??? Abstract "articles"
    **Design and Synthesis of Novel, Fully Non-Peptide Transition State Mimic Renin Inhibitors bearing an O-alkyl Substitued Salicylamide (P3-sp-P3)-Moiety with High Oral in vivo Potency** 
    J. Maibaum, N.C. Cohen, J. Rahuel, Ch. Schnell, H-P. Baum, P. Rigollier, W. Schilling, J. Wood 
    XVth Meeting of the European Federation of Medicinal Chemistry 
    
         Edinburg, Sept. 6-10, 1998 
         
    
### 3D Analyses

The analyses started with the X-ray data of the reference peptide (in purple in the view) and the non-peptidic inhibitor. The isopropyl group of CGP-54061A mimics the cyclohexyl of the peptide and the methoxybenzene mimics the Phe residue of the peptide. Initially, the benzene of CGP-54061A  was intended to mimic the Phe residue of the peptide but the 3D mimicry was not optimal, and this is why a methoxy group was added in para, in order to better overlap with the Phe residue of the peptide.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/snap_sali_ex_02.png){: loading=lazy }

### Preferred Location of Phenyl Ring in Pocket P3

Looking at the 3D mimicry of the peptide and CGP-54061A and based on the fact that both molecules have an IC50 of 1 nM, the authors attempted to determine the preferred location for a phenyl ring in the P3 pocket. 


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_questions.png){: loading=lazy }
### Docking Experiment

To find the answer,  the phenyl-dialkoxy of the CGP-54061A inhibitor was disconnected from the rest of the molecule, and the remaining two disconnected parts were then docked simultaneously - each one being free to bind optimally to the enzyme. Note that the para methoxy group was removed from the docking simulation (originally added to better overlap with the Phe residue).
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_idea.png){: loading=lazy }
### Results of the Docking

The docking simulation revealed that the aromatic ring of the phenyl-dialkoxy moved approximately 2&#8491; away from the other moiety, and reached the location occupied by the phenyl ring of the Phe residue of the reference peptide molecule (grey). In the absence of connectivity constraints, the preferred location of the phenyl ring of CGP-54061A in P3 corresponds to that occupied by the peptide.
*[nce]: New Chemical Entity: a compound not previously described.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_docking1.png){: loading=lazy }
### Search for an Optimal Spacer

Knowing the docked preferred position of the two fragments in the active site of the enzyme, the next issue was to assemble the two pieces to form one unique molecule.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_search_spacer.png){: loading=lazy }
### The Salicylamide Lead

On the screen, Cohen and Maibaum searched for spacers that would assemble the two disconnected parts in 3D. The carboxamidomethylene (CO-NH-CH2) spacer was selected as the best solution; the first molecule that was prepared proved to be active at the nanomolar level, and led to a new salicylamide family of renin inhibitors.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_lead.png){: loading=lazy }

??? Abstract "articles"
    **Design and Synthesis of Novel, Fully Non-Peptide Transition State Mimic Renin Inhibitors bearing an O-alkyl Substitued Salicylamide (P3-sp-P3)-Moiety with High Oral in vivo Potency** 
    J. Maibaum, N.C. Cohen, J. Rahuel, Ch. Schnell, H-P. Baum, P. Rigollier, W. Schilling, J. Wood 
    XVth Meeting of the European Federation of Medicinal Chemistry 
    
         Edinburg, Sept. 6-10, 1998 
         
    
??? PDB
    **PDB entry: 2V12** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2V12) 
    
### Predictions Confirmed by X-Ray Study

The predicted bound conformation of the salicylamide lead was confirmed by subsequent X-ray determination of its complex with renin. In the view below, two amino-acids of the catalytic site were removed to enable the entire inhibitor to be seen.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_xrays.png){: loading=lazy }

??? PDB
    **PDB entry: 2V12** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2V12) 
    
### Browser of Salicylamide Inhibitor
*[Inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.


      


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_ex_09_internet.gif){: loading=lazy }

??? PDB
    **PDB entry: 2V12** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=2V12) 
    
### Optimization of the Salicylamide Series

The initial lead compound 1 was then optimized by addressing both the in-vitro binding (with the purified enzyme and in the presence of plasma) and the in-vivo binding (marmoset plasma renin). Compound 4 proved to be highly potent in-vitro and in-vivo, water soluble and orally active.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_opt.png){: loading=lazy }

??? Abstract "articles"
    **Design and Synthesis of Novel, Fully Non-Peptide Transition State Mimic Renin Inhibitors bearing an O-alkyl Substitued Salicylamide (P3-sp-P3)-Moiety with High Oral in vivo Potency** 
    J. Maibaum, N.C. Cohen, J. Rahuel, Ch. Schnell, H-P. Baum, P. Rigollier, W. Schilling, J. Wood 
    XVth Meeting of the European Federation of Medicinal Chemistry 
    
         Edinburg, Sept. 6-10, 1998 
         
    
### Summary

Starting with an initial lead compound, molecular modeling analyses and docking treatments could be used to optimally position the phamacophoric fragments of the lead compound. The assembly of these fragments in their new position led to the design and discovery of the salicylamide series, an entirely new family of renin inhibitors. 
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_summary.png){: loading=lazy }
### Lead Hopping

This example illustrates how docking treatments can be efficiently exploited to create new scaffolds by lead hopping. 


![](https://media.drugdesign.org/course/molecular-docking-case-studies/sali_conclusion.png){: loading=lazy }
## Case Study 5 : Inhibition of Human Neutrophil Elastase

### Inhibition of Human Neutrophil Elastase

Human neutrophil elastase (HNE), a serine protease found in the azurophilic granules of neutrophils, is involved in many inflammatory diseases such as rheumatoid arthritis, pulmonary emphysema, delayed wound healing and psoriasis. Hence, inhibition of human neutrophil elastase is an interesting therapeutic approach as regards these inflammatory diseases. Up to now there are no elastase inhibitor medications on the market for therapy. Looking for new human neutrophil elastase inhibitors, natural compounds can be a valuable source and sesquiterpene lactones were found by the Merfort group to have such inhibitory activities.  Docking analyses were used to elucidate their mode of action. This is presented in the following pages. 
          
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_hle.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Natural compounds as inhibitors of human neutrophil elastase** 
    Siedle B., Hrenn A., Merfort I 
    Planta Medica 
    73 2007 
         
    
    **Sesquiterpene lactones as inhibitors of human neutrophil elastase** 
    Siedle, B., Cisielski, S., Murillo, R., Loeser, B., Castro, V., Klaas, C.A., Hucke, O., Labahn, A., Melzig, M.F., Merfort, I 
    Bioorganic and Medical Chemistry 
    10 2002 
         
    
### Sesquiterpene Lactones

Sesquiterpene Lactones (SLs) are terpenoids that are the active constituents of a variety of medicinal plants used in traditional medicine for the treatment of inflammatory diseases. More than 4000 different structures are known which can be divided into four major groups according to their carbocyclic skeleton. Each of these groups can be divided into subgroups.


=== "Sesquiterpene lactone skeletons"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_intro1.png){: loading=lazy }
=== "Subgroup of germacranolides"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_intro2.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Sesquiterpene lactones as inhibitors of human neutrophil elastase** 
    Siedle, B., Cisielski, S., Murillo, R., Loeser, B., Castro, V., Klaas, C.A., Hucke, O., Labahn, A., Melzig, M.F., Merfort, I 
    Bioorganic and Medical Chemistry 
    10 2002 
         
    
    **Sesquiterpene lactones as taxonomic characters in the Asteraceae** 
    Seaman F.C 
    The Botanical Review 
    48 1982 
         
    
    **Quantitative structure - activity relationship of sesquiterpene lactones as inhibitors of the transcription factor NF-kappaB** 
    Siedle, B., Garcia-Pineres, A.J., Murillo, R., Schulte-Moenting, J., Castro, V., Ruengeler, P., Klaas, C.A., Da Costa, F., Kisiel, W., Merfort, I 
    J. Med. Chem 
    47 2004 
         
    
### Studies on 17 Sesquiterpene Lactones

For their investigations the Merfort group selected seventeen sesquiterpene lactones representing all major skeletal classes of SLs. They differ from each other both in their molecular geometry and in the number of &alpha;,&beta;-unsaturated carbonyl structures. Only four of them (**14**, **2**, **8** and **4**) had an IC50 < 50 &Mu;M in the elastase assay, the others  required a high concentration for the 50% inhibition.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Molecules 1-9"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_17_p1.png){: loading=lazy }
=== "Molecules 10-17"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_17_p2.png){: loading=lazy }
=== "Most active molecules"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_17_actives.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Sesquiterpene lactones as inhibitors of human neutrophil elastase** 
    Siedle, B., Cisielski, S., Murillo, R., Loeser, B., Castro, V., Klaas, C.A., Hucke, O., Labahn, A., Melzig, M.F., Merfort, I 
    Bioorganic and Medical Chemistry 
    10 2002 
         
    
### Docking Studies

In an attempt to probe the activities and the mode of action of sesquiterepene lactones such as **14**, **2**, **8** and **4**, docking studies were conducted on Human Neutrophil Elastase.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_docking.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    
### Docking Protocol

The X-ray structure of HNE was obtained from the PDB. Its binding site was determined with the molecular modeling package WhatIf. Low-energy conformations of the SLs were generated using the molecular modeling package Hyperchem. Docking calculations were carried out with the  FlexX program. The predicted protein-ligand complexes were optimized and ranked according to the empirical scoring function ScreenScore, which estimates the binding free energy of the ligand receptor complex. The best placement refers to the ligand receptor complex with the lowest binding free energy.
*[molecular modeling]: A field that models molecular behavior with theoretical methods and computational techniques.
*[PDB]: The "Protein Data Bank". A worldwide repository source of 3D structures of proteins obtained by X-ray crystallography or NMR studies.
*[ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_protocol.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Structure of Human Neutrophil elastase in complex with a peptide chloromethyl ketone inhibitor at 1.84-A resolution (1HNE)** 
    Navia, M. A., McKeever, B. M., Springer, J. P., Lin, T., Williams, H. R., Fluder, E. M., Dorn, C. P., Hoogsteen, K. 
    Proceedings of the National Academy of Science USA 
    86 1989 
         
    
    **WHAT IF: A molecular modeling and drug design program** 
    Vriend, G. 
    Journal of Molecular Graphics 
    8 1990 
         
    
    **A Fast Flexible Docking Method using an Incremental Construction Algorithm (FlexX)** 
    Rarey, M., Kramer, B., Lengauer, T., Klebe, G. 
    Journal of Molecular Biology 
    261 1996 
         
    
    **Detailed analysis of scoring functions for virtual screening (ScreenScore)** 
    Stahl, M., Rarey, M. 
    Journal of Medicinal Chemistry 
    44 2001 
         
    
??? PDB
    **PDB entry: 1HNE** 
     
    [](http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=1HNE) 
    
### Results of the Docking Studies

The best active compounds (**2**, **4**, **8** and **14**) were always found the ones that all anchored to the oxyanion hole (Ser-195 and Gly-193), or at least partly, by hydrogen bonds. This anchoring may prevent the natural substrate to bind to the catalytic triad. The docking studies revealed no obvious correlation with the free energies estimated by ScreenScore, but can explain the inhibitory activity within structurally related SLs, as illustrated for the melampolides **2**, **3** and **4** on the following pages.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_dock_summary.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Sesquiterpene lactones as inhibitors of human neutrophil elastase** 
    Siedle, B., Cisielski, S., Murillo, R., Loeser, B., Castro, V., Klaas, C.A., Hucke, O., Labahn, A., Melzig, M.F., Merfort, I 
    Bioorganic and Medical Chemistry 
    10 2002 
         
    
### Elucidation of the Mode of Action

Altogether, docking studies help   understand the activities and  explain the mechanism of HNE inhibition of SLs: occupation of the oxyanion hole by H-bond anchorage and additional hydrogen bonds with other residues. The docking studies confirm the experimental results by showing that the inhibition is reversible. SLs do not covalently bind to the catalytic triad, thus differing from other elastase inhibitors with a lactone moiety.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_elucidation.png){: loading=lazy }

??? Abstract "articles"
    **Quantitative structure - activity relationship of sesquiterpene lactones as inhibitors of the transcription factor NF-kappaB** 
    Siedle, B., Garcia-Pineres, A.J., Murillo, R., Schulte-Moenting, J., Castro, V., Ruengeler, P., Klaas, C.A., Da Costa, F., Kisiel, W., Merfort, I 
    J. Med. Chem 
    47 2004 
         
    
    **Kinetics and mechanism of human leukocyte elastase inactivation by ynenol lactones** 
    Copp, L.J. Kranz, A., Spencer, R.W 
    Biochemistry 
    26 1987 
         
    
### Docking Results of Melampolides 2 and 4

The different activities of melampolides **2**, **3** and **4** (**2**~**4**>**3**) can be explained by docking studies. Besides the binding to Gly-193 in the oxyanion hole, the two hydroxyl groups of SLs **2** and **4** enable a double anchoring of the molecule to the active site. These interactions may prevent the natural substrate from binding to the catalytic triad.


=== "Molecules 2,3,4"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_mol_234.png){: loading=lazy }
=== "Binding Mode of 4"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_bm_4_publ.png){: loading=lazy }
=== "Binding of 4 in 3D"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_3d_melam.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    
### Docking Results of Podachaenin 14

The best inhibitor (**14**) is an ester having a hydrophobic bicyclic moiety that fills a major part of the furrow in which the physiological peptidic substrate is bound. This may explain its strong inhibitory activity.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[moiety]: Fragments, functional groups or portions of chemical compounds.


=== "Binding Mode of 14"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_bm_poda.png){: loading=lazy }
=== "3D"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_3d_poda.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    
### Docking Results of Germacranolide 8

Docking studies with **8** confirm the importance of a hydroxy function near the lactone carbonyl for a good interaction within the active site.
*[nce]: New Chemical Entity: a compound not previously described.


=== "Binding Mode of 8"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_bm_ger8.png){: loading=lazy }
=== "3D"
    ![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_3d_ger8.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    
### Structural Determinants for Binding to HNE

Ligand binding docking calculations reveal that the occurrence of a carbonyl function together with a hydroxy group or two hydroxy groups at a certain distance from one another seem to be a prerequisite for the inhibitory activity of sesquiterpene lactones  to human neutrophil elastase. This 3D pharmacophore may be used as a query in 3D database searching for novel inhibitors that are chemically unrelated to the structures of the sesquiterpene lactones. 
           
*[pharmacophore]: Specific 3D arrangement of chemical groups common to active molecules and essential to their biological activities.
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[nce]: New Chemical Entity: a compound not previously described.
*[Ligand]: In Biochemistry: substance that binds to a biological receptor. In Chemistry: an atom or group of atoms.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_determinants.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Sesquiterpene lactones as inhibitors of human neutrophil elastase** 
    Siedle, B., Cisielski, S., Murillo, R., Loeser, B., Castro, V., Klaas, C.A., Hucke, O., Labahn, A., Melzig, M.F., Merfort, I 
    Bioorganic and Medical Chemistry 
    10 2002 
         
    
### Summary

Docking studies helped to explain the possible mode of inhibitory action of human neutrophil elastase inhibitors on sesquiterpene lactones and demonstrate their high potential in the search for lead structures in the development of human neutrophil elastase inhibitors starting from small natural molecules. 
*[inhibitor]: Chemical substance that blocks or suppress the activity of a given enzyme.
*[inhibitors]: Chemical substance that blocks or suppress the activity of a given enzyme.


![](https://media.drugdesign.org/course/molecular-docking-case-studies/merfort_summary.png){: loading=lazy }

!!! Success "Author"
    **Irmgard Merfort and Bettina Siedle** 
    Institute of Pharmaceutical Sciences, Department of Pharmaceutical Biology and Biotechnology, University of Freiburg, Germany 
     
    

??? Abstract "articles"
    **Sesquiterpene lactones as inhibitors of human neutrophil elastase** 
    Siedle, B., Cisielski, S., Murillo, R., Loeser, B., Castro, V., Klaas, C.A., Hucke, O., Labahn, A., Melzig, M.F., Merfort, I 
    Bioorganic and Medical Chemistry 
    10 2002 
         
    
## ADDITIONAL CASE STUDIES

### Additional Case Studies


      


![](https://media.drugdesign.org/course/molecular-docking-case-studies/docking_case_other_examples.png){: loading=lazy }


Copyright © 2022 drugdesign.org