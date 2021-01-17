import React from 'react'
import styled from 'styled-components'
import BackgroundText from '../backgroundtext'
import HighlightLabel from './highlightLabel'
import Rocket from '../../public/rocketbright.svg'
import Chip from '../../public/chip.svg'
import Surelight from '../../public/surelighticon.svg'
import Princeton from '../../public/PUwhite.svg'


const SurelightStyled = styled(Surelight)`
    height: 100%;
    margin-left: 16px;
    opacity: 70%;
    &:hover {
        transition: 300ms;
        opacity: 100%;
    }
`
const ChipStyled = styled(Chip)`
    height: 100%;
    margin-right: 16px;
    opacity: 70%;
    &:hover {
        transition: 300ms;
        opacity: 100%;
    }
`
const RocketStyled = styled(Rocket)`
    height: 100%;
    margin-right: 16px;

    opacity: 70%;
    &:hover {
        transition: 300ms;
        opacity: 100%;
    }
`

const Row = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
`

const SurelightRow = styled(Row)`
    width: 50%;
    height: 70vh;
    top: 30vh;
`

const ChipRow = styled(Row)`
    width: 50%;
    left: 50%;
    height: 35vh;
    top: 30vh;
`

const RocketRow = styled(Row)`
    width: 40%;
    left: 60%;
    height: 30vh;
    top: 70vh;
`

const SurelightLabel = styled(HighlightLabel)`
    &${SurelightStyled}:hover & {
        background-position-y: 100%;
    }
`

const StudentContainer = styled.div`
    position: relative;
    top: 110vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
`

const SmallPrinceton = styled(Princeton)`
    height: 25vh;
    padding-bottom: 16px;
`

const MajorMinorColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const VerticalDivider = styled.span`
    border-left: 60px solid gold;
    margin: 0 16px;
    height: 300px;
`

const JobsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 48px;
`

const Engineer = () => {
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <BackgroundText text="Engineer" />
            <SurelightRow>
                <SurelightLabel label="Safest Bike light" />
                <SurelightStyled />
            </SurelightRow>
            <ChipRow>
                <ChipStyled />
                <HighlightLabel label="8-bit FPGA design" />
            </ChipRow>
            <RocketRow>
                <RocketStyled />
                <HighlightLabel label="Gimballing rocket motor design" />
            </RocketRow>

            <StudentContainer>
                <MajorMinorColumn>
                    <SmallPrinceton />
                    <h2>Major: Electrical Engineering</h2>
                    <h2>Minor: Computer Science</h2>
                </MajorMinorColumn>
                <VerticalDivider />
                <JobsColumn>
                    <h2>Campus jobs:</h2>
                    <h2>Contemporary Logic Design TA (Electrical Engineering)</h2>
                    <h2>Java TA (Computer Science)</h2>
                    <h2>School of Architecture Lab manager</h2>
                </JobsColumn>
            </StudentContainer>


        </div>
    )
}

export default Engineer