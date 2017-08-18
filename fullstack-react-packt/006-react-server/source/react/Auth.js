const React = require('react'),
      ReactDOMServer = require('react-dom/server');


var Email = React.createClass({
     render:function(){
        return <input type="email" name="email" data-info="An active email account is needed to gain access." placeholder="Your email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="You need to have a working email to gain access." required="required" maxlength="255" id="email"/>;
    }
});
                 

var Pssword = React.createClass({
     render:function(){
        var ch = [<input type="password" name="password1" required="required" placeholder="Password" onChange={this.onChange} key="password"/>];
        if(this.props.twice){
            ch[1] = <input type="password" onChange={this.onChange} name="password2" required="required" placeholder="Repeat Password" key="password2"/>;
        }

        if(this.props.msg){
            ch.push(<div className="error-message" key="error">{this.props.msg}</div>);
        }

        
            return <div>{ch}</div>;
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
        return <form method="post" accept-charset="utf-8" action="/register">
                 <Email />
                 <Pssword twice="1" msg={this.props.msg}/>
                  <span className="col-p100 info"></span>
                  <button type="submit">Submit</button>    
                </form>;
    }

});



module.exports = {
    register:function(msg){
        return ReactDOMServer.renderToString(<Register msg={msg} />);
    }
};




