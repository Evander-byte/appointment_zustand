import { useForm } from 'react-hook-form'
import Error from './Error'
import { DraftPatient } from '../types'
import { usePatientStore } from '../store'

const PatientForm = () => {

    const { addPatient } = usePatientStore()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<DraftPatient>()

    const registerPatient = (data: DraftPatient) => {
        addPatient(data)

        reset()
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administrarlos</span>
            </p>
            <form
                action=""
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-100"
                        placeholder="Nombre del Paciente"
                        {...register('name', {
                            required: 'El nombre del paciente es obligatorio',
                        })}
                    />
                    {errors.name && (
                        <Error>{errors.name?.message}</Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        type="text"
                        id="caretaker"
                        className="w-full p-3 border border-gray-100"
                        placeholder="Nombre del Propietario"
                        {...register('caretaker', {
                            required: 'El nombre propietario es obligatorio',
                        })}
                    />
                    {errors.caretaker && (
                        <Error>{errors.caretaker?.message}</Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="name"
                        className="w-full p-3 border border-gray-100"
                        placeholder="Email del Propietario"
                        {...register('email', {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email no valido'
                            }
                        })}
                    />
                    {errors.email && (
                        <Error>{errors.email?.message}</Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="w-full p-3 border border-gray-100"
                        {...register('date', {
                            required: 'La fecha de alta es obligatoria'
                        })}
                    />
                    {errors.date && (
                        <Error>{errors.date?.message}</Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3 border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'Los sintomas son obligatorios'
                        })}
                    />
                    {errors.symptoms && (
                        <Error>{errors.symptoms?.message}</Error>
                    )}
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                    value="Guardar Paciente"
                />
            </form>
        </div>
    )
}

export default PatientForm
