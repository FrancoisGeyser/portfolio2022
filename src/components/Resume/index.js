import React from 'react'
import { usePageUpdate } from '../../hooks/usePageUpdate'

const styles = {
  pageOuter: {
    margin: '3rem 0',
    position: 'relative',
    fontFamily: 'EuropaR',
    fontSize: '0.8rem',
    backgroundColor: '#fff',
  },
  pageInner: {
    margin: '30px auto',
    width: '940px',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 100,
  },
  pageSection: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10 0 10 0',
  },

  name: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: '3rem',
    fontWeight: 700,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: '2rem',
  },
  experience: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: '1rem',
  },
  contact: {
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailSection: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  label: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: 15,
  },
  heading: {
    fontSize: '1rem',
    marginBottom: 5,
    fontWeight: 700,
  },
  subheading: {
    fontSize: '0.8rem',
    marginBottom: 5,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: 'lightgray',
    padding: '5px 7px',
  },
  link: {
    fontSize: 'inherit',
    textDecoration: 'inherit',
    color: 'inherit',
  },
  body: {
    marginLeft: '7px',
    marginBottom: '5px',
  },
  skill: {
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    marginBottom: '5px',
  },
}

export const Resume = () => {
  usePageUpdate('resume')
  return (
    <div style={styles.pageOuter} id="resume">
      <div style={styles.pageSection}>
        <div style={styles.name}>
          <span>Francois Geyser</span>
        </div>

        <div style={styles.title}>
          <span>FrontEnd Developer</span>
        </div>

        <div style={styles.contact}>
          <div style={styles.experience}>
            <span style={{ marginRight: '5px' }}>fegeyser@gmail.com</span>
            <span style={{ marginLeft: '5px' }}>+7 999 800 3622</span>
          </div>
          <span>
            I am available for full time positions, contract and project work.
          </span>
        </div>
      </div>

      <div style={styles.pageInner}>
        <div style={styles.pageSection}>
          <span style={styles.label}>Skills</span>

          <div style={styles.detailSection}>
            <span style={styles.heading}>System</span>
            <span style={styles.skill}>Front-end architecture design</span>
            <span style={styles.skill}>State management design</span>
          </div>

          <div style={styles.detailSection}>
            <span style={styles.heading}>Languages</span>
            <span style={styles.skill}>Javascript / Typescript</span>
          </div>

          <div style={styles.detailSection}>
            <span style={styles.heading}>Frameworks</span>
            <span style={styles.skill}>React</span>
            <span style={styles.skill}>NextJS</span>
          </div>

          <div style={styles.detailSection}>
            <span style={styles.heading}>State Management</span>
            <span style={styles.skill}>Redux</span>
            <span style={styles.skill}>Redux-Saga</span>
            <span style={styles.skill}>Redux-Thunk</span>
            <span style={styles.skill}>React-Query</span>
            <span style={styles.skill}>Recoil</span>
          </div>

          <div style={styles.detailSection}>
            <span style={styles.heading}>Styling</span>
            <span style={styles.skill}>CSS</span>
            <span style={styles.skill}>CSS-Modules</span>
            <span style={styles.skill}>SCSS</span>
            <span style={styles.skill}>LESS</span>
            <span style={styles.skill}>Styled-Components</span>
          </div>

          <div style={styles.detailSection}>
            <span style={styles.heading}>Tools</span>
            <span style={styles.skill}>Webpack</span>
            <span style={styles.skill}>Docker</span>
            <span style={styles.skill}>Jira</span>
          </div>
        </div>

        <div style={styles.pageSection}>
          <div style={styles.detailSection}>
            <span style={styles.label}>Work experience (4.5&nbsp;years)</span>

            <div style={styles.detailSection}>
              <span style={styles.heading}>FrontEnd Developer</span>
              <div style={styles.subheading}>
                <span>Hireeex ( 2022/08 - current )</span>
                <span style={{ textAlign: 'right' }}>https://hireeex.com</span>
              </div>
              <span style={styles.body}>(Contract)</span>
              <span style={styles.body}>Update React & Redux</span>
              <span style={styles.body}>
                Add business logic and functionality
              </span>
              <span style={styles.body}>Identify and solve legacy errors</span>
              <span style={styles.body}>Code optimization</span>
              <span style={styles.body}>Stack: React, Redux, Redux-Thunk</span>
            </div>

            <div style={styles.detailSection}>
              <span style={styles.heading}>Freelance Developer</span>
              <div style={styles.subheading}>
                <span>Freelance ( 2022-02 - 2022/08 )</span>
              </div>
            </div>

            <div style={styles.detailSection}>
              <span style={styles.heading}>Middle FrontEnd Developer</span>
              <div style={styles.subheading}>
                <span>Look Online ( 2021/09 - 2022/01 )</span>
                <span style={{ textAlign: 'right' }}>https://look.online</span>
              </div>
              <span style={styles.body}>(Full time)</span>
              <span style={styles.body}>
                Create new components and business logic
              </span>
              <span style={styles.body}>
                Restyling of pages as designs are updated
              </span>
              <span style={styles.body}>Create new admin portal</span>
              <span style={styles.body}>
                Stack: NextJS, React, Recoil, Less / SCSS-Modules,
              </span>
            </div>

            <div style={styles.detailSection}>
              <span style={styles.heading}>Middle FrontEnd Developer</span>
              <div style={styles.subheading}>
                <span>YouCoach ( 2021/05 - 2021/08 )</span>
              </div>
              <span style={styles.body}>(Contract / Startup)</span>
              <span style={styles.body}>Create MVP</span>
              <span style={styles.body}>Implement SSR</span>
              <span style={styles.body}>
                Design and develop component library
              </span>
              <span style={styles.body}>
                Design and develop frontend architecture
              </span>
              <span style={styles.body}>
                Design and develop state management system
              </span>
              <span style={styles.body}>
                Implement e2e, integration and unit testing
              </span>
              <span style={styles.body}>
                Stack: Node, TypeScript, React, React-Router, React-Query,
                Styled-Components, GSAP, StoryBook, Jest, React-Testing-Library,
                Cypress
              </span>
            </div>

            <div style={styles.detailSection}>
              <span style={styles.heading}>Middle FrontEnd Developer</span>
              <div style={styles.subheading}>
                <span>TalkTime LLC ( 2021/02 - 2021/05 )</span>
                <span style={{ textAlign: 'right' }}>https://talktime.ru</span>
              </div>
              <span style={styles.body}>(Full time)</span>
              <span style={styles.body}>Convert MVP to full product</span>
              <span style={styles.body}>
                Create custom components and business locig removing all ui
                library components
              </span>
              <span style={styles.body}>
                Design and develop state management system
              </span>
              <span style={styles.body}>
                Implement e2e, integration and unit testing
              </span>
              <span style={styles.body}>
                Stack: Webpack, TypeScript, React, React-Router, Redux,
                Redux-saga, Styled-Components, Formik, Jest, Cypress,
                React-Testing-Library
              </span>
            </div>

            <div style={styles.detailSection}>
              <span style={styles.heading}>Freelance Developer</span>
              <div style={styles.subheading}>
                <span>Freelance ( 2018-02 - 2021/02 )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
