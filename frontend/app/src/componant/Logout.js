function Logout() {
    localStorage.removeItem('utilisateurLoginStatuts')
        window.location.href='/';
    

    return (
      <div ></div>
    );
  }
  
  export default Logout;
  