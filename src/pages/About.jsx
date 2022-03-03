import styled from 'styled-components'

import AboutPicture from '../assets/AboutPicture.png'

import { PRIMARY_COLOR } from '../lib/constants/colors'
import { FaLinkedinIn, FaLinkedin } from 'react-icons/fa'
import { MdMailOutline, MdEmail } from 'react-icons/md'

export const LinkedInIcon = styled(FaLinkedinIn)`
  margin-left: 10px;
  color: ${PRIMARY_COLOR};
  background-color: white;
  font-size: 1.2rem;

  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 5px;
  padding: 5px;

  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${PRIMARY_COLOR};
  }
`

export const MailIcon = styled(MdMailOutline)`
  margin-right: 1px; # THIS IS FOR THE SPACING

  margin-right: 15px;
  color: ${PRIMARY_COLOR};
  background-color: white;
  font-size: 1.2rem;
  
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 5px;
  padding: 5px;

  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${PRIMARY_COLOR};
  }
`

export const ResumeButton = styled.div`
  width: 100px;
  display: flex; 
  alignItems: center;
  justifyContent: center;
  border: 2px solid ${PRIMARY_COLOR};
  padding: 8px;
  color: ${PRIMARY_COLOR};
`

const About = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5%'}}>
      <img style={{ width: '30%', marginRight: '3%', backgroundColor: 'red'}} src={AboutPicture} alt='Jasmin' />
      <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-start', width: '30%', height: '100%'}}>
        <h1 style={{margin: 0}}>Hello, I'm Jasmin</h1>
        <p style={{fontSize: '14px'}}>I'm a UX designer insdvokndslvndslnv sdkvnlsdnvdl jdnvjnv jdbvkjbvn jdbvkjv jdb vkjv bjdkvkjdbv jkd vbkdjbv kjd bvkdjbvckdbvckd</p>

        <div style={{display: 'flex', flexDirection: 'column', marginTop: 'auto'}}>
          <div style={{width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${PRIMARY_COLOR}`, padding: '8px', color: PRIMARY_COLOR}}>
            <p style={{margin: 0}}>Resume</p>
          </div>
          <div style={{display: 'flex', marginTop: '5%'}}>
            <MailIcon />
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jasmin-elshal-a04991222/', '_blank')}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
