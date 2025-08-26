import { Container, Card, Button, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoalShort from '../components/GoalShort';
import { useEffect, useState } from 'react';
import { useCreateGoalMutation, useGetAllQuery } from '../slices/goalsApiSlice.js';
import Loader from '../components/Loader';
import { setGoalsState } from '../slices/goalsSlice.js';


const GoalsScreen = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState('')

  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    navigate('/login')
  }

  const { data: items=[], isLoading, isError } = useGetAllQuery({});

  useEffect(() => {    
    dispatch(setGoalsState({items}));
  }, [dispatch])


  const [ createGoal, {}] = useCreateGoalMutation();

  const submitHandler = async (e) => {  
    e.preventDefault();

    const inputData = {content: { text } }
    try {
        const res = await createGoal(inputData);
        toast.success(`Goal updated successfully`);
    } catch (e) {
        toast.error(err?.data?.message || err.error);
    }

    navigate('/goals')  
  };
  

  return ( 
    <div> 
      <Container className='d-flex p-1 min-vh-50 justify-content-center'>
        <Card className='p-1 mt-0 d-flex flex-column align-items-center hero-card w-75'>  
     
        <h5 className='text-center px-1 my-3 w-100'> Your current notes, double click to edit</h5>        
        
        <div className='w-100 '>
            {items.map((item) => 
              <GoalShort  
                key={item._id} 
                id={item._id} 
                text={item.text.length > 35 ? `${item.text.substring(0, 35)} ...` : item.text } 
              /> 
            )} 
        </div>
        </Card>
      </Container>
      
      <Container className='d-flex p-1 justify-content-center'>
        <Card className='p-3 mt-5 d-flex flex-column align-items-center hero-card bg-light w-75'>  
          <h5 className='text-center px-3'> Add New NOTE </h5>        
      
          <Form onSubmit={submitHandler} className='w-100'>
            
            <div className='d-flex justify-content-center'>   
              <textarea className="form-control m-2" rows="6" 
                  type='textarea'
                  placeholder='Enter new goal here'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className='d-flex justify-content-between'>   
              <Button type='submit' variant='outline-secondary' className='mx-3'>
                CREATE
              </Button>
            </div>
          </Form>
        </Card>
      </Container>

      {isLoading && <Loader />}

    </div>
  );
};


export default GoalsScreen;