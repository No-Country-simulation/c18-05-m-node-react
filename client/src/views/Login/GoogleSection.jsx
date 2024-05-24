//import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "react-google-login"
import { useEffect } from "react";

const GoogleSection = () => {
  const clientId = '286076481782-tpu5co5smk3d8vvpe7ntjrusp7uiugq5.apps.googleusercontent.com'

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.async = true;
      script.defer = true;
      // script.onload = initClient;
      document.body.appendChild(script);
    };
    const initClient = () => {
      window.gapi.load("client: auth2", () => {
        window.gapi.auth2.init({
          client_id: clientId,
        });
      });
    };
    loadScript()
  }, [clientId]);

  const onSuccessLogin = (response) => {
    console.log(response.profileObj);
  }

  const onFailureLogin = (response) => {
    console.log('error');
  }
  

  return (
    <div>
      <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={'single_host_origin'}
        />
    </div>
  );
};

export default GoogleSection;
