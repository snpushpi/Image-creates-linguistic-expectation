
var jsPsychVerticalSliderResponse = (function (jspsych) {
    'use strict';
    const info = {
        name: "html-vertical-slider-response",
        parameters: {
            /** The HTML string to be displayed */
            stimulus: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Stimulus",
                default: "hello wordl",
            },
            image_stimuli: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Img_stimulus",
                default: undefined,
            },
            /** Sets the minimum value of the slider. */
            min: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Min slider",
                default: -10,
            },
            /** Sets the maximum value of the slider */
            max: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Max slider",
                default: 10,
            },
            /** Sets the starting value of the slider */
            slider_start: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Slider starting value",
                default: 0,
            },
            /** Sets the step of the slider */
            step: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Step",
                default: 1,
            },
            /** Array containing the labels for the slider. Labels will be displayed at equidistant locations along the slider. */
            labels: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Labels",
                default: [],
                array: true,
            },
            /** Height of the slider in pixels. */
            slider_height: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Slider height",
                default: null,
            },
            /** Label of the button to advance. */
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Button label",
                default: "Continue",
                array: false,
            },
            /** If true, the participant will have to move the slider before continuing. */
            require_movement: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Require movement",
                default: false,
            },
            /** Any content here will be displayed below the slider. */
            prompt: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Prompt",
                default: null,
            },
            /** How long to show the stimulus. */
            stimulus_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Stimulus duration",
                default: null,
            },
            /** How long to show the trial. */
            trial_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Trial duration",
                default: null,
            },
            /** If true, trial will end when user makes a response. */
            response_ends_trial: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Response ends trial",
                default: true,
            },
        },
    };
    /**
     * **html-slider-response**
     *
     * jsPsych plugin for showing an HTML stimulus and collecting a slider response
     *
     * @author Josh de Leeuw
     * @see {@link https://www.jspsych.org/plugins/jspsych-html-slider-response/ html-slider-response plugin documentation on jspsych.org}
     */
    class HtmlVerticalSliderResponsePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            const stim_word = trial.stimulus.split(' ');
            const word_num = stim_word.length;
            // half of the thumb width value from jspsych.css, used to adjust the label positions
            var half_thumb_width = 7.5;
            var optimal_width = Math.floor(100 / (word_num + 1)) - 5;
            var html = `<style>
            /********** Range Input Styles **********/
/*Range Reset*/
/********** Range Input Styles **********/
/*Range Reset*/
input[type="range"] {
writing-mode: bt-lr;
                appearance: slider-vertical;
                -moz-appearance: slider-vertical;
                -webkit-appearance: slider-vertical;
    background: transparent;
    cursor: pointer;
    height: 15rem;
}

/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/***** Chrome, Safari, Opera and Edge Chromium styles *****/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
   background-color: #053a5f;
   border-radius: 0.5rem;
   width: 0.7rem;  
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none !important; /* Override default look */
   appearance: none;
   margin-right: -4px !important; /* Centers thumb on the track */

   /*custom styles*/
   background-color: #5cd5eb;
   height: 2rem;
   width: 1rem;
}

input[type="range"]:focus::-webkit-slider-thumb {   
  border: 1px solid #053a5f !important;
  outline: 3px solid #053a5f !important;
  outline-offset: 0.125rem; 
}

/******** Firefox styles ********/
/* slider track */
input[type="range"]::-moz-range-track {
   background-color: #053a5f;
   border-radius: 0.5rem;
   width: 0.5rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
   border: none; /*Removes extra border that FF applies*/
   border-radius: 0; /*Removes default border-radius that FF applies*/

   /*custom styles*/
   background-color: #5cd5eb;
   height: 2rem;
   width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb {
  border: 1px solid #053a5f;
  outline: 3px solid #053a5f;
  outline-offset: 0.125rem; 
}

            .slider-value {
                margin-top: 10px;
              }
            .slider:hover {
                opacity: 1; /* Fully shown on mouse-over */
              }
            .value-label {
                position: absolute;
                overflow: hidden;
                white-space: nowrap;
                font-size: 12px;
                text-align: left;
            }
            .value-label:nth-child(1) { bottom: -10px; } /* Adjusted bottom value */
            .value-label:nth-child(2) { bottom: 44%; }
            .value-label:nth-child(3) { bottom: 91%; }
            `
            for (var i = 0; i < word_num; i++) {
                html += `#box_${i}{
                    float:left;
                    height: 150px;
                    border-radius: 20px; /* Rounded corners */
                    outline: none; /* Remove the default focus outline */
                }
                `
            }
            html += `#box_${word_num}{
                float:right;
                width:auto;
                position: relative;
                height: 15rem;
                border-left: 2px solid #000;
                padding: 0 5px;
                margin-right:20px;
                margin-top: 80px; 
            }</style>
            `
            
            html += `<img src="${trial.image_stimuli}" alt="Image" height="400">`;
            html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px">';
            html += `<div class="value-scale" id="box_${word_num}">
            <div class="value-label">-10,Not Present</div>
            <div class="value-label">0,Neutral</div>
            <div class="value-label">10,Surely Present!</div>
            </div>`;
            for (var i = 0; i < word_num; i++) {
                html +=
                    `<div class="jspsych-html-slider-response-container" id="box_${i}" style="position:relative; margin: 0 auto 1em auto; background-color: transparent;`;
                if (trial.slider_height !== null) {
                    html += "height:" + trial.slider_height + "px;";
                }
                else {
                    html += "height:auto;";
                }
                html += "width:auto;";
                html += '">';

                html += '<h4>' + stim_word[i] + '</h4>' +
                    '<input type="range" orient="vertical" class="jspsych-slider" value="' +
                    trial.slider_start +
                    '" min="' +
                    trial.min +
                    '" max="' +
                    trial.max +
                    `" id="jspsych-html-slider-response-response_${i}">`;
                //html +=  `<output type="number" id="output" class="output">10</output>`
                //html += `<output class="slider-value"><span id="sliderValue_${i}>50</span></output>`;
                html += `<span id="demo_${i}"></span>`;
                html += "</div>";

            }
            
            // for (var j = 0; j < trial.labels.length; j++) {

            //     var label_width_perc = 100 / (trial.labels.length - 1);
            //     var percent_of_range = j * (100 / (trial.labels.length - 1));
            //     var percent_dist_from_center = ((percent_of_range - 50) / 50) * 100;
            //     var offset = (percent_dist_from_center * half_thumb_width) / 100;
            //     html +=
            //         '<div style="border: 1px solid transparent; display: inline-block; position: absolute; ' +
            //             "left:calc(" +
            //             percent_of_range +
            //             "% - (" +
            //             label_width_perc +
            //             "% / 2) - " +
            //             offset +
            //             "px); text-align: center; width: " +
            //             label_width_perc +
            //             '%;">';
            //     html += '<span style="text-align: center; font-size: 80%;">' + trial.labels[j] + "</span>";
            //     html += "</div>";
            // }

            html += "</div>";

            if (trial.prompt !== null) {
                html += trial.prompt;
            }
            // add submit button
            html +=
                '<button id="jspsych-html-slider-response-next" class="jspsych-btn" ' +
                (trial.require_movement ? "disabled" : "") +
                ">" +
                trial.button_label +
                "</button>";

            display_element.innerHTML = html;
           var sliders = [];
           var outputs = [];
           for (var i=0;i<word_num;i++){

sliders.push(display_element.querySelector(`#jspsych-html-slider-response-response_${i}`));
}
for (var i=0;i<word_num;i++){

outputs.push(display_element.querySelector(`#demo_${i}`));
}
 const valueHandler = (i) => {
                        return () => {
                            outputs[i].innerHTML=sliders[i].value;
                        };
                    };
 
