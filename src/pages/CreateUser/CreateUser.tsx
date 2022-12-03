import { useTranslation, withTranslation } from 'react-i18next';

function CreateUser() {
  const { t } = useTranslation();

  const firstname = 'Ari';
  const lastname = 'Mar';

  return (
    <div>
      <div>{t('createUserPage.title')}</div>
      <div>{t('createUserPage.newUserName', { firstname, lastname })}</div>
    </div>
  );
}

export default withTranslation()(CreateUser);
