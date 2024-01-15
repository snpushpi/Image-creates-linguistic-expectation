# final_study_v2
 Analysis of the Second Version of the collected final data

- final_v2_all_with_error_info.csv - it has all the data, error information in each word level from all particpants along with length, frequency, surprisal, groundedness, POS etc, so in the "correctness" column, you would see 3 categories - "correct","wrong" and "unavaiable". It means for each word in the sentence, the column indicates if the participant got it right or wrong or made a mistake in a previous word hence the data for that word is unavailable 

- (this isn't really important with the newer version of data) final_results_prelim_v2.csv, it’s essentially all the raw data with random information about the data(for example, timestamp, what each row means, #s etc) stripped off of the collected data of ibex, I also added Condition_ID there to help experimenting with error rate if needed, 

- error_ind.csv, a df with sentence, subject_ID, condition_ID and whether or not a certain participant made mistake in a certain sentence, which is indicated in “correctness” column

- final_study_all_data_v2.csv is the preprocessed data with all the information such as POS, Frequency, length, surprisal etc, it is all the data from final_v2_all.csv except for the sentences where participants made mistakes.

- final_data_analysis Copy.Rmd - the markdown notebook with analysis

- saved_models - folder with all the saved models, to understand which model is what, pls check the markdown notebook

- scatterplots.ipynb - this notebook has a bunch of plots and scatterplots for visualization and learning 
-final_grounding_data.zip - if you unzip it, you will find all the collected data from the groundedness score study

- all_data_analysis_with_error_info.ipynb - this is the notebook with all the processing code - adding frequency, length, surprisal, groundedness, POS to the data collected from ibex

- final_grounding_data.zip - all the groundedness rating collected from prolific study 


