import React, { ForwardedRef } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import {
  ChangeHandler,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const mock = { firstname: 'Ari', lastname: 'Mar' };
// Temp: Classes
const input = 'border';
const error = 'text-red-500 absolute top-6 left-0';

const schema = yup
  .object({
    firstName: yup.string().required().min(2),
    lastname: yup.string().required(),
    role: yup.string().required(),
  })
  .required();

interface IFormValues {
  firstname: string;
  lastname: string;
  role: number;
}

type InputProps = {
  label: string;
  name: Path<IFormValues>;
  register: UseFormRegister<FieldValues>;
  required: boolean;
};

type SelectProps = {
  label: string;
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
};

function Input({ label, name, register, required }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input {...register(name, { required })} className={`${input} w-[calc(50%+-8px)]`} />
    </>
  );
}

const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label htmlFor={name}>{label}</label>
    <select
      defaultValue=""
      name={name}
      ref={ref as ForwardedRef<any>}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="mentor">Mentor</option>
      <option value="student">Student</option>
    </select>
  </>
));

function CreateUser() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const watchFirstname = watch('firstname', '');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-8">
      <div>{t('createUserPage.title')}</div>
      <div>
        {t('createUserPage.newUserName', { firstname: mock.firstname, lastname: mock.lastname })}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md flex flex-col mt-4 mb-4 w-1/2 p-2"
      >
        <div className="relative">
          <input
            className={`${input} mr-4 w-[calc(50%+-8px)]`}
            {...register('firstname', { required: true, min: 2 })}
          />
          <Input label="First Name" name="firstname" register={register} required />
          <input {...register('lastname')} />
          {errors.lastname && <span className={error}>Fields are required</span>}
        </div>
        <div className="relative mt-4">
          <Select label="Role" {...register('role')} />
          {errors.role && <span className={error}>Role is required</span>}
        </div>
        <input
          type="submit"
          value={t('common.submit') as string}
          className="height-3 mt-5 text-green bg-cyan-100 text-slate-900 font-medium rounded"
        />
      </form>
      {watchFirstname && <span>First name is selected</span>}
    </div>
  );
}

export default withTranslation()(CreateUser);
