import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/landingPage.css';
import balloon from '../Images/balloon.jpg';
import colors from '../Images/homepage.jpg';
import inspire from '../Images/inspire.jpg';
import collect from '../Images/collect.jpg';
import share from '../Images/share.jpg';
import inspired from '../Images/inspired.gif';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Featured_Motboards_List from "./Featured_Motboards_List";
import $ from 'jquery';
import {jQuery} from 'jquery';
import Anime from "./Anime";
import Artyom from 'artyom.js';
const artyom = new Artyom();
class BalloonPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        artyom.say("Hey there! welcome to the world of inspiration!");
    }
    render() {
        return <div>
            <div className="row">
                <div className="col-lg-12 pb-5" id="myVideo">
                    {/*<img src={colors}/>*/}
                    <Anime/>
                </div>
            </div>
            <div class="row justify-content-end mt-5">
                <div className="col-lg-5 mt-5">
                    <div className="mt-5">
                        <button className="ybutton Questrial mt-5" style={{"font-size": "1.5em"}} onClick={() => {
                            this.props.history.push("/signUp");
                        }}>SIGN UP
                        </button>
                        <br/>
                        <button className="ybutton Questrial" style={{"font-size": "1.5em"}} onClick={() => {
                            this.props.history.push("/signIn");
                        }}>SIGN IN
                        </button>
                    </div>
                </div>
            </div>


            <main role="main">

                <section className="jumbotron Questrial" style={{"background": "transparent"}}>
                    <div className="container" style={{"padding": "70px;"}}>

                        <div style={{
                            "color": '#424242',
                            "padding-top": "30px",
                            "text-align": "center",
                            "font-size": "7em",
                            'text-transform':"uppercase",
                            'text-shadow': '0px 2px 4px rgba(0,0,0,0.2)',
                        }}><div style={{'font-size':'50px'}}> Create and Share Your </div><b>MoodBoards</b>.
                        </div>
                    </div>
                </section>

                <div style={{"background-color": "#fff"}}>
                    <div className="container"
                         style={{"padding-top": "55px", "padding-bottom": "70px", "margin-top": "100px"}}>
                        <div>
                            <div id="whyMotbaord" className="container indexZ">
                                <div className="row justify-content-start">
                                    <div className="mr-5 mb-5 Questrial inspired-text">
                                        How do I get Inspired?
                                    </div>
                                    <br/>
                                </div>
                                <div className="row justify-content-center">

                                    <div className="card cardboxBottom mr-5 Questrial cardboxWidth"
                                         style={{"width": "30rem"}}>
                                        <img className="card-img-top" src={collect} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{
                                                "text-align": "center",
                                                "font-size": "30px",
                                                "color": "#DBB747"
                                            }}>Collect</h5>
                                            <p className="card-text" style={{"text-align": "center"}}>Collect your
                                                MotBoards and access
                                                them whenever you need some inspiration.</p>
                                        </div>
                                    </div>

                                    <div className="card cardboxBottom mr-5 Questrial cardboxWidth"
                                         style={{"width": "30rem"}}>
                                        <img className="card-img-top" src={share} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{
                                                "text-align": "center",
                                                "font-size": "30px",
                                                "color": "#DBB747"
                                            }}>Share</h5>
                                            <p className="card-text" style={{"text-align": "center"}}>Share your
                                                MotBoards and help your
                                                fellow creative people. Creativity is contagious, pass it on.</p>
                                        </div>
                                    </div>

                                    <div className="card cardboxBottom mr-5 Questrial cardboxWidth"
                                         style={{"width": "30rem"}}>
                                        <img className="card-img-top" src={inspire} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{
                                                "text-align": "center",
                                                "font-size": "30px",
                                                "color": "#DBB747"
                                            }}>Inspire</h5>
                                            <p className="card-text" style={{"text-align": "center"}}>Go ahead, get
                                                inspired. Think left and think right and think low and think high and of
                                                course, think diagonal! </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="mr-5 Questrial inspired-text">
                                    Popular MotBoards
                                </div>
                            </div>
                            <Featured_Motboards_List/>
                        </div>
                    </div>

                    <div className="container" style={{"padding": "25px"}}>
                        <div className="row justify-content-center">
                            <img src={inspired} alt="Card image cap"></img>
                        </div>
                    </div>
                </div>

            </main>


            <footer>
                <div className="row justify-content-center footercss">
                    <div className="row mt-5">CMPE 280 Project - SPRING 2018</div>
                </div>
            </footer>
        </div>
    }
}

export default withRouter(BalloonPage);
