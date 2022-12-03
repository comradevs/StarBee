import { Suspense } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import CreateUser from 'pages/CreateUser/CreateUser';

import { Paths } from './constants';

type TProps = { t: any };

function Routes({ t }: TProps) {
  return (
    <Suspense fallback={t('common.loading')}>
      <Router>
        <Switch>
          <Route path={Paths.DEFAULT} element={<CreateUser />} />
          <Route path={Paths.CREATE_USER} element={<CreateUser />} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default withTranslation()(Routes);
