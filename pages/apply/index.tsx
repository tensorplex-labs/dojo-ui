import React, { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { Button } from '@/components/Button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from '@/utils/tw';
import { InputField } from '@/components/Fields/InputField';
import TPLXModalContainer from '@/components/ModalContainer';

const FormSchema = z.object({
  hotkey: z.string().min(1, {
    message: "Invalid Hotkey. Please input a valid Hotkey.",
  }),
  email: z.string()
    .min(1, {message:"Missing Email. Please input an email"})
    .email({
      message: "Invalid Email. Please input a correct email format."
    }),
  organizationalKey: z.string()
})

const successMessage = "We are currently reviewing your application. Once approved, we will send you a miner API key and subscription key via the email you provided."

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hotkey: "",
      organizationalKey: "",
      email: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  // TODO: Refactor with proper type and hook
  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    console.log("onSubmit: ", formData);
    setOpen(true);

    const response = await fetch('/api/mockMiner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);

    if (!data.success) {
      // set error message
      setModalMessage(data.error);
      return;
    }
    // reset form values;
    reset();
    setModalMessage(successMessage);
  }

  const handleOnClose = ()=>{
    setOpen(false);
    setModalMessage("");
  }

  return (
    <div className="bg-background text-black h-full">
      <div className="bg-background-accent h-[257px] border-b-2 border-black">
        <NavigationBar openModal={()=>{}}/>
        <h1 className={`${FontSpaceMono.className} text-font-primary tracking-wide text-4xl mt-9 mb-4 text-black font-bold text-center`}
        >
          MINER APPLICATION FORM
        </h1>
        <div className={`${FontManrope.className} opacity-50 text-center`}>Complete the form with the necessary details to get your API key and subscription key via email.
        </div>
      </div>
      <div className={cn(`${FontSpaceMono.className} flex justify-center mt-10 h-screen`)}>
           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className={cn('mb-12')}>
              <label htmlFor="hotkey" className={cn('block font-bold text-sm text-font-accent')}>HOTKEY<span
                className="text-red-500 align-text-top">*</span></label>
              <InputField
                className={cn('mt-3')}
                id="hotkey"
                {...register('hotkey')}
                placeholder="Enter Hot Key Here"
                hasError={!!errors.hotkey}
                errorMessage={errors.hotkey?.message}
              />
            </div>
            <div className={cn('mb-12')}>
              <label htmlFor="organizationalName" className={cn("block font-bold text-sm text-font-accent")}>ORGANISATION
                NAME</label>
              <InputField
                className={cn("mt-3")}
                id="organizationalKey"
                {...register("organizationalKey")}
                placeholder="Enter Organisation Name Here"
              />
            </div>
            <div className={cn("mb-12")}>
              <label htmlFor="email" className={cn("block font-bold text-sm text-font-accent")}>EMAIL<span
                className="text-red-500 align-text-top">*</span></label>
              <InputField
                className={cn("mt-3")}
                id="email"
                {...register("email")}
                placeholder="Enter Email Here"
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            </div>
            <div className={cn('text-center text-white')}>
              <Button buttonText={"Submit"} />
            </div>
          </form>
      </div>
      <TPLXModalContainer className={'w-[512px] h-[206px]'} headerClassName={'h-12 pl-4'} bodyClassName="p-0"
                          header={"APPLICATION RECEIVED!"} open={open} onClose={() => handleOnClose()} onSave={() =>handleOnClose()}>
        <div
          className={cn(`${FontManrope.className} py-4 px-6 border-b-2 border-black bg-accent opacity-60 text-[16px] leading-[120%] h-[88px] flex items-center`)}>
          <span>{modalMessage}</span>
        </div>
        <div className={'text-right p-1 w-[100%] h-[100%]'}>
          <Button className={cn('w-[85px] h-[39px] mt-2 mr-4 hover:shadow-brut-sm text-[16px] text-white')}
                  buttonText={"CLOSE"} onClick={() => handleOnClose ()} />
        </div>
      </TPLXModalContainer>
    </div>
  );
};

export default Page;