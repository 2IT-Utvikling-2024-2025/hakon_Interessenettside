import React, { useState } from 'react';
import './App.css';

const BG3Quiz = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: [],
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: 0,
    q10: 0, // fixed duplicate q9
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setAnswers((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Question 1 */}
      <div>
        <p>1. How did your first playthrough end?</p>

        <label>
          <input type="radio" name="q1" value="Evil" onChange={handleChange} />
          Evil Ending
          <input type="radio" name="q1" value="Good" onChange={handleChange} />
          Good Ending
          <input type="radio" name="q1" value="Neither" onChange={handleChange} />
          Not evil, but not exactly good
          <input type="radio" name="q1" value="Unfinished" onChange={handleChange} />
          Yet to finish

        </label>
      </div>

      {/* Question 2 */}
      <div>
        <p>2. Which Companion did you romance?</p>

        <label>
            
          <input type="checkbox" name="q2" value="Karlach" onChange={handleChange} />
          Karlach
          <input type="checkbox" name="q2" value="Shadowheart" onChange={handleChange} />
          Shadowheart
          <input type="checkbox" name="q2" value="Astarion" onChange={handleChange} />
          Astarion
          <input type="checkbox" name="q2" value="Gale" onChange={handleChange} />
          Gale
          <input type="checkbox" name="q2" value="Neither" onChange={handleChange} />
          None of the above

        </label>
      </div>

      {/* Question 3 */}
      <div>
        <p>3. Have you modded your game?</p>
        <label>

          <input type="radio" name="q3" value="Yes" onChange={handleChange} />
          Yes
          <input type="radio" name="q3" value="No" onChange={handleChange} />
          No

        </label>
      </div>

      {/* Question 4 */}
      <div>
        <p>4. What did you enjoy most about BG3?</p>
        <label>

          <input type="checkbox" name="q4" value="combat" onChange={handleChange} />
          Combat
          <input type="checkbox" name="q4" value="story" onChange={handleChange} />
          Story
          <input type="checkbox" name="q4" value="character creation" onChange={handleChange} />
          Character Creation
          <input type="checkbox" name="q4" value="Neither" onChange={handleChange} />
          None of the above

        </label>
      </div>

      {/* Question 5 */}
      <div>
        <p>5. What was your favorite romance?</p>
        <input type="text" name="q5" value={answers.q5} onChange={handleChange} />
      </div>

      {/* Question 6 */}
      <div>
        <p>6. What was your favorite boss battle?</p>
        <input type="text" name="q6" value={answers.q6} onChange={handleChange} />
      </div>

  {/* Question 7 */}
<div>
  <p>7. Which class did you enjoy playing the most?</p>
  <select name="q7" value={answers.q7} onChange={handleChange}>
    <option value="">Select an answer</option>
    <option value="Fighter">Fighter</option>
    <option value="Monk">Monk</option>
    <option value="Paladin">Paladin</option>
    <option value="Druid">Druid</option>
    <option value="None of the above">None of the above</option>
  </select>
</div>


      {/* Question 8 */}
      <div>
        <p>8. How many hours do you have in BG3?</p>
        <select name="q8" value={answers.q8} onChange={handleChange}>
          <option value="">Select an answer</option>
          <option value="2">Under 100</option>
          <option value="3">200+</option>
          <option value="4">500+</option>
          <option value="6">1000+</option>
        </select>
      </div>

      {/* Question 9 */}
      <div>
        <p>9. On a scale from 1 to 10, how much do you enjoy BG3?</p>
        <input type="range" name="q9" min="1" max="10" value={answers.q9} onChange={handleChange} />
        <span>{answers.q9}</span>
      </div>

      {/* Question 10 */}
      <div>
        <p>10. On a scale from 1 to 10, how likely are you to replay the game?</p>
        <input type="range" name="q10" min="1" max="10" value={answers.q10} onChange={handleChange} />
        <span>{answers.q10}</span>
      </div>

      <button type="submit">Submit Quiz</button>
    </form>
  );
};

export default BG3Quiz;
