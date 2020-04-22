import React from "react"
import SkillBar from 'react-skillbars';

const Skills = [
    {type: "HTML", level: 80},
    {type: "CSS", level: 50},
    {type: "Javascript", level: 60},
    {type: "ReactJS", level: 40},
    {type: "NodeJS", level: 40},
    {type: "Python", level: 60}
]

const About = () => {
    return (
        <React.Fragment>
        <p className="aboutMe">Aliqua magna quis officia sit et eu ex ullamco exercitation qui sint dolor. Sint voluptate sint magna eiusmod. Veniam adipisicing consectetur proident eiusmod in cupidatat sint reprehenderit dolor dolore. Laboris sint reprehenderit commodo sunt adipisicing ullamco deserunt dolore magna eiusmod ullamco exercitation esse reprehenderit.
        <br /><br />
        Commodo commodo consectetur in reprehenderit aute ut Lorem laboris deserunt exercitation sit deserunt irure. Pariatur cupidatat pariatur aute irure laborum occaecat veniam reprehenderit culpa dolor mollit labore officia exercitation. Velit mollit commodo quis est et consequat.
        <br /><br />
        Enim veniam minim ex anim non ea deserunt. Ex do consectetur dolor exercitation ut esse labore aute est velit. Veniam irure ea in et sit sunt reprehenderit mollit veniam magna pariatur ad. Sunt excepteur ut dolore fugiat dolore.Cillum enim ex qui mollit sunt fugiat in sint. Lorem est eiusmod exercitation cupidatat. Aliquip minim laborum cillum consectetur incididunt elit magna quis nisi. Id aliqua sunt elit in aliqua tempor eiusmod voluptate non. Incididunt fugiat anim ut dolor voluptate deserunt excepteur culpa.
        <br /><br />
        Officia eiusmod consectetur nostrud magna. Consectetur Lorem enim fugiat elit est ad quis reprehenderit ut officia. Dolore veniam exercitation nulla cillum cupidatat amet aliqua veniam commodo. Aliquip occaecat consectetur nostrud velit mollit incididunt. Ullamco nostrud magna aute quis incididunt. Nulla qui labore sunt magna eiusmod do elit non. Cupidatat ea amet Lorem duis laboris nulla qui minim proident officia.

        Consectetur in enim labore id fugiat ipsum reprehenderit esse non nostrud. Non est dolor eu et ipsum dolore consequat ipsum. Aliquip deserunt id non ad eiusmod ipsum nulla tempor consectetur laboris enim nisi magna. Pariatur laborum do aliqua esse deserunt ullamco commodo aliqua. Fugiat aliqua nostrud aliqua aliquip reprehenderit aliqua labore velit. Eiusmod aute aliqua dolore non non amet elit aliqua aute culpa eiusmod laborum anim ut. Quis fugiat adipisicing nisi nulla exercitation elit non commodo fugiat ut consequat dolor.
        </p>
        <div className="Skillbar">
        {<SkillBar skills={Skills}/>}
        </div>
        </React.Fragment>
     );
}
 
export default About;