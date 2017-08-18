/*var h1 = React.createElement('h1',{className:'success'},'Hello World.');

ReactDOM.render(h1, document.getElementById('app'));*/

var Layout = React.createClass({
    propTypes:{
        children: React.PropTypes.element.isRequired
    },
 
    render:function(){
        return <div className="overlay">
                    <div className="box">
                        <h2>{this.props.title}</h2>
                        {this.props.children}           
                    </div>
                    <footer>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</footer>
                </div>;
    }
});

var Email = React.createClass({
     render:function(){
        return <input type="email" name="email" data-info="An active email account is needed to gain access." placeholder="Your email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="You need to have a working email to gain access." required="required" maxlength="255" id="email"/>;
    }
});


                 

var Pssword = React.createClass({
    getInitialState:function(){
        return {password1:'',password2:''};
    },
    onChange:function(e){
        e.target.name
        this.setState({[e.target.name]:e.target.value});
    },

     render:function(){
        var msg = null;
        var ch = [<input type="password" name="password1" required="required" placeholder="Password" onChange={this.onChange} key="password"/>];
        if(this.props.twice){
            ch[1] = <input type="password" onChange={this.onChange} name="password2" required="required" placeholder="Repeat Password" key="password2"/>;
        }

        if(this.state.password2.length && this.state.password1!=this.state.password2){
            msg = <div className="error-message">Both passwords must be the same</div>;
        }

            return <div>{ch}{msg}</div>;
        }
    });

var Login = React.createClass({
    
    render:function(){
        return <form method="post" accept-charset="utf-8" action="/u/login">     
            <Email />        
            <Pssword />
            <label htmlFor="remember-me">
                <input type="checkbox" name="remember_me" value="1" defaultChecked  id="remember-me" />Remember me
            </label>        
            <p>
                <a href="register.html" className="inlink">Register</a> | <a href="#request-reset-password" className="inlink">Reset Password</a>
            </p>
            <button type="submit">Login</button>    
        </form>;

        }
    });

var Register = React.createClass({
    render:function(){
        return <form method="post" accept-charset="utf-8" action="/u/register">
                 <Email />
                 <Pssword twice="1" />
                  <span className="col-p100 info"></span>
                  <button type="submit">Submit</button>    
                </form>;
    }

});

ReactDOM.render(<Layout title="Login">
                    <Register />
                </Layout>
    , 

                document.getElementById('app'));







