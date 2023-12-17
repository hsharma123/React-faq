import React, { useState } from 'react';
import Question from './components/Question.jsx';
import bgMobile from './images/background-pattern-mobile.svg';
import bgDesktop from './images/background-pattern-desktop.svg';
import Faq from './components/Faq.jsx';

const App = () => {
  const [questions, setQuestions] = useState(Question);
  const [openIndex, setOpenIndex] = useState(0);

  const handleDropdownClick = (index) => {
    setOpenIndex(index);
  };

  return (
    <>
      <section>
        <picture>
          <source media="(min-width: 640px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt='' />
        </picture>
      </section>
      <div className='shadow-xl bg-white w-2/5 m-auto p-5 rounded-md -mt-20 relative md:w-10/12'>
        {questions.map((question, index) => (
          <Faq
            key={index}
            prop={{ ...question, index }}
            isOpen={index === openIndex}
            onDropdownClick={() => handleDropdownClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default App;
