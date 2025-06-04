import React, { useState } from 'react';


export default function FitnessGoalForm({setIsWorkoutPlan, setIsPersonalizedDietPlan}) {
  const [agenda, setAgenda] = useState('muscle');
  const [foodPref, setFoodPref] = useState('indian');
  const [currentWeight, setCurrentWeight] = useState(60);
  const [height, setHeight] = useState(165);
  const [targetWeight, setTargetWeight] = useState(65);

  return (
    <>
    <div className="form-container">
    
    <div className="ag-fd">
      {/* Agenda */}
      <div className="section">
        <label>Agenda</label>
        <div className="button-group">
          <button
            className={`ag ${agenda === 'muscle' ? 'active' : ''}`}
            onClick={() => setAgenda('muscle')}
          >
            Gain Muscle Mass
          </button>
          <button
            className={`ag ${agenda === 'weight' ? 'active' : ''}`}
            onClick={() => setAgenda('weight')}
          >
            Lose Weight
          </button>
        </div>
      </div>


      {/* Food Preference */}
      <div className="section">
        <label>Food Preference:</label>
        <div className="button-group">
          <button
            className={`fd ${foodPref === 'indian' ? 'active' : ''}`}
            onClick={() => setFoodPref('indian')}
          >
            Indian
          </button>
          <button
            className={`fd ${foodPref === 'non-indian' ? 'active' : ''}`}
            onClick={() => setFoodPref('non-indian')}
          >
            Non-Indian
          </button>
          <button
            className={`fd ${foodPref === 'both' ? 'active' : ''}`}
            onClick={() => setFoodPref('both')}
          >
            Both
          </button>
         
        </div>
      </div>
      </div>

        <div className='form-btm'>
      {/* Current Weight */}
      <div className="section">
        <label>Current Weight </label>
        <input type="range" min="30" max="150" value={currentWeight} onChange={e => setCurrentWeight(Number(e.target.value))} />
        <span className='inp-res'>{currentWeight} kgs</span>
      </div>

      {/* Height */}
      <div className="section">
        <label>Height </label>
        <input type="range" min="100" max="220" value={height} onChange={e => setHeight(Number(e.target.value))} />
        <span className='inp-res'>{height} cms</span>
      </div>

      {/* Target Weight */}
      <div className="section odd">
        <label>Target Weight </label>
        <input type="range" min="30" max="150" value={targetWeight} onChange={e => setTargetWeight(Number(e.target.value))} />
        <span className='inp-res'>{targetWeight} kgs</span>
      </div>
      </div>
        {/* Submit Button */}
        <button className="calculate" onClick={()=> setIsWorkoutPlan(true)}>Calculate</button>


      <style jsx>{`
        .form-container {
          max-width: 815px;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 12px;
          background: #fafafa;
          font-family: sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .section {
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .button-group {
          display: flex;
          gap: 5px;
        }

        .ag {
        width: 160px;
          padding: 12px;
          font-size: 16px;
            border: none;
          border-radius: 6px;
          background: #eee;
          color: #000;
          cursor: pointer;
          transition: 0.3s ease;
        }
          .fd {
        width: 105px;
          padding: 12px;
          font-size: 16px;
            border: none;
          border-radius: 6px;
          background: #eee;
          color: #000;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          background: #0070f3;
          color: white;
        }

        .active {
          background: #0070f3;
          color: white;
        }

        .radio-group label {
          display: inline-block;
          margin-right: 20px;
          font-weight: normal;
        }

        input[type="range"] {
          width: 72%;
        }
          .ag-fd {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
        .form-btm {
        width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            
            gap: 20px;
            }
        .form-btm .odd {
            margin: 0 auto;

        }
        .form-btm .section {
            width: 40%;
           

      }
            .calculate {
                width: 100%;
                padding: 12px;
                font-size: 16px;
                margin: 20px 0;
                background: #0070f3;
          color: white;
          border: none;
                border-radius: 6px;
                cursor: pointer;
                
                
            }
        .calculate:hover {
          background: #005bb5;
        }

        .inp-res {
          margin-top: 10px;
          font-size: 16px;
          font-weight: bold;
          color: #000;
          padding: 10px;
          border-radius: 6px;
          background: #f0f0f0;
        }
            

      `}</style>
    </div>
    </>

  );
}