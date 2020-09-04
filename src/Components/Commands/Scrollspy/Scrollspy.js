import React, { Component } from "react";
import M from "materialize-css";

import Casino from '../Sections/Casino';
import Forts from '../Sections/Forts';
import Images from '../Sections/Images';
import Tarkov from '../Sections/Tarkov'
import Miscellaneous from "../Sections/Miscellaneous";
import Moderation from "../Sections/Moderation";
import Music from "../Sections/Music";
import OSRS from "../Sections/OSRS";
import Overwatch from "../Sections/Overwatch";
import Sidebar from './Sidebar'

class Scrollspy extends Component {
    componentDidMount() {
        M.ScrollSpy.init(this.ScrollSpy1);
        M.ScrollSpy.init(this.ScrollSpy2);
        M.ScrollSpy.init(this.ScrollSpy3);
        M.ScrollSpy.init(this.ScrollSpy4);
        M.ScrollSpy.init(this.ScrollSpy5);
        M.ScrollSpy.init(this.ScrollSpy6);
        M.ScrollSpy.init(this.ScrollSpy7);
        M.ScrollSpy.init(this.ScrollSpy8);
        M.ScrollSpy.init(this.ScrollSpy9);
    }

    render() {
        return (
            <div class="row">
                <div class="col s12 m9 l10">
                    <div>
                        <h3
                            id="casino"
                            ref={ScrollSpy => {
                                this.ScrollSpy1 = ScrollSpy;
                            }}
                            className="section scrollspy"
                            className="purple-text darken-2"
                        />
                        <Casino />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy2 = ScrollSpy;
                        }}
                        id="forts"
                        class="section scrollspy"
                    >
                        <Forts />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy3 = ScrollSpy;
                        }}
                        id="images"
                        class="section scrollspy"
                    >
                        <Images />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy4 = ScrollSpy;
                        }}
                        id="misc"
                        class="section scrollspy"
                    >
                        <Miscellaneous />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy5 = ScrollSpy;
                        }}
                        id="moderation"
                        class="section scrollspy"
                    >
                        <Moderation />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy6 = ScrollSpy;
                        }}
                        id="music"
                        class="section scrollspy"
                    >
                        <Music />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy7 = ScrollSpy;
                        }}
                        id="osrs"
                        class="section scrollspy"
                    >
                        <OSRS />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy8 = ScrollSpy;
                        }}
                        id="overwatch"
                        class="section scrollspy"
                    >
                        <Overwatch />
                    </div>
                    <div
                        ref={ScrollSpy => {
                            this.ScrollSpy9 = ScrollSpy;
                        }}
                        id="etf"
                        class="section scrollspy"
                    >
                        <Tarkov />
                    </div>
                </div>
                <Sidebar />
            </div>
        );
    }
}

export default Scrollspy;
