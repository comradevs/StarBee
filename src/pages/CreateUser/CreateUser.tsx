import { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

const mock = { firstname: 'Ari', lastname: 'Mar' };
const input = 'border';

function CreateUser() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="p-8">
      <div>{t('createUserPage.title')}</div>
      <div>{t('createUserPage.newUserName', { firstname: mock.firstname, lastname: mock.lastname })}</div>
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-md flex flex-col mt-4 mb-4 w-1/2 p-2">
        <div className="relative">
          <input
            className={`${input} mr-4 w-[calc(50%+-8px)]`}
            defaultValue={firstname}
            {...register('firstname', { required: true, min: 2 })}
          />
          <input className={`${input} w-[calc(50%+-8px)]`} {...register('lastname', { required: true })} />
          {errors.lastname && <span className="text-red-500 absolute top-6 left-0">Fields are required</span>}
        </div>
        <input
          type="submit"
          value={t('common.submit') as string}
          className="height-3 mt-5 text-green bg-cyan-100 text-slate-900 font-medium rounded"
        />
      </form>
    </div>
  );
}

export default withTranslation()(CreateUser);
