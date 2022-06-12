import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logout } from '../commonUtils/commonUtils';
import { clearUserStates, setTableNo } from '../redux/slices/userSlice';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 15,
      top: 13,
      
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 8px',
    },
  }));
function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout =async()=>{
        let response = await logout()
        if(response && response == 200){
            dispatch(clearUserStates())
            dispatch(setTableNo(0))
            navigate("/")
        }
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >Fine Dine</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
            <IconButton aria-label="cart" onClick={()=>navigate('/cart')}>
    <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon className='icons'/>
    </StyledBadge>
</IconButton>
          <Form className="d-flex">
          
            <Button variant="outline-success" onClick={handleLogout} >Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;