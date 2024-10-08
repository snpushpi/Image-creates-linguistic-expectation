# Description of datasets and analysis code

This repository contains the relevant codes and datasets for the publication [**Image-conditioned human language comprehension and psychometric benchmarking of visual language models**]()(*In Proceedings of the 28th Conference on Computational Natural Language Learning (CoNLL 2024)*) and the thesis [**Expectation-based comprehension of linguistic input: facilitation from visual context**](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VpwZ4RIAAAAJ&citation_for_view=VpwZ4RIAAAAJ:W7OEmFMy1HYC)

- RT_datasets: This Folder contain all the relevant processed(with added features such as surprisal versions from different models, parts of speech labels, correctness status of everry word read by every subject, frequancy, length, condition_ID of items etc) and raw versions of the reading time datasets(collected straight from IBEX). To view how the RT data collection maze experiment looked like, check out [this video](https://drive.google.com/file/d/1zrMKbcdGQ_fjrRkSFyE92X3Rt8vhEMqY/view?usp=sharing)

- all_analysis: This folder contains all R markdown notebooks containing the mixed effect lmer/bayesian regression model analysis and results reported in the publication.

- final_grounding_data: This folder contains the collected raw data from the groundedness rating experiment

- generating_features: This folder contains the codes for generating all kinds of features that we later used to predict reading time/error occurence/surprisal difference etc. Notable features include surprisals from 11 different VLMs(9)/LLMs(2), frequency, open/closed pos, length etc. This folder also has the codes for adding condition_IDs to the raw data.

- groundedness_experiment_code: This folder includes all javascript and html files along with the stimuli image files necessary to develop the groundedness rating collection experiment. A notable addition to the existing jspsych experiment items are vertical sliders to collect groundedness rating in the most natural way. To view how this experiment looked like, please check out [this video](https://drive.google.com/file/d/1FVWvkWyMSDEragNnB8paxLBoe4PhKHvB/view?usp=sharing)


- img: Just a folder containing most of the generated plots for the paper/thesis

TODO: Add the link for the paper and the citation link when ready.


