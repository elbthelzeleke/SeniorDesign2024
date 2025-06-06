# CS5002 Final Design Report  
**Project Title: Smart Home Accessibility Control Interface**  
[GitHub Repository](https://github.com/elbthelzeleke/SeniorDesign2024)

---

## 📑 Table of Contents
1. [Project Description](#1-project-description)  
2. [User Interface Specification](#2-user-interface-specification)  
3. [Test Plan and Results](#3-test-plan-and-results)  
4. [User Manual](#4-user-manual)  
5. [Spring Final PPT Presentation](#5-spring-final-ppt-presentation)  
6. [Final Expo Poster](#6-final-expo-poster)  
7. [Assessments](#7-assessments)  
    - [Initial Self-Assessments (Fall)](#71-initial-self-assessments-fall)  
    - [Final Self-Assessments (Spring)](#72-final-self-assessments-spring)  
8. [Summary of Hours and Justification](#8-summary-of-hours-and-justification)  
9. [Summary of Expenses](#9-summary-of-expenses)  
10. [Appendix](#10-appendix)  

---

## 1. Project Description
**Abstract (≤400 characters):**  
A customizable smart home dashboard that adapts to user accessibility needs, allowing control of devices and routines with an emphasis on inclusive design, voice commands, and visual accessibility. The system enables unified control of IoT devices (lights, thermostats, security) and automated routines, with priority given to inclusive design such as screen reader compatibility, reduced-motion options, and one-tap emergency actions. 

**Final Project Description:**  
Describe final functionality, architecture, and features. Summarize goals and outcomes, including how the project evolved over time.

---

## 2. User Interface Specification
Screenshots are included in the Poster on the GitHub
---

## 3. Test Plan and Results

### Test Methodology

Our testing strategy included both **manual testing** and **unit testing**, with a focus on ensuring the system’s functionality, accessibility, and robustness across different user profiles. We prioritized manual testing for front-end UI components and interaction flows, while unit testing was applied to core backend logic such as device toggling, routine scheduling, and settings configuration.

#### Manual Testing
- Performed on Chrome and Edge browsers
- Focused on UI responsiveness, accessibility features (large text, contrast mode), and voice integration toggles
- User scenarios tested: login, profile editing, toggling devices, creating/deleting routines

#### Unit Testing
- Backend components (e.g., device controller, routine handler)
- Simulated input/output using mock data
- Ensured valid state updates and consistent data storage behavior

### Key Takeaways
- Manual testing helped us uncover interaction edge cases not caught in unit tests.
- Testing with diverse user profiles highlighted UI flexibility strengths and prompted refinements (e.g., better alignment in large-text mode).
- We used GitHub Issues to track and resolve bugs collaboratively across backend and frontend components.
---

## 4. User Manual

### Overview

The user manual explains how to operate the smart home interface, including logging in (account creation and secure login procedures and connecting to your home network), customizing preferences (adjusting visual settings, configuring voice command preferences, and creating and managing user profiles), managing devices (adding and removing smart devices, organizing devices by room or function, and troubleshooting connection issues), and setting up routines (editing and deleting existing automation and setting up emergency protocols). Available in our GitHub repository.

---

### Frequently Asked Questions (FAQ)
EG.
> **Q: What should I do if a smart device isn't responding in the app?**  
**A:** The device will show an "offline" status. Please check your network connection or restart the smart device. The dashboard attempts auto-refresh every 30 seconds.

> **Q: How do I make the interface easier to use with my screen reader?**  
**A:** We offer multiple accessibility enhancements such as enable "Screen Reader Mode" in Settings > Accessibility.

---

## 5. Spring Final PPT Presentation
- Included in GitHub

---

## 6. Final Expo Poster
- Included in GitHub

---

## 8. Summary of Hours and Justification

| Name              | Fall Hours | Spring Hours | Total Hours | Justification |
|-------------------|------------|---------------|-------------|----------------|
| Daniel Chandler   | 10 hrs     | 10 hrs        | 25 hrs      | We all worked together
| Elbthel Zeleke    | 10 hrs     | 15 hrs        | 20 hrs      | spending little time on the conseptual
| Salma Mohammad    | 10 hrs     | 11 hrs        | 25 hrs      | phase compared to the crunch
| Quoc Luong        | 10 hrs     | 15 hrs        | 20 hrs      | of the actual coding phase

---

## 9. Summary of Expenses

| Item                    | Cost     | Donated By             | Purpose                              |
|-------------------------|----------|------------------------|--------------------------------------|  
| GitHub                  | $0       | GitHub                 | Code repository & project management |
| VS Code                 | $0       | Microsoft              | Primary development IDE              |
| Figma                   | $0       | Figma Education License| UI/UX design & prototyping           |

