import React from 'react';
import AddUserCSS from './adduser.css'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            phone: '',
            admin: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        let admin = false;
        let phone = this.state.phone.split('-').join('')
        
        if (this.state.admin === 'true') {
            admin = true;
        } 

        this.props.createUser({email: this.state.email, admin: admin, phone: phone});
        this.setState({email: '', phone: '', admin: ''})
    }

    render() {
        return (
            <div className="adduser-container">

                <h1>Add an Organizer</h1>

                <form onSubmit={this.handleSubmit}>

                    <label>Email</label>
                    <input type="email" placeholder="alexlee@alexlee.com" onChange={this.update("email")}/>
                    
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="123-456-7890" onChange={this.update("phone")}/>
                    

                    <label>Admin</label>
                    <div className="radio-btns">
                        <div className="radio">
                            <label><input type="radio" name="optradio" onChange={this.update("admin")} value={true}/>true</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" onChange={this.update("admin")} value={false}/>false</label>
                        </div>
                    </div>

                    <button className='btn btn-danger' type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddUser;
