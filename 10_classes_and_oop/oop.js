const user = {
    username: "sankar",
    loginCount: 8,
    signedIn: true,
  
    getUserDetailed: function () {
      // console.log("Got user details");
      console.log(this);
    },
  };
  
  // console.log(user.getUserDetailed());
  // console.log(this);
  
  // const promise1 = new Promise()
  // const date = new Date()
  
  function User(username, loginCount, isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
  
    // return this;
  }
  
  const user1 = new User("sankar", 3, true);
  const user2 = new User("kaibalya", 2, false);
  
  console.log(user1);
  console.log(user2);
  
  
  