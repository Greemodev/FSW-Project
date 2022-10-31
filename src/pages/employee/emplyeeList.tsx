import { IonButtons,IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Employee from './Employee';
import { saveEmployee, searchEmployees, removeEmployee } from './employeeApi';

const EmployeeList: React.FC = () => {
    
  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Employee[]>([]);
  const history = useHistory();


  useEffect(() => {
    search();
  }, []);



  const search = () => {
    let result = searchEmployees();
    setClientes(result);
  }

  const remove = (id: string) => {
    removeEmployee(id);
    search();
  }

  const testLocalStorage = () => {
    const example = {
      id: "1",
      firstname: "Jim",
      lastname:"Re",
      email:"jirem@gmail.com",
      adress:"New York",
      phone:"99001003030",
    }
    saveEmployee(example);
    search();
  }

  const addEmployee = () => {
    history.push("/page/Employees/new");
  }






  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonContent>
          <IonCard>
            <IonTitle>Employees Management </IonTitle>

            <IonItem>
              <IonButton onClick={addEmployee} color="primary" slot="end" size="default">
                <IonIcon icon={add}></IonIcon>Add Employee</IonButton>

            </IonItem>


    <IonGrid class='table'>
      <IonRow>
      <IonCol>ID</IonCol>
        <IonCol>Name</IonCol>
        <IonCol>Email</IonCol>
        <IonCol>Phone</IonCol>
        <IonCol>Adress</IonCol>
        <IonCol>Actions</IonCol>
      </IonRow>

      {clientes.map((cliente: Employee) =>
      <IonRow>
      <IonCol></IonCol>
      <IonCol>{cliente.firstname}{cliente.lastname}</IonCol>
      <IonCol>{cliente.email}</IonCol>
      <IonCol>{cliente.phone}</IonCol>
      <IonCol>{cliente.adress}</IonCol>
      <IonCol><IonButton color="primary" size="default"><IonIcon icon={pencil}/></IonButton>
      <IonButton onClick={() => remove(cliente.id)} color="danger" size="default"><IonIcon icon={close}/>
      </IonButton></IonCol>
      </IonRow>
        )}

    </IonGrid>
    </IonCard>

    <IonButton onClick={testLocalStorage} color="primary" size="default">Prueba de localStorage</IonButton>




  </IonContent>


      </IonContent>

    </IonPage>
  );
};

export default EmployeeList;
