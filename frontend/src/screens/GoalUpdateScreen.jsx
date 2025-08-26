import { Container, Card, Button, Form} from 'react-bootstrap';
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCreateGoalMutation, useDeleteGoalMutation, useUpdateGoalMutation } from '../slices/goalsApiSlice';
import { selectGoalsInfo, setGoalsState } from '../slices/goalsSlice.js';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';


const GoalUpdateScreen = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const [goal, setGoal] = useState(null)
  const [text, setText] = useState('')
  const { userInfo } = useSelector((state) => state.auth);
  const locationStateInfo = location.state;

  useEffect(() => {
    if (!userInfo) 
      navigate('/login')
    
    if (!locationStateInfo) 
      navigate('/goals')
  
  }, [navigate, userInfo])
          
  
  const goldId = locationStateInfo._id;
  console.log(goldId);
  const goalText = locationStateInfo._text;
  console.log(goalText);

  const [ updateGoal, {}] = useUpdateGoalMutation();
  const [ deleteGoal, {}] = useDeleteGoalMutation();

  const deleteThisItem = async () => {
    const inputData = {id: goldId}
    try {
      const res = await deleteGoal(inputData);
      console.log(inputData);
      toast.success(`Goal updated successfully`);
    } catch (e) {
      toast.error(err?.data?.message || err.error);
    }
  }

  const submitHandler = async (e) => {  
    e.preventDefault();

    try {
      const inputData = {
        id: goldId, 
        content: { text }
      }
      await updateGoal(inputData).unwrap();
      toast.success(`Goal updated successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  
  return (
    <div className=' py-5'> 
      <h2 className='text-center mb-4'>View & Update current goal!</h2>

      {/* <button onClick={createGaol}> console </button>  */}

      <Container className='d-flex justify-content-center'>
        <Card className='p-3 d-flex flex-column align-items-center hero-card bg-light w-75'>
        
          <Form onSubmit={submitHandler} className='w-100'>

            <div className='d-flex justify-content-between'>   
              <Button type='submit' variant='primary' className='mt-3 mx-3'>
                UPDATE
              </Button>
              <Button variant='primary' className='mt-3 mx-3' href='/goals'>
                CANCEL
              </Button>
            </div>
            
            <div className='d-flex justify-content-center'>   
              <textarea className="form-control m-2 mb-4" rows="6" 
                  type='textarea'
                  placeholder={goalText}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            {/* {isLoading && <Loader />} */}
          </Form>
        
          <Button variant='outline-danger mt-2' onClick={deleteThisItem} href='/goals'>
              DELETE GOAL
          </Button>

        </Card>
      </Container>
    </div>
  )
};

export default GoalUpdateScreen;
