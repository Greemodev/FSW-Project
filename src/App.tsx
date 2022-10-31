import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CustomerList from './pages/customer/customerList';
import CustomerEdit from './pages/customer/customerEdit';
import EmployeeList from './pages/employee/emplyeeList';
import EmployeeEdit from './pages/employee/employeeEdit';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/customers" />
            </Route>
            <Route path="/page/customers" exact={true}>
               <CustomerList/>
            </Route>
            <Route path="/page/customers/:id" exact={true}>
               <CustomerEdit/>
            </Route>


            <Route path="/page/employees" exact={true}>
               <EmployeeList/>
            </Route>
            <Route path="/page/employees/:id" exact={true}>
               <EmployeeEdit/>
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
