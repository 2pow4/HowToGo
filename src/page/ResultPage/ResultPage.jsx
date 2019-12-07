import React from 'react';
import Result from '../../component/Result/Result';
import Map from '../../component/Map/Map';
import SearchBar from '../../component/SearchBar/SearchBar';
import './resultpage.css'

const ResultPage = () => (
    <>
        <SearchBar searchbarType='result'/>            
        <div className='result-page layout-horizontal-center'>
            <Result/>
            <Map/>
        </div>
    </>
)
export default ResultPage
