import Button from '@components/UI/Button';
import Loader from '@components/UI/Loader';
import ToastMessage from '@components/UI/ToastMessage';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { InputField, TextAreaField } from './FormControl';

function ContactForm({ onSubmit }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, isSubmitSuccessful, errors, isSubmitted },
	} = useForm();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			alert('Submit success');
		}
	}, [isSubmitSuccessful]);

	return (
		<form
			noValidate={true}
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 mt-5"
		>
			<div className="grid md:grid-cols-2 gap-4 grid-cols-1">
				<InputField
					name="contact.name"
					type="text"
					register={register}
					placeholder="Name"
					icon={<FaUserAlt />}
				/>
				<InputField
					name="contact.email"
					type="email"
					placeholder="Email"
					register={register}
					rules={{
						required: 'Please provide your email',
						pattern: {
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							message: 'Email is not valid',
						},
					}}
					error={errors.contact?.email}
					icon={<MdEmail />}
				/>
			</div>
			<TextAreaField
				name="contact.message"
				register={register}
				rows="6"
				placeholder="Message"
			/>
			<Button
				type="submit"
				className="lg primary md:max-w-[200px]"
			>
				{isSubmitting ? <Loader type="submitting" /> : null} Send
				Message
			</Button>
		</form>
	);
}

export default ContactForm;
