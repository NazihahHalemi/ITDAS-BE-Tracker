//import app from "./firebase"
var express = require('express');
var url = require('url');
//var session = require('express-session');
var path = require('path');
//var logger = require('morgan');
var bodyParser = require('body-parser');
//const uuidV4 = require('uuid/v4');
const ldap = require("ldapjs");
const request = require('request');
//var json2xls = require('json2xls');
//var moment = require("moment");
var compression = require("compression");
const ba3Server = "localhost:8080";
const ldapServer = "10.45.236.28"; //:"localhost:636",
const ldapUser = "cn=NICEldapadmin,ou=serviceAccount,o=Telekom";  //:"cn=NICEldapadmin,ou=serviceAccount,o=Telekom",
const ldapPass = "2Fe97Bm2";  //:"Passw0rd"
//const assert = require('assert');
const ldapUserOverride = "admin";
var express =require('express');
const app = express();


app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json({"limit":"5mb"}));
app.use(bodyParser.urlencoded({ extended: false, "limit":"5mb" }));

// cache for 1 week
var week = 864000;
app.use(express.static(path.join(__dirname, 'public'), {maxAge: week}));
app.use(express.static('public'));
//app.use(json2xls.middleware);

//mytv send request
//app.use(bodyParser.json({limit:'5mb'}));

// app.use(session({
//   secret: 'ba3Secret',
//   resave: false,
//   saveUninitialized: true
// }));

const ssl = false;
// app.use(session({
//   secret: 'ba3Secret',
//   resave: false,
//   saveUninitialized: true
// }));

const CASAuthentication = require('cas-authentication');
const cas = new CASAuthentication({
  //cas_port: 80,
  cas_url: "http://" + ba3Server + "/claritysso/",
  service_url: 'http://localhost:3000', //ba3.aga.my
  cas_version: 'saml1.1',
  renew: false,
  is_dev_mode: false,
  dev_mode_user: '',
  dev_mode_info: {},
  session_name: 'cas_user',
  session_info: 'cas_userinfo',
  destroy_session: false
});

if (ssl) {
  app.set('port', process.env.PORT || 3443);
}
else {
  app.set('port', process.env.PORT || 3000);
}


class Auth {
    constructor() {
      this.authenticated = {status:false,region:"",division:"",username:"", password:"", ldapBind: "",ldapSearch: "",
      invalidTmUser:"", invalidTmUser2: "", LdapFailedfindUser: "", wrongPass: "",wrongUsername: ""};
    }


    login(cb) {
      this.authenticated.status = true;
      this.authenticated.region = "KL"
      //this.handleLogin();
      cb();
    }
  
