# Case Studies in QSAR and 3D-QSAR
!!! Authors
    Hanoch Senderowitz (Predix Pharmaceutical); Elie Cohen (Synergix); Claude Cohen (Synergix)

!!! Info
    In this chapter some case studies are presented to illustrate how practical projects can be handled using either Q.S.A.R. or 3D-Q.S.A.R. methodologies.


    **Number of Pages: 21 (±0 hours read)**

    Last Modified: December 2008

    Prerequisites: None
## Case Study-1 : QSAR of Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

### Example of Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/example-capsaicin-analogs-51f47d5f'><i class='fa fa-play' aria-hidden='true'></i></button>Capsaicin analogs were studied for their analgesic properties and we will use this study to illustrate the derivation of a simple QSAR model. The biological activities (EC<sub>50</sub>) were measured for some analogs as indicated below. The question is whether on the basis of these data, it is possible to develop a QSAR model and predict the biological activities of new compounds.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_1_1_0_0_1.gif){: loading=lazy }


??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### Relevant Descriptors of Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/relevant-descriptors-capsaicin-analogs-c82fbe15'><i class='fa fa-play' aria-hidden='true'></i></button>The selection of descriptors that correlate with the target biological activity is mandatory for the derivation of a meaningful QSAR model. For Capsaicin analogs, biological activity appears to be influenced by the lipophilicity of the substituent R. Following this assumption the descriptors deemed most suitable are the molar refractivity (MR) and the hydrophobic substituent constant &pi;.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_3_0_0_0_1.png){: loading=lazy }
### The Capsaicin Study Table

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/capsaicin-study-table-eaed56c4'><i class='fa fa-play' aria-hidden='true'></i></button>The following table summarizes the MR and &pi; values which were calculated for the seven Capsaicin analogs. As discussed above, activities (EC<sub>50</sub>) are expressed as their log values.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_4_0_0_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### Graphical Analysis of Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/graphical-analysis-capsaicin-analogs-518ff2a5'><i class='fa fa-play' aria-hidden='true'></i></button>For Capsaicin analogs, if we plot the values from the study table for MR and &pi;, respectively, there seems to be a weak correlation between the biological activity and the molar refractivity (MR). However, the hydrophobic substituent constant &pi; shows a possible linear correlation.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_6_0_0_0_1.gif){: loading=lazy }


??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### Deriving a QSAR Linear Equation
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/deriving-qsar-linear-equation-942043f2'><i class='fa fa-play' aria-hidden='true'></i></button>The correlation between &pi; and the biological activities is represented by the equation y = b<sub>0</sub>+b<sub>1</sub>X, where b<sub>0</sub> is the intercept of the line with the y axis and b<sub>1</sub> the slope of the line. We show below how to calculate their numerical values.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "Step 1"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_1.png){: loading=lazy }

=== "Step 2"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_2.png){: loading=lazy }

=== "Step 3"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_3.png){: loading=lazy }

=== "Step 4"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4.png){: loading=lazy }

=== "Step 5"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_5.png){: loading=lazy }

=== "Step 6"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_6.png){: loading=lazy }

=== "Step 7"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_7.png){: loading=lazy }

=== "Step 8"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_8.png){: loading=lazy }

### Experimental vs. Calculated Values (1/2)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/experimental-vs-calculated-values-12-e694e2c9'><i class='fa fa-play' aria-hidden='true'></i></button>There is a difference between the experimental and the calculated values as shown below.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_9_0_0_0_1_2.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### Experimental vs. Calculated Values (2/2)

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/experimental-vs-calculated-values-22-0e2eccc3'><i class='fa fa-play' aria-hidden='true'></i></button>A simple way to visualize the differences between experimental and calculated values is to plot the measured activity versus the predicted activity. A perfect QSAR model should follow the line y = x.
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_9_0_0_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### Calculating r<sup>2</sup> for the Capsaicin analogs
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/calculating-rsup2-for-capsaicin-analogs-2fc58c99'><i class='fa fa-play' aria-hidden='true'></i></button>For Capsaicin analogs, r<sup>2</sup> is calculated as follows.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_11_0_0_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### t-test for the Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/t-test-for-capsaicin-analogs-b4820464'><i class='fa fa-play' aria-hidden='true'></i></button>The steps involved in evaluating the significance of r<sup>2</sup> are as follows:
*[nce]: New Chemical Entity: a compound not previously described.


=== "t calculation"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_14_0_0_0_1_f1.png){: loading=lazy }
=== "t-table"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_14_0_0_0_1_f2.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### F-test for a Series of the Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/f-test-for-series-capsaicin-analogs-cf9b7e4e'><i class='fa fa-play' aria-hidden='true'></i></button>The steps involved for evaluating the significance of r<sup>2</sup> using the F-test proceed as indicated below. The F-test analyses finally indicate that a significant correlation is obtained and the probability of a chance correlation is less than 1%.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


