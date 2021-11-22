import { Card, Pane, Button } from 'evergreen-ui';
import * as Dapp from '@elrondnetwork/dapp';
import { useHistory } from 'react-router-dom';
import MainLayout from './MainLayout';

const Ledger = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/unlock');
  };

  return (
    <MainLayout>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="20vh"
      >
        <Card
          elevation={1}
          maxWidth={300}
          width="100%"
          padding={30}
          textAlign="center"
        >
          <Dapp.Pages.Ledger callbackRoute="/dashboard" />
          <Button marginTop={15} onClick={goBack}>
            Back
          </Button>
        </Card>
      </Pane>
    </MainLayout>
  );
};

export default Ledger;
