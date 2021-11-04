import * as React from 'react'

const Portfolio = () => (
    <section className="section is-hidden-mobile">
        <div className="container">
            <h3 className="title has-text-centered is-size-4">Portfolio</h3>
            <div className="columns mt-5 is-8 is-variable is-centered">
                <div className="column is-4-tablet is-3-desktop">
                    <div className="card">
                        <div className="card-image has-text-centered px-6">
                            <img src="./assets/password_gen.png"
                                alt="A screenshot of password generator for a web-development assignment" />
                        </div>
                        <div className="card-content">
                            <p className="title is-size-5">Password Generator</p>
                            <p className="">
                                This application is a password generator. <br /><br />
                                The user is offered parameter prompts that result in a
                                customized, randomized password.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <a href="https://lukemcm89.github.io/Password-Generator/" className="has-text-grey">View
                                    App</a>
                            <p className="card-footer-item">
                                <a href="https://github.com/LukeMcM89/Password-Generator" className="has-text-grey">View
                                    Repository</a>
                            </p>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="div.column is-4-tablet is-3-desktop">
                    <div className="card">
                        <div className="card-image has-text-centered px-6">
                            <img src="./assets/Project_Horoscope.png"
                                alt="A screenshot of a web-development project with a lunar API"
                                alt="A screenshot of a password generator web-application" />
                        </div>
                        <div className="card-content">
                            <p className="title is-size-5">Horoscope Project</p>
                            <p className="">
                                This group project features an Astrological Chart API as well
                                as a Lunar Phase API. <br />
                                <br />
                                When a user inputs their birth information, they are presented
                                with their horoscope reading. The current phase of the lunar
                                cycle for that day is also available.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <a href="https://lukemcm89.github.io/Project-Horoscope/" className="has-text-grey">View
                                    Project</a>
                            <p className="card-footer-item">
                                <a href="https://github.com/LukeMcM89/Project-Horoscope" className="has-text-grey">View
                                    Repository</a>
                            </p>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <div className="card">
                        <div className="card-image has-text-centered px-6">
                            <img src="./assets/day_planner.png" alt="A screenshot of a day-planner web-application" />
                        </div>
                        <div className="card-content">
                            <p className="title is-size-5">Day Planner</p>
                            <p className="">
                                This application allows the user to schedule events, notes,
                                etc. within specified time slots to help schedule their day.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <a href="https://lukemcm89.github.io/Day-Planner/" className="has-text-grey">View App</a>
                            <p className="card-footer-item">
                                <a href="https://github.com/LukeMcM89/Day-Planner" className="has-text-grey">View
                                    Repository</a>
                            </p>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h3 className="title has-text-centered is-size-4"></h3>
            <div className="columns mt-5 is-8 is-variable is-centered">
                <div className="column is-4-tablet is-3-desktop">
                    <div className="card">
                        <div className="card-image has-text-centered px-6">
                            <img src="./assets/Employee_MGMT.png"
                                alt="A screenshot of password generator for a web-development assignment" />
                        </div>
                        <div className="card-content">
                            <p className="title is-size-5">Employee MGMT</p>
                            <p className="">
                                A command-line application designed to manage a company's employee database, utilizing
                                Node.js, Inquirer, and MySQL technologies.<br/><br/>

                                This application is best suited for a companies management team who want total access
                                and discretion concerning the creation of new departments, adding new employees and
                                roles and delineating precise salaries. 
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <a href="https://drive.google.com/file/d/1diwFxzMxjkUXcEmrss-L3ZLmWhY5Mc4t/view" className="has-text-grey">View
                                    Video Tutorial</a>
                            <p className="card-footer-item">
                                <a href="https://github.com/LukeMcM89/Employee-Mgmt-System" className="has-text-grey">View
                                    Repository</a>
                            </p>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="div.column is-4-tablet is-3-desktop">
                    <div className="card">
                        <div className="card-image has-text-centered px-6">
                            <img src="./assets/Proj_2.png" alt="A screenshot of a Covid-19 PPE charity store login page"
                                alt="A screenshot of a password generator web-application" />
                        </div>
                        <div className="card-content">
                            <p className="title is-size-5">PPE Charity Store Project</p>
                            <p className="">
                                This group project features a Covid-19 data API and utilizes Node.js, Handlebars,
                                Express, Sequelize, Bcrypt, cookies, Heroku and other NPM modules.<br/>
                                <br />
                                A user is able create a profile and browse a list of PPE items with the option to
                                request PPE products for their organization of choice, as well as offer to donate these
                                PPE product requests.<br/><br/> This project was inspired by the realities of global PPE
                                supply-chain shortages and individuals being unable to receive
                                or purchase basic and oftentimes required PPE items.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <a href="https://charity-store.herokuapp.com/" className="has-text-grey">View Project</a>
                            <p className="card-footer-item">
                                <a href="https://github.com/LukeMcM89/Project2_PPE_Charity_OnlineStore"
                                    className="has-text-grey">View Repository</a>
                            </p>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <div className="card">
                        <div className="card-image has-text-centered px-6">
                            <img src="./assets/Note_Taker.png" alt="A screenshot of a day-planner web-application" />
                        </div>
                        <div className="card-content">
                            <p className="title is-size-5">Note Taker</p>
                            <p className="">
                                An application that allows the user to write and save notes/memos.<br/><br/>This
                                application uses
                                an Express.js back-end which saves and retrieves note data from a JSON file.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <a href="https://intense-waters-82520.herokuapp.com/" className="has-text-grey">View App</a>
                            <p className="card-footer-item">
                                <a href="https://github.com/LukeMcM89/Note-Taker" className="has-text-grey">View
                                    Repository</a>
                            </p>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
)


export default Portfolio