    logout(cb) {
      this.authenticated.status = false;
      this.authenticated.region = ""
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    handleLogin = (req,res,username,password,cb)   =>  {
    
      const dataForm = new FormData();
        dataForm.append("username", username);
        dataForm.append("password", password);
        this.authenticated.status = true;
        this.authenticated.username = username;
        this.authenticated.password = password;
        this.ldapLogin(req,res,username,password,cb);
       // cb()
       
    }

    ldapLogin(req,res,username,password,cb){
     
      if (ldapServer && ldapServer !== "") {
        this.ldapLoginUserDCO(req,res,username, password, cb);
        return;
      } 

      ///check dco users if exist go next page else return error
    }

    ldapLoginUserDCO(req,res, user, pass, cb) {
     var session =  [cas.session_name] = user;
     //console.log('session',session);
     //console.log('cas',cas.bounce);
     //console.log('req',req);

      if (ldapUserOverride && ldapUserOverride.length > 0) {
        if (ldapUserOverride.indexOf(user.toLowerCase())>=0) {
          console.log("Using the user overrides for user", user);
          [cas.session_name] = user;
          //auditLogin("LOGIN", user, "OVERRIDE", "User Login Override");
          //res.redirect(confObj.casRedirectURL + "/nas-acid");
          cb();
          return;
        }    

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        var client = ldap.createClient({url: `ldaps://${ldapServer}:636`})
          try {
              client.bind(ldapUser, ldapPass, function(err){
                  if (err) {
                    // call ws for update
                    this.authenticated.ldapBind = "LDAP bind: Internal Error, check with NICE Administrator"
                    //auditLogin("LOGIN", user, "FAILED", err.toString())
                   // res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Internal Error, check with NICE Administrator"}));
                    return;
                  }
                  this.findUser(client, user, pass, req,res,cb);
              });
          }
          catch (e) {
              // failed because of exception
              // call ws for update
              //auditLogin("LOGIN", user, "FAILED", e.toString())
              console.log("Failed because of ", e);
          }
        }
   }

   findUser(client, user, pass, req,res,cb){
        client.search(`cn=${user},ou=users,o=data`, {}, (err, result) => {
          if (err) {
            this.authenticated.ldapSearch = "LDAP searc user: Internal Error, check with niCE Administrator"
            //auditLogin("LOGIN", user, "FAILED", "Internal Error, check with niCE Administrator");
            //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Internal Error, check with NICE Administrator"}));
            console.error(err);
            return;
          }

          // listen for end
          let found = false;
          try {
              result.on("error", (entry) => {
                console.log("Invalid TM User: ", entry);
                this.authenticated.invalidTmUser = "Invalid TM User"
               // auditLogin("LOGIN", user, "FAILED", "Not a valid TM User");
               // res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Not a valid TM User"}));
              })
              result.on("searchEntry", (entry) => {
                  found = true;
              });
              result.on("end", (entry) => {
                  if (!found) {
                    //auditLogin("LOGIN", user, "FAILED", "Not a valid TM User")
                    this.authenticated.invalidTmUser2 = "Not a valid TM User"
                    //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Not a valid TM User"}));
                  }
                  else {
                    this.confirmUserInDCO(client, user, pass, req, res,cb);
                  }
              });
          }
          catch (e) {        
          //auditLogin("LOGIN", user, "FAILED", e.toString())
            //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user}));
            this.authenticated.LdapFailedfindUser = "Failed to find user"
            console.log("Failed to find user", e);
          }
      });    
  }

  confirmUserInDCO(client, user, pass, req, res,cb) {
      
    client.search("cn=nice,ou=group,o=data", {filter:`(member=cn=${user},ou=users,o=data)`, scope:'sub'}, (err, result)=>{
        
        if (err) {
          this.authenticated.ldapSearch = "Comfirm user: Internal error, check with NICE Administrator"
          //auditLogin("LOGIN", user, "FAILED", "Internal error, check with NICE Administrator");
         // res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Internal Error, check with NICE Administrator"}));
          console.log("Failed with error", err.message);
          return;
        }
        try {
            // ain't got anything?
            let found = false;
            
            result.on("error", (entry) => {
              // call ws for update
              this.authenticated.invalidTmUser = "Not a valid NICE user"
                //auditLogin("LOGIN", user, "FAILED", "Not a valid NICE User");
                console.log("Not a valid NICE user", entry);
                //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason:"Not a valid NICE User"}));
            })
            result.on("searchEntry", (entry) => {
                found = true;                    
            })            
            result.on("end", (entry) => {
                if (!found) {
                  this.authenticated.invalidTmUser2 = "User is not a valid NICE user"
                  //auditLogin("LOGIN", user, "FAILED", "User is not a valid NICE user");
                  //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "User is not a valid NICE user"}));
                }                
                else {
                  this.tryLoginUserDCO(user, pass, req, res,cb);
                }
            })
        }
        catch (e) {
            this.authenticated.LdapFailedfindUser = "User not in NICE group"
            //auditLogin("LOGIN", user, "FAILED", "User not in NICE group, error " + e);
            console.log("User not in NICE group", e);
            //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user}));
        }
        //
    });
  }

  tryLoginUserDCO(user, password, req, res,cb) {
        
    // lets see if the user can login ...
    var client2 = ldap.createClient({url: `ldaps://${ldapServer}:636`})
    client2.bind(`cn=${user},ou=users,o=data`, password, (err, result)=> {
              
        if (err) {
          this.authenticated.loginFailed = "Invalid Username/Password supplied"
           // auditLogin("LOGIN", user, "FAILED", "Invalid Username/Password supplied");
            console.log("Failed with error", err.message);
            //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Invalid Username/Password supplied"}));            
            return;
        }        
        client2.search(`cn=${user},ou=users,o=data`, {}, (err, result)=>{    
            if (err) {
              this.authenticated.ldapSearch = "Login user failed: Internal Error, check with NICE Administrator"
              //auditLogin("LOGIN", user, "FAILED", "Internal Error, check with NICE Administrator");
              console.error(err);
              //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Internal Error, check with NICE Administrator"}));  
              return;
            }
            let found = false;
            result.on("error", (entry) => {
              this.authenticated.wrongPass = "Invalid Username/Password supplied"
              //auditLogin("LOGIN", user, "FAILED", "Invalid Username/Password supplied");
              console.log("Invalid Password", entry);
              //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "Invalid Username/Password supplied"}));
            })
            result.on("searchEntry", (entry) => {
                found = true;                    
            })            
            result.on("end", (entry) => {
                if (!found) {   
                   this.authenticated.wrongUsername = "Invalid User"                       
                    //auditLogin("LOGIN", user, "FAILED", "Invalid User");
                    //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user}));
                }
                else {                  
                    this.checkUserDCOStatus(user, req, res,cb);
                }
            })
        });
        // next step, confirm that the user is a valid user
        // look in db (NICE) for the same user, and if its valid then we return the workgroups associated with the user (inserted into their session)
  
        // failure? return the reason for failure in the login console
        // success? then move to next screen
  
        // validate user is actually a valid NICE user, and their permissions / status
    })
  
  }

  checkUserDCOStatus(user, req, res ,cb) {
    request.get("http://" + ba3Server + "/claritybqm/reportFetch/?scriptName=getActiveWorkgroups&username=" + user, (error, resp, body) => {
    //request.get("http://" + ba3Server + "/claritybqm/reportFetch/?scriptName=DC_USER&userid=" + user, (error, resp, body) => {
          // myworkgroups
         let workgroups = body;
          request.get("http://" + ba3Server + "/claritybqm/reportFetch/?scriptName=getUserStatus&username=" + user, (error, resp, body) => {
            // cas.session_name
            try {
              let status = JSON.parse(body);
              if (status.status != "ACTIVE") {
                // error, user is not active              
                //auditLogin("LOGIN", user, "FAILED", "User not an Active User. User status is " + status.status);
                //res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "User not an Active User. User status is " + status.status}));  
              }
              else {
                // done!       
                console.log(cas.session_name);
                req.session[cas.session_name] = user;
                req.session["myworkgroups"] = workgroups;
                
                // redirect
                
               // auditLogin("LOGIN", user, "SUCCESS", "");
                cb()
                    
               // res.redirect(confObj.casRedirectURL + "/dco-main");
              }
            } catch (e) {
              
              //auditLogin("LOGIN", user, "FAILED", "User is not a valid Clarity NICE user. Please contact Administrator");
              console.error(e); // user not exists in NICE
              ///res.status(200).send(swig.renderFile('views/login.html', { isInvalid: "block", username: user, reason: "User is not a valid Clarity NICE user. Please contact Administrator (System Sync Issue)"}));  
            }
          })        
          cb()
      })
  }

}

  export default new Auth();
