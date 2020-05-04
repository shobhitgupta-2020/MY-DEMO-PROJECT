import React, { Component } from 'react'
import UserService from './UserService'

export default class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.reloadUserList = this.reloadUserList.bind(this);
    }
    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        UserService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
