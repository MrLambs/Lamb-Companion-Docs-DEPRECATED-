import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class Sidebar extends Component {
    componentDidMount() {
        const options = {
            top: 206,
            activeClass: 'active',
            throttle: 20,
        };
        M.Pushpin.init(this.PushPin, options);
    }

    render() {
        return (
            <div>
                {/* scrollspy sidebar begins here */}
                {/* hide-on-small-only m3 l2 
                    col s12 m9 l10 
                */}
                <div className="col hide-on-small-only s12 m10 l10 "> 
                    <div
                        ref={PushPin => {
                            this.PushPin = PushPin;
                        }}
                        className="pushpin pin-top"
                    >
                        <ul class="section table-of-contents ">
                            <li>
                                <a href="#casino">Casino</a>
                            </li>
                            <li>
                                <a href="#forts">Forts</a>
                            </li>
                            <li>
                                <a href="#images">Images</a>
                            </li>
                            <li>
                                <a href="#misc">Miscellaneous</a>
                            </li>
                            <li>
                                <a href="#moderation">Moderation</a>
                            </li>
                            <li>
                                <a href="#music">Music</a>
                            </li>
                            <li>
                                <a href="#osrs">Oldschool RuneScape</a>
                            </li>
                            <li>
                                <a href="#overwatch">Overwatch</a>
                            </li>
                            <li>
                                <a href="#etf">Escape from Tarkov</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;