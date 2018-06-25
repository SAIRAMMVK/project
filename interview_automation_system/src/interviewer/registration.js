import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css';
import db_config from '../config/config';

export default class InterviewerReg extends Component {
    
    
    constructor(){
        super();
        this.state={
           fields:{},
           errors:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        let fields = this.state.fields;
        let field = event.target.name;
        if(field==="locations"){
            var options = event.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            fields[field]=value;
        }
        else{
            fields[field]=event.target.value;
        }
        this.setState({
            fields
        });
    }

    handleSubmit(event){
        
        event.preventDefault();
        
        if(this.handleValidation()){
            alert("You are Registered");
            // data insertion into firebase
            fetch('https://perl-react-project.firebaseio.com/user.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    "Email":this.state.fields.email,
                    "Mobile":this.state.fields.mobile,
                    "Name":this.state.fields.name,
                    "Password":this.state.fields.password,
                    "Locations":this.state.fields.locations
            })
            })
        }

        else{
            alert("Form has errors");
        }
    }

    
    handleValidation(){

        let fields =this.state.fields;
        let errors= {};
        let formIsValid = true;

        //NAME 
        if( !fields["name"] ){

            formIsValid=false;
            errors["name"] = "This field should not be empty";
        }
        else{
            var length = fields["name"].length;
            if ( length < 3 ){
                formIsValid = false;
                errors["name"] = "Please enter characters of more than 3";
            }
        }

        //PASSWORD
        if(!fields["password"]){
            formIsValid=false;
            errors["password"]="This field should not be empty";
        }
        else{
            var length  = fields["password"].length;
            if(length<3 || length>10){
                formIsValid=false;
                errors["password"]="password should not be less than 3 and greater than 10";
            }
            var passwordValid = fields["password"].match(/^[a-zA-Z0-9@!$%*]/);
                if(!passwordValid){
                    formIsValid=false;
                    errors["password"]="your password does not meet the complexity requirements";
                }
        }

        //EMAIL
        if(!fields["email"]){
            formIsValid=false;
            errors["email"]="This field should not be empty";
        }
        else{
            var emailValid = fields["email"].match(/^[a-zA-Z][a-zA-Z0-9]{5,}@virtusa.com$/);
            if(!emailValid)
            {
                formIsValid=false;
                errors["email"]="please enter a valid email address";
            }
        }

        //MOBILE
        if( !fields["mobile"] ){

            formIsValid=false;
            errors["mobile"] = "This field should not be empty";
        }
        else{
            var length = fields["mobile"].length;
            console.log(length);
            if ( length != 10  ){
                formIsValid = false;
                errors["mobile"] = "Please enter valid phone number ";
            }
        }
        this.setState({
            errors:errors
        })
        return formIsValid;
    }





    render() {
        return (
            <div className="icontainer">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                        <legend>Interviewer Registration</legend>
                        <div class="form-group">
                            <label for="name" class="cols-sm-2 control-label">Name</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa"></i></span>
                                    <input type="text"  class="form-control" name="name"
                                    id="name" onChange={this.handleChange} value={this.state.fields["name"]} placeholder="Enter your Name" />
                                </div>
                                <span id="intereg">{this.state.errors["name"]}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="cols-sm-2 control-label">Email</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-envelope fa"></i></span>
                                    <input type="email"  class="form-control" name="email"
                                     onChange={this.handleChange} value={this.state.fields["email"]} id="email" placeholder="Enter your Email" />
                                   
                                </div>
                                <span id="intereg">{this.state.errors["email"]}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="cols-sm-2 control-label">Password</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="password" class="form-control" name="password" 
                                    onChange={this.handleChange} value={this.state.fields["password"]} id="password" placeholder="Enter your Password" />
                                   
                                </div>
                                <span id="intereg">{this.state.errors["password"]}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="mobile" class="cols-sm-2 control-label">MobileNumber</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-mobile-phone fa-lg" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="mobile"
                                     onChange={this.handleChange} value={this.state.fields["password"]} id="mobile" placeholder="Enter your MobileNumber" />
                                   
                                </div>
                                <span id="intereg">{this.state.errors["mobile"]}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="location">Skills</label>
                            <div className="input-group">
                            <select name="locations" onChange={this.handleChange} multiple >
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="pune">Pune</option>
                                    <option value="chennai">Chennai</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="noida">Noida</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register Me!"/>
                        </div>
                    </fieldset>
                </form>
                <div ref="result"></div>
            </div>
        );
    }
}