import React, { useEffect, useState } from 'react';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';

const Faq = ({ prop, isOpen, onDropdownClick }) => {
  const { question, answer } = prop;
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(isOpen);
  }, [isOpen]);

  const toggleVisibility = () => {
    setShowing((prevShowing) => !prevShowing);
    onDropdownClick(); // Notify the parent component when the dropdown is clicked
  };

  return (
    <article onClick={toggleVisibility}>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold py-4 cursor-pointer md:text-sm'>{question}</h2>
        <button>
          {showing ? <img src={minus} alt='minus-icon' /> : <img src={plus} alt='plus-icon' />}
        </button>
      </div>
      {showing && <p>{answer}</p>}
    </article>
  );
};

export default Faq;
