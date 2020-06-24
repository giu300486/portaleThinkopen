import React from 'react'
import { Alert } from 'antd';

import LoginWithGoogleButton from "../components/LoginWithGoogleButton"
import "./styles/Login.css";
import AuthServices from "../services/AuthServices";

const Auth = new AuthServices();

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isAuthenticated: false,
            isLoading: true,
            isError: false,
            isErrorMSG: ""
        }   
    }
    login = ()=>{
        this.setState({isLoading:true});
        window.location.href = window.proxyLogin+'/api/oauth2/authorization/google';
    }
    componentDidMount = async()=>{
        const response = await Auth.isLogged();
        if(response.status === "failure"){
            this.setState({isLoading:false,isError:true,isErrorMSG:response.description});
            return;
        }
        if(response.status === "success"){
            window.location.href = window.proxy+"/home";
            this.setState({isLoading:false});
            return;
        }
        this.setState({isLoading:false})
        return;
    }
    render() {
        return (
            <div className="global-wrapper">
                <div className="logo-wrapper" >
                    <img src={require("../assets/logo_252x35.png")} alt={""}/>
                    {/*<p className="textTitle logoTitle" >Curriculum Vitae<br/>Generator</p>*/}
                </div>
                <div className="login-wrapper" >
                    <div className="login-container" >
                        {
                            (!this.state.isLoading)?
                            (
                                <>
                                    <p className="textTitle" >Login into your<br/>Account</p>
                                    <p className="textSubTitle" >Log in with your ThinkOpen Google account<br/>and create your Curriculum</p>
                                    {
                                        (this.state.isError)?(<Alert message={this.state.isErrorMSG} type="error" showIcon style={{marginBottom:30,maxWidth:"80%"}} />):(<></>)
                                    }
                                    <LoginWithGoogleButton className="loginButton" onClick={()=>{this.login()}}/>
                                    <p className="textSubTitle" style={{marginTop:20}}>By logging in you consent to the processing of<br/>data according to the regulations and the information on:<br/><a href="https://www.thinkopen.it/trattamento-dati/">thinkopen.it/trattamento-dati</a></p>
                                    <p style={{position:"fixed",bottom:0}}>CVTop - Version: 0.1.0</p>
                                </>
                            ):
                            (
                                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_oROlR4.json"  background="transparent"  speed="1"  style={{width: 300, height: 300}}  loop autoplay ></lottie-player>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
