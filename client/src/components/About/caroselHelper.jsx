import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Button } from 'react-bootstrap';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export default function CarouselHelper({ index , set}){
    switch(index){
        case 0:
            return (
          <div className='d-flex justify-content-around'>
             <Button type="button" className="carousel-button disable"   >
              <ChevronLeftIcon fontSize="large" />
            </Button>
            <div  className='d-flex justify-content-around '>
                 <RadioButtonCheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
               
            </div>
               
                <Button type="button" className="carousel-button" onClick={() => {  set(index + 1) }}>
              <NavigateNextIcon fontSize="large" />
            </Button>
            </div>)
        break;
        case 1:
            return (
            <div className='d-flex justify-content-around'>
                 <Button type="button" className="carousel-button"   onClick={() => { set(index - 1) }}>
              <ChevronLeftIcon fontSize="large" />
            </Button>
            <div  className='d-flex justify-content-around '>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonCheckedIcon className='carousel-indicator'/>
             
                
            </div>
            <Button type="button" className="carousel-button disable" >
              <NavigateNextIcon fontSize="large" />
            </Button>
            </div>)
        break;
        case 2:
            return (
            <div className='d-flex justify-content-around'>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonCheckedIcon className='carousel-indicator'/>
            </div>)
        break;
        default:
            return (
            <div className='d-flex justify-content-around'>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
            </div>)

    }
} 