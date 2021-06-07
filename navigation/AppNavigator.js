import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, UserDeclarationNavigator } from "./ArmyNavigator";

const AppNavigator = (props) => {
  // const navRef = useRef();
  //const isAuth = useSelector((state) => !!state.auth.token);
  //const didTryAutoLogin = useSelector((state) => !!state.auth.didTryAutoLogin);
  /* useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(NavigationActions.navigate({routeName:'Auth'}));
    }
  }, [isAuth]); */

  //return <ShopNavigator ref={navRef} />;
  //for react navigation 5
  //{!isAuth && didTryAutoLogin && <AuthNavigator/>}
  // {!isAuth && !didTryAutoLogin && <StartupScreen />}
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
       <UserDeclarationNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;
