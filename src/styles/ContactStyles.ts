import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f2f7f4;
`;

export const Section = styled.section`
  max-width: 1200px;
  max-height: 832px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.55rem;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  color: #010a03;
  position: absolute;
  top: 34vh;
  left: 33%;
  width: 18vw;
  height: 9vh;
  transform: translateX(-85%);
  text-align: left;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: auto;
    top: 75px;
    font-size: 2rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-top: 3%;
  transform: translateY(38%);
  margin-left: -1.4%;

  @media (max-width: 768px) {
    max-width: 272px;
    padding: 20px;
    margin-top: 60px;
    transform: translateY(0);
    margin-left: 0;
  }
`;

export const FormWrapper = styled.div`
  background-color: #19a530;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 521px;
  width: 521px;
  height: 389px;
  gap: 8px;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 272px;
    height: auto;
    padding: 16px;
    border-radius: 24px;
    margin-top: -50px;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 480px;
  height: 34px;
  padding: 4px 24px;
  margin-bottom: 8px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background-color: #f2f7f4;
  color: grey;
  resize: none;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 1rem;
    max-width: 100%;
    width: 50vw;
    height: 1.4vh;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 480px;
  height: 203px;
  padding: 4px 24px;
  margin-bottom: 8px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  background-color: #f2f7f4;
  color: grey;
  resize: none;

  @media (max-width: 768px) {
    height: 120px;
    padding: 12px;
    font-size: 1rem;
    max-width: 100%;
    width: 50vw;
  }
`;

export const SubmitButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: #f2f7f4;
  color: #010a03;
  border: 2px solid #cee0d0;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  width: 106px;
  height: 44px;

  &:hover {
    background-color: ${colors.secondary};
    color: #f2f7f4;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 25vw;
    radius: 12px;
    align-self: flex-start;
  }
`;

export const TeamImages = styled.div`
  display: flex;
  align-items: center;
  margin-top: -45px;
  margin-left: 52vw;
  align-self: flex-end;
  height: auto;

  @media (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0;
    justify-content: center;
  }
`;

export const TeamImage = styled.img`
  width: 67.5px;
  height: 67.5px;
  border-radius: 33.75px;
  border: 2.25px;
  margin-right: -20px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: -23px;
    left: 45px;
  }
`;

export const ReplyText = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: ${typography.fontWeight.bold};
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 5rem;
    text-align: left;
    width: 35vw;
  }
`;

export const FAQSection = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const FAQTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  font-family: Poppins, sans-serif;
  margin-bottom: 40px;
  color: #010a03;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const FAQGrid = styled.div`
  display: flex;
  justify-content: space-around;
  overflow-x: auto; /* Enable horizontal scroll */
  overflow-y: hidden; /* Enable horizontal scroll */
  // scrollbar-width: none; /* Hide scrollbar for Firefox */
  // -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
  height: 421px;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }

  @media (min-width: 769px) {
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefox */
  }
`;

export const FAQItem = styled.div`
  background-color: #19a530;
  color: #f2f7f4;
  padding: 24px;
  border-radius: 24px;
  margin: 10px;
  flex: 1;
  max-width: 366px;
  font-family: Poppins, sans-serif;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    flex: none;
    width: 300px;
    scroll-snap-align: start;
  }
`;

export const Question = styled.div`
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 35px;
  width: 240px;
  height: 32px;
  line-height: 22px;
  letter: -0.43px;

  @media (max-width: 768px) {
    margin-left: 1.81rem;
  }
`;

export const Answer = styled.div`
  font-size: 0.9rem;
  width: 240px;
  height: 95px;
  weight: 400;
  size: 13px;
  margin-left: 35px;
  line-height: 18px;
  letter: -0.08px;
  display: none;
  &.active {
    display: block;
  }

  @media (max-width: 768px) {
    margin-left: 1.81rem;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #f2f7f4;
  margin-left: 35px;
  margin-bottom: 10px;
  width: 70%;

  @media (max-width: 768px) {
    margin-left: 1.81rem;
  }
`;