/** 
 * @Filename: ListDetail.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 리스트 클릭 시 보여질 상세페이지
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


const DetailContainer=styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 80%;
    margin: auto;
`;

const ListDetail = () => {
    const location = useLocation();
    const { item } = location.state;

//   //path파라미터 값 가져오기
//   const {api,id} = useParams();
//   //redux사용하여 여행지 리스트 가져오기
//   const dispatch = useDispatch();
//   const {data, loading, error} = useSelector((state)=>state.tab);
//   //path파라미터의 여행정보 id값에 해당하는 데이터 요청
//   useEffect(()=>{
//     dispatch(getTabList({
//       api: api,
//       id:id
//     }))
//   },[])

    return (
        <DetailContainer>
            {/* <h1 className='menufont'>관광지,숙박,음식 상세페이지</h1> */}
            
            {/* <h1>{data[0].title}</h1>
            <h1 >{data[0].address}</h1>
            <h1 >{data[0].phoneno}</h1>
            <h1 >{data[0].tag}</h1> */}
            
            <h1>{item.title}</h1>
            <h1>{item.introduction}</h1>
            <h1>{item.address}</h1>
            <h1>{item.tag}</h1>
        </DetailContainer>
    );
};

export default ListDetail;