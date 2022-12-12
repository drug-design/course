# TeachOpenCADD

!!! Author "About this resource"
      
    TeachOpenCADD is a resource to teach computer-aided drug design (cheminformatics and structural-bioinformatics). It is organized into modules (talktorials) where each talktorial is represented by
    a jupiter notebook focusing on a single task. 

    ** Tutorial Type **: code based (Python)  

    ** Authors & Contributors **: TeachOpenCADD has been initiated by the members of Volkamer Lab, Charité - Universitätsmedizin Berlin. Many [contributors](https://github.com/volkamerlab/teachopencadd/graphs/contributors) have  participated in its developments

    ** Prerequisite**: Python (if have any programing background you should be able to understand the python code)  
    ** TeachOpenCadd Website**: [Link](https://projects.volkamerlab.org/teachopencadd/external_tutorials_collections.html){target=_blank}       
    ** Github Link**: [Link](https://github.com/volkamerlab/teachopencadd){target=_blank}        
      
    ** Howto **: The easiest way to start learning without installing anything is to open the jupiper notebook in github (click the link in the table below), it will automatically run the jupiter code and display the result inline. 
    If you want to run the code locally you will need to follow [these instructions](https://projects.volkamerlab.org/teachopencadd/installing.html#){target=_blank}

    ** Platform **: Jupiter notebook (a sharing document that contain live python code, visualizations, and narrative text), RDKit (an a open-source software toolkit for cheminformatics and computational chemistry), Conda & mamba (mamba is a CLI tool to manage conda s environments)  
    
            

| Modules       |  Description                                       | Python package |
| ---------------------------- | ----------------------------------- | -------------- |
|  [T001 · Compound data acquisition (ChEMBL)](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T001_query_chembl/talktorial.ipynb){target=_blank} | Extract data (compounds and activity) from the ChEMBL database related to the EGFR kinase and display their 2D structures  |  |
|  [T002 · Molecular filtering: ADME and lead-likeness criteria](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T002_compound_adme/talktorial.ipynb){target=_blank}| Remove compounds with low oral bioavailability from the result of the previous task | |
|  [T003 · Molecular filtering: unwanted substructures](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T003_compound_unwanted_substructures/talktorial.ipynb){target=_blank}| Remove toxic,reactive and false-positives compounds from the previous task | |
|  [T004 · Ligand-based screening: compound similarity](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T004_compound_similarity/talktorial.ipynb){target=_blank}| Draw 2D molecules, generate molecular descriptors, compare molecules based on these descriptors, then search a library to identify similar compounds (virtual screening) | |
|  [T005 · Compound clustering](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T005_compound_clustering/talktorial.ipynb){target=_blank}| from the virtual screening result (T004) use a clustering algorithms to select 1000 diverse compound in order to maximize the chances to find a hit   | |
|  [T006 · Maximum common substructure](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T006_compound_maximum_common_substructures/talktorial.ipynb){target=_blank}| visualize common scaffolds (MCS) of a set of molecules (T005) | |
|  [T007 · Ligand-based screening: machine learning](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T007_compound_activity_machine_learning/talktorial.ipynb){target=_blank}| how to use supervised ML algorithms to predict the activity of compounds against the EGFR Kinase | |
|  [T008 · Protein data acquisition: Protein Data Bank (PDB)](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T008_query_pdb/talktorial.ipynb){target=_blank}| superimpose ligands from many high resolution EGFR PDB complexes  | biotite & pypdb |
|  [T009 · Ligand-based pharmacophores](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T009_compound_ensemble_pharmacophores/talktorial.ipynb){target=_blank}| identify pharmacophore feature from the ligands set generated in the previous tasks  |  | 
|  [T010 · Binding site similarity and off-target prediction](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T010_binding_site_comparison/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T011 · Querying online API webservices](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T011_query_online_api_webservices/talktorial.ipynb){target=_blank}| Cheminformatics | |
|  [T012 · Data acquisition from KLIFS](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T012_query_klifs/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T013 · Data acquisition from PubChem](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T013_query_pubchem/talktorial.ipynb){target=_blank}| Cheminformatics | |
|  [T014 · Binding site detection](https://github.com/volkamerlab/teachopencadd/tree/master/teachopencadd/talktorials/T014_binding_site_detection){target=_blank}| Structural-Bioinformatics | |
|  [T015 · Protein ligand docking](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T015_protein_ligand_docking/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T016 · Protein-ligand interactions](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T016_protein_ligand_interactions/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T017 · Advanced NGLview usage](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T017_advanced_nglview_usage/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T018 · Automated pipeline for lead optimization](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T018_automated_cadd_pipeline/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T019 · Molecular dynamics simulation](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T019_md_simulation/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T020 · Analyzing molecular dynamics simulations](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T020_md_analysis/talktorial.ipynb){target=_blank}| Structural-Bioinformatics | |
|  [T021 · One-Hot Encoding](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T021_one_hot_encoding/talktorial.ipynb){target=_blank}| Cheminformatics | |
|  [T022 · Ligand-based screening: neural networks](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T022_ligand_based_screening_neural_network/talktorial.ipynb){target=_blank}| Cheminformatics | |
|  [T023 · What is a kinase?](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T023_what_is_a_kinase/talktorial.ipynb){target=_blank}| Kinase Similarity | |
|  [T024 · Kinase similarity: Sequence](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T024_kinase_similarity_sequence/talktorial.ipynb){target=_blank}| Kinase Similarity | |
|  [T025 · Kinase similarity: Kinase pocket (KiSSim fingerprint](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T025_kinase_similarity_kissim/talktorial.ipynb){target=_blank}| Kinase Similarity | |
|  [T026 · Kinase similarity: Interaction fingerprints](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T026_kinase_similarity_ifp/talktorial.ipynb){target=_blank}| Kinase Similarity | |
|  [T027 · Kinase similarity: Ligand profile](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T027_kinase_similarity_ligand_profile/talktorial.ipynb){target=_blank}| Kinase Similarity | |
|  [T028 · Kinase similarity: Compare different perspectives](https://github.com/volkamerlab/teachopencadd/blob/master/teachopencadd/talktorials/T028_kinase_similarity_compare_perspectives/talktorial.ipynb){target=_blank}| Kinase Similarity| |





