import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function CarouselHelper({ index }){
    switch(index){
        case 0:
            return (
          <div className='d-flex justify-content-around'>
                <RadioButtonCheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
            </div>)
        break;
        case 1:
            return (
            <div className='d-flex justify-content-around'>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
                <RadioButtonCheckedIcon className='carousel-indicator'/>
                <RadioButtonUncheckedIcon className='carousel-indicator'/>
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