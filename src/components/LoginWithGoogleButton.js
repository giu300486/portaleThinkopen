import React from 'react'
import { Button } from "antd"
import { GoogleOutlined } from '@ant-design/icons';

import "../screens/styles/Home.css"

export default class LoginWithGoogleButton extends React.Component {
    render() {
        return (
            <Button disabled={this.props.disabled} onClick={this.props.onClick} className="primaryButton loginButton" icon={<GoogleOutlined />} size={55}>
                Login With Google
            </Button>
        )
    }
}
