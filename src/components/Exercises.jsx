import React, { useState } from 'react'
import FitNavbar from './FitNavbar'

const Exercises = () => {

        const[data,changeData] = useState(
            [
                {"workout" : "Flat Chest Presses", 
                 "reps" : "10-15", 
                 "sets" : "3", 
                 "instruct": "Lying flat on bench, hold the dumbbells directly above chest, arms extended.Lower dumbbells to chest in a controlled manner.Press dumbbells back to starting position and repeat.Avoid locking elbows",
                 "gif" : "https://qph.cf2.quoracdn.net/main-qimg-8e34bb41d30ceb2f65aa7873a87a4371"
                },
                {"workout" : "Lateral Raises", 
                 "reps" : "10-15", 
                 "sets" : "3", 
                 "instruct": "Stand upright, knees slightly bent, shoulder width apart, holding dumbbells at sides.Bend elbows slightly and raise the dumbbells out to sides. Keep elbows slightly bent throughout.When arms are parallel to floor, slowly lower back and repeat.",
                 "gif" : "https://homeworkouts.org/wp-content/uploads/anim-dumbbell-lateral-raise.gif"
                },
                {"workout" : "Dead Lifts", 
                 "reps" : "10-15", 
                 "sets" : "3", 
                 "instruct": "Stand upright, feet shoulder width apart, knees slightly bent.Bend lower back and knees to lower the weights down your legs. Back must remain flat, lower back should be arched inwards slightly. Keep head up throughout exercise.Stand upright using lower back and legs, maintaining flat back and keeping your head up.",
                 "gif" : "https://www.kettlebellkings.com/cdn/shop/articles/barbell-deadlift-movement.gif?v=1692228918"
                },
                {"workout" : "Upright Rows", 
                 "reps" : "10-15", 
                 "sets" : "3", 
                 "instruct": "Stand upright, feet shoulder width apart, knees slightly bent. Keeping dumbbells close to body, raise them to chin. Hold for a count of 2 and slowly lower to start position and repeat.",
                 "gif" : "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/barbell-upright-row-standing.gif"
                },
                {"workout" : "Concentration Curls", 
                 "reps" : "10-15", 
                 "sets" : "3", 
                 "instruct": "Sit on edge of bench with feet flat on the floor. Holding dumbbell place elbow on inside of thigh, just above knee. Curl dumbbell up towards your face. Do not swing back as you lift the weight. Slowly lower the weight and repeat for desired number of reps before switching arms.",
                 "gif" : "https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Concentration-Curl.gif"
                },


            ]
        )                    
        
  return (
    <div>
        
        <FitNavbar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    
                    {data.map(
                        (value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex allign-items-stretch">

                                <div class="card mb-3">
                                    <div class="card-body">
                                    <p></p>
                                        <img src={value.gif} class="card-img-top" alt="..."/>
                                        <h5 class="card-title">{value.workout}</h5>
                                        <p class="card-text"><small class="text-body-secondary">REPS : {value.reps}   ||    SETS : {value.sets}</small></p> 
                                        <p class="d-inline-flex gap-1">
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">INSTRUCTIONS</a>
                                        </p>
                                        <div class="row">
                                        <div class="col">
                                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                            <div class="card card-body">
                                                {value.instruct}
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
    
                            </div>
                        }
                    )}

                </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Exercises