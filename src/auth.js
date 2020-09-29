//import app from "./firebase"
import Swal from 'sweetalert2';
import axios from 'axios';

//const ldap = require('ldapjs');
// const client = ldap.createClient({
//   url: 'ldap://10.45.236.28:636'
// });
// console.log('client',client);

//const ldapUser = "cn=NICEldapadmin,ou=serviceAccount,o=Telekom";  //:"cn=NICEldapadmin,ou=serviceAccount,o=Telekom",
//const ldapPass = "2Fe97Bm2";  //:"Passw0rd"

class Auth {
    constructor() {
      this.authenticated = {status:false,region:"",division:"",username:"", password:""};
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
      localStorage.removeItem("token");
      localStorage.removeItem("requestorID");
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    handleLogin = (username,password,cb)   =>  {
    
      const dataForm = new FormData();
        dataForm.append("username", username);
        dataForm.append("password", password);
        this.authenticated.status = true;
        this.authenticated.username = username;
        this.authenticated.password = password;

        if(username != ""){

            fetch('/api/ITD_USER/?userid='+ username.toUpperCase())
            .then(response => response.json())
            .then((user) => //console.log('user', user.user.length)
            {
                if(!user.length){
                    Swal.fire({
                        width: '30%',
                        icon: 'error',
                        title: 'Invalid ITDETA User',
                        text: 'Login error, check with ITDETA Administrator!',
                        fontsize: '10px'
                        //footer: '<a href>Why do I have this issue?</a>'
                      })
                }
                else{
                    cb();
                }
                
            }
            );
        }
       
     
    }
    handleLogin2 = (user,password,cb,req,res,)   =>  {
      //console.log('username',username);
      
          const dataForm = new FormData();
          dataForm.append("username", user);
          dataForm.append("password", password);
          this.authenticated.status = true;
          this.authenticated.menuSelected = "";
          this.authenticated.username = user;
          this.authenticated.password = password;
          localStorage.setItem('username', user);
          localStorage.setItem('password', password);
          //var 
      
          if(user){
            axios.get('/api/ITD_LDAP_CON11/?userid='+user.toUpperCase()+'&password='+password,
            ).then((res) => {
             //console.log('res : ', res.data);  
             if(res.data.status === 'User Success Login'){
               axios.get('/api/ITD_USER/?userid='+user.toUpperCase(),
               {
                headers: {
                  Authorization: 'Bearer ' + res.data.accessToken //the token is a variable which holds the token
                }
               }
                  ).then(resp => {
                        const token = localStorage.setItem('token', res.data.accessToken);
                        console.log('dc user',resp.data)               
                        if(!resp.data){
                          Swal.fire({
                            width: '30%',
                            icon: 'error',
                            title: 'Invalid ITDETA User',
                            text: 'Login error, check with ITDETA Administrator!',
                            fontsize: '10px'
                            //footer: '<a href>Why do I have this issue?</a>'
                          })
                        }
                        else{
                            cb(user,cb,token);  
                        }
                
                  }); 
                }
              else{
                  Swal.fire({
                    icon: 'error',
                    text: 'userid:' + user + ' error:' + res.data,
                  })
                }
              })
              .catch((err) => {/*catch error upon fetch api function*/
                //console.log('failed to update : ', err);
                 Swal.fire({
                  icon: 'error',
                  text: 'catch:' + err,
                })
          })
  
         }
  
      }



}

  export default new Auth();
