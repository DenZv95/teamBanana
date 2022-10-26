import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HelloPage from '../components/screens/helloPage/HelloPage';
import SignInPage from '../components/screens/signInPage/SignInPage';
import SignUpPage from '../components/screens/signUpPage/SignUpPage';
import ToDoListPage from '../components/screens/toDoListPage/ToDoListPage';
import RecoveryPage from '../components/screens/recoveryPage/recoveryPage';
import CreateTasksPage from '../components/screens/createTasksPage/CreateTasksPage';
import ChangeTaskPage from '../components/screens/changeTaskPage/ChangeTaskPage';
import navOptions from './AppNavigatorStyle';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HelloPage"
        component={HelloPage}
        options={navOptions.helloPageHeader}
      />
      <Stack.Screen
        name="SignIn"
        options={navOptions.signInHeader}
        component={SignInPage}
      />
      <Stack.Screen
        name="SignUp"
        options={navOptions.signUpHeader}
        component={SignUpPage}
      />
      <Stack.Screen
        name="ToDoList"
        component={ToDoListPage}
        options={navOptions.toDoListHeader}
      />
      <Stack.Screen
        name="RecoveryPage"
        component={RecoveryPage}
        options={navOptions.recoveryHeader}
      />
      <Stack.Screen
        name="CreateTasksPage"
        component={CreateTasksPage}
        options={navOptions.createTaskHeader}
      />
      <Stack.Screen
        name="ChangeTaskPage"
        component={ChangeTaskPage}
        options={navOptions.changeTaskHeader}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
