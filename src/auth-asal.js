import app from "./firebase"

class Auth {
    constructor() {
      this.authenticated = {status:false,region:"",division:""};
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


    handleLogin = (email,password,cb)   =>  {

  
      const dataForm = new FormData();
        dataForm.append("username", email);
        dataForm.append("password", password);



        const requestOptions = {
          method: 'POST',
          body: dataForm
      };
      var self = this
      fetch('/spheremobile_test/loginprocess.php', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.authenticated.status = true
           console.log(data)
           if(data.result ==="ok"){
           cb()

           

            app.auth().signInWithCustomToken(data.token).catch(function(error) {


              console.log(app.auth().currentUser.uid)
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            
            });


            app.auth().onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                console.log(user)
              } else {
                // No user is signed in.
              }
            });
          
          
           }
          }

        )
      
      
  
           
  
    }


    handleLogin2 = (email,password,cb)   =>  {

  
      const dataForm = new FormData();
        dataForm.append("username", email);
        dataForm.append("password", password);



        const requestOptions = {
          method: 'POST',
          body: dataForm
      };
      var self = this
      fetch('/cas/login', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.authenticated.status = true
           console.log(data)
          
          
          //  if(data.result ==="ok"){
          //  cb()

           

          //   app.auth().signInWithCustomToken(data.token).catch(function(error) {


          //     console.log(app.auth().currentUser.uid)
          //     // Handle Errors here.
          //     var errorCode = error.code;
          //     var errorMessage = error.message;
          //     // ...
            
          //   });


          //   app.auth().onAuthStateChanged(function(user) {
          //     if (user) {
          //       // User is signed in.
          //       console.log(user)
          //     } else {
          //       // No user is signed in.
          //     }
          //   });
          
          
          //  }
          }

        )
      
      
  
           
  
    }


}



  
  export default new Auth();