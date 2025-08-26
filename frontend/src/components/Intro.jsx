import { Container, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Intro = () => {

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MY NOTES</h1>
          <p className='text-center mb-4'>
            This is Note app on top of the <a href='https://www.traversymedia.com/blog/mern-crash-course-part-1'>MERN authentication</a>.
            It uses Redux Toolkit and React Bootstrap library, Vite & Express & MongoDB. 
          </p>

          {userInfo ? (
            <div className='d-flex'>
              <Button variant='primary' href='/goals' className='me-3'>
                View My Notes
              </Button>
            </div>
            ) : (
            <div className='d-flex'>
              <Button variant='primary' href='/login' className='me-3'>
                Sign In
              </Button>
              <Button variant='secondary' href='/register'>
                Register
              </Button>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Intro;
