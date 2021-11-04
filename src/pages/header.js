import * as React from 'react'
import Layout from '../components/Layout'

//about me + portfolio + contact 

const Header = () => (
    <>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html">
                    <img src="" />
                </a>
            </div>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="portfolioBasicBar"></a>
            <div id="portfolioBasicBar" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="index.html">
                        Home
                    </a>
                    <a class="navbar-item" href="my-work.html">
                        Portfolio
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="contact.html">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
            </div>
        </nav>
    </>
)

export default Header