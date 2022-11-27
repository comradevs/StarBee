import { useTranslation } from 'react-i18next';

function CreateUser() {
  const { t } = useTranslation();

  const firstname = 'Ari';
  const lastname = 'Mar';

  return (
    <div>
      <div>{t('title')}</div>
      <div>{t('newUserName', { firstname, lastname })}</div>
    </div>
  );
}

export default CreateUser;