=== "F calculation"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_5_7_3_0_0_1_f1.png){: loading=lazy }
=== "F-table"
    ![](https://media.drugdesign.org/course/qsar-case-studies/capsa_5_7_3_0_0_1_f2.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### The QSAR Equation for the Capsaicin Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/qsar-equation-for-capsaicin-analogs-a54b7303'><i class='fa fa-play' aria-hidden='true'></i></button>QSAR studies reveal the importance of lipophilicity in the analgesic properties of a series of Capsaicin analogs as indicated by the good correlation found with the &pi; descriptor. The correlation coefficient r<sup>2</sup> is 0.89 and analyses of the significance of the equation (t-test and F-test) show that there is less than a 5% chance that the relationship is due to chance. This validates the use of &pi; as a descriptor for the structure-activity relationships.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[nce]: New Chemical Entity: a compound not previously described.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[structure-activity relationships]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_qsar_8_10_0_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
### Predicting the Activities of Unknown Compounds

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/predicting-activities-unknown-compounds-9fbdb932'><i class='fa fa-play' aria-hidden='true'></i></button>The derived QSAR model can be used to predict the biological activities of novel capsaicin analogs by introducing their corresponding &pi; values in the QSAR equation. For example, the biological activity of the amide analog indicated below is predicted with an EC<sub>50</sub> of 0.98 &micro;M.
*[analog]: A molecule structurally similar to another, generally based on the same scaffold
*[analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/capsa_4_15_0_0_0_1.png){: loading=lazy }

??? Abstract "articles"
    **Analogues of Capsaicin with Agonist Activity as Novel Analgesic Agents; Structure-Activity Studies. 3. The Hydrophobic Side-Chain C-Region** 
    Christopher S.J. Walpole et al. 
    J. Med. Chem. 
    36 1993  
    
## Case Study-2 : 3D-QSAR of Steroid Analogs
*[Analog]: A molecule structurally similar to another, generally based on the same scaffold
*[Analogs]: A molecule structurally similar to another, generally based on the same scaffold
*[3D-QSAR]: A method for the establishment of a correlation between the biological activities and the fields produced in the surrounding of a molecule.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

### The Reference Compounds
*[nce]: New Chemical Entity: a compound not previously described.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/reference-compounds-08315ced'><i class='fa fa-play' aria-hidden='true'></i></button>This example was presented by Cramer in the original paper introducing CoMFA. This historical contribution has been cited repeatedly in the literature and often used to illustrate the methodology. The 3D-QSAR approach was developed to analyze the binding affinities of 21 steroid compounds that interact with the following two receptors: the human corticosteroid-binding globulin (CBG) receptor and the human testosterone-binding globulin (TBG) receptor.
*[3D-QSAR]: A method for the establishment of a correlation between the biological activities and the fields produced in the surrounding of a molecule.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid.png){: loading=lazy }
=== "1-4"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid_f1.png){: loading=lazy }
=== "5-8"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid_f2.png){: loading=lazy }
=== "9-12"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid_f3.png){: loading=lazy }
=== "13-16"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid_f4.png){: loading=lazy }
=== "17-20"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid_f5.png){: loading=lazy }
=== "21"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_21_steroid_f6.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### The Biological Data

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/biological-data-95159d94'><i class='fa fa-play' aria-hidden='true'></i></button>The binding affinities (expressed as pK<sub>i</sub> values) of the 21 steroids for the two receptors CBG and TBG are shown below.


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_bio.png){: loading=lazy }
=== "1-11"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_bio_f1.png){: loading=lazy }
=== "12-21"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_bio_f2.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### Molecular Alignment

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/molecular-alignment-1309a09d'><i class='fa fa-play' aria-hidden='true'></i></button>Due to the relative rigidity of the steroid skeleton, alignment was based on a simple rigid-body least-squares fitting of the 3, 5, 6, 13, 14 and 17 carbon atoms of each steroid to the corresponding atoms of deoxycortisol, a steroid with good binding affinity to both globulins. The 21 superimposed steroids are shown below (button "Sup").
*[affinity]: The affinity of a ligand is its ability to bind to its biological target.


