import { Link, useNavigate } from 'react-router-dom';

const GoalShort = ({id, text}) => {
  
  const navigate = useNavigate()
  
  const doSomething = (e) => {
    e.preventDefault();
    console.log('hei, what is id?', id);
    navigate(`/update`, { state: { _id: id, _text: text } });
  }

  return (
    <div className='card m-1 stretched-link' onDoubleClick={doSomething} >
      <div className='card-body m-0 p-2 text-left' key={id}>{text}</div>
    </div>
  );
};

export default GoalShort
