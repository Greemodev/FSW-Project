import { IonButtons,IonButton, IonCard, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { add, } from 'ionicons/icons';
import { useEffect} from 'react';
import { useParams } from 'react-router';
// import { searchCustomers} from './customerApi';

const CustomerEdit: React.FC = () => {
    
  const { name, id } = useParams<{ name: string; id: string }>();


  useEffect(() => {
    search();
  }, []);

  const search = () => {
   // let result = searchCustomers();
   // setClientes(result);
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
            <IonTitle>Customers Management{id}</IonTitle>

            <IonItem>
              <IonButton color="primary" slot="end" size="default">
                <IonIcon icon={add}></IonIcon> Save Customer</IonButton>

            </IonItem>



    </IonCard>

    <IonButton onClick={() => {}} color="primary" size="default">Prueba de localStorage</IonButton>




  </IonContent>


      </IonContent>

    </IonPage>
  );
};

export default CustomerEdit;
