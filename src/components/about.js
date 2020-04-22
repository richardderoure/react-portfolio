import React from "react"
// import SkillBar from 'react-skillbars';

const Skills = [
    {type: "Java", level: 85},
    {type: "Javascript", level: 75}
]

const About = () => {
    return (
        <React.Fragment>
        <p className="aboutMe">Aliqua magna quis officia sit et eu ex ullamco exercitation qui sint dolor. Sint voluptate sint magna eiusmod. Veniam adipisicing consectetur proident eiusmod in cupidatat sint reprehenderit dolor dolore. Laboris sint reprehenderit commodo sunt adipisicing ullamco deserunt dolore magna eiusmod ullamco exercitation esse reprehenderit.
        <br /><br />
        Commodo commodo consectetur in reprehenderit aute ut Lorem laboris deserunt exercitation sit deserunt irure. Pariatur cupidatat pariatur aute irure laborum occaecat veniam reprehenderit culpa dolor mollit labore officia exercitation. Velit mollit commodo quis est et consequat.
        <br /><br />
        Enim veniam minim ex anim non ea deserunt. Ex do consectetur dolor exercitation ut esse labore aute est velit. Veniam irure ea in et sit sunt reprehenderit mollit veniam magna pariatur ad. Sunt excepteur ut dolore fugiat dolore.</p>
        {/* <SkillBar skills={Skills}/> */}
        </React.Fragment>
     );
}
 
export default About;