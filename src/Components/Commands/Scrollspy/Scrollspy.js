import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


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
            <div className="row commands-body">
                {/* s12 m9 l10 */}
                <div className="commands-right">
                    <div className="col s12 m9 l10">
                        <div>
                            <h3
                                id="casino"
                                ref={ScrollSpy => {
                                    this.ScrollSpy1 = ScrollSpy;
                                }}
                                className="white-text section scrollspy"
                            />
                            <Casino />
                        </div>
                        <div
                            ref={ScrollSpy => {
                                this.ScrollSpy2 = ScrollSpy;
                            }}
                            id="forts"
                            className="section scrollspy"
                        >
                            <Forts />
                        </div>
                        <div
                            ref={ScrollSpy => {
                                this.ScrollSpy3 = ScrollSpy;
                            }}
                            id="images"
                            className="section scrollspy"
                        >
                            <Images />
                        </div>
                        <div
                            ref={ScrollSpy => {
                                this.ScrollSpy4 = ScrollSpy;
                            }}
                            id="misc"
                            className="section scrollspy"
                        >
                            <Miscellaneous />
                        </div>
                        <div
                            ref={ScrollSpy => {
                                this.ScrollSpy5 = ScrollSpy;
                            }}
                            id="moderation"
                            className="section scrollspy"
                        >
                            <Moderation />
                        </div>
                        <div
                            ref={ScrollSpy => {
                                this.ScrollSpy6 = ScrollSpy;
                            }}
                            id="music"
                            className="section scrollspy"
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
                </div>
                <div className="commands-left">
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Scrollspy;