=== "Alignment rule"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_rule.png){: loading=lazy }
=== "Sup"
    ![](https://media.drugdesign.org/course/qsar-case-studies/snap_3d_qsar_82_b2.gif){: loading=lazy }

=== "Tile"
    ![](https://media.drugdesign.org/course/qsar-case-studies/snap_3d_qsar_82_b3.png){: loading=lazy }


??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### CoMFA Field Calculations

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/comfa-field-calculations-2d2e7226'><i class='fa fa-play' aria-hidden='true'></i></button>The set of 21 aligned steroids was placed in a 3D grid large enough to encompass all structures. The distance between neighboring grid points was about 2&#8491;. Steric and electrostatic grids were calculated using the 6-12 Lennard-Jones and Coulomb potentials respectively, by using an sp<sup>3</sup> carbon atom with a +1 charge as a probe.
*[nce]: New Chemical Entity: a compound not previously described.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_ex_probe.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### CoMFA and PLS Results vs. Classical QSAR
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/comfa-pls-results-vs-classical-qsar-172e2108'><i class='fa fa-play' aria-hidden='true'></i></button>Binding affinities to human CBG and TBG were predicted through 3D-QSAR and PLS. The results obtained with the CoMFA methodology were better than those obtained with classical QSAR. Note that only a few descriptors (MR, LogP, MP...) were used for the QSAR; note also that MLR (multiple linear regression) cannot handle the huge amount of data generated by CoMFA calculations.
*[3D-QSAR]: A method for the establishment of a correlation between the biological activities and the fields produced in the surrounding of a molecule.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_comfa_result.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### Steric CoMFA Map for Binding to TBG

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/steric-comfa-map-for-binding-to-tbg-698147b4'><i class='fa fa-play' aria-hidden='true'></i></button>As revealed by the CoMFA regression coefficients, the steric 3D contour maps around testosterone for TBG affinities are presented below. Regions where bulky substituents enhance the binding affinity are shown in green, whereas regions where bulky substituents reduce the binding affinity are shown in yellow.
*[nce]: New Chemical Entity: a compound not previously described.
*[affinity]: The affinity of a ligand is its ability to bind to its biological target.
*[contour map]: The 2D or 3D visualization of points that have the same value of a particular property and are connected together.
*[contour maps]: The 2D or 3D visualization of points that have the same value of a particular property and are connected together.
*[ee]: stands for "enantiomeric excess". A quantity for measuring the optical purity and represents the percentage of the major enantiomer minus the percentage of the minor enantiomer


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_ex_map_steric.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### Electrostatic CoMFA Map for Binding to TBG

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/electrostatic-comfa-map-for-binding-to-tbg-71736bf8'><i class='fa fa-play' aria-hidden='true'></i></button>The electrostatic 3D contour maps around testosterone for TBG affinities are presented below. Regions where electronegative substituents enhance the binding affinity are shown in red, and regions where electronegative substituents reduce the binding affinity are shown in blue.
*[nce]: New Chemical Entity: a compound not previously described.
*[affinity]: The affinity of a ligand is its ability to bind to its biological target.
*[contour map]: The 2D or 3D visualization of points that have the same value of a particular property and are connected together.
*[contour maps]: The 2D or 3D visualization of points that have the same value of a particular property and are connected together.


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_ex_map2.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### CBG Affinities of New Steroids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/cbg-affinities-new-steroids-97640cc3'><i class='fa fa-play' aria-hidden='true'></i></button>After completion of the CoMFA analyses, the binding affinities to human CBG (corticosteroid-binding globulin) of a set of 10 new steroids became available.


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg1.png){: loading=lazy }
=== "1-2"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg1_f1.png){: loading=lazy }
=== "3-4"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg1_f2.png){: loading=lazy }
=== "5-6"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg1_f3.png){: loading=lazy }
=== "7-8"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg1_f4.png){: loading=lazy }
=== "9-10"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg1_f5.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    
### Predicting the CBG Affinities of New Steroids

<button  class='playb' onclick='playAudio(this)' data-mp3-name='qsar-case-studies/predicting-cbg-affinities-new-steroids-c3f5c445'><i class='fa fa-play' aria-hidden='true'></i></button>The 3D-QSAR equation derived by CoMFA was used to predict the binding affinities to the human CBG receptor of these 10 new steroids leading to a predictive r<sup>2</sup> value of 0.65; if compounds 1, 9 and 10 are removed from this analysis, r<sup>2</sup> increases to 0.81. The steroid data set presented here has now become a standard set for the validation of any novel 3D-QSAR approach.
*[3D-QSAR]: A method for the establishment of a correlation between the biological activities and the fields produced in the surrounding of a molecule.
*[QSAR]: Quantitative Structure Activity Relationships (QSAR) - Mathematical equation linking chemical structure and biological activity for a series of compounds.
*[SAR]: Structure-Activity Relationships (SAR) is the analysis of the relationships between chemical structure and biological activity.


![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg2.png){: loading=lazy }
=== "r2=0.65"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg2_f1.png){: loading=lazy }
=== "r2=0.81"
    ![](https://media.drugdesign.org/course/qsar-case-studies/comfa_ste_cbg2_f2.png){: loading=lazy }

??? Abstract "articles"
    **Comparative Molecular Field Analysis (CoMFA). 1. Effect of Shape on Binding of Steroids to Carrier Proteins** 
    Richard D. Cramer III, David E. Patterson and Jeffrey D. Bunce 
    J. Am. Chem. Soc. 
    110 1988  
    


Copyright © 2024 drugdesign.org
