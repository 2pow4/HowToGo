import React from 'react';
import Slide from 'react-reveal/Slide'
import './description.css';

class Description extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="description-body">
                <Slide right duration={2000}>
                    <div className="box-left">
                        <h1>Step 1</h1>
                        <p>가고 싶은 지역과 날짜를 골라</p>
                        <p>검색 버튼을 클릭하세요!</p>
                    </div> 
                </Slide>
                <Slide left duration={2000}>
                    <div className="box-right">
                        <h1>Step 2</h1>
                        <p>결과 창에서</p>
                        <p>비행기, 기차, 버스별 교통편을</p>
                        <p>출발시간, 소요시간, 가격 순으로</p>
                        <p>정렬해서 확인하세요!</p>
                    </div>
                </Slide>
                <Slide right duration={2000}>
                    <div className="box-left">
                        <h1>Step 3</h1>
                        <p>마음에 드는 교통편을 클릭하면</p>
                        <p>해당 교통편 예매 사이트로 이동합니다.</p>
                    </div>
                </Slide>
            </div>
        )
    }

}

export default Description