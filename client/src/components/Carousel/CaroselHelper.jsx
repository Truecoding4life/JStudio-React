import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Button } from 'react-bootstrap';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function CarouselHelper({ index, set }) {
    switch (index) {
        case 0:
            return (
                <div className='d-flex justify-content-around flex-column'>
                    <Button type="button" className="carousel-button disable"   >
                        <ArrowUpwardIcon fontSize="medium" />
                    </Button>
                    <div className='d-flex justify-content-around m-auto flex-column '>
                        <RadioButtonCheckedIcon className='carousel-indicator' />
                        <RadioButtonUncheckedIcon className='carousel-indicator' />
                        <RadioButtonUncheckedIcon className='carousel-indicator' />

                    </div>

                    <Button type="button" className="carousel-button" onClick={() => { set(index + 1) }}>
                        <ArrowDownwardIcon fontSize="medium" />
                    </Button>
                </div>)
            break;
        case 1:
            return (
                <div className='d-flex justify-content-around  flex-column'>
                    <Button type="button" className="carousel-button" onClick={() => { set(index - 1) }}>
                        <ArrowUpwardIcon fontSize="medium" />
                    </Button>
                    <div className='d-flex justify-content-around m-auto flex-column '>
                        <RadioButtonUncheckedIcon className='carousel-indicator' />
                        <RadioButtonCheckedIcon className='carousel-indicator' />
                        <RadioButtonUncheckedIcon className='carousel-indicator' />


                    </div>

                    <Button type="button" className="carousel-button" onClick={() => { set(index + 1) }}>
                        <ArrowDownwardIcon fontSize="medium" />
                    </Button>
                </div>)
            break;
        case 2:
            return (
                <div className='d-flex justify-content-around flex-column'>
                    <Button type="button" className="carousel-button" onClick={() => { set(index - 1) }}>
                        <ArrowUpwardIcon fontSize="medium" />
                    </Button>
                    <div className='d-flex justify-content-around m-auto flex-column'>
                        <RadioButtonUncheckedIcon className='carousel-indicator'/>
                        <RadioButtonUncheckedIcon className='carousel-indicator'/>
                        <RadioButtonCheckedIcon className='carousel-indicator' />
                    </div>

                    <Button type="button" className="carousel-button disable" >
                        <ArrowDownwardIcon fontSize="medium" />
                    </Button>
                </div>
            )
            break;
        default:
            return (
                <div className='d-flex justify-content-around flex-column'>
                <Button type="button" className="carousel-button disable">
                    <ArrowUpwardIcon fontSize="medium" />
                </Button>
                <div className='d-flex justify-content-around m-auto flex-column'>
                    <RadioButtonUncheckedIcon className='carousel-indicator' />
                    <RadioButtonUncheckedIcon className='carousel-indicator' />
                    <RadioButtonUncheckedIcon className='carousel-indicator' />
                </div>
                <Button type="button" className="carousel-button disable" >
                        <ArrowDownwardIcon fontSize="medium" />
                    </Button>


                </div>
                )

    }
} 