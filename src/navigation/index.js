import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import {useDispatch, useSelector} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';

import Splash from '../screens/authentication/onBoarding/Splash';
import Login from '../screens/authentication/login/Login';
import BoardingScreen from '../screens/authentication/onBoarding/Boarding';
import SignUp from '../screens/authentication/signup/SignUp';
import variables from '../utils/utils';
import Home from '../screens/drawer/home/Home';
import CustomDrawer from '../screens/drawer/CustomDrawer';
import Practice from '../screens/drawer/practice/Practice';
import Courses from '../screens/drawer/courses/Courses';
import LiveClass from '../screens/drawer/liveclass/LiveClass';
import Notes from '../screens/drawer/notes/Notes';
import {Image, StyleSheet} from 'react-native';
// import {
//   COURSES_ICON,
//   HOME_ICON,
//   LIVECLASS_ICON,
//   NOTES_ICON,
//   PRACTICE_ICON,
// } from '../constants/constants';

import HomeIcon from '../assets/icons/home.svg';
import CoursesIcon from '../assets/icons/courses.svg';
import LiveClassIcon from '../assets/icons/liveclass.svg';
import PracticeIcon from '../assets/icons/practice.svg';
import NotesIcon from '../assets/icons/notes.svg';

import HomeWhiteIcon from '../assets/icons/home_white.svg';
import CoursesWhiteIcon from '../assets/icons/courses_white.svg';
import LiveClassWhiteIcon from '../assets/icons/liveclass_white.svg';
import PracticeWhiteIcon from '../assets/icons/practice_white.svg';
import NotesWhiteIcon from '../assets/icons/notes_white.svg';
import PracticeScreen from '../screens/singleScreens/practiseScreen/PracticeScreen';
import YearlyPapersScreen from '../screens/singleScreens/yearlyPapers/YearlyPapersScreen';
import SelectVideoCourse from '../screens/singleScreens/SelectVideoCourse/SelectVideoCourse';
import SelectNotes from '../screens/singleScreens/SelectNotes/SelectNotes';
import SelectCourses from '../screens/singleScreens/selectCourses/SelectCourses';
import RelevantNotes from '../screens/singleScreens/relevantNotes/RelevantNotes';
import McqsQuestion from '../screens/singleScreens/yearlyPapers/McqsQuestion';
import MarkingScheme from '../screens/singleScreens/yearlyPapers/MarkingScheme';
import JoinLiveClassForm from '../screens/drawer/liveclass/JoinLiveClassForm';
import StructuredQuestion from '../screens/singleScreens/yearlyPapers/StructuredQuestion';
import SubscriptionScreen from '../screens/singleScreens/subscriptionScreen/SubscriptionScreen';

// import ForgotPassword from '../screens/authentication/forgotPassword/ForgotPassword';
// import SignUp from '../screens/authentication/Signup/SignUp';
// import { Log } from "../util";

const RootStackNavigator = createStackNavigator();
const AuthNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const SplashNavigator = createStackNavigator();
const DrawerNavigator = createDrawerNavigator();

function RootNavigation() {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="AuthNavigation"
        component={AuthNavigation}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="InnerNavigation"
        component={InnerNavigation}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="PracticeScreen"
        component={PracticeScreen}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="YearlyPapersScreen"
        component={YearlyPapersScreen}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="SelectVideoCourse"
        component={SelectVideoCourse}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="SelectNotes"
        component={SelectNotes}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="SelectCourses"
        component={SelectCourses}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="RelevantNotes"
        component={RelevantNotes}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="McqsQuestion"
        component={McqsQuestion}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="StructuredQuestion"
        component={StructuredQuestion}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="MarkingScheme"
        component={MarkingScheme}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="JoinLiveClassForm"
        component={JoinLiveClassForm}
      />
      <RootStackNavigator.Screen
        options={{headerShown: false}}
        name="SubscriptionScreen"
        component={SubscriptionScreen}
      />
    </RootStackNavigator.Navigator>
  );
}

function SplashNavigation() {
  return (
    <SplashNavigator.Navigator initialRouteName={'Splash'}>
      <SplashNavigator.Screen
        options={{headerShown: false}}
        name="Splsah"
        component={Splash}
      />
    </SplashNavigator.Navigator>
  );
}

function AuthNavigation() {
  return (
    <AuthNavigator.Navigator initialRouteName="BoardingScreen">
      <AuthNavigator.Screen
        options={{headerShown: false}}
        name="BoardingScreen"
        component={BoardingScreen}
      />
      <AuthNavigator.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthNavigator.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      {/* <AuthNavigator.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      /> */}
    </AuthNavigator.Navigator>
  );
}

function InnerNavigation() {
  return (
    <DrawerNavigator.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: variables.colorPrimary,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          fontFamily: variables.interFontSemiBold,
          fontSize: variables.fontSizePSmall,
        },
      }}
      initialRouteName={'Practice'}>
      <DrawerNavigator.Screen
        name={'Home'}
        component={Home}
        options={{
          drawerIcon: ({focused, color}) =>
            focused ? (
              <HomeWhiteIcon height={20} width={20} />
            ) : (
              <HomeIcon height={20} width={20} />
            ),
        }}
      />
      <DrawerNavigator.Screen
        name={'Practice'}
        component={Practice}
        options={{
          drawerIcon: ({focused, color}) =>
            focused ? (
              <PracticeWhiteIcon height={20} width={20} />
            ) : (
              <PracticeIcon height={20} width={20} />
            ),
        }}
      />
      <DrawerNavigator.Screen
        name={'Courses'}
        component={Courses}
        options={{
          drawerIcon: ({focused, color}) =>
            focused ? (
              <CoursesWhiteIcon height={20} width={20} />
            ) : (
              <CoursesIcon height={20} width={20} />
            ),
        }}
      />
      <DrawerNavigator.Screen
        name={'LiveClass'}
        component={LiveClass}
        options={{
          drawerIcon: ({focused, color}) =>
            focused ? (
              <LiveClassWhiteIcon height={20} width={20} />
            ) : (
              <LiveClassIcon height={20} width={20} />
            ),
        }}
      />
      <DrawerNavigator.Screen
        name={'Notes'}
        component={Notes}
        options={{
          drawerIcon: ({focused, color}) =>
            focused ? (
              <NotesWhiteIcon height={20} width={20} />
            ) : (
              <NotesIcon height={20} width={20} />
            ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
}

function AppNavigator({isLoading}) {
  console.log(isLoading);
  // const {isAuthenticated, auth_loading} = useSelector(state => state._auth);
  // Log('Redux Check', isAuthenticated);

  return isLoading ? <SplashNavigation /> : <RootNavigation />;

  // <React.Fragment>
  //   {auth_loading ? (
  //     <SplashNavigation />
  //   ) : isAuthenticated ? (
  //     <InnerNavigation />
  //   ) : (
  //     <AuthNavigation />
  //   )}
  // </React.Fragment>
}

export default AppNavigator;

const styles = StyleSheet.create({
  drawerIcon: {
    width: 20,
    height: 20,
    opacity: 1,
  },
});
