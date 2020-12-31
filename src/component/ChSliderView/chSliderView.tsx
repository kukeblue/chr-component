import React, { useEffect, useState } from 'react';
import './index.scss'

// var transition = 'transform 300ms ease';
var transition = '';

export default ({ 
	actionNode,   
	children,
 }) => {

	const [ sliderStartX, setSliderStartX ] = useState(0)
	const [ sliderCurrX, setSliderCurrX ] = useState(0)
	const [ sliderOffsetX, setSliderOffsetX ] = useState(0)
	const [ actionAreaWith, setActionAreaWith] = useState(0)


    useEffect(()=>{
		setActionAreaWith(document.getElementsByClassName('ch-slider-action-wrap')[0].clientWidth)
	}, [])

	const startSlide = (e) => {
		e.stopPropagation();
		console.log('拖动开始');
		transition = '';
		setSliderStartX(e.changedTouches[0].pageX)
	}

	const moveSlide = (e) => {
		e.stopPropagation();
		let currX = e.changedTouches[0].pageX - sliderStartX + sliderOffsetX
		if(currX < -100) {
			currX = -100
		}
		if(currX > 100) {
			currX = 100
		}
		setSliderCurrX(currX)
		console.log('SliderCurrX', sliderCurrX)
	}

	const endSlide = (e) => {
		e.stopPropagation();
		transition = 'transform 300ms ease';
		if(sliderCurrX > 0) {
			setSliderCurrX(0)
			setSliderOffsetX(0)
			return
		}
		if(sliderCurrX < -25) {
			setSliderCurrX(-actionAreaWith)
			setSliderOffsetX(-actionAreaWith)

		}else {
			setSliderCurrX(0)
			setSliderOffsetX(0)
		}

	}
	
	const chatBoxEvents = {
		onTouchStart: startSlide,
		onTouchMove: moveSlide,
		onTouchEnd: endSlide
	};

	var chatBoxStyle:{
		transition?: string,
		transform?: string,
	} = {
		transform : 'translate3d(' + sliderCurrX  + 'px'+ ',0px,0)',
	};

	if(transition) {
		chatBoxStyle.transition = transition
	}else {
		delete chatBoxStyle.transition
	}

    return <div className='ch-slider-wrap'>
		<div {...chatBoxEvents} style={chatBoxStyle} className="ch-slider-cell">
			<div  className="ch-slider-handle">
				{children}
			</div>
			<div className="ch-slider-action-wrap">
				{actionNode}
			</div>
		</div>
    </div>
};
