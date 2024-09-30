import { useState } from "react";
import styled from "styled-components";

// Styled Components
const MainWrapper = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StepsWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

const StepsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Step = styled.span`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgb(222, 222, 222);
  border-radius: 50%;
  color: rgb(135, 135, 135);
  background: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 600;
  transition: 200ms ease;
  ${props =>
    props.active &&
    `
    color: var(--primary);
    border-color: var(--primary);
    transition-delay: 100ms;
  `}
`;

const ProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgb(222, 222, 222);
  z-index: -1;
`;

const Progress = styled.span`
  position: absolute;
  height: 100%;
  background: var(--primary);
  transition: 300ms ease;
  width: ${props => props.width}%;
`;

const ButtonsContainer = styled.div`
  margin-block-start: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  background: var(--primary);
  color: var(--white);
  cursor: pointer;
  transition: 200ms linear;

  &:active {
    scale: 0.9;
  }

  &:hover:not(&:disabled) {
    background: var(--darker);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--lighter);
    pointer-events: none;
  }
`;

const StepProgress = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4];

  const handleNext = () => {
    setCurrentStep(prevStep =>
      prevStep < steps.length ? prevStep + 1 : prevStep
    );
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <MainWrapper>
      <StepsWrapper>
        <StepsContainer>
          {steps.map((step, index) => (
            <Step key={index} active={index < currentStep}>
              {step}
            </Step>
          ))}
          <ProgressBar>
            <Progress width={((currentStep - 1) / (steps.length - 1)) * 100} />
          </ProgressBar>
        </StepsContainer>

        <ButtonsContainer>
          <Button onClick={handlePrev} disabled={currentStep === 1}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={currentStep === steps.length}>
            Next
          </Button>
        </ButtonsContainer>
      </StepsWrapper>
    </MainWrapper>
  );
};

export default StepProgress;