for(var i=0; i<word_num; i++) {
  outputs[i].innerHTML = sliders[i].value;
  sliders[i].addEventListener("input",valueHandler(i));  
}
            var response = {
                response: [],
            };
            const sliderInteractions = new Array(word_num).fill(false);
            // Function to check if all slider elements have been interacted with
            function checkAllInteractions() {
                for (const elt of sliderInteractions) { if (elt == false) return false; }
                return true;
            }

            let changedSliderCount = 0;

            if (trial.require_movement) {
                const enable_button = () => {
                    display_element.querySelector("#jspsych-html-slider-response-next").disabled = false;
                };

                for (var i = 0; i < word_num; i++) {
                    const sliderElement = display_element.querySelector(`#jspsych-html-slider-response-response_${i}`);

                    const interactionHandler = (index) => {
                        return () => {
                            const trackWrapper = sliderElement.parentElement;
                            trackWrapper.style.backgroundColor = "#AFFF33";
                            sliderInteractions[index] = true;
                            console.log(sliderInteractions);
                            if (checkAllInteractions()) {
                                enable_button();
                             }
                        };
                    };

                    sliderElement.addEventListener("mousedown", interactionHandler(i));
                    sliderElement.addEventListener("touchstart", interactionHandler(i));
                    sliderElement.addEventListener("change", interactionHandler(i));
                }
            }

            const end_trial = () => {
                this.jsPsych.pluginAPI.clearAllTimeouts();
                // save data
                var trialdata = {
                    stimulus: trial.stimulus,
                    slider_start: trial.slider_start,
                    response: response.response,
                };
                display_element.innerHTML = "";
                // next trial
                this.jsPsych.finishTrial(trialdata);
            };

            display_element
                .querySelector("#jspsych-html-slider-response-next")
                .addEventListener("click", () => {
                    // measure response time
                    var endTime = performance.now();
                    console.log(display_element);
                    for (var i = 0; i < word_num; i++) {
                        response.response.push(display_element.querySelector(`#jspsych-html-slider-response-response_${i}`).value);
                    }
                    if (trial.response_ends_trial) {
                        end_trial();
                    }
                    else {
                        display_element.querySelector("#jspsych-html-slider-response-next").disabled = true;
                    }

                });


            if (trial.stimulus_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(() => {
                    display_element.querySelector(`#jspsych-html-slider-response-stimulus`).style.visibility = "hidden";
                }, trial.stimulus_duration);

            }
            // end trial if trial_duration is set
            if (trial.trial_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
            }
            var startTime = performance.now();
        }

        simulate(trial, simulation_mode, simulation_options, load_callback) {
            if (simulation_mode == "data-only") {
                load_callback();
                this.simulate_data_only(trial, simulation_options);
            }
            if (simulation_mode == "visual") {
                this.simulate_visual(trial, simulation_options, load_callback);
            }
        }
        create_simulation_data(trial, simulation_options) {
            const default_data = {
                stimulus: trial.stimulus,
                slider_start: trial.slider_start,
                response: this.jsPsych.randomization.randomInt(trial.min, trial.max),
                rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
            };
            const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
            this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
            return data;
        }
        simulate_data_only(trial, simulation_options) {
            const data = this.create_simulation_data(trial, simulation_options);
            this.jsPsych.finishTrial(data);
        }
        simulate_visual(trial, simulation_options, load_callback) {
            const data = this.create_simulation_data(trial, simulation_options);
            const display_element = this.jsPsych.getDisplayElement();
            this.trial(display_element, trial);
            load_callback();
            if (data.rt !== null) {
                const el = display_element.querySelector("input[type='range']");
                setTimeout(() => {
                    this.jsPsych.pluginAPI.clickTarget(el);
                    el.valueAsNumber = data.response;
                }, data.rt / 2);
                this.jsPsych.pluginAPI.clickTarget(display_element.querySelector("button"), data.rt);
            }
        }
    }
    HtmlVerticalSliderResponsePlugin.info = info;

    return HtmlVerticalSliderResponsePlugin;

})(jsPsychModule);
