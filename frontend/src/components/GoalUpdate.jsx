import { Container, Card, Button } from 'react-bootstrap';

const GoalUpdate = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-3 d-flex flex-column align-items-center hero-card bg-light w-75'>
          
          <h2 className='text-center mb-4'>View & Update current note!</h2>
          
          <div className='d-flex gap-4'>
            <Button type='submit' href='/goals' >
              UPDATE
            </Button>
            <Button variant='secondary' href='/goals'>
              CANCEL
            </Button>
          </div>

          <textarea className="form-control m-2 mb-4" rows="6"></textarea>

          <Button variant='outline-danger' href='/goals'>
              DELETE GOAL
          </Button>
        </Card>

        
      </Container>
    </div>
  );
};

export default GoalUpdate