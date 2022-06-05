import React from "react";


export default function Body() {
    return (
        <div className="contain">
            <div className="nav-bg">
                <nav className='navigation'>


                    <h3 className='brand'>
                        Atomic
                    </h3>
                    <input type="checkbox" id="check" />
                    {/* <div className="parent"> */}
                    <label for="check" class="check-btn">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </label>
                    {/* </div> */}

                    <ul>

                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            FAQs
                        </li>
                        <li>
                            Contact
                        </li>

                    </ul>

                </nav>

                <div className="container">
                    {/* <div> */}
                    <h2 className="heading">
                        Design a better <br /> website template.
                    </h2>
                    <p className="para">
                        This guide on how to make a free professional website is useful for users of all skill levels.
                        You will also discover proven ways to make money from your website in Nigeria.
                    </p>
                    <a target="_blank" href="https://..." rel="noreferrer" id="btn">
                        Start for free
                    </a>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
