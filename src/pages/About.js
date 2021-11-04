import * as React from 'react'
import Layout from '../components/Layout'

const About = () => (
    <Layout>
    <section className="section has-background-grey-light" id="about">
        <div className="section-heading">
            <h3 className="title is-2">About Me</h3>

            <figure className="image is-16by9">
                <img className="is-rounded" src="./assets/Luke.jpg" 
                    alt="A simple photo of myself self sitting outside with trees in the background"/>
            </figure>

            <h4 className="title is-5">Hi, I'm Luke McMurtrie!</h4>
            <div className="container is-size-5">
                <p>Thank you for taking the time to consider my portfolio! This is the second iteration of my
                    professional web-developer portfolio.

                    I'm 31 years old and currently call Richmond, Virginia my home. Although I was raised here, I
                    earned
                    my Bachelor's in English Literature and Writing from <em>Holy Cross College</em> in Notre Dame,
                    Indiana in
                    2012. I am currently attending a Full Stack Web Development program at the <em>University of
                    Richmond's School for Professional and Continuing Studies</em>. <br/> <br/>My passions include
                    music (I'm a self-taught guitar and synthesizer player), painting, photography, poetry... all things art really.

                    It may also be important to note my obsession with dinosaurs, lightsabers, Leonardo da Vinci,
                    technology, space, stand-up comedy, nature, philosophy, psychology, cooking, the elusive study
                    of
                    conciousness and what it means to be awake and aware.

                    Oh, and I'm a rookie chess player; thanks to one of my younger brothers who has me hooked but
                    constantly enjoys serving me <em>ice-cold</em>, <em>painful</em> and <em>frequent</em> losses.</p>
            </div>
        </div>
    </section>
    </Layout>
)

export default About