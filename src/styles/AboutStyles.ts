import styled from 'styled-components';
import { colors, spacing, typography } from './';

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: left;
`;

export const GetStartedButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: ${colors.secondary};
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${colors.primary};
  }
`;

export const Image = styled.img`
  flex: 1;
  max-width: 600px;
  border-radius: 10px;
`;

export const TeamSection = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const TeamTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const TeamGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TeamMember = styled.div`
  text-align: left;
  margin: 10px;
  cursor: pointer;
  position: relative;
  &:hover .bio {
    display: block;
  }
`;

export const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const TeamName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Bio = styled.div`
  display: none;
  position: absolute;
  background: white;
  color: black;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const MissionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const MissionImage = styled.img`
  width: 100%;
  max-width: 1184px;
  height: auto;
  border-radius: 24px;
`;

export const MissionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  padding: 24px;
  background-color: ${colors.primary};
  color: white;
  border-radius: 10px;
  max-width: 435px;
  max-height: hug(370px);
  top: 50%;
  left: 320px;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MissionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MissionParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const MissionButton = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background-color: white;
  color: ${colors.secondary};
  border: 2px solid ${colors.secondary};
  border-radius: 20px;
  font-weight: ${typography.fontWeight.bold};
  width: 133px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
  @media (max-width: 768px) {
    padding: ${spacing.small} ${spacing.medium};
  }
`;
