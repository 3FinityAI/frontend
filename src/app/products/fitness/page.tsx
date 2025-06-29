"use client";
import React, { useState } from "react";
import Dashboard from "../../components/website/Dashboard";
import PersonalizedDietPlanResults from "../../components/website/PersonalizedDietPlanResults";
import WorkoutPlanResults from "../../components/website/WorkoutPlanResults";


function FitnessPage() {

  const [isWorkoutPlan, setIsWorkoutPlan] = useState(false);
  const [isPersonalizedDietPlan, setIsPersonalizedDietPlan] = useState(false);

  return (
    <>

      {!isWorkoutPlan && !isPersonalizedDietPlan ? <Dashboard setIsWorkoutPlan={setIsWorkoutPlan} setIsPersonalizedDietPlan={setIsPersonalizedDietPlan}/> :
        isWorkoutPlan ? <WorkoutPlanResults isWorkoutPlan={isWorkoutPlan} setIsWorkoutPlan={setIsWorkoutPlan}/>
         : <PersonalizedDietPlanResults isPersonalizedDietPlan={isPersonalizedDietPlan} setIsPersonalizedDietPlan= {setIsPersonalizedDietPlan}/>
      }

    </>
  );
}

export default FitnessPage;

