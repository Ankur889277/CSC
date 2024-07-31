import React from 'react'
import styled from 'styled-components'
import FlexBox from '../common/UI/Flexbox'
import { Body2,H1 } from '../common/UI/Headings';

const Wrapper = styled(FlexBox)`
    

`;
const index = () => {
  return (
    <Wrapper>
        <FlexBox>
        <H1 bold>Total Materials</H1>
        <Body2> - 160 Materials</Body2>
        </FlexBox>
        <FlexBox>
            
        </FlexBox>
    </Wrapper>
  )
}

export default index
